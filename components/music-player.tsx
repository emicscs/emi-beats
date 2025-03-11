"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import type { Track } from "@/lib/types"
import { formatTime } from "@/lib/utils"
import TrackInfo from "./track-info"
import PlayerControls from "./player-controls"
import Playlist from "./playlist"
import BackgroundSelector from "./background-selector"
import AlbumArtSelector from "./album-art-selector"
import ContextMenu from "./context-menu"
import RecentImagesBar from "./recent-images-bar"
import WindowsTitleBar from "./windows-title-bar"
import { createPopoutWindow } from "@/lib/popout-window"

interface MusicPlayerProps {
  initialTracks: Track[]
}

export default function MusicPlayer({ initialTracks }: MusicPlayerProps) {
  const [tracks, setTracks] = useState<Track[]>(initialTracks)
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [duration, setDuration] = useState<number>(0)
  const [volume, setVolume] = useState<number>(0.7)
  const [isMuted, setIsMuted] = useState<boolean>(false)
  const [showPlaylist, setShowPlaylist] = useState<boolean>(false)
  const [background, setBackground] = useState<string>("/backgrounds/windows7-default.jpg")
  const [customBackground, setCustomBackground] = useState<string | null>(null)
  const [showBackgroundSelector, setShowBackgroundSelector] = useState<boolean>(false)
  const [showContextMenu, setShowContextMenu] = useState<boolean>(false)
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 })
  const [contextMenuTrackIndex, setContextMenuTrackIndex] = useState<number | null>(null)
  const [showAlbumArtSelector, setShowAlbumArtSelector] = useState<boolean>(false)
  const [albumArtSelectorTrackIndex, setAlbumArtSelectorTrackIndex] = useState<number | null>(null)
  const [popoutWindow, setPopoutWindow] = useState<Window | null>(null)
  const [recentBackgrounds, setRecentBackgrounds] = useState<string[]>([])
  const [recentAlbumArts, setRecentAlbumArts] = useState<string[]>([])
  const [showRecentImages, setShowRecentImages] = useState<boolean>(false)

  const audioRef = useRef<HTMLAudioElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const volumeBarRef = useRef<HTMLDivElement>(null)
  const contextMenuRef = useRef<HTMLDivElement>(null)

  const currentTrack = tracks[currentTrackIndex]

  // Default album art images
  const defaultAlbumArts = [
    "/album-covers/cover1.jpg",
    "/album-covers/cover2.jpg",
    "/album-covers/cover3.jpg",
    "/album-covers/cover4.jpg",
    "/album-covers/cover5.jpg",
    "/album-covers/cover6.jpg",
  ]

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return

    const newTracks: Track[] = []

    Array.from(e.target.files).forEach((file) => {
      if (file.type === "audio/mpeg") {
        // Assign a random album art from the default set
        const randomAlbumArt = defaultAlbumArts[Math.floor(Math.random() * defaultAlbumArts.length)]

        const newTrack: Track = {
          id: `track-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          title: file.name.replace(".mp3", ""),
          artist: "Unknown Artist",
          album: "Unknown Album",
          duration: 0,
          cover: randomAlbumArt,
          file: URL.createObjectURL(file),
        }

        newTracks.push(newTrack)
      }
    })

    setTracks([...tracks, ...newTracks])
  }

  // Handle play/pause
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Handle previous track
  const playPreviousTrack = () => {
    const newIndex = currentTrackIndex === 0 ? tracks.length - 1 : currentTrackIndex - 1
    setCurrentTrackIndex(newIndex)
    setIsPlaying(true)
  }

  // Handle next track
  const playNextTrack = () => {
    const newIndex = currentTrackIndex === tracks.length - 1 ? 0 : currentTrackIndex + 1
    setCurrentTrackIndex(newIndex)
    setIsPlaying(true)
  }

  // Handle time update
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  // Handle duration change
  const handleDurationChange = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  // Handle seek
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressBarRef.current && audioRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect()
      const pos = (e.clientX - rect.left) / rect.width
      audioRef.current.currentTime = pos * duration
    }
  }

  // Handle volume change
  const handleVolumeChange = (e: React.MouseEvent<HTMLDivElement>) => {
    if (volumeBarRef.current && audioRef.current) {
      const rect = volumeBarRef.current.getBoundingClientRect()
      const pos = (e.clientX - rect.left) / rect.width
      const newVolume = Math.max(0, Math.min(1, pos))
      setVolume(newVolume)
      audioRef.current.volume = newVolume

      if (newVolume === 0) {
        setIsMuted(true)
      } else {
        setIsMuted(false)
      }
    }
  }

  // Handle mute toggle
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  // Handle track end
  const handleTrackEnd = () => {
    playNextTrack()
  }

  // Handle track selection from playlist
  const handleTrackSelect = (index: number) => {
    setCurrentTrackIndex(index)
    setIsPlaying(true)
  }

  // Handle background change
  const handleBackgroundChange = (bg: string) => {
    setBackground(bg)
    setCustomBackground(null)
  }

  // Update the handleCustomBackgroundUpload function to save references
  const handleCustomBackgroundUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return

    const file = e.target.files[0]
    if (file.type.startsWith("image/")) {
      const url = URL.createObjectURL(file)
      setCustomBackground(url)

      // Save to recent backgrounds if not already there
      if (!recentBackgrounds.includes(url)) {
        setRecentBackgrounds((prev) => [url, ...prev.slice(0, 9)]) // Keep max 10 items
      }
    }
  }

  // Update the handleCustomAlbumArtUpload function to save references
  const handleCustomAlbumArtUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0] || albumArtSelectorTrackIndex === null) return

    const file = e.target.files[0]
    if (file.type.startsWith("image/")) {
      const url = URL.createObjectURL(file)
      const newTracks = [...tracks]
      newTracks[albumArtSelectorTrackIndex] = {
        ...newTracks[albumArtSelectorTrackIndex],
        cover: url,
      }
      setTracks(newTracks)

      // Save to recent album arts if not already there
      if (!recentAlbumArts.includes(url)) {
        setRecentAlbumArts((prev) => [url, ...prev.slice(0, 9)]) // Keep max 10 items
      }

      setShowAlbumArtSelector(false)
    }
  }

  // Handle context menu
  const handleContextMenu = (e: React.MouseEvent, index: number) => {
    e.preventDefault()
    setContextMenuPosition({ x: e.clientX, y: e.clientY })
    setContextMenuTrackIndex(index)
    setShowContextMenu(true)
  }

  // Handle click outside context menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (contextMenuRef.current && !contextMenuRef.current.contains(e.target as Node)) {
        setShowContextMenu(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Handle remove track
  const handleRemoveTrack = (index: number) => {
    const newTracks = [...tracks]
    newTracks.splice(index, 1)

    // Handle edge cases
    if (newTracks.length === 0) {
      // No tracks left
      setTracks([])
      setCurrentTrackIndex(0)
      setIsPlaying(false)
    } else if (index === currentTrackIndex) {
      // Removing the currently playing track
      if (index >= newTracks.length) {
        // If it was the last track, go to the new last track
        setCurrentTrackIndex(newTracks.length - 1)
      }
      // Otherwise keep the same index, which will now point to the next track
    } else if (index < currentTrackIndex) {
      // Removing a track before the current one, adjust the index
      setCurrentTrackIndex(currentTrackIndex - 1)
    }

    setTracks(newTracks)
    setShowContextMenu(false)
  }

  // Handle album art selection
  const handleAlbumArtSelector = (index: number) => {
    setAlbumArtSelectorTrackIndex(index)
    setShowAlbumArtSelector(true)
    setShowContextMenu(false)
  }

  // Handle album art change
  const handleAlbumArtChange = (artPath: string) => {
    if (albumArtSelectorTrackIndex !== null) {
      const newTracks = [...tracks]
      newTracks[albumArtSelectorTrackIndex] = {
        ...newTracks[albumArtSelectorTrackIndex],
        cover: artPath,
      }
      setTracks(newTracks)
    }
    setShowAlbumArtSelector(false)
  }

  // Handle pop-out player
  const handlePopOut = () => {
    const newPopoutWindow = createPopoutWindow({
      currentTrack,
      currentTime,
      duration,
      isPlaying,
      volume,
      isMuted,
      tracks,
      currentTrackIndex,
      background: customBackground || background,
      formatTime,
    })

    if (newPopoutWindow) {
      setPopoutWindow(newPopoutWindow)

      // Set up message listener for the main window
      const messageHandler = (event: MessageEvent) => {
        if (event.source === newPopoutWindow) {
          const { type, index, volume, position } = event.data

          switch (type) {
            case "TOGGLE_PLAY":
              togglePlay()
              break
            case "PREV_TRACK":
              playPreviousTrack()
              break
            case "NEXT_TRACK":
              playNextTrack()
              break
            case "TOGGLE_MUTE":
              toggleMute()
              break
            case "SET_VOLUME":
              if (typeof volume === "number" && audioRef.current) {
                setVolume(volume)
                audioRef.current.volume = volume
                if (volume === 0) {
                  setIsMuted(true)
                } else if (isMuted) {
                  setIsMuted(false)
                  audioRef.current.muted = false
                }
              }
              break
            case "SEEK":
              if (typeof position === "number" && audioRef.current) {
                audioRef.current.currentTime = position * duration
              }
              break
            case "SELECT_TRACK":
              if (typeof index === "number") {
                handleTrackSelect(index)
              }
              break
            case "POPOUT_CLOSED":
              window.removeEventListener("message", messageHandler)
              setPopoutWindow(null)
              break
          }
        }
      }

      window.addEventListener("message", messageHandler)
    }
  }

  // Update the popout window
  useEffect(() => {
    if (popoutWindow && !popoutWindow.closed) {
      // Send updated data to popout window
      popoutWindow.postMessage(
        {
          type: "UPDATE_PLAYER",
          data: {
            cover: currentTrack?.cover || "/placeholder.svg?height=200&width=200",
            title: currentTrack?.title || "No Track Selected",
            artist: currentTrack?.artist || "Unknown Artist",
            album: currentTrack?.album || "Unknown Album",
            progress: (currentTime / duration) * 100,
            currentTime: formatTime(currentTime),
            duration: formatTime(duration),
            isPlaying: isPlaying,
            volume: volume * 100,
            isMuted: isMuted,
            tracks: tracks.map((track) => ({
              ...track,
              duration: formatTime(track.duration),
            })),
            currentTrackIndex: currentTrackIndex,
            background: customBackground || background,
          },
        },
        "*",
      )
    }
  }, [
    currentTrack,
    currentTime,
    duration,
    isPlaying,
    volume,
    isMuted,
    tracks,
    currentTrackIndex,
    popoutWindow,
    customBackground,
    background,
  ])

  // Update audio element when track changes
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Playback failed:", error)
          setIsPlaying(false)
        })
      }
    }
  }, [currentTrackIndex, isPlaying])

  // Apply album art from recent images
  const applyRecentAlbumArt = (artUrl: string) => {
    if (currentTrack) {
      const newTracks = [...tracks]
      newTracks[currentTrackIndex] = {
        ...newTracks[currentTrackIndex],
        cover: artUrl,
      }
      setTracks(newTracks)
    }
  }

  // Apply background from recent images
  const applyRecentBackground = (bgUrl: string) => {
    setCustomBackground(bgUrl)
    setBackground("")
  }

  return (
    <main
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundImage: `url(${customBackground || background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {/* Windows 7 Style Window */}
        <div
          style={{
            background: "rgba(0, 0, 0, 0.05)",
            backdropFilter: "blur(10px)",
            borderRadius: "8px",
            boxShadow:
              "0 0 10px rgba(0, 0, 0, 0.3), 0 0 30px rgba(255, 255, 255, 0.1), inset 0 0 1px 1px rgba(255, 255, 255, 0.2)",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          {/* Title Bar */}
          <WindowsTitleBar title="Windows Media Player" />

          {/* Content */}
          <div
            style={{
              padding: "20px",
              background: "rgba(255, 255, 255, 0.7)",
            }}
          >
            {/* File Upload */}
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: 600,
                  color: "#333",
                }}
              >
                Upload MP3 Files
              </label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <input
                  type="file"
                  accept="audio/mpeg"
                  multiple
                  onChange={handleFileUpload}
                  style={{
                    display: "none",
                  }}
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  style={{
                    padding: "6px 12px",
                    background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
                    border: "1px solid #ccc",
                    borderRadius: "3px",
                    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
                    color: "#333",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  Browse...
                </label>
                <span
                  style={{
                    marginLeft: "10px",
                    fontSize: "14px",
                    color: "#666",
                  }}
                >
                  Select MP3 files to add to your library
                </span>
              </div>
            </div>

            {/* Player Section */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              {/* Album Art and Track Info */}
              <TrackInfo
                track={currentTrack}
                onAlbumArtChange={() => handleAlbumArtSelector(currentTrackIndex)}
                onPopOut={handlePopOut}
              />

              {/* Controls and Playlist */}
              <div
                style={{
                  flex: "1 1 300px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <PlayerControls
                  currentTime={currentTime}
                  duration={duration}
                  isPlaying={isPlaying}
                  volume={volume}
                  isMuted={isMuted}
                  progressBarRef={progressBarRef}
                  volumeBarRef={volumeBarRef}
                  onSeek={handleSeek}
                  onVolumeChange={handleVolumeChange}
                  onTogglePlay={togglePlay}
                  onPreviousTrack={playPreviousTrack}
                  onNextTrack={playNextTrack}
                  onToggleMute={toggleMute}
                />

                {/* Playlist Toggle */}
                <div
                  style={{
                    marginBottom: "16px",
                  }}
                >
                  <button
                    onClick={() => setShowPlaylist(!showPlaylist)}
                    style={{
                      width: "100%",
                      padding: "8px 0",
                      background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
                      border: "1px solid #ccc",
                      borderRadius: "3px",
                      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
                      color: "#333",
                      cursor: "pointer",
                      fontSize: "14px",
                    }}
                  >
                    {showPlaylist ? "Hide Playlist" : "Show Playlist"}
                  </button>
                </div>

                {/* Playlist */}
                {showPlaylist && (
                  <Playlist
                    tracks={tracks}
                    currentTrackIndex={currentTrackIndex}
                    onTrackSelect={handleTrackSelect}
                    onContextMenu={handleContextMenu}
                    onRemoveTrack={handleRemoveTrack}
                  />
                )}

                {/* Background Selector Toggle */}
                <div
                  style={{
                    marginTop: "16px",
                  }}
                >
                  <button
                    onClick={() => setShowBackgroundSelector(!showBackgroundSelector)}
                    style={{
                      width: "100%",
                      padding: "8px 0",
                      background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
                      border: "1px solid #ccc",
                      borderRadius: "3px",
                      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
                      color: "#333",
                      cursor: "pointer",
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                    }}
                  >
                    <span style={{ fontSize: "14px" }}>🖼️</span>
                    <span>Change Background</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Background Selector */}
            {showBackgroundSelector && (
              <BackgroundSelector
                currentBackground={customBackground || background}
                onBackgroundChange={handleBackgroundChange}
                onCustomBackgroundUpload={handleCustomBackgroundUpload}
              />
            )}

            {/* Album Art Selector */}
            {showAlbumArtSelector && (
              <AlbumArtSelector
                defaultAlbumArts={defaultAlbumArts}
                currentAlbumArt={albumArtSelectorTrackIndex !== null ? tracks[albumArtSelectorTrackIndex].cover : null}
                onAlbumArtChange={handleAlbumArtChange}
                onCustomAlbumArtUpload={handleCustomAlbumArtUpload}
                onClose={() => setShowAlbumArtSelector(false)}
              />
            )}
          </div>
        </div>
      </div>

      {/* Context Menu */}
      {showContextMenu && contextMenuTrackIndex !== null && (
        <ContextMenu
          ref={contextMenuRef}
          position={contextMenuPosition}
          onPlay={() => handleTrackSelect(contextMenuTrackIndex)}
          onChangeAlbumArt={() => handleAlbumArtSelector(contextMenuTrackIndex)}
          onRemove={() => handleRemoveTrack(contextMenuTrackIndex)}
        />
      )}

      {/* Recent Images Bar */}
      <RecentImagesBar
        showRecentImages={showRecentImages}
        setShowRecentImages={setShowRecentImages}
        recentBackgrounds={recentBackgrounds}
        recentAlbumArts={recentAlbumArts}
        currentBackground={customBackground}
        currentAlbumArt={currentTrack?.cover}
        onBackgroundSelect={applyRecentBackground}
        onAlbumArtSelect={applyRecentAlbumArt}
      />

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={currentTrack?.file}
        onTimeUpdate={handleTimeUpdate}
        onDurationChange={handleDurationChange}
        onEnded={handleTrackEnd}
        autoPlay={isPlaying}
      />
    </main>
  )
}


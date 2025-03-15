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
import WindowsTitleBar from "./windows-title-bar"
import MessageInput from "./message-input"
import TripleVideoDisplay from "./triple-video-display"

interface MusicPlayerProps {
  initialTracks?: Track[]
  customYoutubeVideos?: string[]
}

// Define a Playlist type
interface Playlist {
  id: string;
  name: string;
  tracks: Track[];
}

export default function MusicPlayer({ 
  initialTracks = [],
  customYoutubeVideos = [
    "https://www.youtube.com/embed/jNQXAC9IVRw",
    "https://www.youtube.com/embed/9bZkp7q19f0"
  ]
}: MusicPlayerProps) {
  // Default album cover - define this before using it in state
  const defaultAlbumCover = "/album-covers/miscellaneous_17.jpg"
  
  // Create a default track if no initialTracks are provided
  const defaultTrack: Track = {
    id: 'default-track',
    title: 'Sample Track',
    artist: 'Sample Artist',
    album: 'Sample Album',
    duration: 0,
    cover: defaultAlbumCover,
    file: ''
  }
  
  // Initialize with default track if no tracks are provided
  const startingTracks = initialTracks.length > 0 
    ? initialTracks.map(track => ({
        ...track,
        cover: track.cover || defaultAlbumCover // Ensure all tracks have a cover
      }))
    : [defaultTrack]
  
  const [tracks, setTracks] = useState<Track[]>(startingTracks)
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [duration, setDuration] = useState<number>(0)
  const [volume, setVolume] = useState<number>(0.7)
  const [isMuted, setIsMuted] = useState<boolean>(false)
  const [showPlaylist, setShowPlaylist] = useState<boolean>(true)
  const [background, setBackground] = useState<string>("/backgrounds/windows7-default.jpg")
  const [customBackground, setCustomBackground] = useState<string | null>(null)
  const [showBackgroundSelector, setShowBackgroundSelector] = useState<boolean>(false)
  const [showContextMenu, setShowContextMenu] = useState<boolean>(false)
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 })
  const [contextMenuTrackIndex, setContextMenuTrackIndex] = useState<number | null>(null)
  const [showAlbumArtSelector, setShowAlbumArtSelector] = useState<boolean>(false)
  const [albumArtSelectorTrackIndex, setAlbumArtSelectorTrackIndex] = useState<number | null>(null)
  
  // New state for multiple playlists
  const [playlists, setPlaylists] = useState<Playlist[]>([
    { id: 'main', name: 'Main Library', tracks: startingTracks }
  ])
  const [activePlaylistId, setActivePlaylistId] = useState<string>('main')
  const [showNewPlaylistInput, setShowNewPlaylistInput] = useState<boolean>(false)
  const [newPlaylistName, setNewPlaylistName] = useState<string>('')
  const gifPath = "/gifs/eminew.gif" // Set your GIF path here
  
  const audioRef = useRef<HTMLAudioElement>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const sourceNodeRef = useRef<MediaElementAudioSourceNode | null>(null)
  const lowpassRef = useRef<BiquadFilterNode | null>(null)
  const distortionRef = useRef<WaveShaperNode | null>(null)
  const isAudioSetupComplete = useRef<boolean>(false)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const volumeBarRef = useRef<HTMLDivElement>(null)
  const contextMenuRef = useRef<HTMLDivElement>(null)

  // Get the active playlist
  const activePlaylist = playlists.find(p => p.id === activePlaylistId) || playlists[0]
  
  // Update tracks state when active playlist changes
  useEffect(() => {
    if (activePlaylist) {
      setTracks(activePlaylist.tracks)
      setCurrentTrackIndex(0)
      setIsPlaying(false)
    }
  }, [activePlaylistId])
  
  // Update the active playlist when tracks change
  useEffect(() => {
    if (activePlaylist) {
      setPlaylists(prevPlaylists => 
        prevPlaylists.map(p => 
          p.id === activePlaylistId 
            ? { ...p, tracks } 
            : p
        )
      )
    }
  }, [tracks, activePlaylistId])

  // Create a new playlist
  const createNewPlaylist = () => {
    if (newPlaylistName.trim()) {
      const newPlaylist: Playlist = {
        id: `playlist-${Date.now()}`,
        name: newPlaylistName.trim(),
        tracks: [] // Start with an empty playlist
      }
      setPlaylists([...playlists, newPlaylist])
      setActivePlaylistId(newPlaylist.id)
      setNewPlaylistName('')
      setShowNewPlaylistInput(false)
    }
  }

  // Delete a playlist
  const deletePlaylist = (playlistId: string) => {
    if (playlists.length <= 1) return // Don't delete the last playlist
    
    setPlaylists(playlists.filter(p => p.id !== playlistId))
    
    // If the active playlist is deleted, switch to the first available playlist
    if (activePlaylistId === playlistId) {
      const remainingPlaylists = playlists.filter(p => p.id !== playlistId)
      setActivePlaylistId(remainingPlaylists[0]?.id || 'main')
    }
  }

  // Set up audio processing once when the component mounts
  useEffect(() => {
    // Initialize audio processing when the audio element is available
    const setupAudioProcessing = () => {
      if (!audioRef.current || isAudioSetupComplete.current) return;
      
      try {
        // Create audio context
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        const audioContext = new AudioContext();
        audioContextRef.current = audioContext;
        
        // Create source node
        const source = audioContext.createMediaElementSource(audioRef.current);
        sourceNodeRef.current = source;
        
        // Create lowpass filter
        const lowpass = audioContext.createBiquadFilter();
        lowpass.type = 'lowpass';
        lowpass.frequency.value = 2000; // Lower frequency for more "crushed" sound
        lowpassRef.current = lowpass;
        
        // Create distortion
        const distortion = audioContext.createWaveShaper();
        distortion.curve = makeDistortionCurve(1); // Amount of distortion
        distortionRef.current = distortion;
        
        // Connect the nodes
        source.connect(lowpass);
        lowpass.connect(distortion);
        distortion.connect(audioContext.destination);
        
        // Mark setup as complete
        isAudioSetupComplete.current = true;
        
        console.log("Audio processing setup complete");
      } catch (error) {
        console.error("Error setting up audio processing:", error);
      }
    };
    
    // Try to set up audio processing
    setupAudioProcessing();
    
    // Clean up function
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close().catch(err => {
          console.error("Error closing audio context:", err);
        });
      }
    };
  }, []);
  
  // Helper function to create distortion curve
  function makeDistortionCurve(amount: number) {
    const k = typeof amount === 'number' ? amount : 50;
    const n_samples = 44100;
    const curve = new Float32Array(n_samples);
    const deg = Math.PI / 180;
    
    for (let i = 0; i < n_samples; ++i) {
      const x = (i * 2) / n_samples - 1;
      curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
    }
    
    return curve;
  }
  
  // Resume audio context when user interacts with the page
  useEffect(() => {
    const resumeAudioContext = () => {
      if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume().catch(err => {
          console.error("Error resuming audio context:", err);
        });
      }
    };
    
    // Add event listeners for user interaction
    document.addEventListener('click', resumeAudioContext);
    document.addEventListener('keydown', resumeAudioContext);
    document.addEventListener('touchstart', resumeAudioContext);
    
    return () => {
      document.removeEventListener('click', resumeAudioContext);
      document.removeEventListener('keydown', resumeAudioContext);
      document.removeEventListener('touchstart', resumeAudioContext);
    };
  }, []);
  
  // Handle play/pause
  const togglePlay = () => {
    if (audioRef.current) {
      // Ensure audio processing is set up
      if (!isAudioSetupComplete.current) {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        audioContextRef.current = new AudioContext();
        const source = audioContextRef.current.createMediaElementSource(audioRef.current);
        sourceNodeRef.current = source;
        
        const lowpass = audioContextRef.current.createBiquadFilter();
        lowpass.type = 'lowpass';
        lowpass.frequency.value = 1000;
        lowpassRef.current = lowpass;
        
        const distortion = audioContextRef.current.createWaveShaper();
        distortion.curve = makeDistortionCurve(30);
        distortionRef.current = distortion;
        
        source.connect(lowpass);
        lowpass.connect(distortion);
        distortion.connect(audioContextRef.current.destination);
        
        isAudioSetupComplete.current = true;
      }
      
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Resume audio context if it's suspended
        if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
          audioContextRef.current.resume().catch(err => {
            console.error("Error resuming audio context:", err);
          });
        }
        
        audioRef.current.play().catch(error => {
          console.error("Playback failed:", error);
          setIsPlaying(false);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  // Update audio element when track changes
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        // Resume audio context if it's suspended
        if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
          audioContextRef.current.resume().catch(err => {
            console.error("Error resuming audio context:", err);
          });
        }
        
        audioRef.current.play().catch((error) => {
          console.error("Playback failed:", error)
          setIsPlaying(false)
        })
      }
    }
  }, [currentTrackIndex, isPlaying]);

  const currentTrack = tracks[currentTrackIndex] || {
    id: 'default',
    title: 'No Track Selected',
    artist: 'Unknown Artist',
    album: 'Unknown Album',
    duration: 0,
    cover: defaultAlbumCover,
    file: ''
  }

  // Default album art images
  const defaultAlbumArts = [
    "/album-covers/miscellaneous_17.jpg",
    "/album-covers/miscellaneous_18.jpg",
    "/album-covers/miscellaneous_19.jpg",
    "/album-covers/miscellaneous_20.jpg",
    "/album-covers/miscellaneous_21.jpg",
    "/album-covers/miscellaneous_22.jpg",
  ]

  // Handle file upload - add to the active playlist only
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return

    const newTracks: Track[] = []

    Array.from(e.target.files).forEach((file) => {
      if (file.type === "audio/mpeg") {
        // Always use the first album art (miscellaneous_17.jpg) for consistency
        const defaultArt = defaultAlbumArts[0]

        const newTrack: Track = {
          id: `track-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          title: file.name.replace(".mp3", ""),
          artist: "",
          album: "",
          duration: 0,
          cover: defaultArt,
          file: URL.createObjectURL(file),
        }

        newTracks.push(newTrack)
      }
    })

    // Add tracks to the active playlist only
    setTracks([...tracks, ...newTracks])
  }

  // Modified handleAlbumArtChange to work with only the main playlist
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

  // Handle custom background upload
  const handleCustomBackgroundUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return

    const file = e.target.files[0]
    if (file.type.startsWith("image/")) {
      const url = URL.createObjectURL(file)
      setCustomBackground(url)
    }
  }

  // Handle custom album art upload
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
    // Create a copy of the tracks array
    const newTracks = [...tracks]
    
    // Remove the track at the specified index
    newTracks.splice(index, 1)
    
    // Update the tracks state
    setTracks(newTracks)
    
    // If the removed track is the current track or comes before it,
    // adjust the current track index
    if (index === currentTrackIndex) {
      // If it's the last track, go to the previous track
      if (index === tracks.length - 1) {
        setCurrentTrackIndex(Math.max(0, index - 1))
      }
      // Otherwise, keep the same index (which will now point to the next track)
      
      // Stop playback if there are no more tracks
      if (newTracks.length === 0) {
        setIsPlaying(false)
      }
    } else if (index < currentTrackIndex) {
      // If the removed track comes before the current track,
      // decrement the current track index
      setCurrentTrackIndex(currentTrackIndex - 1)
    }
    
    // Close context menu if it's open
    setShowContextMenu(false)
  }

  // Handle album art selection
  const handleAlbumArtSelector = (index: number) => {
    setAlbumArtSelectorTrackIndex(index)
    setShowAlbumArtSelector(true)
    setShowContextMenu(false)
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
        position: "relative",
        filter: "contrast(0.95) brightness(0.95) saturate(0.9)",
        imageRendering: "pixelated",
      }}
    >
      {/* GIF Display Area outside the box - now using file path */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          zIndex: 10,
          width: "100px",
          height: "100px",
          overflow: "hidden",
          borderRadius: "4px",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          background: "rgba(0, 0, 0, 0.2)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          imageRendering: "pixelated",
        }}
      >
        <img 
          src={gifPath} 
          alt="Animated GIF" 
          style={{ 
            width: "100%", 
            height: "100%", 
            objectFit: "cover",
            imageRendering: "pixelated",
          }} 
        />
      </div>

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
            imageRendering: "pixelated",
          }}
        >
          {/* Title Bar */}
          <WindowsTitleBar title="emi player 🎶" />

          {/* Content */}
          <div
            style={{
              padding: "20px",
              background: "rgba(255, 255, 255, 0.7)",
            }}
          >
            {/* Message Input Component */}
            <MessageInput />

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
                upload MP3 files
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
                  select MP3 files to add to your library
                </span>
              </div>
            </div>

            {/* Playlist Tabs and Playlist Display */}
            <div style={{ marginBottom: "20px" }}>
              <div
                style={{
                  display: "flex",
                  borderBottom: "1px solid #ccc",
                  marginBottom: "10px",
                  overflowX: "auto",
                  whiteSpace: "nowrap",
                }}
              >
                {playlists.map((playlist) => (
                  <div
                    key={playlist.id}
                    onClick={() => setActivePlaylistId(playlist.id)}
                    style={{
                      padding: "8px 16px",
                      cursor: "pointer",
                      borderTopLeftRadius: "4px",
                      borderTopRightRadius: "4px",
                      marginRight: "4px",
                      background: activePlaylistId === playlist.id
                        ? "linear-gradient(to bottom, #f0f0f0, #e0e0e0)"
                        : "transparent",
                      border: activePlaylistId === playlist.id
                        ? "1px solid #ccc"
                        : "1px solid transparent",
                      borderBottom: activePlaylistId === playlist.id
                        ? "1px solid #e0e0e0"
                        : "none",
                      position: "relative",
                      top: activePlaylistId === playlist.id ? "1px" : "0",
                      fontWeight: activePlaylistId === playlist.id ? 600 : 400,
                      color: "#333",
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span>{playlist.name}</span>
                    {playlists.length > 1 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deletePlaylist(playlist.id);
                        }}
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          fontSize: "14px",
                          color: "#999",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "16px",
                          height: "16px",
                          borderRadius: "50%",
                        }}
                      >
                        ×
                      </button>
                    )}
                  </div>
                ))}
                <div
                  onClick={() => setShowNewPlaylistInput(true)}
                  style={{
                    padding: "8px 16px",
                    cursor: "pointer",
                    color: "#666",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  + New Playlist
                </div>
              </div>

              {/* New Playlist Input */}
              {showNewPlaylistInput && (
                <div
                  style={{
                    marginBottom: "10px",
                    display: "flex",
                    gap: "8px",
                  }}
                >
                  <input
                    type="text"
                    value={newPlaylistName}
                    onChange={(e) => setNewPlaylistName(e.target.value)}
                    placeholder="Playlist name"
                    style={{
                      flex: 1,
                      padding: "6px 12px",
                      border: "1px solid #ccc",
                      borderRadius: "3px",
                      fontSize: "14px",
                    }}
                    autoFocus
                  />
                  <button
                    onClick={createNewPlaylist}
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
                    Create
                  </button>
                  <button
                    onClick={() => setShowNewPlaylistInput(false)}
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
                    Cancel
                  </button>
                </div>
              )}
              
              {/* Playlist Display - Moved here from bottom */}
              {showPlaylist && (
                <Playlist
                  tracks={tracks}
                  currentTrackIndex={currentTrackIndex}
                  onTrackSelect={handleTrackSelect}
                  onContextMenu={handleContextMenu}
                  onRemoveTrack={handleRemoveTrack}
                />
              )}
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
              />

              {/* Controls */}
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
                  progressBarRef={progressBarRef as React.RefObject<HTMLDivElement>}
                  volumeBarRef={volumeBarRef as React.RefObject<HTMLDivElement>}
                  onSeek={handleSeek}
                  onVolumeChange={handleVolumeChange}
                  onTogglePlay={togglePlay}
                  onPreviousTrack={playPreviousTrack}
                  onNextTrack={playNextTrack}
                  onToggleMute={toggleMute}
                />

                {/* Toggle Playlist Button */}
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

            {/* Replace YouTube Video Section with Triple Video Display */}
            <TripleVideoDisplay defaultVideos={customYoutubeVideos} />

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

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={currentTrack?.file && currentTrack.file !== '' ? currentTrack.file : undefined}
        onTimeUpdate={handleTimeUpdate}
        onDurationChange={handleDurationChange}
        onEnded={handleTrackEnd}
        autoPlay={isPlaying}
      />
    </main>
  )
}


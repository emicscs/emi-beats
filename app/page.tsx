"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { sampleTracks } from "@/lib/sample-data"
import type { Track } from "@/lib/types"

export default function Home() {
  const [tracks, setTracks] = useState<Track[]>(sampleTracks)
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

  // Add these new state variables after the other state declarations
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
    const width = 400
    const height = 600
    const left = (window.screen.width - width) / 2
    const top = (window.screen.height - height) / 2

    const newPopoutWindow = window.open(
      "",
      "MusicPlayerPopout",
      `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=no,status=no,location=no,menubar=no,toolbar=no`,
    )

    if (newPopoutWindow) {
      setPopoutWindow(newPopoutWindow)

      // Create the content for the pop-out window
      const content = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Windows 7 Music Player</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Segoe+UI:wght@400;600&display=swap');
            
            body {
              margin: 0;
              padding: 0;
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              background: url('${customBackground || background}') no-repeat center center fixed;
              background-size: cover;
              height: 100vh;
              overflow: hidden;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
            
            .window {
              width: 360px;
              background: rgba(0, 0, 0, 0.05);
              backdrop-filter: blur(10px);
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.3), 
                          0 0 30px rgba(255, 255, 255, 0.1),
                          inset 0 0 1px 1px rgba(255, 255, 255, 0.2);
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.3);
          }
          
          .title-bar {
            background: linear-gradient(to bottom, #2580c5, #1a5f9e);
            color: white;
            padding: 8px 12px;
            font-weight: 600;
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
          }
          
          .title-bar-controls {
            display: flex;
            gap: 4px;
          }
          
          .title-bar-button {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            border: 1px solid rgba(0, 0, 0, 0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 10px;
            cursor: pointer;
          }
          
          .minimize {
            background: linear-gradient(to bottom, #ffdb4c, #ffcd00);
          }
          
          .maximize {
            background: linear-gradient(to bottom, #00ca56, #00a844);
          }
          
          .close {
            background: linear-gradient(to bottom, #ff605c, #ff3b30);
          }
          
          .content {
            padding: 16px;
            background: rgba(255, 255, 255, 0.7);
          }
          
          .album-art {
            width: 200px;
            height: 200px;
            object-fit: cover;
            border-radius: 4px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            margin: 0 auto 16px;
            display: block;
          }
          
          .track-info {
            text-align: center;
            margin-bottom: 16px;
          }
          
          .track-title {
            font-weight: 600;
            font-size: 16px;
            margin-bottom: 4px;
            color: #333;
          }
          
          .track-artist {
            font-size: 14px;
            color: #666;
          }
          
          .progress-container {
            height: 8px;
            background: rgba(0, 0, 0, 0.1);
            border-radius: 4px;
            margin-bottom: 8px;
            position: relative;
            overflow: hidden;
            border: 1px solid rgba(0, 0, 0, 0.1);
            box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
            cursor: pointer;
          }
          
          .progress-bar {
            height: 100%;
            background: linear-gradient(to bottom, #4cc6ff, #0078d7);
            width: ${(currentTime / duration) * 100}%;
            border-radius: 4px;
            position: relative;
          }
          
          .time-display {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            color: #666;
            margin-bottom: 16px;
          }
          
          .controls {
            display: flex;
            justify-content: center;
            gap: 16px;
            margin-bottom: 16px;
          }
          
          .control-button {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid rgba(0, 0, 0, 0.1);
            background: linear-gradient(to bottom, #f0f0f0, #e0e0e0);
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1),
                        inset 0 1px 0 rgba(255, 255, 255, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 16px;
          }
          
          .control-button:hover {
            background: linear-gradient(to bottom, #f8f8f8, #e8e8e8);
          }
          
          .control-button:active {
            background: linear-gradient(to top, #f0f0f0, #e0e0e0);
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1),
                        inset 0 1px 1px rgba(0, 0, 0, 0.1);
          }
          
          .play-button {
            width: 48px;
            height: 48px;
            font-size: 20px;
          }
          
          .playlist {
            max-height: 200px;
            overflow-y: auto;
            border: 1px solid #ccc;
            border-radius: 4px;
            background: rgba(255, 255, 255, 0.5);
            padding: 8px;
            margin-top: 16px;
          }
          
          .playlist-item {
            display: flex;
            align-items: center;
            padding: 8px;
            border-radius: 4px;
            margin-bottom: 4px;
            cursor: pointer;
            transition: background 0.2s;
          }
          
          .playlist-item:hover {
            background: rgba(0, 120, 215, 0.1);
          }
          
          .playlist-item.active {
            background: rgba(0, 120, 215, 0.1);
            border: 1px solid rgba(0, 120, 215, 0.3);
          }
          
          .playlist-item-number {
            width: 24px;
            height: 24px;
            margin-right: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            color: #666;
          }
          
          .playlist-item-info {
            flex: 1;
          }
          
          .playlist-item-title {
            font-weight: 600;
            font-size: 14px;
            color: #333;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          .playlist-item-artist {
            font-size: 12px;
            color: #666;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          .playlist-item-duration {
            font-size: 12px;
            color: #666;
            margin-left: 8px;
          }
          
          .windows-button {
            padding: 8px 0;
            background: linear-gradient(to bottom, #f0f0f0, #e0e0e0);
            border: 1px solid #ccc;
            border-radius: 3px;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7);
            color: #333;
            cursor: pointer;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            width: 100%;
            margin-top: 16px;
          }
          
          .windows-button:hover {
            background: linear-gradient(to bottom, #f8f8f8, #e8e8e8);
          }
          
          .windows-button:active {
            background: linear-gradient(to top, #f0f0f0, #e0e0e0);
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(0, 0, 0, 0.1);
          }
          
          .volume-container {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-top: 16px;
          }
          
          .volume-slider {
            flex: 1;
            height: 6px;
            background: rgba(0, 0, 0, 0.1);
            border-radius: 3px;
            position: relative;
            overflow: hidden;
            border: 1px solid rgba(0, 0, 0, 0.1);
            box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
            cursor: pointer;
          }
          
          .volume-level {
            height: 100%;
            background: linear-gradient(to bottom, #4cc6ff, #0078d7);
            width: ${volume * 100}%;
            border-radius: 3px;
          }
        </style>
      </head>
      <body>
        <div class="window">
          <div class="title-bar">
            <div>Windows Media Player</div>
            <div class="title-bar-controls">
              <div class="title-bar-button minimize">-</div>
              <div class="title-bar-button maximize">□</div>
              <div class="title-bar-button close" onclick="window.close()">×</div>
            </div>
          </div>
          <div class="content">
            <img class="album-art" src="${currentTrack?.cover || "/placeholder.svg?height=200&width=200"}" alt="Album cover">
            <div class="track-info">
              <div class="track-title">${currentTrack?.title || "No Track Selected"}</div>
              <div class="track-artist">${currentTrack?.artist || "Unknown Artist"} • ${currentTrack?.album || "Unknown Album"}</div>
            </div>
            <div class="progress-container" id="progress-container">
              <div class="progress-bar"></div>
            </div>
            <div class="time-display">
              <span>${formatTime(currentTime)}</span>
              <span>${formatTime(duration)}</span>
            </div>
            <div class="controls">
              <div class="control-button" id="prev-btn">⏮</div>
              <div class="control-button play-button" id="play-btn">${isPlaying ? "⏸" : "▶"}</div>
              <div class="control-button" id="next-btn">⏭</div>
            </div>
            
            <div class="volume-container">
              <div class="control-button" style="width: 30px; height: 30px; font-size: 14px;" id="mute-btn">
                ${isMuted ? "🔇" : "🔊"}
              </div>
              <div class="volume-slider" id="volume-slider">
                <div class="volume-level"></div>
              </div>
            </div>
            
            <button class="windows-button" id="show-playlist-btn">
              <span>📋</span>
              <span>Show Playlist</span>
            </button>
            
            <div class="playlist" id="playlist" style="display: none;">
              ${tracks
                .map(
                  (track, idx) => `
                <div class="playlist-item ${idx === currentTrackIndex ? "active" : ""}" data-index="${idx}">
                  <div class="playlist-item-number">
                    ${idx === currentTrackIndex ? "▶" : (idx + 1).toString().padStart(2, "0")}
                  </div>
                  <div class="playlist-item-info">
                    <div class="playlist-item-title">${track.title}</div>
                    <div class="playlist-item-artist">${track.artist}</div>
                  </div>
                  <div class="playlist-item-duration">
                    ${formatTime(track.duration)}
                  </div>
                </div>
              `,
                )
                .join("")}
            </div>
          </div>
        </div>
        <script>
          // This is a simplified version - in a real app, you'd use postMessage
          // to communicate between windows
          const mainWindow = window.opener;
          let showingPlaylist = false;
          
          document.getElementById('play-btn').addEventListener('click', () => {
            mainWindow.postMessage({ type: 'TOGGLE_PLAY' }, '*');
          });
          
          document.getElementById('prev-btn').addEventListener('click', () => {
            mainWindow.postMessage({ type: 'PREV_TRACK' }, '*');
          });
          
          document.getElementById('next-btn').addEventListener('click', () => {
            mainWindow.postMessage({ type: 'NEXT_TRACK' }, '*');
          });
          
          document.getElementById('mute-btn').addEventListener('click', () => {
            mainWindow.postMessage({ type: 'TOGGLE_MUTE' }, '*');
          });
          
          document.getElementById('volume-slider').addEventListener('click', (e) => {
            const rect = e.target.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            const newVolume = Math.max(0, Math.min(1, pos));
            mainWindow.postMessage({ type: 'SET_VOLUME', volume: newVolume }, '*');
          });
          
          document.getElementById('progress-container').addEventListener('click', (e) => {
            const rect = e.target.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            mainWindow.postMessage({ type: 'SEEK', position: pos }, '*');
          });
          
          document.getElementById('show-playlist-btn').addEventListener('click', () => {
            const playlist = document.getElementById('playlist');
            showingPlaylist = !showingPlaylist;
            playlist.style.display = showingPlaylist ? 'block' : 'none';
            document.getElementById('show-playlist-btn').innerHTML = showingPlaylist ? 
              '<span>📋</span><span>Hide Playlist</span>' : 
              '<span>📋</span><span>Show Playlist</span>';
          });
          
          // Add click handlers for playlist items
          document.querySelectorAll('.playlist-item').forEach(item => {
            item.addEventListener('click', () => {
              const index = parseInt(item.getAttribute('data-index') || '0');
              mainWindow.postMessage({ type: 'SELECT_TRACK', index }, '*');
            });
          });
          
          // Listen for updates from the main window
          window.addEventListener('message', (event) => {
            if (event.source === mainWindow) {
              // Handle updates to player state
              const { type, data } = event.data;
              if (type === 'UPDATE_PLAYER') {
                // Update UI based on new data
                document.querySelector('.album-art').src = data.cover || '/placeholder.svg?height=200&width=200';
                document.querySelector('.track-title').textContent = data.title || 'No Track Selected';
                document.querySelector('.track-artist').textContent = 
                  (data.artist || 'Unknown Artist') + ' • ' + (data.album || 'Unknown Album');
                document.querySelector('.progress-bar').style.width = data.progress + '%';
                document.querySelectorAll('.time-display span')[0].textContent = data.currentTime;
                document.querySelectorAll('.time-display span')[1].textContent = data.duration;
                document.querySelector('.play-button').textContent = data.isPlaying ? '⏸' : '▶';
                document.querySelector('.volume-level').style.width = data.volume + '%';
                document.querySelector('#mute-btn').textContent = data.isMuted ? '🔇' : '🔊';
                
                // Update playlist
                const playlistHTML = data.tracks.map((track, idx) => \`
                  <div class="playlist-item \${idx === data.currentTrackIndex ? 'active' : ''}" data-index="\${idx}">
                    <div class="playlist-item-number">
                      \${idx === data.currentTrackIndex ? '▶' : (idx + 1).toString().padStart(2, '0')}
                    </div>
                    <div class="playlist-item-info">
                      <div class="playlist-item-title">\${track.title}</div>
                      <div class="playlist-item-artist">\${track.artist}</div>
                    </div>
                    <div class="playlist-item-duration">
                      \${track.duration}
                    </div>
                  </div>
                \`).join('');
                
                document.getElementById('playlist').innerHTML = playlistHTML;
                
                // Re-add click handlers for playlist items
                document.querySelectorAll('.playlist-item').forEach(item => {
                  item.addEventListener('click', () => {
                    const index = parseInt(item.getAttribute('data-index') || '0');
                    mainWindow.postMessage({ type: 'SELECT_TRACK', index }, '*');
                  });
                });
                
                // Update background
                document.body.style.backgroundImage = \`url('\${data.background}')\`;
              }
            }
          });
          
          // Close handler
          window.addEventListener('beforeunload', () => {
            mainWindow.postMessage({ type: 'POPOUT_CLOSED' }, '*');
          });
        </script>
      </body>
      </html>
    `

      newPopoutWindow.document.write(content)
      newPopoutWindow.document.close()

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

  // Update the popout window update effect
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

  // Format time (seconds to MM:SS)
  const formatTime = (time: number): string => {
    if (isNaN(time)) return "00:00"

    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)

    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

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

  const backgrounds = [
    {
      id: "default",
      name: "Windows 7 Default",
      path: "/backgrounds/windows7-default.jpg",
    },
    {
      id: "aurora",
      name: "Aurora",
      path: "/backgrounds/windows7-aurora.jpg",
    },
    {
      id: "harmony",
      name: "Harmony",
      path: "/backgrounds/windows7-harmony.jpg",
    },
    {
      id: "architecture",
      name: "Architecture",
      path: "/backgrounds/windows7-architecture.jpg",
    },
  ]

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
          <div
            style={{
              background: "linear-gradient(to bottom, #2580c5, #1a5f9e)",
              color: "white",
              padding: "8px 12px",
              fontWeight: 600,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textShadow: "0 1px 1px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div>Windows Media Player</div>
            <div style={{ display: "flex", gap: "4px" }}>
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  border: "1px solid rgba(0, 0, 0, 0.2)",
                  background: "linear-gradient(to bottom, #ffdb4c, #ffcd00)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "10px",
                  cursor: "pointer",
                }}
              >
                -
              </div>
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  border: "1px solid rgba(0, 0, 0, 0.2)",
                  background: "linear-gradient(to bottom, #00ca56, #00a844)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "10px",
                  cursor: "pointer",
                }}
              >
                □
              </div>
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  border: "1px solid rgba(0, 0, 0, 0.2)",
                  background: "linear-gradient(to bottom, #ff605c, #ff3b30)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "10px",
                  cursor: "pointer",
                }}
              >
                ×
              </div>
            </div>
          </div>

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
              <div
                style={{
                  flex: "0 0 200px",
                }}
              >
                {currentTrack?.cover ? (
                  <img
                    src={currentTrack.cover || "/placeholder.svg"}
                    alt={`${currentTrack.album} cover`}
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "4px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      marginBottom: "16px",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "4px",
                      background: "linear-gradient(135deg, #0078d7, #0099ff)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      marginBottom: "16px",
                      color: "white",
                      fontWeight: 600,
                    }}
                  >
                    {currentTrack?.album || "No Album"}
                  </div>
                )}

                <div
                  style={{
                    textAlign: "center",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: "16px",
                      marginBottom: "4px",
                      color: "#333",
                    }}
                  >
                    {currentTrack?.title || "No Track Selected"}
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#666",
                    }}
                  >
                    {currentTrack?.artist || "Unknown Artist"} • {currentTrack?.album || "Unknown Album"}
                  </div>
                </div>

                {/* Change Album Art Button */}
                {currentTrack && (
                  <button
                    onClick={() => handleAlbumArtSelector(currentTrackIndex)}
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
                      marginBottom: "8px",
                    }}
                  >
                    <span style={{ fontSize: "16px" }}>🖼️</span>
                    <span>Change Album Art</span>
                  </button>
                )}

                {/* Pop-out Button */}
                <button
                  onClick={handlePopOut}
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
                  <span style={{ fontSize: "16px" }}>⇱</span>
                  <span>Pop Out Player</span>
                </button>
              </div>

              {/* Controls and Playlist */}
              <div
                style={{
                  flex: "1 1 300px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Progress Bar */}
                <div
                  ref={progressBarRef}
                  onClick={handleSeek}
                  style={{
                    height: "8px",
                    background: "rgba(0, 0, 0, 0.1)",
                    borderRadius: "4px",
                    marginBottom: "8px",
                    position: "relative",
                    overflow: "hidden",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      background: "linear-gradient(to bottom, #4cc6ff, #0078d7)",
                      width: `${(currentTime / duration) * 100}%`,
                      borderRadius: "4px",
                      position: "relative",
                    }}
                  ></div>
                </div>

                {/* Time Display */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "12px",
                    color: "#666",
                    marginBottom: "16px",
                  }}
                >
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>

                {/* Playback Controls */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "16px",
                    marginBottom: "16px",
                  }}
                >
                  <button
                    onClick={playPreviousTrack}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      border: "1px solid rgba(0, 0, 0, 0.1)",
                      background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
                      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      fontSize: "16px",
                    }}
                  >
                    ⏮
                  </button>

                  <button
                    onClick={togglePlay}
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      border: "1px solid rgba(0, 0, 0, 0.1)",
                      background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
                      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      fontSize: "20px",
                    }}
                  >
                    {isPlaying ? "⏸" : "▶"}
                  </button>

                  <button
                    onClick={playNextTrack}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      border: "1px solid rgba(0, 0, 0, 0.1)",
                      background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
                      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      fontSize: "16px",
                    }}
                  >
                    ⏭
                  </button>
                </div>

                {/* Volume Control */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "20px",
                  }}
                >
                  <button
                    onClick={toggleMute}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      border: "1px solid rgba(0, 0, 0, 0.1)",
                      background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
                      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      fontSize: "14px",
                    }}
                  >
                    {isMuted ? "🔇" : "🔊"}
                  </button>

                  <div
                    ref={volumeBarRef}
                    onClick={handleVolumeChange}
                    style={{
                      flex: "1",
                      height: "6px",
                      background: "rgba(0, 0, 0, 0.1)",
                      borderRadius: "3px",
                      position: "relative",
                      overflow: "hidden",
                      border: "1px solid rgba(0, 0, 0, 0.1)",
                      boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.1)",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        background: "linear-gradient(to bottom, #4cc6ff, #0078d7)",
                        width: `${volume * 100}%`,
                        borderRadius: "3px",
                      }}
                    ></div>
                  </div>
                </div>

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
                  <div
                    style={{
                      maxHeight: "200px",
                      overflowY: "auto",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      background: "rgba(255, 255, 255, 0.5)",
                      padding: "8px",
                    }}
                  >
                    {tracks.length === 0 ? (
                      <div
                        style={{
                          textAlign: "center",
                          padding: "20px",
                          color: "#666",
                        }}
                      >
                        No tracks available. Upload MP3 files to get started.
                      </div>
                    ) : (
                      tracks.map((track, index) => (
                        <div
                          key={track.id}
                          onClick={() => handleTrackSelect(index)}
                          onContextMenu={(e) => handleContextMenu(e, index)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            padding: "8px",
                            borderRadius: "4px",
                            marginBottom: "4px",
                            cursor: "pointer",
                            background: index === currentTrackIndex ? "rgba(0, 120, 215, 0.1)" : "transparent",
                            border:
                              index === currentTrackIndex
                                ? "1px solid rgba(0, 120, 215, 0.3)"
                                : "1px solid transparent",
                            transition: "background 0.2s",
                          }}
                        >
                          <div
                            style={{
                              width: "24px",
                              height: "24px",
                              marginRight: "8px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "12px",
                              color: "#666",
                            }}
                          >
                            {index === currentTrackIndex ? "▶" : (index + 1).toString().padStart(2, "0")}
                          </div>

                          <div
                            style={{
                              flex: "1",
                            }}
                          >
                            <div
                              style={{
                                fontWeight: index === currentTrackIndex ? 600 : 400,
                                fontSize: "14px",
                                color: "#333",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              {track.title}
                            </div>
                            <div
                              style={{
                                fontSize: "12px",
                                color: "#666",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              {track.artist}
                            </div>
                          </div>

                          <div
                            style={{
                              fontSize: "12px",
                              color: "#666",
                              marginLeft: "8px",
                            }}
                          >
                            {formatTime(track.duration)}
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              handleRemoveTrack(index)
                            }}
                            style={{
                              width: "24px",
                              height: "24px",
                              borderRadius: "50%",
                              border: "1px solid rgba(0, 0, 0, 0.1)",
                              background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
                              boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              cursor: "pointer",
                              fontSize: "14px",
                              marginLeft: "8px",
                              color: "#666",
                            }}
                          >
                            ×
                          </button>
                        </div>
                      ))
                    )}
                  </div>
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
              <div
                style={{
                  marginTop: "20px",
                  padding: "16px",
                  background: "rgba(255, 255, 255, 0.5)",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 12px 0",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#333",
                  }}
                >
                  Select Background
                </h3>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
                    gap: "12px",
                    marginBottom: "16px",
                  }}
                >
                  {backgrounds.map((bg) => (
                    <div
                      key={bg.id}
                      onClick={() => handleBackgroundChange(bg.path)}
                      style={{
                        position: "relative",
                        cursor: "pointer",
                        borderRadius: "4px",
                        overflow: "hidden",
                        height: "80px",
                        border:
                          customBackground || background === bg.path ? "2px solid #0078d7" : "2px solid transparent",
                      }}
                    >
                      <img
                        src={bg.path || "/placeholder.svg"}
                        alt={bg.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          padding: "4px",
                          background: "rgba(0, 0, 0, 0.5)",
                          color: "white",
                          fontSize: "12px",
                          textAlign: "center",
                        }}
                      >
                        {bg.name}
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: 600,
                      color: "#333",
                      fontSize: "14px",
                    }}
                  >
                    Upload Custom Background
                  </label>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleCustomBackgroundUpload}
                      style={{
                        display: "none",
                      }}
                      id="bg-upload"
                    />
                    <label
                      htmlFor="bg-upload"
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
                      Select an image file
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Album Art Selector */}
            {showAlbumArtSelector && (
              <div
                style={{
                  marginTop: "20px",
                  padding: "16px",
                  background: "rgba(255, 255, 255, 0.5)",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 12px 0",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#333",
                  }}
                >
                  Select Album Art
                </h3>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
                    gap: "12px",
                    marginBottom: "16px",
                  }}
                >
                  {defaultAlbumArts.map((art, index) => (
                    <div
                      key={index}
                      onClick={() => handleAlbumArtChange(art)}
                      style={{
                        position: "relative",
                        cursor: "pointer",
                        borderRadius: "4px",
                        overflow: "hidden",
                        height: "100px",
                        border:
                          albumArtSelectorTrackIndex !== null && tracks[albumArtSelectorTrackIndex].cover === art
                            ? "2px solid #0078d7"
                            : "2px solid transparent",
                      }}
                    >
                      <img
                        src={art || "/placeholder.svg"}
                        alt={`Album art ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      marginBottom: "8px",
                      fontWeight: 600,
                      color: "#333",
                      fontSize: "14px",
                    }}
                  >
                    Upload Custom Album Art
                  </label>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleCustomAlbumArtUpload}
                      style={{
                        display: "none",
                      }}
                      id="art-upload"
                    />
                    <label
                      htmlFor="art-upload"
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
                      Select an image file
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "16px",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <button
                    onClick={() => setShowAlbumArtSelector(false)}
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
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Context Menu */}
      {showContextMenu && contextMenuTrackIndex !== null && (
        <div
          ref={contextMenuRef}
          style={{
            position: "fixed",
            top: `${contextMenuPosition.y}px`,
            left: `${contextMenuPosition.x}px`,
            background: "white",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
            padding: "4px 0",
          }}
        >
          <div
            onClick={() => handleTrackSelect(contextMenuTrackIndex)}
            style={{
              padding: "8px 16px",
              cursor: "pointer",
              fontSize: "14px",
              color: "#333",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span>▶</span>
            <span>Play</span>
          </div>

          <div
            onClick={() => handleAlbumArtSelector(contextMenuTrackIndex)}
            style={{
              padding: "8px 16px",
              cursor: "pointer",
              fontSize: "14px",
              color: "#333",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span>🖼️</span>
            <span>Change Album Art</span>
          </div>

          <div
            onClick={() => handleRemoveTrack(contextMenuTrackIndex)}
            style={{
              padding: "8px 16px",
              cursor: "pointer",
              fontSize: "14px",
              color: "#333",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span>🗑️</span>
            <span>Remove from Library</span>
          </div>
        </div>
      )}

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={currentTrack?.file}
        onTimeUpdate={handleTimeUpdate}
        onDurationChange={handleDurationChange}
        onEnded={handleTrackEnd}
        autoPlay={isPlaying}
      />
      {/* Recent Images Bar */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(10px)",
          padding: "8px 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 100,
          transform: showRecentImages ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <button
          onClick={() => setShowRecentImages(!showRecentImages)}
          style={{
            position: "absolute",
            top: "-30px",
            left: "20px",
            background: "rgba(0, 0, 0, 0.7)",
            color: "white",
            border: "none",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
            padding: "5px 15px",
            cursor: "pointer",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <span>🖼️</span>
          <span>Recent Images</span>
          <span>{showRecentImages ? "▼" : "▲"}</span>
        </button>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {recentBackgrounds.length > 0 && (
            <div>
              <h4
                style={{
                  color: "white",
                  margin: "0 0 8px 0",
                  fontSize: "14px",
                }}
              >
                Recent Backgrounds
              </h4>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  overflowX: "auto",
                  padding: "5px 0",
                }}
              >
                {recentBackgrounds.map((bg, index) => (
                  <div
                    key={`bg-${index}`}
                    onClick={() => {
                      setCustomBackground(bg)
                      setBackground("")
                    }}
                    style={{
                      width: "80px",
                      height: "45px",
                      borderRadius: "4px",
                      overflow: "hidden",
                      cursor: "pointer",
                      flexShrink: 0,
                      border: customBackground === bg ? "2px solid #0078d7" : "2px solid transparent",
                    }}
                  >
                    <img
                      src={bg || "/placeholder.svg"}
                      alt={`Recent background ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {recentAlbumArts.length > 0 && (
            <div>
              <h4
                style={{
                  color: "white",
                  margin: "0 0 8px 0",
                  fontSize: "14px",
                }}
              >
                Recent Album Arts
              </h4>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  overflowX: "auto",
                  padding: "5px 0",
                }}
              >
                {recentAlbumArts.map((art, index) => (
                  <div
                    key={`art-${index}`}
                    onClick={() => {
                      if (currentTrack) {
                        const newTracks = [...tracks]
                        newTracks[currentTrackIndex] = {
                          ...newTracks[currentTrackIndex],
                          cover: art,
                        }
                        setTracks(newTracks)
                      }
                    }}
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "4px",
                      overflow: "hidden",
                      cursor: "pointer",
                      flexShrink: 0,
                      border: currentTrack?.cover === art ? "2px solid #0078d7" : "2px solid transparent",
                    }}
                  >
                    <img
                      src={art || "/placeholder.svg"}
                      alt={`Recent album art ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}


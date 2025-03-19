"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import type { Track } from "@/lib/types"
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
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/jNQXAC9IVRw",
    "https://www.youtube.com/embed/9bZkp7q19f0"
  ]
}: MusicPlayerProps) {
  // Default album cover - define this before using it in state
  const defaultAlbumCover = "/album-covers/miscellaneous_19.jpg"
  
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
  const [showPlaylist, setShowPlaylist] = useState<boolean>(false)
  const [background, setBackground] = useState<string>("/backgrounds/asadal_stock_148.jpg")
  const [customBackground, setCustomBackground] = useState<string | null>(null)
  const [showBackgroundSelector, setShowBackgroundSelector] = useState<boolean>(false)
  const [showContextMenu, setShowContextMenu] = useState<boolean>(false)
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 })
  const [contextMenuTrackIndex, setContextMenuTrackIndex] = useState<number | null>(null)
  const [showAlbumArtSelector, setShowAlbumArtSelector] = useState<boolean>(false)
  const [albumArtSelectorTrackIndex, setAlbumArtSelectorTrackIndex] = useState<number | null>(null)
  
  // New state for multiple playlists
  const [playlists, setPlaylists] = useState<Playlist[]>([
    { id: 'main', name: 'emis playlist', tracks: startingTracks }
  ])
  const [activePlaylistId, setActivePlaylistId] = useState<string>('main')
  const [showNewPlaylistInput, setShowNewPlaylistInput] = useState<boolean>(false)
  const [newPlaylistName, setNewPlaylistName] = useState<string>('')
  const gifPath = "/gifs/mygiffyboi.gif" // Set your GIF path here
  
  // Add state for notes
  const [notes, setNotes] = useState<Array<{id: string, content: string, position: {x: number, y: number}}>>([])
  const [activeNoteId, setActiveNoteId] = useState<string | null>(null)
  
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
      // Use functional update to avoid circular dependency issues
      setTracks(() => activePlaylist.tracks)
      setCurrentTrackIndex(0)
      setIsPlaying(false)
    }
  }, [activePlaylistId]) // Remove activePlaylist from dependencies to avoid circular reference
  
  // Get current track after tracks are updated
  const currentTrack = tracks[currentTrackIndex] || {
    id: 'default',
    title: 'No Track Selected',
    artist: 'Unknown Artist',
    album: 'Unknown Album',
    duration: 0,
    cover: defaultAlbumCover,
    file: ''
  }
  
  // Update the active playlist when tracks change
  useEffect(() => {
    if (activePlaylistId) {
      setPlaylists(prevPlaylists => 
        prevPlaylists.map(p => 
          p.id === activePlaylistId 
            ? { ...p, tracks } 
            : p
        )
      )
    }
  }, [tracks, activePlaylistId]) // Remove activePlaylist from dependencies

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
        console.log("Setting up audio processing...");
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
        lowpass.frequency.value = 1000; // Lower frequency for more "crushed" sound
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
        
        // Set initial volume
        if (audioRef.current) {
          audioRef.current.volume = volume;
        }
      } catch (error) {
        console.error("Error setting up audio processing:", error);
      }
    };
    
    // Try to set up audio processing with a delay to ensure the audio element is ready
    const timer = setTimeout(() => {
      setupAudioProcessing();
    }, 500);
    
    // Clean up function
    return () => {
      clearTimeout(timer);
      if (audioContextRef.current) {
        audioContextRef.current.close().catch(err => {
          console.error("Error closing audio context:", err);
        });
      }
    };
  }, [volume]); // Add volume as a dependency
  
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

  // Update audio element when track changes
  useEffect(() => {
    if (audioRef.current) {
      // Make sure the src is set properly
      if (currentTrack?.file) {
        audioRef.current.src = currentTrack.file;
        audioRef.current.load();
        
        if (isPlaying) {
          // Resume audio context if it's suspended
          if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
            audioContextRef.current.resume().catch(err => {
              console.error("Error resuming audio context:", err);
            });
          }
          
          // Play audio
          audioRef.current.play().catch((error) => {
            console.error("Playback failed:", error);
            setIsPlaying(false);
          });
        }
      }
    }
  }, [currentTrackIndex, isPlaying, currentTrack]);

  // Handle play/pause
  const togglePlay = () => {
    if (audioRef.current) {
      // Ensure audio processing is set up
      if (!isAudioSetupComplete.current) {
        try {
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
        } catch (error) {
          console.error("Error setting up audio processing:", error);
        }
      }
      
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        // Resume audio context if it's suspended
        if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
          audioContextRef.current.resume().catch(err => {
            console.error("Error resuming audio context:", err);
          });
        }
        
        if (currentTrack?.file) {
          audioRef.current.play().catch(error => {
            console.error("Playback failed:", error);
          });
          setIsPlaying(true);
        } else {
          console.error("No audio file to play");
        }
      }
    }
  };

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
    if (tracks.length === 0) return;
    
    // If we're more than 3 seconds into the song, restart it instead of going to previous track
    if (audioRef.current && audioRef.current.currentTime > 3) {
      audioRef.current.currentTime = 0;
      return;
    }
    
    const newIndex = currentTrackIndex === 0 ? tracks.length - 1 : currentTrackIndex - 1;
    setCurrentTrackIndex(newIndex);
    setIsPlaying(true);
  };

  // Handle next track
  const playNextTrack = () => {
    if (tracks.length === 0) return;
    const newIndex = currentTrackIndex === tracks.length - 1 ? 0 : currentTrackIndex + 1;
    setCurrentTrackIndex(newIndex);
    setIsPlaying(true);
  };

  // Handle time update
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // Handle duration change
  const handleDurationChange = () => {
    if (audioRef.current && !isNaN(audioRef.current.duration)) {
      setDuration(audioRef.current.duration);
    }
  };

  // Handle seek
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressBarRef.current && audioRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      const newTime = pos * duration;
      
      // Validate the seek position
      if (!isNaN(newTime) && isFinite(newTime) && newTime >= 0) {
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
      }
    }
  };

  // Handle volume change
  const handleVolumeChange = (e: React.MouseEvent<HTMLDivElement>) => {
    if (volumeBarRef.current && audioRef.current) {
      const rect = volumeBarRef.current.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      const newVolume = Math.max(0, Math.min(1, pos));
      
      setVolume(newVolume);
      
      if (audioRef.current) {
        audioRef.current.volume = newVolume;
      }

      if (newVolume === 0) {
        setIsMuted(true);
      } else {
        setIsMuted(false);
      }
    }
  };

  // Handle mute toggle
  const toggleMute = () => {
    if (audioRef.current) {
      const newMutedState = !isMuted;
      audioRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  // Handle track end
  const handleTrackEnd = () => {
    // If we have tracks, play the next one
    if (tracks.length > 0) {
      playNextTrack();
    }
  };

  // Handle track selection from playlist
  const handleTrackSelect = (index: number) => {
    if (index >= 0 && index < tracks.length) {
      setCurrentTrackIndex(index);
      setIsPlaying(true);
      
      // The actual playback will be handled by the useEffect that watches currentTrackIndex
    }
  };

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

  // Add note function
  const addNote = () => {
    const newNote = {
      id: `note-${Date.now()}`,
      content: '',
      position: { x: window.innerWidth - 220, y: 10 }
    };
    setNotes([...notes, newNote]);
    setActiveNoteId(newNote.id);
  };

  // Delete note function
  const deleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
    if (activeNoteId === id) {
      setActiveNoteId(null);
    }
  };

  // Update note content
  const updateNoteContent = (id: string, content: string) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, content } : note
    ));
  };

  // Update note position
  const updateNotePosition = (id: string, position: {x: number, y: number}) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, position } : note
    ));
  };

  // Handle note dragging
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent, noteId: string) => {
    // Only start dragging if clicking on the title bar
    if ((e.target as HTMLElement).classList.contains('note-title-bar')) {
      setIsDragging(true);
      setActiveNoteId(noteId);
      
      const note = notes.find(n => n.id === noteId);
      if (note) {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        setDragOffset({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && activeNoteId) {
      const note = notes.find(n => n.id === activeNoteId);
      if (note) {
        updateNotePosition(activeNoteId, {
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y
        });
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Event handlers for mouse move
  useEffect(() => {
    const handleMouseMoveWrapper = (e: MouseEvent) => handleMouseMove(e);
    const handleMouseUpWrapper = () => handleMouseUp();
    
    document.addEventListener('mousemove', handleMouseMoveWrapper);
    document.addEventListener('mouseup', handleMouseUpWrapper);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMoveWrapper);
      document.removeEventListener('mouseup', handleMouseUpWrapper);
    };
  }, [isDragging, activeNoteId, dragOffset]);

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
        padding: "40px",
        position: "relative",
        filter: "contrast(0.95) brightness(0.95) saturate(1.5)",
        imageRendering: "pixelated",
      }}
    >

{/* GIF Display Area outside the box - now using file path */}
<div
        style={{
          position: "absolute",
          top: "680px",
          left: "110px",
          zIndex: 10,
          width: "110px",
          height: "110px",
          overflow: "hidden",
          borderRadius: "4px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          imageRendering: "pixelated",
          opacity: 0.7,
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


      {/* Description Box - updated to be non-editable and positioned right under the GIF */}
      <div
        style={{
          position: "absolute",
          left: "20px",
          top: "100px", // Positioned just under the GIF
          width: "220px",
          zIndex: 10,
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(10px)",
          borderRadius: "8px",
          boxShadow:
            "0 0 10px rgba(0, 0, 0, 0.3), 0 0 30px rgba(255, 255, 255, 0.1), inset 0 0 1px 1px rgba(255, 255, 255, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          padding: "10px",
          imageRendering: "pixelated",
        }}
      >
        <div
          style={{
            background: "linear-gradient(to bottom, #e4e4e4, #d0d0d0)",
            padding: "5px 8px",
            borderBottom: "1px solid #ccc",
            borderRadius: "4px 4px 0 0",
            fontWeight: 600,
            fontSize: "14px",
            color: "#333",
            marginBottom: "8px",
          }}
        >
          about emi beats
        </div>
        <div
          style={{
            width: "100%",
            height: "430px", // Increased height
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "3px",
            background: "white",
            boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.1)",
            fontSize: "13px",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            overflowY: "auto",
          }}
        >
 i know its 2025 ok.. i really like fruitger aero + retro windows, and thus, emibeats was born. this page is whatever u want it to be tho. i included a note taking feature for getting ur thoughts out. u can add ur own songs and listen to them with a lpf (low pass filter) for the retro vibes. u can even change the background and album covers from my vault of frutiger-adjascent images. if u just feel like chilling here, there is a playlist of my favorite music, some youtube videos i made, and an area where u can leave a message. in a way, this is kinda like my portfolio for my creative works. enjoy ! -e        </div>
      </div>

      {/* Add Note Button */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          zIndex: 10,
        }}
      >
        <button
          onClick={addNote}
          style={{
            padding: "8px 16px",
            background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
            border: "1px solid #ccc",
            borderRadius: "3px",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
            color: "#333",
            cursor: "pointer",
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <span>📝</span>
          <span>jot some notes..</span>
        </button>
      </div>

      {/* Movable Notes */}
      {notes.map(note => (
        <div
          key={note.id}
          onMouseDown={(e) => handleMouseDown(e, note.id)}
          style={{
            position: "absolute",
            left: `${note.position.x}px`,
            top: `${note.position.y}px`,
            width: "200px",
            zIndex: note.id === activeNoteId ? 100 : 20,
            background: "#fdffa8",
            borderRadius: "2px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            overflow: "hidden",
          }}
        >
          <div
            className="note-title-bar"
            style={{
              background: "linear-gradient(to bottom, #f7f38e, #f0eb7d)",
              padding: "5px 8px",
              borderBottom: "1px solid #e6de76",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "move",
            }}
          >
            <span style={{ fontSize: "12px", fontWeight: 600, color: "#555" }}>
              note
            </span>
            <button
              onClick={() => deleteNote(note.id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "14px",
                color: "#555",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "16px",
                height: "16px",
              }}
            >
              ×
            </button>
          </div>
          <textarea
            value={note.content}
            onChange={(e) => updateNoteContent(note.id, e.target.value)}
            style={{
              width: "100%",
              height: "180px",
              padding: "8px",
              border: "none",
              background: "#fdffa8",
              boxShadow: "inset 0 1px 1px rgba(0, 0, 0, 0.05)",
              fontSize: "13px",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              resize: "none",
              outline: "none",
            }}
          />
        </div>
      ))}
      
      {/* Message Input Box - Positioned on the right side */}
      <div
        style={{
          position: "absolute",
          right: "20px",
          bottom: "250px", // Aligned with the bottom of the main screen
          width: "250px",
          zIndex: 10,
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(10px)",
          borderRadius: "8px",
          boxShadow:
            "0 0 10px rgba(0, 0, 0, 0.3), 0 0 30px rgba(255, 255, 255, 0.1), inset 0 0 1px 1px rgba(255, 255, 255, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          padding: "10px",
          imageRendering: "pixelated",
        }}
      >
        <div
          style={{
            background: "linear-gradient(to bottom, #e4e4e4, #d0d0d0)",
            padding: "5px 8px",
            borderBottom: "1px solid #ccc",
            borderRadius: "4px 4px 0 0",
            fontWeight: 600,
            fontSize: "14px",
            color: "#333",
            marginBottom: "8px",
          }}
        >
          msg me!
        </div>
        <MessageInput />
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
            backdropFilter: "blur(100px)",
            borderRadius: "8px",
            boxShadow:
              "0 0 10px rgba(0, 0, 0, 0.3), 0 0 30px rgba(255, 255, 255, 0.1), inset 0 0 1px 1px rgba(255, 255, 255, 0.2)",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            imageRendering: "pixelated",
          }}
        >
          {/* Title Bar */}
          <WindowsTitleBar title="emi beats" />

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
                  browse...
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
                  + new playlist
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
                    create
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
                    cancel
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
                    {showPlaylist ? "hide playlist" : "show playlist"}
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
                    <span style={{ fontSize: "14px" }}></span>
                    <span>change background</span>
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
        src={currentTrack?.file || ''}
        onTimeUpdate={handleTimeUpdate}
        onDurationChange={handleDurationChange}
        onEnded={handleTrackEnd}
        preload="auto"
      />
    </main>
  )
}


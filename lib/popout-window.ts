import { formatTime } from "./utils"
import type { Track } from "./types"

interface PopoutWindowProps {
  currentTrack: Track | undefined
  currentTime: number
  duration: number
  isPlaying: boolean
  volume: number
  isMuted: boolean
  tracks: Track[]
  currentTrackIndex: number
  background: string
  formatTime: (time: number) => string
}

export function createPopoutWindow(props: PopoutWindowProps): Window | null {
  const width = 400
  const height = 600
  const left = (window.screen.width - width) / 2
  const top = (window.screen.height - height) / 2

  const newPopoutWindow = window.open(
    "",
    "MusicPlayerPopout",
    `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=no,status=no,location=no,menubar=no,toolbar=no`,
  )

  if (!newPopoutWindow) return null

  const {
    currentTrack,
    currentTime,
    duration,
    isPlaying,
    volume,
    isMuted,
    tracks,
    currentTrackIndex,
    background,
    formatTime,
  } = props

  // Generate playlist items HTML
  const playlistItemsHTML = tracks
    .map(
      (track, idx) => 
      `<div class="playlist-item ${idx === currentTrackIndex ? "active" : ""}" data-index="${idx}">
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
      </div>`
    )
    .join("")

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
          background: url('${background}') no-repeat center center fixed;
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
            ${playlistItemsHTML}
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
              
              // Create a function to generate playlist HTML
              function generatePlaylistHTML(tracks, currentIndex) {
                return tracks.map((track, idx) => 
                  '<div class="playlist-item ' + (idx === currentIndex ? 'active' : '') + '" data-index="' + idx + '">' +
                    '<div class="playlist-item-number">' +
                      (idx === currentIndex ? '▶' : (idx + 1).toString().padStart(2, '0')) +
                    '</div>' +
                    '<div class="playlist-item-info">' +
                      '<div class="playlist-item-title">' + track.title + '</div>' +
                      '<div class="playlist-item-artist">' + track.artist + '</div>' +
                    '</div>' +
                    '<div class="playlist-item-duration">' +
                      track.duration +
                    '</div>' +
                  '</div>'
                ).join('');
              }
              
              // Update playlist using the function
              document.getElementById('playlist').innerHTML = generatePlaylistHTML(data.tracks, data.currentTrackIndex);
              
              // Re-add click handlers for playlist items
              document.querySelectorAll('.playlist-item').forEach(item => {
                item.addEventListener('click', () => {
                  const index = parseInt(item.getAttribute('data-index') || '0');
                  mainWindow.postMessage({ type: 'SELECT_TRACK', index }, '*');
                });
              });
              
              // Update background
              document.body.style.backgroundImage = 'url("' + data.background + '")';
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

  return newPopoutWindow
} 
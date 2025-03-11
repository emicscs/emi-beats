"use client"

import type React from "react"
import type { Track } from "@/lib/types"
import { formatTime } from "@/lib/utils"

interface PlaylistProps {
  tracks: Track[]
  currentTrackIndex: number
  onTrackSelect: (index: number) => void
  onContextMenu: (e: React.MouseEvent, index: number) => void
  onRemoveTrack: (index: number) => void
}

export default function Playlist({
  tracks,
  currentTrackIndex,
  onTrackSelect,
  onContextMenu,
  onRemoveTrack,
}: PlaylistProps) {
  if (tracks.length === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          color: "#666",
        }}
      >
        No tracks available. Upload MP3 files to get started.
      </div>
    )
  }

  return (
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
      {tracks.map((track, index) => (
        <div
          key={track.id}
          onClick={() => onTrackSelect(index)}
          onContextMenu={(e) => onContextMenu(e, index)}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "8px",
            borderRadius: "4px",
            marginBottom: "4px",
            cursor: "pointer",
            background: index === currentTrackIndex ? "rgba(0, 120, 215, 0.1)" : "transparent",
            border: index === currentTrackIndex ? "1px solid rgba(0, 120, 215, 0.3)" : "1px solid transparent",
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
              onRemoveTrack(index)
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
      ))}
    </div>
  )
} 
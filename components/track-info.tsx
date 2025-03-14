"use client"

import type { Track } from "@/lib/types"

interface TrackInfoProps {
  track: Track | undefined
  onAlbumArtChange: () => void
}

export default function TrackInfo({ track, onAlbumArtChange }: TrackInfoProps) {
  return (
    <div
      style={{
        flex: "0 0 200px",
      }}
    >
      {track?.cover ? (
        <img
          src={track.cover || "/placeholder.svg"}
          alt={`${track.album} cover`}
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
          {track?.album || "No Album"}
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
          {track?.title || "No Track Selected"}
        </div>
        <div
          style={{
            fontSize: "14px",
            color: "#666",
          }}
        >
          {track?.artist || "Unknown Artist"} • {track?.album || "Unknown Album"}
        </div>
      </div>

      {/* Change Album Art Button */}
      {track && (
        <button
          onClick={onAlbumArtChange}
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
          <span style={{ fontSize: "16px" }}>🖼️</span>
          <span>Change Album Art</span>
        </button>
      )}
    </div>
  )
}


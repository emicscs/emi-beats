"use client"

import type React from "react"

interface AlbumArtSelectorProps {
  defaultAlbumArts: string[]
  currentAlbumArt: string | null
  onAlbumArtChange: (artPath: string) => void
  onCustomAlbumArtUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClose: () => void
}

export default function AlbumArtSelector({
  defaultAlbumArts,
  currentAlbumArt,
  onAlbumArtChange,
  onCustomAlbumArtUpload,
  onClose,
}: AlbumArtSelectorProps) {
  return (
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
            onClick={() => onAlbumArtChange(art)}
            style={{
              position: "relative",
              cursor: "pointer",
              borderRadius: "4px",
              overflow: "hidden",
              height: "100px",
              border: currentAlbumArt === art ? "2px solid #0078d7" : "2px solid transparent",
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
            onChange={onCustomAlbumArtUpload}
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
          onClick={onClose}
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
  )
} 
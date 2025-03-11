"use client"

import type React from "react"
import { forwardRef } from "react"

interface ContextMenuProps {
  position: { x: number; y: number }
  onPlay: () => void
  onChangeAlbumArt: () => void
  onRemove: () => void
}

const ContextMenu = forwardRef<HTMLDivElement, ContextMenuProps>(
  ({ position, onPlay, onChangeAlbumArt, onRemove }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          position: "fixed",
          top: `${position.y}px`,
          left: `${position.x}px`,
          background: "white",
          border: "1px solid #ccc",
          borderRadius: "4px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
          zIndex: 1000,
          padding: "4px 0",
        }}
      >
        <div
          onClick={onPlay}
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
          onClick={onChangeAlbumArt}
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
          onClick={onRemove}
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
    )
  }
)

ContextMenu.displayName = "ContextMenu"

export default ContextMenu 
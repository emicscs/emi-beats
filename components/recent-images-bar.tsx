"use client"

import type React from "react"

interface RecentImagesBarProps {
  showRecentImages: boolean
  setShowRecentImages: (show: boolean) => void
  recentBackgrounds: string[]
  recentAlbumArts: string[]
  currentBackground: string | null
  currentAlbumArt: string | null
  onBackgroundSelect: (bgUrl: string) => void
  onAlbumArtSelect: (artUrl: string) => void
}

export default function RecentImagesBar({
  showRecentImages,
  setShowRecentImages,
  recentBackgrounds,
  recentAlbumArts,
  currentBackground,
  currentAlbumArt,
  onBackgroundSelect,
  onAlbumArtSelect,
}: RecentImagesBarProps) {
  return (
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
                  onClick={() => onBackgroundSelect(bg)}
                  style={{
                    width: "80px",
                    height: "45px",
                    borderRadius: "4px",
                    overflow: "hidden",
                    cursor: "pointer",
                    flexShrink: 0,
                    border: currentBackground === bg ? "2px solid #0078d7" : "2px solid transparent",
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
                  onClick={() => onAlbumArtSelect(art)}
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "4px",
                    overflow: "hidden",
                    cursor: "pointer",
                    flexShrink: 0,
                    border: currentAlbumArt === art ? "2px solid #0078d7" : "2px solid transparent",
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
  )
} 
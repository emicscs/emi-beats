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
  // Add a predefined array of album arts similar to backgrounds
  const albumArts = [
    {
      id: "1",
      name: "cover 1",
      path: "/album-covers/miscellaneous_1.jpg",
    },
    {
      id: "2",
      name: "cover 2",
      path: "/album-covers/miscellaneous_2.jpg",
    },
    {
      id: "3",
      name: "cover 3",
      path: "/album-covers/miscellaneous_3.jpg",
    },
    {
      id: "4",
      name: "cover 4",
      path: "/album-covers/miscellaneous_4.jpg",  
    },  
    {
      id: "5",
      name: "cover 5",
      path: "/album-covers/miscellaneous_5.jpg",
    },
    {
      id: "6",
      name: "cover 6",
      path: "/album-covers/miscellaneous_6.jpg",
    },
    {
      id: "7",  
      name: "cover 7",
      path: "/album-covers/miscellaneous_7.jpg",
    },
    {
      id: "8",
      name: "cover 8",
      path: "/album-covers/miscellaneous_8.jpg",
    },  
    {
      id: "9",
      name: "cover 9",
      path: "/album-covers/miscellaneous_9.jpg",
    },  
    {
      id: "10",
      name: "cover 10",
      path: "/album-covers/miscellaneous_10.jpg",
    },
    {
      id: "11",
      name: "cover 11",
      path: "/album-covers/miscellaneous_11.jpg",
    },
    {
      id: "12",
      name: "cover 12",
      path: "/album-covers/miscellaneous_12.jpg",
    },
    {
      id: "13",
      name: "cover 13",
      path: "/album-covers/miscellaneous_13.jpg",
    },
    {
      id: "14",
      name: "cover 14",
      path: "/album-covers/miscellaneous_14.jpg",
    },
    {
      id: "15",
      name: "cover 15",
      path: "/album-covers/miscellaneous_15.jpg",
    },
    {
      id: "16",
      name: "cover 16",
      path: "/album-covers/miscellaneous_16.jpg",
    },
    {
      id: "17",
      name: "cover 17",
      path: "/album-covers/miscellaneous_17.jpg",
    },
    {
      id: "18",
      name: "cover 18",
      path: "/album-covers/miscellaneous_18.jpg",
    },
    {
      id: "19",
      name: "cover 19",
      path: "/album-covers/miscellaneous_19.jpg",
    },
    {
      id: "20", 
      name: "cover 20",
      path: "/album-covers/miscellaneous_20.jpg",
    },
    {
      id: "21",
      name: "cover 21", 
      path: "/album-covers/miscellaneous_21.jpg",
    },
    {
      id: "22",
      name: "cover 22",
      path: "/album-covers/miscellaneous_22.jpg",
    },
    {
      id: "23",
      name: "cover 23",
      path: "/album-covers/miscellaneous_23.jpg",
    },
    {
      id: "24",
      name: "cover 24",
      path: "/album-covers/miscellaneous_24.jpg",
    },
    {
      id: "25", 
      name: "cover 25",
      path: "/album-covers/miscellaneous_25.jpg",
    },
    {
      id: "26",
      name: "cover 26",
      path: "/album-covers/miscellaneous_26.jpg",
    },  
    {
      id: "27",
      name: "cover 27",
      path: "/album-covers/miscellaneous_27.jpg",
    },  
    {
      id: "28",
      name: "cover 28",
      path: "/album-covers/miscellaneous_28.jpg",
    },
    {
      id: "29",
      name: "cover 29",
      path: "/album-covers/miscellaneous_29.jpg",
    },
    {
      id: "30",
      name: "cover 30",
      path: "/album-covers/miscellaneous_30.jpg",
    },
    {
      id: "31",
      name: "cover 31",
      path: "/album-covers/miscellaneous_31.jpg",
    },
    {
      id: "32",
      name: "cover 32",
      path: "/album-covers/miscellaneous_32.jpg",
    },
    {
      id: "33",
      name: "cover 33",
      path: "/album-covers/miscellaneous_33.jpg",
    },
    
    
  ];

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
        {albumArts.map((art) => (
          <div
            key={art.id}
            onClick={() => onAlbumArtChange(art.path)}
            style={{
              position: "relative",
              cursor: "pointer",
              borderRadius: "4px",
              overflow: "hidden",
              height: "100px",
              border: currentAlbumArt === art.path ? "2px solid #0078d7" : "2px solid transparent",
            }}
          >
            <img
              src={art.path || "/placeholder.svg"}
              alt={art.name}
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
              {art.name}
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
"use client"

import { useState, useEffect } from "react"

interface TripleVideoDisplayProps {
  defaultVideos?: string[]
}

export default function TripleVideoDisplay({ 
  defaultVideos = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/jNQXAC9IVRw",
    "https://www.youtube.com/embed/9bZkp7q19f0"
  ] 
}: TripleVideoDisplayProps) {
  const [videos, setVideos] = useState<string[]>(defaultVideos)
  
  // Function to format YouTube URLs
  const formatYoutubeUrl = (url: string): string => {
    if (url.includes('youtube.com/embed')) {
      return url
    } else if (url.includes('youtube.com/watch?v=')) {
      return url.replace('watch?v=', 'embed/').split('&')[0]
    } else if (url.includes('youtu.be/')) {
      return `https://www.youtube.com/embed/${url.split('youtu.be/')[1].split('?')[0]}`
    }
    return url
  }
  
  // Apply lower quality parameter to YouTube embeds and add autoplay and mute parameters
  useEffect(() => {
    const formattedVideos = defaultVideos.map(url => {
      const formattedUrl = formatYoutubeUrl(url)
      // Add low quality parameter, autoplay=1 for autoplay, and mute=1 for muted playback
      // Note: Most browsers require videos to be muted for autoplay to work without user interaction
      return formattedUrl.includes('?') 
        ? `${formattedUrl}&vq=small&autoplay=1&mute=1&playsinline=1` 
        : `${formattedUrl}?vq=small&autoplay=1&mute=1&playsinline=1`
    })
    setVideos(formattedVideos)
  }, [defaultVideos])

  return (
    <div style={{ marginTop: "20px", marginBottom: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <label
          style={{
            fontWeight: 600,
            color: "#333",
          }}
        >
          my videos
        </label>
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        {videos.map((video, index) => (
          <div
            key={index}
            style={{
              flex: "1 1 calc(33.333% - 7px)",
              minWidth: "200px",
              position: "relative",
              paddingBottom: "30%", // Adjusted for a more square-ish aspect ratio
              height: 0,
              overflow: "hidden",
              borderRadius: "4px",
              border: "1px solid #ccc",
              boxShadow: "inset 0 0 5px rgba(0,0,0,0.1)",
            }}
          >
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                filter: "contrast(0.95) brightness(0.95)", // Slightly lower quality look
              }}
              src={video}
              title={`YouTube video player ${index + 1}`}
              frameBorder="0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  )
} 
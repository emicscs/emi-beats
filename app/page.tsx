"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { sampleTracks } from "@/lib/sample-data"
import type { Track } from "@/lib/types"
import { formatTime } from "@/lib/utils"
import MusicPlayer from "@/components/music-player"

// Define custom YouTube video URLs for the player
const customYoutubeVideos = [
  "https://www.youtube.com/watch?v=mb9qlb9lOhA&t=73s&ab_channel=emino",
  "https://www.youtube.com/watch?v=eyqtWt7A2-Y&t=134s&ab_channel=emino",
  "https://youtu.be/uAD31k3dzis?si=716kYam1jkGtqhFP",
  "https://www.youtube.com/watch?v=qqgmrDE4p40"
]

export default function Home() {
  return (
    <MusicPlayer 
      initialTracks={sampleTracks} 
      customYoutubeVideos={customYoutubeVideos}
    />
  )
}


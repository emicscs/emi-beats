"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { sampleTracks } from "@/lib/sample-data"
import type { Track } from "@/lib/types"
import { formatTime } from "@/lib/utils"
import MusicPlayer from "@/components/music-player"

// Define your custom YouTube video URLs here
const customYoutubeVideos = [
  "https://www.youtube.com/watch?v=ozyqTf4CU_E&ab_channel=emino", // Replace with your actual video URLs
  "https://www.youtube.com/watch?v=mb9qlb9lOhA&t=73s&ab_channel=emino",
  "https://www.youtube.com/watch?v=PcxUrrWQxdk&t=137s&ab_channel=emino"
]

export default function Home() {
  return (
    <MusicPlayer 
      initialTracks={sampleTracks} 
      customYoutubeVideos={customYoutubeVideos}
    />
  )
}


"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { sampleTracks } from "@/lib/sample-data"
import type { Track } from "@/lib/types"
import { formatTime } from "@/lib/utils"
import MusicPlayer from "@/components/music-player"

export default function Home() {
  return (
    <MusicPlayer initialTracks={sampleTracks} />
  )
}


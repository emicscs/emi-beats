"use client"

import type { Track } from "@/lib/types"
import { Music } from "lucide-react"

interface TrackListProps {
  tracks: Track[]
  currentTrackIndex: number
  onTrackSelect: (index: number) => void
}

export default function TrackList({ tracks, currentTrackIndex, onTrackSelect }: TrackListProps) {
  // Format time (seconds to MM:SS)
  const formatTime = (time: number): string => {
    if (isNaN(time)) return "00:00"

    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)

    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  if (tracks.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No tracks available</p>
        <p className="text-sm text-gray-500 mt-2">Upload MP3 files to get started</p>
      </div>
    )
  }

  return (
    <div>
      <h3 className="text-lg font-medium text-gray-800 mb-3">Playlist</h3>

      <div className="max-h-64 overflow-y-auto pr-2">
        {tracks.map((track, index) => (
          <div
            key={track.id}
            className={`flex items-center p-2 rounded-lg mb-2 cursor-pointer transition-colors ${
              index === currentTrackIndex ? "bg-blue-100/70 text-blue-800" : "hover:bg-white/50"
            }`}
            onClick={() => onTrackSelect(index)}
          >
            <div className="w-8 h-8 flex items-center justify-center mr-3">
              {track.cover ? (
                <img
                  src={track.cover || "/placeholder.svg"}
                  alt={`${track.album} cover`}
                  className="w-8 h-8 object-cover rounded"
                />
              ) : (
                <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                  <Music size={16} className="text-blue-500" />
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{track.title}</p>
              <p className="text-xs text-gray-600 truncate">{track.artist}</p>
            </div>

            <div className="text-xs text-gray-500 ml-2">{formatTime(track.duration)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}


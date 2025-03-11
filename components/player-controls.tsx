"use client"

import type React from "react"

import { formatTime } from "@/lib/utils"

interface PlayerControlsProps {
  currentTime: number
  duration: number
  isPlaying: boolean
  volume: number
  isMuted: boolean
  progressBarRef: React.RefObject<HTMLDivElement>
  volumeBarRef: React.RefObject<HTMLDivElement>
  onSeek: (e: React.MouseEvent<HTMLDivElement>) => void
  onVolumeChange: (e: React.MouseEvent<HTMLDivElement>) => void
  onTogglePlay: () => void
  onPreviousTrack: () => void
  onNextTrack: () => void
  onToggleMute: () => void
}

export default function PlayerControls({
  currentTime,
  duration,
  isPlaying,
  volume,
  isMuted,
  progressBarRef,
  volumeBarRef,
  onSeek,
  onVolumeChange,
  onTogglePlay,
  onPreviousTrack,
  onNextTrack,
  onToggleMute,
}: PlayerControlsProps) {
  return (
    <>
      {/* Progress Bar */}
      <div
        ref={progressBarRef}
        onClick={onSeek}
        style={{
          height: "8px",
          background: "rgba(0, 0, 0, 0.1)",
          borderRadius: "4px",
          marginBottom: "8px",
          position: "relative",
          overflow: "hidden",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            height: "100%",
            background: "linear-gradient(to bottom, #4cc6ff, #0078d7)",
            width: `${(currentTime / duration) * 100}%`,
            borderRadius: "4px",
            position: "relative",
          }}
        ></div>
      </div>

      {/* Time Display */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "12px",
          color: "#666",
          marginBottom: "16px",
        }}
      >
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      {/* Playback Controls */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          marginBottom: "16px",
        }}
      >
        <button
          onClick={onPreviousTrack}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          ⏮
        </button>

        <button
          onClick={onTogglePlay}
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "20px",
          }}
        >
          {isPlaying ? "⏸" : "▶"}
        </button>

        <button
          onClick={onNextTrack}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          ⏭
        </button>
      </div>

      {/* Volume Control */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={onToggleMute}
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          {isMuted ? "🔇" : "🔊"}
        </button>

        <div
          ref={volumeBarRef}
          onClick={onVolumeChange}
          style={{
            flex: "1",
            height: "6px",
            background: "rgba(0, 0, 0, 0.1)",
            borderRadius: "3px",
            position: "relative",
            overflow: "hidden",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              height: "100%",
              background: "linear-gradient(to bottom, #4cc6ff, #0078d7)",
              width: `${volume * 100}%`,
              borderRadius: "3px",
            }}
          ></div>
        </div>
      </div>
    </>
  )
}


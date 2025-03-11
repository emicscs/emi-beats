"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, ImageIcon } from "lucide-react"

interface BackgroundSelectorProps {
  onSelectBackground: (background: string) => void
  onCustomBackgroundUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
  currentBackground: string
}

const backgrounds = [
  {
    id: "blue",
    name: "Frutiger Blue",
    path: "/backgrounds/frutiger-blue.jpg",
  },
  {
    id: "green",
    name: "Frutiger Green",
    path: "/backgrounds/frutiger-green.jpg",
  },
  {
    id: "purple",
    name: "Frutiger Purple",
    path: "/backgrounds/frutiger-purple.jpg",
  },
  {
    id: "orange",
    name: "Frutiger Orange",
    path: "/backgrounds/frutiger-orange.jpg",
  },
]

export default function BackgroundSelector({
  onSelectBackground,
  onCustomBackgroundUpload,
  currentBackground,
}: BackgroundSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mt-6">
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-white/50 hover:bg-white/70 border-white/50 text-gray-800"
      >
        <span className="flex items-center">
          <ImageIcon size={16} className="mr-2" />
          Change Background
        </span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </Button>

      {isOpen && (
        <div className="mt-2 p-4 bg-white/40 backdrop-blur-md rounded-lg border border-white/50 shadow-md">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            {backgrounds.map((bg) => (
              <div
                key={bg.id}
                className={`
                  relative cursor-pointer rounded-lg overflow-hidden h-20
                  ${currentBackground === bg.path ? "ring-2 ring-blue-500 ring-offset-2" : ""}
                `}
                onClick={() => onSelectBackground(bg.path)}
              >
                <img src={bg.path || "/placeholder.svg"} alt={bg.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 flex items-end p-2">
                  <span className="text-xs text-white font-medium drop-shadow-md">{bg.name}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3">
            <label className="block mb-2 text-sm font-medium text-gray-800">Upload Custom Background</label>
            <input
              type="file"
              accept="image/*"
              onChange={onCustomBackgroundUpload}
              className="block w-full text-sm text-gray-800
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100
                file:cursor-pointer file:shadow-sm
                file:transition-colors"
            />
          </div>
        </div>
      )}
    </div>
  )
}


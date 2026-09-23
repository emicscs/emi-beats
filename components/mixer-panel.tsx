"use client"

import { useRef, type PointerEvent, type KeyboardEvent, type WheelEvent } from "react"
import { DEFAULT_MIXER, type MixerSettings } from "@/lib/mixer"

interface MixerPanelProps {
  settings: MixerSettings
  onChange: (key: keyof MixerSettings, value: number) => void
}

const KNOBS: { key: keyof MixerSettings; label: string; ariaLabel: string }[] = [
  { key: "lpf", label: "lpf", ariaLabel: "low pass" },
  { key: "hpf", label: "hpf", ariaLabel: "high pass" },
  { key: "reverb", label: "reverb", ariaLabel: "reverb" },
  { key: "echo", label: "echo", ariaLabel: "echo" },
  { key: "softness", label: "soft", ariaLabel: "softness" },
]

const ARC_RADIUS = 27
const ARC_CIRC = 2 * Math.PI * ARC_RADIUS
const ARC_SWEEP = 0.75

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value))
}

function Knob({
  label,
  ariaLabel,
  value,
  defaultValue,
  onChange,
}: {
  label: string
  ariaLabel: string
  value: number
  defaultValue: number
  onChange: (value: number) => void
}) {
  const dragRef = useRef<{ y: number; value: number } | null>(null)
  const rotation = -135 + value * 270

  const onPointerDown = (event: PointerEvent<HTMLButtonElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId)
    dragRef.current = { y: event.clientY, value }
  }

  const onPointerMove = (event: PointerEvent<HTMLButtonElement>) => {
    if (!dragRef.current) return
    const fine = event.shiftKey ? 0.35 : 1
    const delta = ((dragRef.current.y - event.clientY) / 110) * fine
    onChange(clamp01(dragRef.current.value + delta))
  }

  const endDrag = () => {
    dragRef.current = null
  }

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const step = event.shiftKey ? 0.02 : 0.05
    if (event.key === "ArrowUp" || event.key === "ArrowRight") {
      event.preventDefault()
      onChange(clamp01(value + step))
    } else if (event.key === "ArrowDown" || event.key === "ArrowLeft") {
      event.preventDefault()
      onChange(clamp01(value - step))
    }
  }

  return (
    <div className="mixer-knob">
      <button
        type="button"
        className="knob-hit"
        aria-label={ariaLabel}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(value * 100)}
        aria-valuetext={`${Math.round(value * 100)} percent`}
        role="slider"
        title={
          ariaLabel === "softness"
            ? "rounds the tone. drag up or down, double-click to reset"
            : "drag up or down, double-click to reset"
        }
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onDoubleClick={() => onChange(defaultValue)}
        onKeyDown={onKeyDown}
        onWheel={(event: WheelEvent<HTMLButtonElement>) => {
          event.preventDefault()
          const direction = event.deltaY < 0 ? 1 : -1
          onChange(clamp01(value + direction * 0.04))
        }}
      >
        <svg className="knob-arc" viewBox="0 0 64 64" aria-hidden="true">
          <circle
            cx="32"
            cy="32"
            r={ARC_RADIUS}
            fill="none"
            stroke="rgba(10, 60, 90, 0.16)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={`${ARC_SWEEP * ARC_CIRC} ${ARC_CIRC}`}
            transform="rotate(135 32 32)"
          />
          <circle
            cx="32"
            cy="32"
            r={ARC_RADIUS}
            fill="none"
            stroke="#1496d6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={value < 0.01 ? "0 1" : `${ARC_SWEEP * ARC_CIRC * value} ${ARC_CIRC}`}
            opacity={value < 0.01 ? 0 : 1}
            transform="rotate(135 32 32)"
          />
        </svg>
        <span className="knob-shell">
          <span className="knob-face">
            <span className="knob-gloss" />
            <span className="knob-rotor" style={{ transform: `rotate(${rotation}deg)` }}>
              <span className="knob-pip" />
            </span>
          </span>
        </span>
      </button>
      <span className="knob-label">{label}</span>
    </div>
  )
}

export default function MixerPanel({ settings, onChange }: MixerPanelProps) {
  return (
    <aside className="mixer-dock" aria-label="effects mixer">
      <div className="mixer-panel">
        <div className="mixer-title">mix</div>
        <div className="mixer-knobs">
          {KNOBS.map((knob) => (
            <Knob
              key={knob.key}
              label={knob.label}
              ariaLabel={knob.ariaLabel}
              value={settings[knob.key]}
              defaultValue={DEFAULT_MIXER[knob.key]}
              onChange={(value) => onChange(knob.key, value)}
            />
          ))}
        </div>
      </div>
    </aside>
  )
}

"use client"

interface WindowsTitleBarProps {
  title: string
}

export default function WindowsTitleBar({ title }: WindowsTitleBarProps) {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #2580c5, #1a5f9e)",
        color: "white",
        padding: "8px 12px",
        fontWeight: 600,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        textShadow: "0 1px 1px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div>{title}</div>
      <div style={{ display: "flex", gap: "4px" }}>
        <div
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            border: "1px solid rgba(0, 0, 0, 0.2)",
            background: "linear-gradient(to bottom, #ffdb4c, #ffcd00)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "10px",
            cursor: "pointer",
          }}
        >
          -
        </div>
        <div
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            border: "1px solid rgba(0, 0, 0, 0.2)",
            background: "linear-gradient(to bottom, #00ca56, #00a844)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "10px",
            cursor: "pointer",
          }}
        >
          □
        </div>
        <div
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            border: "1px solid rgba(0, 0, 0, 0.2)",
            background: "linear-gradient(to bottom, #ff605c, #ff3b30)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "10px",
            cursor: "pointer",
          }}
        >
          ×
        </div>
      </div>
    </div>
  )
} 
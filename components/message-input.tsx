"use client"

import { useState } from "react"

export default function MessageInput() {
  const [message, setMessage] = useState<string>("")
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!message.trim()) {
      setError("msg me ! (w/ ur name)")
      return
    }
    
    try {
      // Create a new response file with the message content
      const response = await fetch("/api/save-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      })
      
      if (!response.ok) {
        throw new Error("failed to save message")
      }
      
      setSubmitted(true)
      setMessage("")
      setError(null)
      
      // Reset the submitted state after 3 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    } catch (err) {
      setError("failed to save message. please try again.")
      console.error(err)
    }
  }

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
        border: "1px solid #ccc",
        borderRadius: "3px",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
        padding: "15px",
        marginBottom: "20px",
      }}
    >
      <h3
        style={{
          margin: "0 0 10px 0",
          fontSize: "16px",
          fontWeight: 600,
          color: "#333",
        }}
      >
        send a message
      </h3>
      
      {submitted ? (
        <div
          style={{
            padding: "10px",
            background: "#dff0d8",
            border: "1px solid #d6e9c6",
            borderRadius: "3px",
            color: "#3c763d",
            marginBottom: "10px",
          }}
        >
          message sent successfully!
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            style={{
              width: "100%",
              minHeight: "100px",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "3px",
              resize: "vertical",
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              fontSize: "14px",
              marginBottom: "10px",
            }}
          />
          
          {error && (
            <div
              style={{
                padding: "10px",
                background: "#f2dede",
                border: "1px solid #ebccd1",
                borderRadius: "3px",
                color: "#a94442",
                marginBottom: "10px",
              }}
            >
              {error}
            </div>
          )}
          
          <button
            type="submit"
            style={{
              padding: "8px 16px",
              background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
              border: "1px solid #ccc",
              borderRadius: "3px",
              boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
              color: "#333",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            send message
          </button>
        </form>
      )}
    </div>
  )
} 
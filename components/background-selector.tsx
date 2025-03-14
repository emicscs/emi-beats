"use client"

import type React from "react"

interface BackgroundSelectorProps {
  currentBackground: string
  onBackgroundChange: (bg: string) => void
  onCustomBackgroundUpload: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function BackgroundSelector({
  currentBackground,
  onBackgroundChange,
  onCustomBackgroundUpload,
}: BackgroundSelectorProps) {
  const backgrounds = [
    {
      id: "1",
      name: "metro 1",
      path: "/backgrounds/metro_1.jpg",
    },
    {
      id: "2",
      name: "metro 2",
      path: "/backgrounds/metro_2.jpg",
    },
    {
      id: "3",
      name: "metro 3",
      path: "/backgrounds/metro_3.jpg",
    },
    {
      id: "4",
      name: "metro 4",
      path: "/backgrounds/metro_4.jpg",
    },
    {
      id: "5",
      name: "metro 5",
      path: "/backgrounds/metro_5.jpg",
    },
    {
      id: "6",
      name: "metro 6",
      path: "/backgrounds/metro_6.jpg",
    },
    {
      id: "7",
      name: "metro 7",
      path: "/backgrounds/metro_7.jpg",
    },
    {
      id: "8",
      name: "metro 8",
      path: "/backgrounds/metro_8.jpg",
    },
    {
      id: "9",
      name: "metro 9",
      path: "/backgrounds/metro_9.jpg",
    },
    {
      id: "10",
      name: "metro 10",
      path: "/backgrounds/metro_10.jpg",
    },
    {
      id: "11",
      name: "metro 11",
      path: "/backgrounds/metro_11.jpg",
    },
    {
      id: "12",
      name: "metro 12",
      path: "/backgrounds/metro_12.jpg",
    },
    {
      id: "13",
      name: "metro 13",
      path: "/backgrounds/metro_13.jpg",
    },
    {
      id: "14",
      name: "metro 14",
      path: "/backgrounds/metro_14.jpg",
    },
    {
      id: "15",
      name: "metro 15",
      path: "/backgrounds/metro_15.jpg",
    },
    {
      id: "16",
      name: "metro 16",
      path: "/backgrounds/metro_16.jpg",
    },
    {
      id: "17",
      name: "metro 17",
      path: "/backgrounds/metro_17.jpg",
    },
    {
      id: "18",
      name: "metro 18",
      path: "/backgrounds/metro_18.jpg",
    },
    {
      id: "19",
      name: "metro 19",
      path: "/backgrounds/metro_19.jpg",
    },
    {
      id: "20",
      name: "metro 20",
      path: "/backgrounds/metro_20.jpg",
    },
    {
      id: "21",
      name: "metro 21",
      path: "/backgrounds/metro_21.jpg",
    },
    {
      id: "22",
      name: "metro 22",
      path: "/backgrounds/metro_22.jpg",
    },
    {
      id: "23",
      name: "metro 23",
      path: "/backgrounds/metro_23.jpg",
    },
    {
      id: "24",
      name: "metro 24",
      path: "/backgrounds/metro_24.jpg",
    },
    {
      id: "25",
      name: "metro 25",
      path: "/backgrounds/metro_25.jpg",
    },
    {
      id: "26",
      name: "metro 26",
      path: "/backgrounds/metro_26.jpg",
    },
    {
      id: "27",
      name: "metro 27",
      path: "/backgrounds/metro_27.jpg",
    },
    {
      id: "28",
      name: "metro 28",
      path: "/backgrounds/metro_28.jpg",
    },
    {
      id: "29",
      name: "metro 29",
      path: "/backgrounds/metro_29.jpg",
    },
    {
      id: "30",
      name: "metro 30",
      path: "/backgrounds/metro_30.jpg",
    },
    {
      id: "31",
      name: "metro 31",
      path: "/backgrounds/metro_31.jpg",
    },
    {
      id: "32",
      name: "metro 32",
      path: "/backgrounds/metro_32.jpg",
    },
    {
      id: "33",
      name: "asadal 1",
      path: "/backgrounds/asadal_stock_1.jpg",
    },
    {
      id: "34",
      name: "asadal 2",
      path: "/backgrounds/asadal_stock_2.jpg",
    },
    {
      id: "35",
      name: "asadal 3",
      path: "/backgrounds/asadal_stock_3.jpg",
    },
    {
      id: "36",
      name: "asadal 4",
      path: "/backgrounds/asadal_stock_4.jpg",
    },
    {
      id: "37",
      name: "asadal 5",
      path: "/backgrounds/asadal_stock_5.jpg",
    },
    {
      id: "38",
      name: "asadal 6",
      path: "/backgrounds/asadal_stock_6.jpg",
    },
    {
      id: "39",
      name: "asadal 7",
      path: "/backgrounds/asadal_stock_7.jpg",
    },  
    {
      id: "40",
      name: "asadal 8",
      path: "/backgrounds/asadal_stock_8.jpg",
    },
    {
      id: "41",
      name: "asadal 9",
      path: "/backgrounds/asadal_stock_9.jpg",
    },
    {
      id: "42",
      name: "asadal 10",
      path: "/backgrounds/asadal_stock_10.jpg",
    },
    {
      id: "43",
      name: "asadal 11",
      path: "/backgrounds/asadal_stock_11.jpg",
    },
    {
      id: "44",
      name: "asadal 12",
      path: "/backgrounds/asadal_stock_12.jpg",
    },
    {
      id: "45",
      name: "asadal 13",
      path: "/backgrounds/asadal_stock_13.jpg",
    },  
    {
      id: "46",
      name: "asadal 14",
      path: "/backgrounds/asadal_stock_14.jpg",
    },  
    {
      id: "47",
      name: "asadal 15",
      path: "/backgrounds/asadal_stock_15.jpg",
    },  
    {
      id: "48",
      name: "asadal 16",
      path: "/backgrounds/asadal_stock_16.jpg",
    },  
    { 
      id: "49",
      name: "asadal 17",
      path: "/backgrounds/asadal_stock_17.jpg",
    },  
    {
      id: "50",
      name: "asadal 18",  
      path: "/backgrounds/asadal_stock_18.jpg",
    },  
    {
      id: "51",
      name: "asadal 19",
      path: "/backgrounds/asadal_stock_19.jpg",
    },  
    {
      id: "52",
      name: "asadal 20",
      path: "/backgrounds/asadal_stock_20.jpg",
    },    
    {
      id: "53",
      name: "asadal 21",
      path: "/backgrounds/asadal_stock_21.jpg",
    },    
    {
      id: "54",
      name: "asadal 22",
      path: "/backgrounds/asadal_stock_22.jpg",
    },      
    {
      id: "55",
      name: "asadal 23",
      path: "/backgrounds/asadal_stock_23.jpg",
    },    
    {
      id: "56", 
      name: "asadal 24",
      path: "/backgrounds/asadal_stock_24.jpg",
    },    
    {
      id: "57",
      name: "asadal 25",  
      path: "/backgrounds/asadal_stock_25.jpg",
    },    
    {
      id: "58",
      name: "asadal 26",
      path: "/backgrounds/asadal_stock_26.jpg", 
    },    
    {
      id: "59",
      name: "asadal 27",
      path: "/backgrounds/asadal_stock_27.jpg",
    },      
    {
      id: "60",
      name: "asadal 28",
      path: "/backgrounds/asadal_stock_28.jpg",
    },    
    
  ]

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "16px",
        background: "rgba(255, 255, 255, 0.5)",
        borderRadius: "4px",
        border: "1px solid #ccc",
      }}
    >
      <h3
        style={{
          margin: "0 0 12px 0",
          fontSize: "16px",
          fontWeight: 600,
          color: "#333",
        }}
      >
        Select Background
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
          gap: "12px",
          marginBottom: "16px",
        }}
      >
        {backgrounds.map((bg) => (
          <div
            key={bg.id}
            onClick={() => onBackgroundChange(bg.path)}
            style={{
              position: "relative",
              cursor: "pointer",
              borderRadius: "4px",
              overflow: "hidden",
              height: "80px",
              border: currentBackground === bg.path ? "2px solid #0078d7" : "2px solid transparent",
            }}
          >
            <img
              src={bg.path || "/placeholder.svg"}
              alt={bg.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "4px",
                background: "rgba(0, 0, 0, 0.5)",
                color: "white",
                fontSize: "12px",
                textAlign: "center",
              }}
            >
              {bg.name}
            </div>
          </div>
        ))}
      </div>

      <div>
        <label
          style={{
            display: "block",
            marginBottom: "8px",
            fontWeight: 600,
            color: "#333",
            fontSize: "14px",
          }}
        >
          Upload Custom Background
        </label>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <input
            type="file"
            accept="image/*"
            onChange={onCustomBackgroundUpload}
            style={{
              display: "none",
            }}
            id="bg-upload"
          />
          <label
            htmlFor="bg-upload"
            style={{
              padding: "6px 12px",
              background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)",
              border: "1px solid #ccc",
              borderRadius: "3px",
              boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.7)",
              color: "#333",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Browse...
          </label>
          <span
            style={{
              marginLeft: "10px",
              fontSize: "14px",
              color: "#666",
            }}
          >
            Select an image file
          </span>
        </div>
      </div>
    </div>
  )
}


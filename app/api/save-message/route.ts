import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request: Request) {
  try {
    const { message } = await request.json()
    
    // Create the responses directory if it doesn't exist
    const responsesDir = path.join(process.cwd(), 'responses')
    if (!fs.existsSync(responsesDir)) {
      fs.mkdirSync(responsesDir, { recursive: true })
    }
    
    // Create a unique filename with timestamp
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
    const filename = `message-${timestamp}.txt`
    const filePath = path.join(responsesDir, filename)
    
    // Write the message to the file
    fs.writeFileSync(filePath, message)
    
    return NextResponse.json({ success: true, filename })
  } catch (error) {
    console.error('Error saving message:', error)
    return NextResponse.json(
      { error: 'Failed to save message' },
      { status: 500 }
    )
  }
} 
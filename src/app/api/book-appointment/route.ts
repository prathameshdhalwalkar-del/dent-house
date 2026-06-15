import { NextRequest, NextResponse } from 'next/server'

const WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL || ''

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    if (!data.name || !data.phone || !data.date || !data.time || !data.service) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (WEBHOOK_URL) {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        }),
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Booking error:', error)
    return NextResponse.json({ error: 'Failed to book appointment' }, { status: 500 })
  }
}

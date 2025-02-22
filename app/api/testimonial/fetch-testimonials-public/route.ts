import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/prisma/client'
import createLog from '@/app/utils/api/createLog'

export async function GET(req: NextRequest) {
  try {
    // Set CORS headers to allow requests from your frontend
    const headers = new Headers()
    headers.set('Access-Control-Allow-Origin', 'https://www.saltwaterbookkeeping.com') // Frontend URL
    headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    headers.set('Access-Control-Allow-Credentials', 'true')

    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
      return new NextResponse(null, { status: 200, headers })
    }

    const testimonials = await prisma.testimonial.findMany({
      orderBy: { createdAt: 'desc' },
      where: { isVisible: true }
    })

    return NextResponse.json({ testimonials }, { status: 200 })
  } catch (error: any) {
    await createLog('Error while fetching testimonials - public', 'error', undefined, error)
    return NextResponse.json(
      { message: 'Something went wrong', sliceName: 'testimonialApi' },
      { status: 500 }
    )
  }
}

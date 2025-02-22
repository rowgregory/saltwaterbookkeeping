import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/prisma/client'
import createLog from '@/app/utils/api/createLog'

export async function POST(req: NextRequest) {
  const { customerName, feedback, rating } = await req.json()
  const parsedRating = parseInt(rating)

  if (!customerName || !feedback || parsedRating === undefined) {
    return NextResponse.json(
      { message: 'Missing required fields', sliceName: 'testimonialApi' },
      { status: 400 }
    )
  }

  try {
    const newTestimonial = await prisma.testimonial.create({
      data: {
        customerName,
        feedback,
        rating: parsedRating,
        createdAt: new Date()
      }
    })

    return NextResponse.json(newTestimonial, { status: 202 })
  } catch (error: any) {
    await createLog('Error while creating testimonial', 'error', undefined, error)
    return NextResponse.json(
      { message: `Oops, something went wrong. We're on it!`, sliceName: 'testimonialApi' },
      { status: 500 }
    )
  }
}

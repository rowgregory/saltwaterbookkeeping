import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/prisma/client'

export async function PATCH(req: NextRequest, { params }: any) {
  const body = await req.json()
  const parameters = await params
  const id = parameters.id
  const parsedRating = parseInt(body?.rating)

  if (!id) {
    return NextResponse.json(
      { message: 'Testimonial ID is required', sliceName: 'testimonialApi' },
      { status: 400 }
    )
  }

  try {
    const testimonial = await prisma.testimonial.findUnique({
      where: { id }
    })

    if (!testimonial) {
      return NextResponse.json(
        { message: 'Testimonial not found', sliceName: 'testimonialApi' },
        { status: 404 }
      )
    }

    const updatedTestimonial = await prisma.testimonial.update({
      where: { id },
      data: {
        ...body,
        rating: parsedRating || testimonial.rating, // Fallback for rating
        updatedAt: new Date()
      }
    })

    return NextResponse.json(updatedTestimonial, { status: 200 })
  } catch {
    return NextResponse.json(
      { message: `Oops, something went wrong. We’re on it!`, sliceName: 'testimonialApi' },
      { status: 500 }
    )
  }
}

import { NextResponse } from 'next/server'
import prisma from '@/prisma/client'
import createLog from '@/app/utils/api/createLog'

export async function GET() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json({ testimonials }, { status: 200 })
  } catch (error: any) {
    await createLog('Error while fetching testimonials - private', 'error', undefined, error)
    return NextResponse.json(
      { message: 'Something went wrong', sliceName: 'testimonialApi' },
      { status: 500 }
    )
  }
}

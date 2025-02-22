import { NextResponse } from 'next/server'
import prisma from '@/prisma/client'
import createLog from '@/app/utils/api/createLog'

export async function DELETE(_: any, { params }: any) {
  const parameters = await params
  const id = parameters.id

  if (!id) {
    await createLog('Testimonial ID not provided', 'error')
    return NextResponse.json(
      { message: 'Testimonial ID is required', sliceName: 'testimonialApi' },
      { status: 400 }
    )
  }

  try {
    const deletedTestimonial = await prisma.testimonial.delete({
      where: { id }
    })

    await createLog(`Testimonial with ID ${id} deleted`, 'info', undefined, {
      id: deletedTestimonial.id
    })

    return NextResponse.json(deletedTestimonial.id, { status: 200 })
  } catch (error: any) {
    await createLog(`Error deleting testimonial with ID: ${id}`, 'error', undefined, error)
    return NextResponse.json(
      { message: `Oops, something went wrong. We're on it!`, sliceName: 'testimonialApi' },
      { status: 500 }
    )
  }
}

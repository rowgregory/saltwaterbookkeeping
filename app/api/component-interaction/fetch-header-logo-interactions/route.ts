import { NextResponse } from 'next/server'
import prisma from '@/prisma/client'
import createLog from '@/app/utils/api/createLog'

export async function GET() {
  try {
    const componentInteraction = await prisma.componentInteraction.findFirst({
      where: { componentName: 'headerLogo' }
    })

    if (!componentInteraction) {
      return NextResponse.json(
        { message: 'Component not found', sliceName: 'componentInteractionApi' },
        { status: 404 }
      )
    }

    return NextResponse.json({ clickCount: componentInteraction.clickCount }, { status: 200 })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    await createLog('Error fetching component interaction', 'error', undefined, errorMessage)

    return NextResponse.json(
      {
        message: `Error fetching component interaction.`,
        sliceName: 'componentInteractionApi'
      },
      { status: 500 }
    )
  }
}

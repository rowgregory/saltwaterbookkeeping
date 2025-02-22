import { NextResponse } from 'next/server'
import prisma from '@/prisma/client'
import createLog from '@/app/utils/api/createLog'

export async function POST() {
  try {
    const componentInteraction = await prisma.componentInteraction.upsert({
      where: { componentName: 'headerLogo' },
      update: { clickCount: { increment: 1 } },
      create: { componentName: 'headerLogo', clickCount: 1 }
    })

    return NextResponse.json({ clickCount: componentInteraction.clickCount }, { status: 200 })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    await createLog('Error updating component interaction', 'error', undefined, errorMessage)

    return NextResponse.json(
      {
        message: `Error updating component interaction.`,
        sliceName: 'componentInteractionApi'
      },
      { status: 500 }
    )
  }
}

import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/prisma/client'
import createLog from '@/app/utils/api/createLog'

export async function POST(req: NextRequest) {
  const body = await req.json()

  if (!body) {
    await createLog('Missing required fields for user update', 'warn', undefined, body)
    return NextResponse.json(
      { message: 'Missing required fields', sliceName: 'userApi' },
      { status: 400 }
    )
  }

  try {
    const user = await prisma.user.findFirst({
      where: { id: body.id }
    })

    if (!user) {
      await createLog('User not found during update attempt', 'warn', undefined, { id: body.id })
      return NextResponse.json({ message: 'User not found', sliceName: 'userApi' }, { status: 404 })
    }

    const updatedUser = await prisma.user.update({
      where: { id: body.id },
      data: body,
      select: {
        id: true,
        username: true,
        isSoundEffectsOn: true,
        isBackgroundMusicOn: true
      }
    })

    return NextResponse.json(updatedUser, { status: 200 })
  } catch (error: any) {
    await createLog('Error updating user', 'error', undefined, { errorName: error.name })
    return NextResponse.json(
      { message: `Error updating user`, sliceName: 'userApi' },
      { status: 500 }
    )
  }
}

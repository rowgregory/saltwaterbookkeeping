import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/prisma/client'
import createLog from '@/app/utils/api/createLog'

export async function GET(req: NextRequest) {
  const userHeader = req.headers.get('x-user')

  if (!userHeader) {
    return NextResponse.json(
      { message: 'User information is required in the headers', sliceName: 'userApi' },
      { status: 400 }
    )
  }

  const user = JSON.parse(userHeader)

  if (!user.id) {
    await createLog('Missing user ID in x-user header', 'warn', undefined, { user })
    return NextResponse.json({ message: 'Missing user ID', sliceName: 'userApi' }, { status: 400 })
  }

  try {
    const foundUser = await prisma.user.findFirst({
      where: { id: user.id }
    })

    if (!foundUser) {
      await createLog('User not found during fetch attempt', 'warn', undefined, { id: user.id })
      return NextResponse.json({ message: 'User not found', sliceName: 'userApi' }, { status: 404 })
    }

    return NextResponse.json(
      {
        username: foundUser.username,
        id: foundUser.id,
        isAdmin: foundUser.isAdmin,
        role: foundUser.role,
        isSoundEffectsOn: foundUser.isSoundEffectsOn,
        isBackgroundMusicOn: foundUser.isBackgroundMusicOn
      },
      { status: 200 }
    )
  } catch (error: any) {
    await createLog('Error fetching user', 'error', undefined, { errorName: error.name })
    return NextResponse.json(
      { message: `Error fetching user. ${error}`, sliceName: 'userApi' },
      { status: 500 }
    )
  }
}

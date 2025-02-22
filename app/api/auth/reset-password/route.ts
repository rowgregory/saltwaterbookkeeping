import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/prisma/client'
import argon2 from 'argon2'
import createLog from '@/app/utils/api/createLog'

const hashData = async (data: string): Promise<string> => {
  return argon2.hash(data)
}

export async function PATCH(req: NextRequest) {
  const { username, newPassword } = await req.json()

  if (!username || !newPassword) {
    return NextResponse.json(
      { message: 'Missing required fields', sliceName: 'authApi' },
      { status: 400 }
    )
  }

  try {
    const user = await prisma.user.findFirst({
      where: { username }
    })

    if (!user) {
      return NextResponse.json({ message: 'User not found', sliceName: 'authApi' }, { status: 404 })
    }

    const hashedPassword = await hashData(newPassword)

    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword
      }
    })

    return NextResponse.json(
      {
        message: 'Password has been reset successfully. You can now log in with your new password.'
      },
      { status: 200 }
    )
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    await createLog('Error resetting password', 'error', errorMessage)
    return NextResponse.json(
      { message: 'Something went wrong', sliceName: 'authApi' },
      { status: 500 }
    )
  }
}

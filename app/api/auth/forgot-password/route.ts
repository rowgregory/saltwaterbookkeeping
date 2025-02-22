import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/prisma/client'
import argon2 from 'argon2'
import createLog from '@/app/utils/api/createLog'

export async function POST(req: NextRequest) {
  const { username, securityQuestion, securityAnswer } = await req.json()

  if (!username || !securityQuestion || !securityAnswer) {
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

    if (
      user.securityQuestion !== securityQuestion ||
      !(await argon2.verify(user.securityAnswerHash, securityAnswer))
    ) {
      return NextResponse.json(
        { message: 'Security question or answer is incorrect', sliceName: 'authApi' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        message:
          'Security question and answer verified successfully. You can now reset your password.'
      },
      { status: 200 }
    )
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    await createLog('Oops, an error occurred.', 'error', errorMessage)
    return NextResponse.json(
      { message: 'Something went wrong', sliceName: 'authApi' },
      { status: 500 }
    )
  }
}

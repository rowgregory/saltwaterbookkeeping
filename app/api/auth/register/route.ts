import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/prisma/client'
import argon2 from 'argon2'
import createLog from '@/app/utils/api/createLog'

const hashData = async (data: string): Promise<string> => {
  return argon2.hash(data)
}

export async function POST(req: NextRequest) {
  const { username, password, securityQuestion, securityAnswer } = await req.json()

  if (!username || !password || !securityQuestion || !securityAnswer) {
    return NextResponse.json(
      { message: 'Missing required fields', sliceName: 'authApi' },
      { status: 404 }
    )
  }

  try {
    const hashedPassword = await hashData(password)
    const hashedAnswer = await hashData(securityAnswer)

    await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        role: 'admin',
        securityQuestion,
        securityAnswerHash: hashedAnswer,
        isAdmin: true
      }
    })

    return NextResponse.json(
      {
        message: 'User registered successfully'
      },
      { status: 200 }
    )
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    await createLog('Error registering user', 'error', errorMessage)

    return NextResponse.json(
      { message: 'Something went wrong', sliceName: 'authApi' },
      { status: 500 }
    )
  }
}

import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/prisma/client'
import argon2 from 'argon2'
import { SignJWT } from 'jose'
import createLog from '@/app/utils/api/createLog'

export async function POST(req: NextRequest) {
  const { username, password } = await req.json()

  if (!username || !password) {
    return NextResponse.json(
      { message: 'Missing required fields', sliceName: 'authApi' },
      { status: 404 }
    )
  }

  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        username
      }
    })

    if (!existingUser) {
      return NextResponse.json({ message: 'User not found', sliceName: 'authApi' }, { status: 404 })
    }

    const isPasswordValid = await argon2.verify(existingUser.password, password)

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: 'Invalid password', sliceName: 'authApi' },
        { status: 401 }
      )
    }

    const payload = {
      isAuthenticated: true,
      id: existingUser.id,
      username: existingUser.username,
      isAdmin: existingUser.isAdmin,
      role: existingUser.role,
      isSoundEffectsOn: existingUser.isSoundEffectsOn,
      isBackgroundMusicOn: existingUser.isBackgroundMusicOn
    }

    const token = await new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('1d')
      .sign(new TextEncoder().encode(process.env.JWT_SECRET))

    const response = NextResponse.json(payload, { status: 200 })

    response.cookies.set('authToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 1 * 24 * 60 * 60, // 1 day
      path: '/' // Cookie applies to the entire domain
    })

    return response
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    await createLog('Error logging in user', 'error', errorMessage)

    return NextResponse.json(
      { message: 'Something went wrong', sliceName: 'authApi' },
      { status: 500 }
    )
  }
}

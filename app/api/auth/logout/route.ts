import createLog from '@/app/utils/api/createLog'
import { NextResponse } from 'next/server.js'

export async function POST() {
  try {
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict' as const, // Explicitly set the type to 'strict'
      expires: new Date(0), // Set the expiration date to the past to remove the cookie
      path: '/' // Ensure the cookie is cleared for the entire domain
    }

    const response = NextResponse.json(
      { success: true, message: 'Logged out successfully' },
      { status: 200 }
    )

    // Clear cookies
    response.cookies.set('authToken', '', cookieOptions)

    return response
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    await createLog('Error logging out user', 'error', errorMessage)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to logout',
        errorCode: 'n/a',
        sliceName: 'authApi'
      },
      { status: 500 }
    )
  }
}

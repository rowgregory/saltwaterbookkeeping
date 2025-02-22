import { NextRequest, NextResponse } from 'next/server'
import { authMiddleware } from './app/middleware/authMiddleware'

export async function middleware(req: NextRequest) {
  const start = performance.now()

  // Extract tokens from cookies
  const authToken = req.cookies.get('authToken')

  // If an admin is logged in, proceed with authentication
  if (authToken) {
    const authResponse = await authMiddleware(req, start, authToken)
    if (authResponse) return authResponse
    return NextResponse.next()
  }

  // Default response if no authentication is found
  return NextResponse.redirect(new URL('/', req.url))
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/api/testimonial/create-testimonial',
    '/api/testimonial/delete-testimonial',
    '/api/testimonial/update-testimonial',
    '/api/testimonial/fetch-testimonials-private',
    '/api/user/fetch-user',
    '/api/user/update-user'
  ]
}

'use client'

import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const fetchFn = async (url: RequestInfo, options?: RequestInit): Promise<Response> => {
  if (process.env.NODE_ENV !== 'test') {
    throw new Error('fetchFn should only be used in tests')
  }
  try {
    const response = await fetch(url, options)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response
  } catch (error) {
    console.error('Error in fetchFn:', error)
    throw error
  }
}

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/api`,
  fetchFn: process.env.NODE_ENV === 'test' ? fetchFn : undefined,
  prepareHeaders: (headers) => {
    headers.set('Content-Type', 'application/json')
    return headers
  },
  // This ensures that cookies are included in
  // both the frontend and backend communication.
  credentials: 'include'
  // cache: "no-store",
})

export const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 })

export const api = createApi({
  reducerPath: 'splitApi',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Auth', 'User', 'Testimonial', 'Component-Interaction'],
  endpoints: () => ({})
}) as any

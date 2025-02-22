import { api } from './api'

const BASE_URL = '/auth'

export const authApi = api.injectEndpoints({
  endpoints: (build: any) => ({
    register: build.mutation({
      query: (body: any) => ({
        url: `${BASE_URL}/register`,
        method: 'POST',
        body
      })
    }),
    login: build.mutation({
      query: (body: any) => ({
        url: `${BASE_URL}/login`,
        method: 'POST',
        body
      })
    }),
    forgotPassword: build.mutation({
      query: (body: any) => ({
        url: `${BASE_URL}/forgot-password`,
        method: 'POST',
        body
      })
    }),
    resetPassword: build.mutation({
      query: (body: any) => ({
        url: `${BASE_URL}/reset-password`,
        method: 'PATCH',
        body
      })
    }),
    logout: build.mutation({
      query: () => ({
        url: `${BASE_URL}/logout`,
        method: 'POST'
      })
    })
  })
})

export const {
  useRegisterMutation,
  useLoginMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useLogoutMutation
} = authApi

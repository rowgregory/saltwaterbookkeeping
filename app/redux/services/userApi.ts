import { api } from './api'

const BASE_URL = '/user'

export const userApi = api.injectEndpoints({
  endpoints: (build: any) => ({
    updateUser: build.mutation({
      query: (body: any) => ({
        url: `${BASE_URL}/update-user`,
        method: 'POST',
        body
      })
    }),
    fetchUser: build.query({
      query: () => `${BASE_URL}/fetch-user`,
      providesTags: ['User']
    })
  })
})

export const { useUpdateUserMutation, useFetchUserQuery } = userApi

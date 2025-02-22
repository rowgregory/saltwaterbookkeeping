import { api } from './api'

const BASE_URL = '/component-interaction'

export const componentInteractionApi = api.injectEndpoints({
  endpoints: (build: any) => ({
    trackComponentClick: build.mutation({
      query: (body: any) => ({
        url: `${BASE_URL}/create-header-logo-interaction`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Component-Interaction']
    }),
    fetchComponentClickCount: build.query({
      query: () => ({
        url: `${BASE_URL}/fetch-header-logo-interactions`,
        method: 'GET'
      }),
      providesTags: ['Component-Interaction']
    })
  })
})

export const { useTrackComponentClickMutation, useFetchComponentClickCountQuery } =
  componentInteractionApi

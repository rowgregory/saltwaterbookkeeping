import { api } from './api'

const BASE_URL = '/testimonial'

export const testimonialApi = api.injectEndpoints({
  endpoints: (build: any) => ({
    fetchTestimonialsPublic: build.query({
      query: () => `${BASE_URL}/fetch-testimonials-public`,
      providesTags: ['Testimonial']
    }),
    fetchTestimonialsPrivate: build.query({
      query: () => `${BASE_URL}/fetch-testimonials-private`,
      providesTags: ['Testimonial']
    }),
    updateTestimonial: build.mutation({
      query: (body: any) => ({
        url: `${BASE_URL}/update-testimonial/${body.id}`,
        method: 'PATCH',
        body
      }),
      invalidatesTags: ['Testimonial']
    }),

    deleteTestimonial: build.mutation({
      query: (id: string) => ({
        url: `${BASE_URL}/delete-testimonial/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Testimonial']
    }),

    createTestimonial: build.mutation({
      query: (body: any) => ({
        url: `${BASE_URL}/create-testimonial`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Testimonial']
    })
  })
})

export const {
  useFetchTestimonialsPublicQuery,
  useFetchTestimonialsPrivateQuery,
  useUpdateTestimonialMutation,
  useDeleteTestimonialMutation,
  useCreateTestimonialMutation
} = testimonialApi

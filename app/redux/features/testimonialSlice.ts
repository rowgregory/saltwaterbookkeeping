import { createSlice } from '@reduxjs/toolkit'
import { testimonialApi } from '../services/testimonialApi'

export interface Testimonial {
  id: string | null
  customerName: string
  feedback: string
  rating: number
  isVisible: boolean
  createdAt: string
  updatedAt: string
}

interface TestimonialState {
  testimonials: Testimonial[]
  loading: boolean
  error: string | null
  success: boolean
  openModal: boolean
  openModalEdit: boolean
  testimonial: object
}

const initialState: TestimonialState = {
  testimonials: [],
  loading: true,
  error: null,
  success: false,
  openModal: false,
  openModalEdit: false,
  testimonial: {}
}

export const testimonialSlice = createSlice({
  name: 'testimonial',
  initialState,
  reducers: {
    setOpenModal: (state) => {
      state.openModal = true
    },
    setCloseModal: (state) => {
      state.openModal = false
    },
    setOpenModalEdit: (state, { payload }) => {
      state.openModalEdit = true
      state.testimonial = payload
    },
    setCloseModalEdit: (state) => {
      state.openModalEdit = false
      state.testimonial = {}
    },
    setTestimonials: (state, { payload }: any) => {
      state.testimonials = payload
    },
    resetTestimonialError: (state) => {
      state.error = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        testimonialApi.endpoints.fetchTestimonialsPublic.matchFulfilled,
        (state, { payload }: any) => {
          state.testimonials = payload.testimonials
          state.loading = false
        }
      )
      .addMatcher(
        testimonialApi.endpoints.fetchTestimonialsPrivate.matchFulfilled,
        (state, { payload }: any) => {
          state.testimonials = payload.testimonials
          state.loading = false
        }
      )
      .addMatcher(testimonialApi.endpoints.createTestimonial.matchFulfilled, (state) => {
        state.loading = false
      })
      .addMatcher(testimonialApi.endpoints.updateTestimonial.matchFulfilled, (state) => {
        state.loading = false
      })
      .addMatcher(
        testimonialApi.endpoints.deleteTestimonial.matchFulfilled,
        (state, { payload }: any) => {
          state.testimonials = state.testimonials.filter(
            (testimonial) => testimonial.id !== payload
          )
          state.loading = false
        }
      )
      .addMatcher(
        (action) =>
          action.type.endsWith('rejected') && action.payload.data.sliceName === 'testimonialApi',
        (state, { payload }: any) => {
          state.success = false
          state.loading = false
          state.error = payload.data.message
        }
      )
  }
})

export const {
  setOpenModal,
  setCloseModal,
  setOpenModalEdit,
  setCloseModalEdit,
  setTestimonials,
  resetTestimonialError
} = testimonialSlice.actions

export const testimonialReducer = testimonialSlice.reducer

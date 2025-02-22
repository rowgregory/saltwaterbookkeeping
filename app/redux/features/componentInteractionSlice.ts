import { createSlice } from '@reduxjs/toolkit'
import { componentInteractionApi } from '../services/componentInteractionApi'

interface ComponentInteraction {
  id: string | null
  componentName: string
  clickCount: number
  lastClickedAt: string
}

interface ComponentInteractionState {
  interactions: ComponentInteraction[]
  loading: boolean
  error: string | null
  success: boolean
  openModal: boolean
  interactionDetails: ComponentInteraction | null
  clickCount: number
}

const initialState: ComponentInteractionState = {
  interactions: [],
  loading: true,
  error: null,
  success: false,
  openModal: false,
  interactionDetails: null,
  clickCount: 0
}

export const componentInteractionSlice = createSlice({
  name: 'componentInteraction',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        componentInteractionApi.endpoints.fetchComponentClickCount.matchFulfilled,
        (state, { payload }: any) => {
          state.clickCount = payload.clickCount
          state.loading = false
        }
      )
      .addMatcher(componentInteractionApi.endpoints.trackComponentClick.matchFulfilled, (state) => {
        state.loading = false
        state.success = true
      })
      .addMatcher(
        (action) =>
          action.type.endsWith('rejected') &&
          action.payload?.data?.sliceName === 'componentInteractionApi',
        (state, { payload }: any) => {
          state.success = false
          state.loading = false
          state.error = payload?.data?.message
        }
      )
  }
})

export const {} = componentInteractionSlice.actions

export const componentInteractionReducer = componentInteractionSlice.reducer

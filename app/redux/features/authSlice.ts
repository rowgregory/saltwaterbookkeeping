import { createSlice } from '@reduxjs/toolkit'
import { authApi } from '../services/authApi'

const initialState = {
  loading: false,
  success: false,
  error: null,
  id: null,
  isAdmin: false,
  role: null,
  isAuthenticated: false,
  isSoundEffectsOn: false,
  isBackgroundMusicOn: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState: (state, { payload }) => {
      state.isAuthenticated = payload.isAuthenticated
      state.id = payload.id
      state.isAdmin = payload.isAdmin
      state.role = payload.role
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.register.matchFulfilled, (state) => {
        state.success = true
        state.loading = false
      })
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }: any) => {
        state.id = payload.id
        state.role = payload.role
        state.isAdmin = payload.isAdmin
        state.isAuthenticated = payload.isAuthenticated
        state.isSoundEffectsOn = payload.isSoundEffectsOn
        state.isBackgroundMusicOn = payload.isBackgroundMusicOn
        state.success = true
        state.loading = false
      })
      .addMatcher(authApi.endpoints.forgotPassword.matchFulfilled, (state) => {
        state.success = true
        state.loading = false
      })
      .addMatcher(authApi.endpoints.resetPassword.matchFulfilled, (state) => {
        state.success = true
        state.loading = false
      })
      .addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
        state.success = true
      })
      .addMatcher(
        (action) => action.type.endsWith('rejected') && action.payload.data.sliceName === 'authApi',
        (state, { payload }: any) => {
          state.success = false
          state.loading = false
          state.error = payload.data.message
        }
      )
  }
})

export const { setAuthState } = authSlice.actions

export const authReducer = authSlice.reducer

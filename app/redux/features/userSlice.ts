import { Reducer, createSlice } from '@reduxjs/toolkit'
import { userApi } from '../services/userApi'

export interface UserStatePayload {
  loading: boolean
  success: boolean
  error: string | false | null
  username: '' | any | null
  id: '' | any | null
  isSoundEffectsOn: boolean
  isBackgroundMusicOn: boolean
  isAdmin: boolean
  isAuthenticated: boolean
  role: string | null
}

const initialUserState: UserStatePayload = {
  loading: true,
  success: false,
  error: null,
  username: null,
  id: null,
  isSoundEffectsOn: false,
  isBackgroundMusicOn: false,
  isAdmin: false,
  isAuthenticated: false,
  role: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUser: (state, { payload }) => {
      state.username = payload.username
      state.id = payload.id
      state.isAuthenticated = payload.isAuthenticated
      state.isSoundEffectsOn = payload.isSoundEffectsOn
      state.isBackgroundMusicOn = payload.isBackgroundMusicOn
    },
    resetUserSuccess: (state) => {
      state.success = false
    },
    resetUser: (state) => {
      state.username = null
      state.id = null
      state.isBackgroundMusicOn = false
      state.isSoundEffectsOn = false
      state.success = false
      state.loading = false
      state.error = null
      state.role = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(userApi.endpoints.updateUser.matchFulfilled, (state, { payload }: any) => {
        state.success = true
        state.loading = false
        state.username = payload.username
        state.isSoundEffectsOn = payload.isSoundEffectsOn
        state.isBackgroundMusicOn = payload.isBackgroundMusicOn
      })
      .addMatcher(userApi.endpoints.fetchUser.matchFulfilled, (state, { payload }: any) => {
        state.loading = false
        state.username = payload.username
        state.id = payload.id
        state.isAdmin = payload.isAdmin
        state.role = payload.role
        state.isSoundEffectsOn = payload.isSoundEffectsOn
        state.isBackgroundMusicOn = payload.isBackgroundMusicOn
      })
      .addMatcher(
        (action) => action.type.endsWith('rejected') && action.payload.data.sliceName === 'userApi',
        (state, { error }: any) => {
          state.success = false
          state.loading = false
          state.error = error.data.message
        }
      )
  }
})

export const userReducer = userSlice.reducer as Reducer<UserStatePayload>

export const { setUser, resetUserSuccess, resetUser } = userSlice.actions

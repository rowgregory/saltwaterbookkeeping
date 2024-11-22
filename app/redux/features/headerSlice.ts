import { Reducer, createSlice } from '@reduxjs/toolkit'

export interface HeaderStatePayload {
  loading: boolean
  success: boolean
  error: string | false | null
  navigationDrawer: boolean
}

const initialHeaderState: HeaderStatePayload = {
  loading: false,
  success: false,
  error: null,
  navigationDrawer: false
}

export const headerSlice = createSlice({
  name: 'header',
  initialState: initialHeaderState,
  reducers: {
    openNavigationDrawer: (state) => {
      state.navigationDrawer = true
    },
    closeNavigationDrawer: (state) => {
      state.navigationDrawer = false
    }
  }
})

export const headerReducer = headerSlice.reducer as Reducer<HeaderStatePayload>

export const { openNavigationDrawer, closeNavigationDrawer } = headerSlice.actions

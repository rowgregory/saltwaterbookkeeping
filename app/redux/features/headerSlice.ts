import { Reducer, createSlice } from '@reduxjs/toolkit'

export interface HeaderStatePayload {
  loading: boolean
  success: boolean
  error: string | false | null
  navigationDrawer: boolean
  adminNavigationDrawer: boolean
}

const initialHeaderState: HeaderStatePayload = {
  loading: false,
  success: false,
  error: null,
  navigationDrawer: false,
  adminNavigationDrawer: false
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
    },
    openAdminNavigationDrawer: (state) => {
      state.adminNavigationDrawer = true
    },
    closeAdminNavigationDrawer: (state) => {
      state.adminNavigationDrawer = false
    }
  }
})

export const headerReducer = headerSlice.reducer as Reducer<HeaderStatePayload>

export const {
  openNavigationDrawer,
  closeNavigationDrawer,
  openAdminNavigationDrawer,
  closeAdminNavigationDrawer
} = headerSlice.actions

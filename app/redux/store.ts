'use client'

import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { headerReducer } from './features/headerSlice'
import { api } from './services/api'
import { authReducer } from './features/authSlice'
import { userReducer } from './features/userSlice'
import { testimonialReducer } from './features/testimonialSlice'
import { componentInteractionReducer } from './features/componentInteractionSlice'

const rootReducer = combineReducers({
  header: headerReducer,
  auth: authReducer,
  user: userReducer,
  testimonial: testimonialReducer,
  componentInteraction: componentInteractionReducer,
  [api.reducerPath]: api.reducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false
    }).concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppSelector = typeof store.getState

export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

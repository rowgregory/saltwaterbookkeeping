'use client'

import React, { ReactNode, useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import useScrollToTop from './hooks/useScrollToTop'
import { store, useAppDispatch } from './redux/store'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import NavigationDrawer from './components/NavigationDrawer'
import LoadingScreen from './components/LoadingScreen'
import { shouldExcludePath } from './utils/string.functions'
import useCustomPathname from './hooks/useCustomPathname'
import { setAuthState } from './redux/features/authSlice'
import { setUser } from './redux/features/userSlice'
import { setTestimonials } from './redux/features/testimonialSlice'

const PageWrapper = ({ children, data }: { children: ReactNode; data: any }) => {
  useScrollToTop()
  const path = useCustomPathname()
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    dispatch(setAuthState(data))
    dispatch(setUser(data))
    dispatch(setTestimonials(data.testimonials))
  }, [dispatch, data])

  return (
    <>
      <Provider store={store}>
        {isLoading && shouldExcludePath(path) && <LoadingScreen />}
        {shouldExcludePath(path) && <Header />}
        {shouldExcludePath(path) && <NavigationDrawer />}
        {children}
        {shouldExcludePath(path) && <Footer />}
      </Provider>
    </>
  )
}

export default PageWrapper

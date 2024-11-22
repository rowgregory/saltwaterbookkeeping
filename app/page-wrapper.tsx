'use client'

import React, { ReactNode, Suspense, useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import useScrollToTop from './hooks/useScrollToTop'
import { store } from './redux/store'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import NavigationDrawer from './components/NavigationDrawer'
import LoadingScreen from './components/LoadingScreen'

const PageWrapper = ({ children }: { children: ReactNode }) => {
  useScrollToTop()

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading && <LoadingScreen />}

      <Suspense fallback={<></>}>
        {isLoading ? (
          <></>
        ) : (
          <Provider store={store}>
            <Header />
            <NavigationDrawer />
            {children}
            <Footer />
          </Provider>
        )}
      </Suspense>
    </>
  )
}

export default PageWrapper

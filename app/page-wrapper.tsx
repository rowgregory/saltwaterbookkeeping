'use client'

import React, { ReactNode, Suspense } from 'react'
import { Provider } from 'react-redux'
import useScrollToTop from './hooks/useScrollToTop'
import { store } from './redux/store'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

const PageWrapper = ({ children }: { children: ReactNode }) => {
  useScrollToTop()

  return (
    <Suspense fallback={<></>}>
      <Provider store={store}>
        <Header />
        {children}
        <Footer />
      </Provider>
    </Suspense>
  )
}

export default PageWrapper

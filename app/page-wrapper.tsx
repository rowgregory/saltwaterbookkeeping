'use client'

import React, { ReactNode, Suspense } from 'react'
import { Provider } from 'react-redux'
import useScrollToTop from './hooks/useScrollToTop'
import { store } from './redux/store'
import Header from './components/header/Header'

const PageWrapper = ({ children }: { children: ReactNode }) => {
  useScrollToTop()

  return (
    <Suspense fallback={<></>}>
      <Provider store={store}>
        <Header />
        {children}
      </Provider>
    </Suspense>
  )
}

export default PageWrapper

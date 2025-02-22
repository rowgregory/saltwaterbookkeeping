'use client'

import React, { FC, useEffect } from 'react'
import { ChildrenProps } from '../types/common.types'
import Link from 'next/link'
import LogoWave from '../components/svg/LogoWave'
import { RootState, useAppSelector } from '../redux/store'
import { useRouter } from 'next/navigation'

const AuthLayout: FC<ChildrenProps> = ({ children }) => {
  const { isAuthenticated } = useAppSelector((state: RootState) => state.auth)
  const { push } = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      push('/admin/dashboard')
    }
  }, [isAuthenticated, push])

  return (
    <>
      <div className="h-[44px] bg-[#fbfbfb] dark:bg-velveteclipse px-4 py-0.5 flex items-center">
        <Link href="/" className="flex items-center">
          <LogoWave h="20" />
          <h1 className="font-bold font-roboto dark:text-gray-300">Saltwater Bookkeeping</h1>
        </Link>
      </div>
      <div className="bg-white dark:bg-duskypalm min-h-[calc(100dvh-44px)] h-full">{children}</div>
    </>
  )
}

export default AuthLayout

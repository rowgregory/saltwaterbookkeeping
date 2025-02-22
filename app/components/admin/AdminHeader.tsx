'use client'

import React, { FormEvent } from 'react'
import LogoWave from '../svg/LogoWave'
import { RootState, useAppDispatch, useAppSelector } from '@/app/redux/store'
import { useRouter } from 'next/navigation'
import { setAuthState } from '@/app/redux/features/authSlice'
import { useLogoutMutation } from '@/app/redux/services/authApi'
import AwesomeIcon from '../common/AwesomeIcon'
import { signOutAltIcon } from '@/app/lib/icons'
import Link from 'next/link'
import Spinner from '../common/Spinner'
import AnimatedError from '@/app/forms/elements/AnimatedError'
import { resetUser } from '@/app/redux/features/userSlice'
import useSoundManager from '@/app/hooks/useSoundManager'

const AdminHeader = () => {
  const dispatch = useAppDispatch()
  const [logout, { isLoading, error }] = useLogoutMutation()
  const { push } = useRouter()
  const { isSoundEffectsOn } = useAppSelector((state: RootState) => state.user)
  const { playSonicBoom, playError } = useSoundManager(isSoundEffectsOn)

  const handleLogout = async (e: FormEvent) => {
    e.preventDefault()
    await logout()
      .unwrap()
      .then(() => {
        push('/auth/login')
        playSonicBoom()
        dispatch(setAuthState({}))
        dispatch(resetUser())
      })
      .catch(() => {
        playError()
      })
  }

  return (
    <header className="bg-white/80 dark:bg-velveteclipse/80 backdrop-blur-md px-4 md:px-8 h-12 md:h-[72px] w-full sticky top-0 z-50">
      <div className="max-w-screen-2xl xl:max-w-screen-2000 h-full w-full mx-auto flex items-center justify-between">
        <Link href="/">
          <LogoWave w="40" h="26.82" />
        </Link>
        <div className="flex items-center gap-x-4 relative">
          <AnimatedError error={error?.data?.message} />
          {isLoading ? (
            <Spinner wAndH="w-6 h-6" />
          ) : (
            <AwesomeIcon
              onClick={handleLogout}
              icon={signOutAltIcon}
              className="w-6 h-6 text-aquablue dark:text-oceanicnocturne dark:hover:text-lime-400 duration-300 cursor-pointer"
            />
          )}
        </div>
      </div>
    </header>
  )
}

export default AdminHeader

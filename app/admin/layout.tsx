'use client'

import React, { FC, useEffect, useRef } from 'react'
import { ChildrenProps } from '../types/common.types'
import AdminHeader from '../components/admin/AdminHeader'
import CircleGridBg from '../components/CircleGridBg'
import { useAppDispatch, useAppSelector } from '../redux/store'
import AwesomeIcon from '../components/common/AwesomeIcon'
import { chevronDownIcon, chevronUpIcon } from '../lib/icons'
import {
  closeAdminNavigationDrawer,
  openAdminNavigationDrawer
} from '../redux/features/headerSlice'
import { useFetchUserQuery } from '../redux/services/userApi'
import AdminSideBar from '../components/admin/AdminSideBar'
import AdminNavigationDrawer from '../components/admin/AdminNavigationDrawer'
import PurplePlantSVG from '../components/svg/PurplePlantSVG'
import BluePlantSVG from '../components/svg/BluePlantSVG'
import AdminTestimonialCreateModal from '../modals/AdminTestimonialCreateModal'
import AdminTestimonialUpdateModal from '../modals/AdminTestimonialUpdateModal'
import Angler from '../components/svg/Angler'
import StingRay from '../components/svg/StingRay'

const AdminLayout: FC<ChildrenProps> = ({ children }) => {
  const dispatch = useAppDispatch()
  const { isBackgroundMusicOn, username } = useAppSelector((state) => state.user)
  const { adminNavigationDrawer } = useAppSelector((state) => state.header)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  useFetchUserQuery()

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.1
        audioRef.current.play().catch(() => {})
      }
    }

    const pauseAudio = () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }

    const cleanupAudio = () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0 // Reset playback to start
      }
    }

    if (isBackgroundMusicOn) {
      playAudio()
    } else {
      pauseAudio()
    }

    const enableAudio = () => {
      if (isBackgroundMusicOn) {
        playAudio()
      }
      document.removeEventListener('click', enableAudio)
    }

    document.addEventListener('click', enableAudio)

    return () => {
      document.removeEventListener('click', enableAudio)
      cleanupAudio()
    }
  }, [isBackgroundMusicOn])

  return (
    <>
      <audio loop ref={audioRef}>
        <source src="/sound-effects/ocean-floor.mp3" />
      </audio>
      <CircleGridBg />
      <AdminHeader />
      <AdminNavigationDrawer />
      <AdminTestimonialCreateModal />
      <AdminTestimonialUpdateModal />
      <div className="px-4 md:px-16 flex items-center justify-end sticky top-12 border-b-1 border-b-gray-200 dark:border-b-abyssaldepth w-full md:hidden md:mt-3 z-50 bg-white/80 dark:bg-velveteclipse/80 backdrop-blur-md py-3">
        <AwesomeIcon
          onClick={() =>
            dispatch(
              adminNavigationDrawer ? closeAdminNavigationDrawer() : openAdminNavigationDrawer()
            )
          }
          icon={adminNavigationDrawer ? chevronUpIcon : chevronDownIcon}
          className="w-5 h-5 text-gray-600 dark:text-moonlightdepths cursor-pointer duration-300"
        />
      </div>
      <div className="px-4 md:px-16">
        <div className="max-w-sm md:max-w-screen-sm lg:max-w-screen-2xl xl:max-w-screen-2000 w-full mx-auto flex gap-x-10 relative z-30">
          <AdminSideBar data={username} />
          <main className="flex-1 pt-8 sm:pt-16 md:pt-3">{children}</main>
        </div>
      </div>
      <div className="absolute bottom-0 w-52 h-52 float hidden dark:block">
        <Angler className={`absolute bottom-20 left-20 z-0`} />
        <div className="w-1 h-1 shadow-[0_0_10px_5px_rgba(255,255,0,0.8)] bg-[rgba(255,255,0,0.8)] rounded-full absolute top-[13px] right-[-70px] z-10" />
      </div>
      <div className="absolute bottom-0 w-52 h-52 float block dark:hidden">
        <StingRay className={`absolute bottom-20 left-20 z-0`} />
      </div>
      <PurplePlantSVG
        className={`fixed bottom-0 -right-28 dark:block hidden ${
          adminNavigationDrawer ? 'z-50' : 'z-0'
        }`}
      />
      <BluePlantSVG
        className={`fixed bottom-0 -right-28 block dark:hidden ${
          adminNavigationDrawer ? 'z-50' : 'z-0'
        }`}
      />
    </>
  )
}

export default AdminLayout

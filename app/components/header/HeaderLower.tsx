import React, { useState } from 'react'
import useCustomPathname from '@/app/hooks/useCustomPathname'
import NavLinkWithDot from './NavLinkWithDot'
import { navigationLinks } from '@/app/data/header.footer.data'
import Link from 'next/link'
import { RootState, useAppSelector } from '@/app/redux/store'
import useSoundManager from '@/app/hooks/useSoundManager'
import Hypno from '../svg/Hypno'

const HeaderLower = () => {
  const path = useCustomPathname()
  const { isAuthenticated } = useAppSelector((state: RootState) => state.auth)
  const { isSoundEffectsOn } = useAppSelector((state: RootState) => state.user)
  const { playMystery } = useSoundManager(isSoundEffectsOn)
  const [clickedDashboard, setClickedDashboard] = useState(false)

  return (
    <div className="bg-shadowplum dark:bg-graphite max-w-1200 hidden lg:flex items-center justify-between w-full mx-auto h-24 relative z-30 px-9">
      <section className="flex items-center justify-between w-full">
        <div className="flex items-center">
          {navigationLinks(path, isAuthenticated, false).map((link, i) => (
            <NavLinkWithDot key={i} link={link} i={i} />
          ))}
        </div>
        {isAuthenticated ? (
          <div className="w-[73px] flex items-center justify-center">
            {clickedDashboard ? (
              <Hypno />
            ) : (
              <Link
                onClick={() => {
                  setClickedDashboard(true)
                  playMystery()
                }}
                href="/admin/dashboard"
                className="relative flex items-center roboto-bold text-15 duration-300 text-white dark:text-dimgray group hover:text-white"
              >
                Dashboard
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-white dark:bg-dimgray transition-all duration-300 w-0 group-hover:w-full group-hover:left-0`}
                ></span>
              </Link>
            )}
          </div>
        ) : (
          <Link
            href="/auth/login"
            className="relative flex items-center roboto-bold text-15 duration-300 text-white dark:text-dimgray group hover:text-white"
          >
            Login
            <span
              className={`absolute bottom-0 left-0 h-[2px] bg-white dark:bg-dimgray transition-all duration-300 w-0 group-hover:w-full group-hover:left-0`}
            ></span>
          </Link>
        )}
      </section>
    </div>
  )
}

export default HeaderLower

import React from 'react'
import useScrollFromTop from '@/app/hooks/useScrollFromTop'
import { navigationLinks } from '@/app/data/header.footer.data'
import useCustomPathname from '@/app/hooks/useCustomPathname'
import NavLinkWithDot from './NavLinkWithDot'
import AwesomeIcon from '../common/AwesomeIcon'
import { barsIcon } from '@/app/lib/icons'
import { openNavigationDrawer } from '@/app/redux/features/headerSlice'
import { RootState, useAppDispatch, useAppSelector } from '@/app/redux/store'
import LogoHorizontal from '../svg/LogoHorizontal'

const HeaderFixed = () => {
  const dispatch = useAppDispatch()
  const hasScrolled = useScrollFromTop(100)
  const path = useCustomPathname()
  const { isAuthenticated } = useAppSelector((state: RootState) => state.auth)

  return (
    <div
      className={`fixed flex items-center z-50 top-0 left-0 w-full h-[70px] bg-shadowplum dark:bg-graphite transition-transform duration-500 px-4 py-2 ${
        hasScrolled ? 'translate-y-0' : '-translate-y-[70px]'
      }`}
    >
      <div className="max-w-1200 w-full gap-x-4 mx-auto flex items-center justify-between">
        <LogoHorizontal />
        <div className="hidden lg:flex items-center">
          {navigationLinks(path, isAuthenticated, true).map((link, i) => (
            <NavLinkWithDot key={i} link={link} i={i} dotIndex={5} />
          ))}
        </div>
        <section className="block lg:hidden">
          <AwesomeIcon
            onClick={() => dispatch(openNavigationDrawer())}
            icon={barsIcon}
            className="text-white w-6 h-6 cursor-pointer"
          />
        </section>
      </div>
    </div>
  )
}

export default HeaderFixed

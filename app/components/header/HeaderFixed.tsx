import useScrollFromTop from '@/app/hooks/useScrollFromTop'
import React from 'react'
import Logo from '../common/Logo'
import { navigationLinks } from '@/app/data/header.footer.data'
import useCustomPathname from '@/app/hooks/useCustomPathname'
import NavLinkWithDot from './NavLinkWithDot'
import AwesomeIcon from '../common/AwesomeIcon'
import { barsIcon } from '@/app/lib/icons'
import { openNavigationDrawer } from '@/app/redux/features/headerSlice'
import { useAppDispatch } from '@/app/redux/store'

const HeaderFixed = () => {
  const dispatch = useAppDispatch()
  const hasScrolled = useScrollFromTop(100)
  const path = useCustomPathname()

  return (
    <div
      className={`fixed z-50 top-0 left-0 w-full h-[70px] text-white bg-[#111] transition-transform duration-500 px-4 py-2 ${
        hasScrolled ? 'translate-y-0' : '-translate-y-[70px]'
      }`}
    >
      <div className="max-w-1200 w-full mx-auto flex items-center justify-between">
        <Logo className="w-40" src="/images/logo-10.png" />
        <div className="hidden sm:flex items-center">
          {navigationLinks(path).map((link, i) => (
            <NavLinkWithDot key={i} link={link} i={i} />
          ))}
        </div>
        <section className="block lg:hidden">
          <AwesomeIcon
            onClick={() => dispatch(openNavigationDrawer())}
            icon={barsIcon}
            className="text-white w-7 h-7 cursor-pointer"
          />
        </section>
      </div>
    </div>
  )
}

export default HeaderFixed

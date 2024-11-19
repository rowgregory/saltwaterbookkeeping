import { navigationLinks } from '@/app/data/header.footer.data'
import useCustomPathname from '@/app/hooks/useCustomPathname'
import React from 'react'
import ArrowAnimatedLink from './ArrowAnimatedLink'
import AwesomeIcon from '../common/AwesomeIcon'
import { searchIcon } from '@/app/lib/icons'
import NavLinkWithDot from './NavLinkWithDot'

const HeaderLower = () => {
  const path = useCustomPathname()

  return (
    <div className="bg-graphite max-w-1200 hidden lg:flex items-center justify-between w-full mx-auto h-24 relative z-10 px-9">
      <section className="flex items-center">
        {navigationLinks(path).map((link, i) => (
          <NavLinkWithDot key={i} link={link} i={i} />
        ))}
      </section>
      <section className="flex items-center gap-x-8">
        <AwesomeIcon
          icon={searchIcon}
          className="w-5 h-5 text-white duration-300 cursor-pointer hover:text-darkeraquablue"
        />
        <ArrowAnimatedLink />
      </section>
    </div>
  )
}

export default HeaderLower

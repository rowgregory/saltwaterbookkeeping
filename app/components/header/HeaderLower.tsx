import React from 'react'
import useCustomPathname from '@/app/hooks/useCustomPathname'
import NavLinkWithDot from './NavLinkWithDot'
import { navigationLinks } from '@/app/data/header.footer.data'

const HeaderLower = () => {
  const path = useCustomPathname()

  return (
    <div className="bg-graphite max-w-1200 hidden lg:flex items-center justify-between w-full mx-auto h-24 relative z-30 px-9">
      <section className="flex items-center">
        {navigationLinks(path).map((link, i) => (
          <NavLinkWithDot key={i} link={link} i={i} />
        ))}
      </section>
    </div>
  )
}

export default HeaderLower

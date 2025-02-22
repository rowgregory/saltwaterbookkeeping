import { NavLinkWithDotProps } from '@/app/types/header.types'
import Link from 'next/link'
import React, { FC } from 'react'

const NavLinkWithDot: FC<NavLinkWithDotProps> = ({ link, i, dotIndex }) => {
  return (
    <div key={i} className="flex items-center gap-x-1">
      <Link
        href={link.linkKey}
        className={`relative flex items-center roboto-bold text-15 duration-300 dark:hover:text-white ${
          link.active ? 'text-white' : 'text-white dark:text-dimgray'
        } group`}
      >
        <p>{link.textKey}</p>
        <span
          className={`absolute bottom-0 left-0 h-[2px] bg-white dark:bg-dimgray transition-all duration-300 
    ${link.active ? 'w-full left-0' : 'w-0 group-hover:w-full group-hover:left-0'}`}
        ></span>
      </Link>
      <span
        className={`${
          i === (dotIndex || 4) ? 'hidden' : 'block'
        } bg-white dark:bg-dimgray w-1 h-1 rounded-full mx-6`}
      ></span>
    </div>
  )
}

export default NavLinkWithDot

import { NavLinkWithDotProps } from '@/app/types/header.types'
import Link from 'next/link'
import React, { FC } from 'react'

const NavLinkWithDot: FC<NavLinkWithDotProps> = ({ link, i }) => {
  return (
    <Link
      href={link.linkKey}
      key={i}
      className={`flex items-center roboto-bold text-15 ${
        link.active ? 'text-white' : 'text-dimgray'
      }`}
    >
      <p>{link.textKey}</p>
      <span
        className={`${i === 3 ? 'hidden' : 'block'} bg-dimgray w-1 h-1 rounded-full mx-6`}
      ></span>
    </Link>
  )
}

export default NavLinkWithDot

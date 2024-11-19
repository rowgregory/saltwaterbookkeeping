import React, { FC, MouseEventHandler } from 'react'
import Link from 'next/link'
import Picture from './Picture'

interface LogoProps {
  className: string
  src?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

const Logo: FC<LogoProps> = ({ className, src, onClick }) => {
  return (
    <Link href="/" onClick={onClick}>
      <Picture
        src={`${src ? src : '/images/logo.png'}`}
        alt="Story Construction"
        className={`${className}`}
        priority={true}
      />
    </Link>
  )
}

export default Logo

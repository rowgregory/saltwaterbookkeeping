import React, { FC } from 'react'
import Link from 'next/link'
import AwesomeIcon from './AwesomeIcon'
import { arrowRightIcon } from '@/app/lib/icons'

interface SlideEffectLinkProps {
  linkKey: string
  linkText: string
}

const SlideEffectLink: FC<SlideEffectLinkProps> = ({ linkKey, linkText }) => {
  return (
    <Link
      href={linkKey}
      className="clip-slide-down clip-slide-left-right text-white bg-aquablue flex items-center gap-x-2 py-5 px-12 poppins-bold text-sm w-fit relative overflow-hidden"
    >
      <span>{linkText}</span>
      <AwesomeIcon icon={arrowRightIcon} className="w-3.5 h-3.5 text-white" />
    </Link>
  )
}

export default SlideEffectLink

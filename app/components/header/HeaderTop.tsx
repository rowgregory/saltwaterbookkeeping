import React from 'react'
import ContactInfoBlock from './ContactInfoBlock'
import { socialMedia } from '@/app/data/header.footer.data'
import AwesomeIcon from '../common/AwesomeIcon'
import { barsIcon } from '@/app/lib/icons'
import { openNavigationDrawer } from '@/app/redux/features/headerSlice'
import { useAppDispatch } from '@/app/redux/store'
import { contactInfoBlockData } from '@/app/data/header.data'
import LogoSVG from '../svg/LogoSVG'
import LogoHorizontal from '../svg/LogoHorizontal'
import Link from 'next/link'
import { useTrackComponentClickMutation } from '@/app/redux/services/componentInteractionApi'

const HeaderTop = () => {
  const dispatch = useAppDispatch()
  const [trackClick] = useTrackComponentClickMutation()
  const handleTrackClick = async () => {
    await trackClick()
      .unwrap()
      .catch(() => {})
  }

  return (
    <div className="bg-white dark:bg-midnightshadow px-4 pt-0.5 sm:px-4 h-[60px] flex items-center lg:h-auto lg:py-3 1200:pt-6 1200:pb-10 1400:pb-6">
      <div className="max-w-[1750px] mx-auto w-full flex items-center justify-between gap-x-4">
        <Link href="/" onClick={handleTrackClick} className="block lg:hidden">
          <LogoHorizontal />
        </Link>
        <Link href="/" className="hidden lg:block" onClick={handleTrackClick}>
          <LogoSVG fillpath="text-midnightabyss dark:text-white" />
        </Link>
        <section className="hidden 1400:flex items-center gap-x-8">
          {contactInfoBlockData.map(({ icon, titleKey, textKey, onClick, className }, i) => (
            <ContactInfoBlock
              key={i}
              icon={icon}
              titleKey={titleKey}
              textKey={textKey}
              onClick={onClick}
              className={className}
            />
          ))}
        </section>
        <section className="hidden lg:flex items-center gap-x-3">
          <p className="text-xs text-midnightabyss dark:text-dimgray mr-4">Follow Us On</p>
          {socialMedia.map(({ icon, linkKey }, i) => (
            <div
              onClick={() => window.open(linkKey, '_blank')}
              key={i}
              className="group relative w-10 h-10 bg-aquablue rounded-full flex items-center justify-center cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-darkeraquablue rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <AwesomeIcon icon={icon} className="text-white w-3.5 h-3.5 relative z-10" />
            </div>
          ))}
        </section>
        <section className="block lg:hidden">
          <AwesomeIcon
            onClick={() => dispatch(openNavigationDrawer())}
            icon={barsIcon}
            className="text-midnightabyss dark:text-white w-6 h-6 cursor-pointer active:text-aquablue"
          />
        </section>
      </div>
    </div>
  )
}

export default HeaderTop

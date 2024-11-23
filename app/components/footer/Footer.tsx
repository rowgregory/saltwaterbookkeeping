'use client'

import React from 'react'
import Logo from '../common/Logo'
import { navigationLinks, socialMedia } from '@/app/data/header.footer.data'
import AwesomeIcon from '../common/AwesomeIcon'
import { chevronRightIcon, envelopeIcon, mapMarkerIcon, phoneIcon } from '@/app/lib/icons'
import useCustomPathname from '@/app/hooks/useCustomPathname'
import Link from 'next/link'

const Footer = () => {
  const pathname = useCustomPathname()

  const routes = ['/', '/about', '/services', '/contact']
  const isRouteMatched = routes.some((route) => route === pathname)

  return (
    <div className={`${isRouteMatched ? 'block' : 'hidden'} px-4 sm:pt-40 pb-12`}>
      <div className="max-w-1200 mx-auto w-full">
        <div className="grid grid-cols-12 gap-y-16 sm:gap-x-16 lg:gap-x-20">
          <div className="col-span-12 md:col-span-4 flex flex-col gap-y-6">
            <Logo className="w-44" />
            <span className="roboto-regular text-sm text-[#bbb]">
              We aim to simplify financial management, allowing business owners to focus on what
              they do best—growing their businesses.
            </span>
            <div className="flex items-cente gap-x-6">
              {socialMedia.map(({ icon, linkKey }, i) => (
                <div
                  onClick={() => window.open(linkKey, '_blank')}
                  key={i}
                  className="group relative w-10 h-10 bg-graphite rounded-full flex items-center justify-center cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 bg-aqua-g rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <AwesomeIcon icon={icon} className="text-white w-3.5 h-3.5 relative z-10" />
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-white text-lg poppins-semibold mb-4">Contact Us</h5>
            <div className="grid grid-cols-12 gap-4 mb-4">
              <div className="col-span-1">
                <AwesomeIcon icon={mapMarkerIcon} className="w-3 h-3 text-aquablue" />
              </div>
              <div className="col-span-11">
                <span className="text-[#bbb] text-sm roboto-regular">
                  450B Paradise Rd #103, Swampscott, MA 01907
                </span>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4 mb-4">
              <div className="col-span-1">
                <AwesomeIcon icon={envelopeIcon} className="w-3 h-3 text-aquablue" />
              </div>
              <div className="col-span-11">
                <span className="text-[#bbb] text-sm roboto-regular">
                  pam@saltwaterbookkeeping.com
                </span>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-1">
                <AwesomeIcon icon={phoneIcon} className="w-3 h-3 text-aquablue" />
              </div>
              <div className="col-span-11">
                <a href="tel:(781)3677809" className="text-[#bbb] text-sm roboto-regular">
                  (978) 219-4339
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-white text-lg poppins-semibold mb-4">Quick Links</h5>
            <div className="flex flex-col gap-y-4">
              {navigationLinks(pathname).map((link, i) => (
                <div key={i} className="grid grid-cols-12 items-center gap-x-4 group">
                  <AwesomeIcon
                    icon={chevronRightIcon}
                    className="col-span-1 w-3 h-3 text-aquablue duration-300 group-hover:translate-x-2"
                  />
                  <Link
                    href={link.linkKey}
                    key={i}
                    className={`col-span-11 text-sm roboto-regular duration-300 hover:text-white ${
                      link.active ? 'text-white' : 'text-[#bbb]'
                    }`}
                  >
                    {link.textKey}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="my-16 w-full h-[1px] bg-graphite"></div>
        <div className="flex items-center justify-between">
          <span className="uppercase text-[#bbb] text-sm roboto-regular">
            &copy; {new Date().getFullYear()} -{' '}
            <span
              onClick={() => window.open('https://sqysh.io', '_blank')}
              className="text-aquablue cursor-pointer hover:text-aquablue duration-300"
            >
              Sqysh
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer

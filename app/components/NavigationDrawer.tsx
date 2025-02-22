import React, { Fragment, useCallback, useRef } from 'react'
import useCustomPathname from '../hooks/useCustomPathname'
import { RootState, useAppDispatch, useAppSelector } from '../redux/store'
import { closeNavigationDrawer } from '../redux/features/headerSlice'
import Logo from './common/Logo'
import AwesomeIcon from './common/AwesomeIcon'
import { navigationLinks } from '../data/header.footer.data'
import Link from 'next/link'
import { envelopeIcon, mapMarkerIcon, phoneIcon, timesIcon } from '../lib/icons'
import BlackPageOverlay from './common/BlackPageOverlay'
import useOutsideDetect from '../hooks/useOutsideDetect'

const NavigationDrawer = () => {
  const path = useCustomPathname()
  const { navigationDrawer } = useAppSelector((state: RootState) => state.header)
  const { isAuthenticated } = useAppSelector((state: RootState) => state.auth)
  const dispatch = useAppDispatch()
  const overlayRef = useRef(null)
  const handleClose = useCallback(() => dispatch(closeNavigationDrawer()), [dispatch])

  useOutsideDetect(overlayRef, handleClose)

  return (
    <Fragment>
      <BlackPageOverlay open={navigationDrawer} />
      <div
        ref={overlayRef}
        className={`${
          navigationDrawer ? 'translate-x-0 ' : 'translate-x-[300px]'
        } duration-200 no-scrollbar overflow-x-hidden overflow-y-auto w-[300px] h-full fixed top-0 bottom-0 right-0 z-[60] transition-all bg-[#13121D] pb-20`}
      >
        <div className="flex justify-center p-6">
          <Logo onClick={() => dispatch(closeNavigationDrawer())} className="w-40" />
          <AwesomeIcon
            onClick={() => dispatch(closeNavigationDrawer())}
            icon={timesIcon}
            className="w-6 h-6 text-white cursor-pointer hover:rotate-90 duration-300 absolute top-2 right-2"
          />
        </div>
        <div className="w-full h-[1px] bg-slate-700"></div>
        <div className="flex flex-col mb-10">
          {navigationLinks(path, isAuthenticated, true).map((link, i) => (
            <div
              onClick={() => dispatch(closeNavigationDrawer())}
              key={i}
              className="grid grid-cols-12 items-center gap-x-4 group border-b-[1px] border-slate-700 px-6 py-3"
            >
              <Link
                href={link.linkKey}
                key={i}
                className={`col-span-11 text-sm roboto-regular duration-300 hover:text-white ${
                  link.active ? 'text-aquablue' : 'text-[#bbb]'
                }`}
              >
                {link.textKey}
              </Link>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-12 group px-6 sm:py-4">
          <AwesomeIcon
            icon={envelopeIcon}
            className="col-span-2 w-4 h-4 md:w-8 md:h-8 text-aquablue group-hover:rotate-[360deg] duration-1000"
          />
          <div className="col-span-10 flex flex-col justify-between">
            <span className="text-xs roboto-regular mb-1.5 sm:mb-4 uppercase text-[#b2c1c0]">
              Email Us
            </span>
            <span className="text-white roboto-bold text-sm">pam@saltwaterbookkeeping.com</span>
          </div>
        </div>
        <div className="grid grid-cols-12 group px-6 py-2.5 sm:py-4">
          <AwesomeIcon
            icon={phoneIcon}
            className="col-span-2 w-4 h-4 md:w-8 md:h-8 text-aquablue group-hover:rotate-[360deg] duration-1000"
          />
          <div className="col-span-10 flex flex-col justify-between">
            <span className="text-xs roboto-regular mb-1.5 sm:mb-4 uppercase text-[#b2c1c0]">
              Have any Questions?
            </span>
            <a href="tel:9782194339" className="text-white roboto-bold text-sm">
              +1 (978) 219-4339
            </a>
          </div>
        </div>
        <div className="grid grid-cols-12 group px-6 py-2.5 sm:py-4">
          <AwesomeIcon
            icon={mapMarkerIcon}
            className="cursor-pointer col-span-2 w-4 h-4 md:w-8 md:h-8 text-aquablue group-hover:rotate-[360deg] duration-1000"
          />
          <div className="col-span-10 flex flex-col justify-between">
            <span className="text-xs roboto-regular mb-1.5 sm:mb-4 uppercase text-[#b2c1c0]">
              Bookkeeping on the North Shore
            </span>
            <span className="text-white roboto-bold text-sm">
              450B Paradise Rd #103, Swampsctott, MA 01907
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default NavigationDrawer

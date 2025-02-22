import React, { Fragment } from 'react'
import { envelopeIcon, mapMarkerIcon, phoneIcon } from '../lib/icons'
import AwesomeIcon from '../components/common/AwesomeIcon'
import Hero from '../components/elements/Hero'
import LocationMap from '../components/common/LocationMap'
import AnimatedText from '../components/common/AnimatedText'

const Contact = () => {
  return (
    <Fragment>
      <Hero src="/images/contact-us-bg.png" title="Contact Us" />
      <div className="px-4 py-32">
        <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-1200 mx-auto w-full flex flex-col lg:flex-row gap-y-20 lg:gap-x-20">
          <div className="w-full lg:w-1/2">
            <span className="text-aquablue uppercase roboto-bold tracking-wide text-sm">
              Need Any Help?
            </span>
            <AnimatedText text="Get in touch with us" className="mt-6" />
            <p className="roboto-regular text-gray-600 dark:text-gray-400 mb-12 mt-4">
              Whether you have a question, need more information, or are ready to streamline your
              bookkeeping, we&apos;re here to help! Reach out today and let&apos;s simplify your
              financial journey.
            </p>
            <div className="grid grid-cols-12 md:gap-4 mb-16 group">
              <div className="col-span-3 bg-aqua-g w-12 h-12 md:w-20 md:h-20 flex items-center justify-center rounded-full">
                <AwesomeIcon icon={envelopeIcon} className="w-5 h-5 md:w-8 md:h-8 text-white" />
              </div>
              <div className="col-span-9 flex flex-col justify-between">
                <span className="text-lg poppins-bold mb-2">Email Us</span>
                <span className="text-midnightabyss dark:text-white text-sm md:text-lg roboto-regular">
                  pam@saltwaterbookkeeping.com
                </span>
              </div>
            </div>
            <div className="grid grid-cols-12 md:gap-4 mb-16 group">
              <div className="col-span-3 bg-aqua-g w-12 h-12 md:w-20 md:h-20 flex items-center justify-center rounded-full">
                <AwesomeIcon icon={phoneIcon} className="w-5 h-5 md:w-8 md:h-8 text-white" />
              </div>
              <div className="col-span-9 flex flex-col justify-between">
                <span className="text-lg poppins-bold mb-2">Have any questions?</span>
                <a
                  href="tel:(781)3677809"
                  className="text-midnightabyss dark:text-white text-sm md:text-lg roboto-regular"
                >
                  (978) 219-4339
                </a>
              </div>
            </div>
            <div className="grid grid-cols-12 md:gap-4 group">
              <div className="col-span-3 bg-aqua-g w-12 h-12 md:w-20 md:h-20 flex items-center justify-center rounded-full">
                <AwesomeIcon icon={mapMarkerIcon} className="w-5 h-5 md:w-8 md:h-8 text-white" />
              </div>
              <div className="col-span-9 flex flex-col justify-between">
                <span className="text-lg poppins-bold mb-2">Bookkeeping on the North Shore</span>
                <span className="text-midnightabyss dark:text-white text-sm md:text-lg roboto-regular">
                  450B Paradise Rd #103, Swampsctott, MA 01907
                </span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-full aspect-square">
              <LocationMap latitude={42.4709} longitude={-70.9176} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Contact

import React from 'react'
import Picture from './components/common/Picture'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="my-32">
      <div className="px-3">
        <div className="max-w-screen-xl w-full mx-auto flex flex-col justify-center items-center">
          <Picture
            src="/images/404.png"
            alt="Not Found 404"
            className="w-full max-w-md h-full mb-10"
            priority={true}
          />

          <Link
            href="/"
            className="bg-aquablue px-7 py-4 text-white font-bold text-center hover:bg-darkeraquablue duration-200"
          >
            Go Back To Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound

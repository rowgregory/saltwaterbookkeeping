'use client'

import React, { FC, useEffect, useState } from 'react'
import Spinner from '../common/Spinner'

const HorizontalLoader = () => {
  return (
    <div className="relative w-10 h-0.5 bg-transparent rounded-full overflow-hidden">
      <div className="absolute left-0 w-10 h-full bg-aquablue dark:bg-lime-400 rounded-full animate-horizontal-move"></div>
    </div>
  )
}

const AdminUserHub: FC<{ username: any }> = ({ username }) => {
  const [firstLetter, setFirstLetter] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (username) {
      setFirstLetter(username?.charAt?.(0)?.toUpperCase())
      setLoading(false)
    }
  }, [username])

  return (
    <div className="h-12 md:h-16 flex items-center gap-x-2 md:pl-3">
      <div className="w-8 h-8 bg-aquablue text-white dark:bg-[#0d1a0c] dark:text-lime-500 rounded-full flex items-center justify-center">
        {loading ? <Spinner /> : firstLetter}
      </div>
      {loading ? (
        <HorizontalLoader />
      ) : (
        <div className="text-duskyCoral dark:text-lime-500 text-15">{username}</div>
      )}
    </div>
  )
}

export default AdminUserHub

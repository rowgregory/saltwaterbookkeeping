import React from 'react'
import Link from 'next/link'
import { RootState, useAppDispatch, useAppSelector } from '@/app/redux/store'
import useCustomPathname from '@/app/hooks/useCustomPathname'
import { closeAdminNavigationDrawer } from '@/app/redux/features/headerSlice'
import { adminLinkData } from '@/app/data/header.data'
import useRemoveScroll from '@/app/hooks/useRemoveScroll'
import AdminUserHub from './AdminUserHub'

const AdminNavigationDrawer = () => {
  const dispatch = useAppDispatch()
  const path = useCustomPathname()
  const { adminNavigationDrawer } = useAppSelector((state: RootState) => state.header)
  const { username } = useAppSelector((state: RootState) => state.user)
  useRemoveScroll(adminNavigationDrawer)

  return (
    <div
      className={`${
        adminNavigationDrawer ? 'scale-y-100 translate-y-0' : 'scale-y-0 -translate-y-full'
      } block md:hidden fixed top-[93px] h-[calc(100dvh-93px)] left-0 w-full bg-white dark:bg-duskypalm shadow-lg z-40 origin-top duration-500 ease-in-out px-4 py-8`}
    >
      <div className="flex flex-col gap-y-5 px-5 sm:px-16">
        <AdminUserHub username={username} />
        {adminLinkData?.(path)?.map((link, i, arr) => (
          <Link
            key={i}
            onClick={() => dispatch(closeAdminNavigationDrawer())}
            href={link.linkKey}
            className={`${link.active ? 'text-aquablue dark:text-oceanicnocturne' : ''} ${
              i !== arr.length - 1 ? 'border-b border-gray-200 dark:border-[#323235]' : ''
            } pb-2`}
          >
            {link.textKey}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AdminNavigationDrawer

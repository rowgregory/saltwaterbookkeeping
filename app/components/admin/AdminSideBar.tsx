'use client'

import React, { FC } from 'react'
import Link from 'next/link'
import useCustomPathname from '@/app/hooks/useCustomPathname'
import AwesomeIcon from '../common/AwesomeIcon'
import { adminLinkData } from '@/app/data/header.data'
import AdminUserHub from './AdminUserHub'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

interface AdminSidebarLinkProps {
  linkKey: string
  icon: IconDefinition
  active: boolean
  textKey: string
}

const AdminSidebarLink: FC<AdminSidebarLinkProps> = ({ linkKey, icon, active, textKey }) => (
  <Link
    href={linkKey}
    className="grid grid-cols-12 gap-x-3 items-center group hover:bg-gray-100 dark:hover:bg-velveteclipse h-10 rounded-lg pl-3 duration-200"
  >
    <div className="col-span-2 flex items-center justify-center">
      <AwesomeIcon
        icon={icon}
        className={`w-5 h-5 group-hover:text-deepcharcoal dark:group-hover:text-white group-hover:animate-rotateToTwoOClock ${
          active ? 'text-aquablue dark:text-violetember' : 'text-gray-400 dark:text-smokysage'
        }`}
      />
    </div>
    <div
      className={`col-span-10 group-hover:text-deepcharcoal dark:group-hover:text-white ${
        active ? 'text-deepcharcoal dark:text-white' : 'text-gray-400 dark:text-smokysage'
      }`}
    >
      {textKey}
    </div>
  </Link>
)

const AdminSideBar = ({ data }: any) => {
  const path = useCustomPathname()

  return (
    <aside className="hidden md:block w-[224px] sticky top-12 h-[calc(100dvh-48px)] md:top-[72px] z-50 md:h-[calc(100dvh-72px)]">
      <AdminUserHub username={data} />
      <div className="flex flex-col gap-y-3 mt-5">
        {adminLinkData(path).map((link, i) => (
          <AdminSidebarLink key={i} {...link} />
        ))}
      </div>
    </aside>
  )
}

export default AdminSideBar

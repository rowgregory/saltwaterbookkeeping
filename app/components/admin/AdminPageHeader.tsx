import React, { FC } from 'react'

const AdminPageHeader: FC<{ title: string; text: string }> = ({ title, text }) => {
  return (
    <div className="w-full">
      <h1 className="text-[28px] font-extrabold text-charcoalblack dark:text-white">{title}</h1>
      <h2 className="text-sm mt-0.5 text-shadowamathyst dark:text-smokysage max-w-xl">{text}</h2>
    </div>
  )
}

export default AdminPageHeader

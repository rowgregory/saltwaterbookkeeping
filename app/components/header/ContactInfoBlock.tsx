import { ContactInfoBlockProps } from '@/app/types/header.types'
import { FC } from 'react'

const ContactInfoBlock: FC<ContactInfoBlockProps> = ({
  icon,
  titleKey,
  textKey,
  onClick,
  className
}) => {
  return (
    <div className={`flex gap-x-4 ${className}`} onClick={onClick}>
      {icon}
      <div className="flex flex-col">
        <p className="text-xs text-midnightabyss dark:text-dimgray roboto-regular">{titleKey}</p>
        <p className="text-midnightabyss dark:text-white poppins-semibold">{textKey}</p>
      </div>
    </div>
  )
}

export default ContactInfoBlock

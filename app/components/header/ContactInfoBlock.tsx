import { ContactInfoBlockProps } from '@/app/types/header.types'
import { FC } from 'react'
import AwesomeIcon from '../common/AwesomeIcon'

const ContactInfoBlock: FC<ContactInfoBlockProps> = ({
  icon,
  titleKey,
  textKey,
  onClick,
  className
}) => {
  return (
    <div className={`flex gap-x-4 ${className}`} onClick={onClick}>
      <AwesomeIcon icon={icon} className="text-aquablue w-7 h-7" />
      <div className="flex flex-col">
        <p className="text-xs text-dimgray roboto-regular">{titleKey}</p>
        <p className="text-white poppins-semibold">{textKey}</p>
      </div>
    </div>
  )
}

export default ContactInfoBlock

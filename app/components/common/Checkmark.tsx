import { resetUserSuccess } from '@/app/redux/features/userSlice'
import { useAppDispatch } from '@/app/redux/store'
import React, { FC, useEffect } from 'react'
import AwesomeIcon from './AwesomeIcon'
import { checkIcon } from '@/app/lib/icons'

interface CheckmarkProps {
  success: boolean
}

const Checkmark: FC<CheckmarkProps> = ({ success }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => dispatch(resetUserSuccess()), 1500)
      return () => clearTimeout(timer)
    }
  }, [success, dispatch])

  if (!success) return null

  return <AwesomeIcon icon={checkIcon} className="w-4 h-4 text-aquablue dark:text-lime-400" />
}

export default Checkmark

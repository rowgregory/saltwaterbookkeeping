import React, { FC } from 'react'

const AnimatedError: FC<{ error: string; className?: string }> = ({ error, className }) => {
  return (
    <div
      className={`${
        className || 'right-0 -bottom-5'
      } absolute transform text-red-500 text-xs transition-all font-medium duration-300  ${
        error ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
      }`}
    >
      {error}
    </div>
  )
}

export default AnimatedError

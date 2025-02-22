import Spinner from '@/app/components/common/Spinner'
import { useRef } from 'react'

const Switch = ({
  enabled,
  onChange,
  isLoading
}: {
  enabled: any
  onChange: any
  isLoading?: boolean
}) => {
  const inputRef = useRef(null) as any

  return (
    <button
      type="button"
      onClick={(e: any) => {
        e.stopPropagation()
        inputRef?.current?.click()
      }}
      className={`relative w-24 h-12 flex items-center rounded-full transition-colors duration-300 bg-gray-200 dark:bg-onyxshadow`}
    >
      <span
        className={`absolute left-2 w-8 h-8 rounded-full shadow-md transition-all duration-300 flex items-center justify-center ${
          enabled
            ? 'translate-x-12 bg-aquablue dark:bg-lime-500'
            : 'translate-x-0 bg-gray-300 dark:bg-darkgrape'
        }`}
      >
        {isLoading && <Spinner />}
      </span>
      <input
        name="isVisible"
        ref={inputRef}
        type="checkbox"
        value={enabled}
        onChange={onChange}
        className="hidden"
      />
    </button>
  )
}

export default Switch

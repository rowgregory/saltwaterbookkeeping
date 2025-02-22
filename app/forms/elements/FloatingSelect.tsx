import React, { FC } from 'react'
import { FloatingSelectProps } from '@/app/types/form.types'

const FloatingSelect: FC<FloatingSelectProps> = ({
  value,
  handleSelect,
  submitted,
  error,
  name,
  capitalName,
  options
}) => {
  return (
    <div className="relative w-full">
      <select
        id={name}
        name={name}
        value={value || ''}
        onChange={handleSelect}
        className={`h-[56px] peer bg-white dark:bg-duskypalm border border-gray-400 dark:border-deepseashadow rounded-xl pt-5 pb-1 px-4 w-full text-midnightabyss dark:text-white focus:outline-none focus:ring-1 focus:ring-aquablue dark:focus:ring-oceanicnocturne placeholder-transparent appearance-none`}
      >
        <option value="" disabled hidden></option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label
        htmlFor={name}
        className={`pointer-events-none absolute left-4 text-gray-500 transition-all cursor-text 
        ${
          value
            ? 'top-2 text-xs text-aquablue'
            : `top-[17px] text-base ${
                submitted && error ? 'text-red-500' : 'text-gray-500 dark:text-smokysage'
              } peer-focus:top-2 peer-focus:text-xs`
        }`}
      >
        {submitted && error ? error : capitalName}
      </label>
    </div>
  )
}

export default FloatingSelect

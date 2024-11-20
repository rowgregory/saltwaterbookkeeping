import { plusIcon } from '@/app/lib/icons'
import React, { FC } from 'react'
import AwesomeIcon from '../common/AwesomeIcon'
import Counter from '../common/Counter'
import { stats } from '@/app/data/elements.data'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

interface StatProps {
  stat: {
    icon: IconDefinition
    number: number
    subtitle: string
  }
}

const Stat: FC<StatProps> = ({ stat }) => (
  <div className="col-span-12 lg:col-span-3 grid grid-cols-12">
    <div className="col-span-4 w-16 h-16 bg-aqua-g rounded-full flex items-center justify-center">
      <AwesomeIcon icon={stat.icon} className="w-7 h-7" />
    </div>
    <div className="col-span-8 flex flex-col">
      <div className="flex items-start gap-x-1">
        <Counter targetNumber={stat.number} duration={2000} />
        <AwesomeIcon icon={plusIcon} className="w-4 h-4" />
      </div>
      <span className="text-dimgray text-sm roboto-regular">{stat.subtitle}</span>
    </div>
  </div>
)

const Stats = () => {
  return (
    <div className="bg-deepcharcoal py-28 px-2 mb-24">
      <div className="max-w-80 lg:max-w-1200 mx-auto w-full">
        <div className="grid grid-cols-12 gap-y-10 lg:gap-x-10">
          {stats.map((stat, i) => (
            <Stat key={i} stat={stat} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stats

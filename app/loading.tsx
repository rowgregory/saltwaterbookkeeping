import React from 'react'
import SpiralLoaderSVG from './components/svg/SpiralLoaderSVG'

const Loading = () => {
  return (
    <div className="overflow-hidden">
      <div className="fixed inset-0 bg-white/80 dark:bg-duskypalm/80 flex items-center justify-center z-50">
        <div className="animate-spin-slow">
          <SpiralLoaderSVG />
        </div>
      </div>
    </div>
  )
}

export default Loading

import { useState, useEffect } from 'react'
import LogoSVG from './svg/LogoSVG'

const LoadingScreen = () => {
  const [hasMoved, setHasMoved] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasMoved(true)
    }, 1750)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="overflow-hidden">
      <div
        className={`fixed w-full top-1/2 left-1/2 transform -translate-x-1/2 flex items-center justify-center -translate-y-1/2 bg-white dark:bg-midnightshadow p-4 z-50 transition-all duration-1000 min-h-dvh ${
          hasMoved ? 'top-4 left-8 opacity-0 transform scale-0' : ''
        }`}
      >
        <LogoSVG w="720.75" h="239.9" fillpath="text-midnightabyss dark:text-white" />
      </div>
    </div>
  )
}

export default LoadingScreen

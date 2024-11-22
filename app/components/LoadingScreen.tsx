import { useState, useEffect } from 'react'
import Logo from './common/Logo'

const LoadingScreen = () => {
  const [hasMoved, setHasMoved] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasMoved(true)
    }, 1750)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`fixed w-full top-1/2 left-1/2 transform -translate-x-1/2 flex items-center justify-center -translate-y-1/2 text-white p-4 z-50 transition-all duration-1000 ${
        hasMoved ? 'top-4 left-8 opacity-0 transform scale-0' : ''
      }`}
    >
      <Logo className="w-full h-full max-w-96 object-cover mx-auto" />
    </div>
  )
}

export default LoadingScreen

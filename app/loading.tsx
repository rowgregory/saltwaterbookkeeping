import React from 'react'

const Loading = () => {
  return (
    <div className="relative w-full mb-20 990:mb-[120px] -mt-20 990:mt-[-120px] min-h-[calc(100vh-80px)] 990:min-h-[calc(100vh-120px)]">
      <div className="absolute inset-0 flex items-center justify-center z-50">
        <div
          className="bg-cover bg-no-repeat bg-center w-40 h-40 animate-spin-slow"
          style={{ backgroundImage: `url('/images/ring.png')` }}
        ></div>
      </div>
    </div>
  )
}

export default Loading

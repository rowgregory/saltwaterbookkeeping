import React, { FC } from 'react'

interface ServiceCardProps {
  service: {
    img: string
    icon: string
    title: string
  }
}

const ServiceCard: FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="card-container col-span-12 md:col-span-6 lg:col-span-4 flex flex-col items-center group">
      <div className="w-full overflow-hidden">
        <div
          style={{ backgroundImage: `url(${service.img})` }}
          className="bg-cover bg-no-repeat w-full aspect-[16/10] relative"
        >
          <div className="wave-container">
            <div className="wave-inner-container">
              <div className="wave"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-[95%] sm:w-5/6 bg-white dark:bg-graphite h-28 -mt-16 flex items-center justify-between gap-5 p-4 sm:p-7 relative z-40 overflow-hidden
        before:absolute before:content-[''] before:top-0 before:-left-3 before:bg-aqua-g 
        before:w-20 before:h-40 before:skew-x-[20deg] before:z-0 shadow-servicecardlight dark:shadow-servicecarddark`}
      >
        <div className="grid grid-cols-12 gap-x-3 relative z-10">
          <span className="col-span-4 h-14 w-14 border-[3px] border-white dark:border-[#343434] rounded-full bg-aquablue flex items-center justify-center">
            <div
              style={{ backgroundImage: `url(${service.icon})` }}
              className="w-8 h-8 bg-cover bg-no-repeat group-hover:animate-rotateToTwoOClock"
            ></div>
          </span>
          <span className="col-span-8 flex items-center poppins-bold text-17 sm:text-lg">
            {service.title}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard

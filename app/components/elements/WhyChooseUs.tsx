import React from 'react'
import AwesomeIcon from '../common/AwesomeIcon'
import AnimatedText from '../common/AnimatedText'
import { whyChooseUs } from '@/app/data/elements.data'

const WhyChooseUs = () => {
  return (
    <div className="px-4 mb-36">
      <div className="max-w-1200 mx-auto w-full grid grid-cols-12 gap-y-7 md:gap-8">
        <div className="col-span-12 md:col-span-4 aspect-square">
          <div className="flex items-center gap-x-4 mb-7">
            <div className="blob-1 max-w-10"></div>
            <span className="text-15 roboto-bold uppercase tracking-widest">Why Choose Us</span>
          </div>
          <div className="max-w-[285px] w-full">
            <AnimatedText text="Looking for the right bookkeeper?" />
          </div>
        </div>
        {whyChooseUs.map((data, i) => (
          <div
            key={i}
            className="group flex items-end justify-center bg-no-repeat bg-cover bg-center aspect-square overflow-hidden rounded-2xl col-span-12 md:col-span-4 transition-all duration-300"
            style={{ backgroundImage: `url(${data.img})` }}
          >
            <div className="bg-graphite group-hover:bg-[#062f2e] w-5/6 rounded-2xl px-5 pt-5 flex flex-col justify-center items-center mb-5 transition-all duration-500 group-hover:h-auto group-hover:py-8">
              <div className="w-16 h-16 bg-aqua-g rounded-full flex items-center justify-center border-2 border-white -mt-10 mb-5">
                <AwesomeIcon icon={data.icon} className="w-8 h-8 text-white" />
              </div>
              <div className="max-w-40 text-center w-full mb-4">
                <span className="poppins-bold text-xl">{data.title}</span>
              </div>
              <p className="text-center leading-6 max-h-0 group-hover:max-h-[200px] scale-0 group-hover:scale-105 transition-all duration-500 text-sm roboto-regular">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyChooseUs

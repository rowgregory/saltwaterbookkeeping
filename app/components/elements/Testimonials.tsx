import React from 'react'
import AnimatedText from '../common/AnimatedText'
import AwesomeIcon from '../common/AwesomeIcon'
import { starIcon } from '@/app/lib/icons'

const testimonials = [
  {
    name: 'John Doe',
    testimonial: 'This is the best service I have ever used! Highly recommend it to everyone.'
  },
  {
    name: 'Jane Smith',
    testimonial:
      'Incredible experience. The team was very professional, and the results exceeded my expectations.'
  },
  {
    name: 'Alex Johnson',
    testimonial:
      "I couldn't be happier with the outcome. The service was fast, efficient, and affordable."
  }
]

const Testimonials = () => {
  return (
    <div className="bg-deepcharcoal px-4 py-36 mb-28">
      <div className="max-w-1200 mx-auto w-full">
        <div className="flex items-center gap-x-4 mb-7">
          <div className="blob-1 max-w-10"></div>
          <span className="text-15 roboto-bold uppercase tracking-widest">Testimonial</span>
        </div>
        <AnimatedText text="Client Experiences" />
        <div className="grid grid-cols-12 gap-y-10 sm:gap-x-10 mt-16">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#111] p-8 flex flex-col"
            >
              <div
                className={`bg-aqua-g p-3 w-fit -mt-12 mb-7 relative
                after:absolute after:content-[''] after:top-0 after:-left-[9px] after:h-0
                    after:border-r-[9px] after:border-r-aquablue
                    after:border-t-[16px] after:border-t-transparent
                `}
              >
                <div
                  style={{ backgroundImage: `url('/images/quotations.png')` }}
                  className="bg-no-repeat bg-cover bg-center w-14 h-14"
                ></div>
              </div>
              <div className="flex items-center gap-x-1.5 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <AwesomeIcon key={i} icon={starIcon} className="w-3 h-3 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg roboto-regular text-dimgray mb-4">
                {testimonial.testimonial}
              </span>
              <span className="text-white text-xl poppins-bold">{testimonial.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials

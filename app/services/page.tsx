import React from 'react'
import Hero from '../components/elements/Hero'
import services from '../data/services.data'
import ServiceCard from '../components/common/ServiceCard'

const Services = () => {
  return (
    <div>
      <Hero src="/images/services-bg.jpg" title="QuickBooks Services" />
      <div className="px-4 py-28 relative z-40">
        <div className="max-w-screen-1200 w-full mx-auto grid grid-cols-12 gap-y-10 md:gap-10">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>
        <div className="flex justify-center mt-20">
          <span className="text-white roboto-bold flex items-center gap-x-3 w-fit group text-center">
            Businesses and individuals rely on our services.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Services

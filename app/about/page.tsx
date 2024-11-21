import React from 'react'
import Hero from '../components/elements/Hero'
import Picture from '../components/common/Picture'
import AnimatedText from '../components/common/AnimatedText'
import WhoWeAre from '../components/elements/WhoWeAre'
import HighlightCards from '../components/home/HighlightCards'

const About = () => {
  return (
    <div>
      <Hero src="/images/about-bg.png" title="About Us" />
      <div className="px-4 pt-32 pb-32 sm:pb-60 relative">
        <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-1200 mx-auto w-full flex flex-col md:grid md:grid-cols-12 gap-y-20 md:gap-x-12 lg:gap-x-10">
          <div className="flex-1 md:col-span-6">
            <div className="relative z-0 w-full h-fit flex items-center justify-center overflow-hidden">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/videos/u-vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <Picture
                src="/images/pam.png"
                alt="Pam Saltwater Bookkeeping"
                className="object-cover relative z-30 w-full h-full"
                priority={false}
              />
            </div>
            <Picture
              src="/images/many-triangles.png"
              alt="Geometric triangles"
              className="float object-cover absolute right-0 translate-y-1/2 md:top-32 z-[-1] w-[700px] h-[700px] aspect-square"
              priority={false}
            />
          </div>
          <div className="flex flex-col flex-1 md:col-span-6">
            <AnimatedText text="The Heart of Saltwater Bookkeeping" />
            <span className="mt-7 text-15 roboto-regular">
              Welcome to Saltwater Bookkeeping! I&apos;m thrilled to offer my services to small
              businesses and entrepreneurs who need reliable, accurate bookkeeping solutions.
            </span>
            <span className="mt-7 text-15 roboto-regular">
              After a successful career in technology, specializing in data management, I decided to
              bring my expertise into the world of bookkeeping. My attention to detail, technical
              background, and passion for helping others achieve financial clarity inspired me to
              start Saltwater Bookkeeping.
            </span>
            <span className="mt-7 text-15 roboto-regular">
              My journey in tech gave me a deep understanding of the importance of well-organized
              data and systems, and I now use those skills to streamline bookkeeping processes for
              my clients. I aim to simplify financial management, allowing business owners to focus
              on what they do best—growing their businesses.
            </span>
            <span className="mt-7 text-15 roboto-regular">
              Outside of bookkeeping, I&apos;m a mother of three, grandmother of three, and enjoy
              spending time by the ocean.
            </span>
            <span className="mt-7 text-15 roboto-regular">
              Whether you&apos;re looking to get your finances organized or need ongoing support,
              I&apos;m here to help!
            </span>
          </div>
          <div className="col-span-12"></div>
        </div>
      </div>
      <div className="bg-almostblack pt-40">
        <HighlightCards />
      </div>
      <WhoWeAre />
    </div>
  )
}

export default About

import WhoWeAre from './components/elements/WhoWeAre'
import Hero from './components/home/Hero'
import HighlightCards from './components/home/HighlightCards'
import WhyChooseUs from './components/elements/WhyChooseUs'
import TailoredSolutions from './components/elements/TailoredSolutions'
import TestimonialBlock from './components/elements/TestimonialBlock'

const Home = () => {
  return (
    <div>
      <Hero />
      <HighlightCards />
      <WhoWeAre />
      <WhyChooseUs />
      <TailoredSolutions />
      <TestimonialBlock />
    </div>
  )
}

export default Home

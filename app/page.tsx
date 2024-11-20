import WhoWeAre from './components/elements/WhoWeAre'
import Hero from './components/home/Hero'
import HighlightCards from './components/home/HighlightCards'
import Stats from './components/elements/Stats'
import WhyChooseUs from './components/elements/WhyChooseUs'
import TailoredSolutions from './components/elements/TailoredSolutions'

const Home = () => {
  return (
    <div>
      <Hero />
      <HighlightCards />
      <WhoWeAre />
      <Stats />
      <WhyChooseUs />
      <TailoredSolutions />
    </div>
  )
}

export default Home

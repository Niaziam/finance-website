import './App.css'
import DebitCard from './components/DebitCard'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nav from './components/Navbar'
import Offers from './components/Offers'
import PerfectCard from './components/PerfectCard'
import Review from './components/Review'
import Vision from './components/vision'



function App() {
  return (
    <>
      <main className='overflow-x-hidden'>
        <Nav />
        <div className='m-auto w-full max-w-[1440px] px-2.5 md:px-10 lg:px-20 xl:px-24'>
          <Hero />
          <Vision />
          <Offers />
          <DebitCard />
          <PerfectCard />
          <Review />
          <FAQ />
        </div>
        <Footer />
      </main>
    </>
  )
}

export default App

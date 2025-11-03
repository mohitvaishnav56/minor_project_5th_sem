import React from 'react'
import Hero from '../components/specific/home/hero/Hero'
import LookBookSection from '../components/specific/lookbook/LookBookSection'
const Home = () => {
  return (
    <div className='md:px-8 bg-black'>
        <Hero />
        <LookBookSection />
    </div>
  )
}

export default Home
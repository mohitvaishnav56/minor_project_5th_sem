import React from 'react'
import Hero from '../components/specific/home/hero/Hero'
import LookBookSection from '../components/specific/lookbook/LookBookSection'
import BTL from '../components/specific/btl/BTL'
const Home = () => {
  return (
    <div className='bg-black'>
        <Hero />
        <LookBookSection />
        <BTL />
    </div>
  )
}

export default Home
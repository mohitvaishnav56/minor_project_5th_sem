import React from 'react'
import CustomPara from '../../../customElems/CustomPara'
import CustomButton from '../../../customElems/CustomButton'
const Hero = () => {
  return (
    <> 
    <div className="h-screen w-screen  bg-blue-800 
    md: h-200 w-360">
<div className=' test-font ml-40  '>
  Gang
  </div>

  <img src="/first.png" alt="hero" className='absolute top-55 left-130 brightness-50'/>

  <div className='text-white font-bold text-4xl font-[Inter]  border-b-2 border-b-red-600 absolute left-60 top-107'>
    Bold. Fearless. Untamed.
    </div>

<CustomPara className=' absolute left-60 top-130 w-85'
 description="Step into a world of raw style and unapologetic attitude. 
 Designed for the fearless, made for the originals."/>

<CustomButton title="Join The Crew Now" className='w-80 h-10 absolute top-160 left-60'/>

<div className='test-font ml-170 absolute top-108  '>
  ster
  </div>

  <div className='text-[#FFFFFF] absolute left-243 top-191 tracking-[3px] tex-5xl font-bold font-[Inter] '>
    GET NEW FASHION</div>
      </div>
    </>
  )
}

export default Hero
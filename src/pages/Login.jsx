import React from 'react'
import CustomButton from '../components/customElems/CustomButton';
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  return (
    <div
      style={{
        background: `url(${"/Login_BG.jpeg"})`,
        backgroundSize: 'cover',
        backgroundPosition: "50% 50%",
        height: '95vh'
      }}
      className="w-full flex justify-center items-center"
    >
      <div className="flex h-auto min-h-6/10 md:w-1/2 w-9/10 flex-col items-center justify-start py-10
       gap-5 rounded-md bg-[#494949A8]/50 shadow-[0_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-[6.35px]">
        <h1 className="text-5xl text-white inria-serif-bold underline underline-offset-6 decoration-[#FF0000BA]">Login</h1>
        <div className='w-[75%] py-4 text-[#F69898A3]'>
          <label htmlFor="email" className='text-xl'>Enter your Phone or Email: </label>
          <div className='w-full h-fit flex flex-wrap justify-between items-center'>
            <input
              type="text"
              id="email"
              name="email"
              className='w-full md:w-[80%] text-white py-1 outline outline-white rounded px-2  placeholder-gray-200 font-light placeholder:text-sm'
              placeholder='Enter Phone number or Email address'
            />
            <CustomButton title={"Get OTP"} className={"text-xs md:py-2 h-fit text-white hover:scale-105"} />
          </div>
        </div>
        <hr className='text-gray-300 w-6/10' />
        <button className=' md:w-[50%] flex gap-2 items-center justify-center text-white px-1 py-1 outline rounded cursor-pointer font-light hover:scale-105'>
          <FcGoogle size={20} /> Continue with Google
        </button>
      </div>
    </div>
  )
}

export default Login;

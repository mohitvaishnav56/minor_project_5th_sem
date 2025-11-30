import React from "react";
import CustomPara from "../../../customElems/CustomPara";
import CustomButton from "../../../customElems/CustomButton";
const Hero = () => {
  return (
    <>
      <div
        className="h-550 mr-5
    md: h-screen md:mr-0 relative"
      >
        <div
          className="  test-font text-7xl absolute top-25 left-4
 md:test-font   md:text-[16em]  md:top-10 md:left-70 md:tracking-[4px]"
        >
          Gang
        </div>

        <img
          src="/first.png"
          alt="hero"
          className="absolute top-10 left-15 h-70 brightness-50 w-60
         md:top-13 md:left-133 md:brightness-50 md:h-135 md:w-115"
        />

        <div
          className=" whitespace-nowrap text-white font-bold text-[8px] font-[Inter]  border-b-2 border-b-red-600 absolute left-5 top-39
        md:text-3xl md:left-76 md:top-62"
        >
          Bold. Fearless. Untamed.
        </div>

        <CustomPara
          className=" absolute top-90 left-2 w-90 text-[14px]
        md:left-75 md:top-78 md:w-85 md:text-[19px]"
          description="Step into a world of raw style and unapologetic attitude. 
 Designed for the fearless, made for the originals."
        />

        <CustomButton
          title="Join The Crew Now"
          className="absolute w-40 h-10 top-110 left-22
        md:w-70 md:h-10  md:top-105 md:left-75"
        />

        <div
          className="test-font absolute top-67 left-47 text-7xl
        md:left-180 md:top-105 md:text-[16em] md:tracking-[4px]  "
        >
          ster
        </div>

        <div
          className="text-[#FFFFFF] absolute top-81 left-50 text-[8px] tracking-[1px]  font-bold font-[Inter] whitespacing-nowrap 
       md:left-225 md:top-155 md:text-[19px]"
        >
          GET NEW FASHION
        </div>
      </div>
    </>
  );
};

export default Hero;

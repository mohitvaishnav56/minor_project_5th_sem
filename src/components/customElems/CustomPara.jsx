import React from 'react'

const CustomPara = ({description, className=''}) => {
  return (
    <div className ={`text-[#827F7FBA] text-xl ${className}`}>{description}</div>
  )
}

export default CustomPara
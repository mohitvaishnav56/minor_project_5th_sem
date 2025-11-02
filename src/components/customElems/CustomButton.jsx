import React from 'react'

const CustomButton = ({ title, className = '' }) => {
  return (
    <button
      className={`px-2 py-2 bg-[#ff0000] text-xs cursor-pointer rounded-md text-white ${className}`}
    >
      {title}
    </button>
  )
}

export default CustomButton

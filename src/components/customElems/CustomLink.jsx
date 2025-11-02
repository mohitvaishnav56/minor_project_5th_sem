import React from 'react'
import { Link } from 'react-router-dom'

const CustomLink = ({href, className='', title}) => {
  return (
    <Link to={href} className ={`text-white ${className}`}> 
    {title}
    </Link>
  )
}

export default CustomLink
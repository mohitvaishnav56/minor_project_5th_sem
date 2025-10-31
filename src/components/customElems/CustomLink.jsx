import React from 'react'
import { Link } from 'react-router-dom'

const CustomLink = (href, className='', title) => {
  return (
    <Link href={href} className='text-white'> {title}</Link>
  )
}

export default CustomLink
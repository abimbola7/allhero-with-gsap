"use client"
import React from 'react'

const Mountain = ({ width, height, fill, className }) => {
  return (
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    // width="35" 
    // height="30" 
    className={className}
    fill={fill}
    viewBox="0 0 35 30"
    >
  <path id="mountain.svg" class="cls-1" d="M225.088,8178l-17.076,30.01h34.976Zm0.965,12.99-1.664,2.86-1.544-2.86-4.671,5.45,6.979-12.52,8.523,14.34Zm13.219,14.02" transform="translate(-208 -8178)"></path>
</svg>
  )
}

export default Mountain
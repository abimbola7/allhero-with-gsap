"use client"
import React from 'react'

const BrandLogo = ({ width, height, fill, className }) => {
  return (
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    // width="280" 
    // height="371"
    className={className} 
    fill={fill}
    viewBox="0 0 280 371">
    <path id="logo_mark.svg" class="cls-1" d="M1039.33,7676.84l-1.21-4.13-29.75-101.42,30.89-51.63H993.224l-36.492-124.39L987.5,7342H897.787q-15.219,0-23.967,8.62-9.717,7.3-15.87,21.93L760.006,7713H1010.29A29.912,29.912,0,0,0,1039.33,7676.84ZM903.292,7395.27h2.592L941.9,7519.66H866.98Zm-79.349,271.82,27.687-94.84h105.5l27.461,94.84H823.943Z" transform="translate(-760 -7342)"></path>
    </svg>
  )
}

export default BrandLogo

"use client"
import React from 'react'

const Plane = ({ width, height, fill, className }) => {
  return (
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    // width="40" 
    height="31" 
    className={className}
    fill={fill}
    viewBox="0 0 40 31"
    >
  <path id="fry.svg" class="cls-1" d="M695,8178.62h-2.419l-3.963,3.45h-10.91l5.188-12.06h-3.458l-0.042.02a0.657,0.657,0,0,0-.139-0.02,2.275,2.275,0,0,0-1.48.56l-0.025.01-0.043.05a1.329,1.329,0,0,0-.189.21l-10.186,11.23h-8.646a3.448,3.448,0,1,0,0,6.88h8.646l10.186,11.23a1.991,1.991,0,0,0,.189.21l0.043,0.05,0.025,0.01a2.275,2.275,0,0,0,1.48.56,0.657,0.657,0,0,0,.139-0.02l0.042,0.02H682.9l-5.188-12.06h10.91l3.963,3.45H695l-2.578-6.89Z" transform="translate(-655 -8170)"></path>
</svg>
  )
}

export default Plane

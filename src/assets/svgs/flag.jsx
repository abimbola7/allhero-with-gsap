"use client"
import React from 'react'

const Flag = ({ width, height, fill, className }) => {
  return (
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    // width="27" 
    // height="32" 
    className={className}
    fill={fill}
    viewBox="0 0 27 32">
  <path id="flag.svg" class="cls-1" d="M1114.7,8201.01h-2.71v-32.02h2.71v32.02Zm24.31-21.35-21.61-8v16.01Z" transform="translate(-1112 -8169)"></path>
</svg>
  )
}

export default Flag

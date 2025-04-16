"use client"

import Image from 'next/image'
import React from 'react'
import ScrollToView from '../ui/scrollToView'

const AboutHero = () => {
  return (
    <div className='w-full h-screen relative'>
      <ScrollToView 
      section={".red"}
      />
      <img
      src={'/abouthero.png'}
      alt='img'
      quality={100}
      className='object-cover object-center w-full h-full iloveyou'
      />
      <div className='w-full mx-auto h-full absolute top-0 left-0 flex items-center px-4'>
        <div className='max-w-4xl  w-full mx-auto flex flex-col text-white space-y-2 leading-none'>
          <h1 className='text-[13vw] font-bold'>
            About
          </h1>

          <h2 className='text-2xl font-bold tracking-wide'>
            Recruitment Advertising Agency.
          </h2>

          <p className='text-sm text-[hsla(0,0%,100%,.5)] font-semibold'>By ALL-IN</p>
        </div>
      </div>
    </div>
  )
}

export default AboutHero

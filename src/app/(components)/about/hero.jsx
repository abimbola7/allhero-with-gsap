"use client"

import Image from 'next/image'
import React from 'react'
import ScrollToView from '../ui/scrollToView'

const AboutHero = () => {
  return (
    <div className='w-full h-screen relative'>
      <ScrollToView />
      <img
      src={'/abouthero.png'}
      alt='img'
      quality={100}
      className='object-cover object-center w-full h-full'
      />
      <div className=''>

      </div>
    </div>
  )
}

export default AboutHero

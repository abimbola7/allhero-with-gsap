import Image from 'next/image'
import React from 'react'

const AboutHero = () => {
  return (
    <div className='w-full h-screen relative'>
      <img
      src={'/abouthero.png'}
      alt='img'
      quality={100}
      className='object-cover object-center w-full h-full'
      />
    </div>
  )
}

export default AboutHero

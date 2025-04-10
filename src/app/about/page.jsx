import React from 'react'
import AboutHero from '../(components)/about/hero'
import Red from '../(components)/about/red'
import AboutImage from '../(components)/about/aboutImage'

const AboutPage = () => {
  return (
    <div className='w-full min-h-screen'>
      <AboutHero />
      <Red />
      <AboutImage />
    </div>
  )
}

export default AboutPage

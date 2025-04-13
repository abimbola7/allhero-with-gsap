import React from 'react'
import AboutHero from '../(components)/about/hero'
import Red from '../(components)/about/red'
import AboutImage from '../(components)/about/aboutImage'
import AnyoneHero from '../(components)/about/anyoneHero'

const AboutPage = () => {
  return (
    <div className='w-full min-h-screen'>
      <AboutHero />
      <Red />
      <AboutImage />
      <AnyoneHero />
    </div>
  )
}

export default AboutPage

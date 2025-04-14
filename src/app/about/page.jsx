import React from 'react'
import AboutHero from '../(components)/about/hero'
import Red from '../(components)/about/red'
import AboutImage from '../(components)/about/aboutImage'
import AnyoneHero from '../(components)/about/anyoneHero'
import Values from '../(components)/about/values'

const AboutPage = () => {
  return (
    <div className='w-full min-h-screen'>
      <AboutHero />
      <Red />
      <AboutImage />
      <AnyoneHero />
      <Values />
    </div>
  )
}

export default AboutPage

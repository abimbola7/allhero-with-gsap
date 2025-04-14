import React from 'react'
import AboutHero from '../(components)/about/hero'
import Red from '../(components)/about/red'
import AboutImage from '../(components)/about/aboutImage'
import AnyoneHero from '../(components)/about/anyoneHero'
import Values from '../(components)/about/values'
import Allin from '../(components)/about/allin'
import LogoSect from '../(components)/about/logosect'
import Section9 from '../(components)/section9'
import CeoMessage from '../(components)/about/ceomessage'

const AboutPage = () => {
  return (
    <div className='w-full min-h-screen'>
      <AboutHero />
      <Red />
      <AboutImage />
      <AnyoneHero />
      <Values />
      <Allin />
      <LogoSect />
      <CeoMessage />
      <Section9 />
    </div>
  )
}

export default AboutPage

"use client"

import Image from 'next/image'
import React from 'react'
import ScrollToView from '../ui/scrollToView'
import { useSelector } from 'react-redux'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const AboutHero = () => {
  const status = useSelector(state=>state.ui.show);
  // const aboutRef = React.useRef(null);
  useGSAP(()=>{
    const aboutRef = gsap.utils.toArray(".aboutt")
    console.log(aboutRef);
    if (status && aboutRef) {
      aboutRef.forEach((items) => {
        console.log(status, "STATsiuufiuedfiub");
        gsap.from(items, {
          delay : 1.7,
          x : -100,
          duration : 1.5,
          opacity : 0,
          ease : "power4.out",
          // stagger: .5
        })  
      });
    }
  },{
    // scope : aboutRef,
    dependencies : [status],
  })
  return (
    <div className='relative w-full h-screen'>
      <ScrollToView
      section={".red"}
      // className={"aboutt"}
      />
      <img
      src={'/abouthero.png'}
      alt='img'
      quality={100}
      className='object-cover object-center w-full h-full iloveyou'
      />
      <div className='absolute top-0 left-0 flex items-center w-full h-full px-4 mx-auto'>
        <div className='flex flex-col w-full max-w-4xl mx-auto space-y-2 leading-none text-white aboutt'>
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

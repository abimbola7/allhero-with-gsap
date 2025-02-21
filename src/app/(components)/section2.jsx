"use client"

import React from 'react'
import Staylowkey from './svgs/staylowkey'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Section2 = () => {
  const timeline  = React.useRef(null);
  const section2Ref = React.useRef(null);
  const { contextSafe } = useGSAP(()=>{
    const section2 = document.querySelector("#section2");
    const motto = document.querySelector(".motto");
    const slogan  = document.querySelectorAll(".slogan");
    const miniSlogan  = document.querySelector(".minislogan");
    const mainSection  = document.querySelector(".mainsection");
    timeline.current = gsap.timeline({
      scrollTrigger : {
        trigger : section2,
        // markers : true,
        toggleActions : "play none none reset",
      }
    })
    .from(motto, {
      x: -250,
      opacity : 0,
      duration : 1.2,
      ease : "power4.out",
    },0)
    .from(slogan, {
      x: -250,
      opacity : 0,
      duration : 1.2,
      ease : "power4.out",
    },0)

    gsap.from(miniSlogan, {
      x : -200,
      opacity : 0,
      delay : 0,
      ease: "bounce.out",
      duration : .5,
      scrollTrigger : {
        trigger : mainSection,
        toggleActions : "play none none reset",
      }
    })
  }, {
    scope : section2Ref
  })
  return (
    <div className="relative flex items-center justify-center w-full h-[120vh] overflow-hidden" id="section2">
      <div className='absolute top-0 -right-64 motto'>
        <Staylowkey />
      </div>
      <div className='relative flex flex-col justify-start w-full max-w-6xl px-20 text-white gap-y-16 mainsection'>
        <div className='absolute top-0 left-0 uppercase text-[#ffffff80] text-[.7rem] transition-transform -rotate-90 duration-500 translate-y-8 font-extrabold tracking-wider -translate-x-7 minislogan'>
          our slogan
        </div>
        <div className='flex flex-col gap-y-6 slogan'>
          <h1 className='font-semibold tracking-wider text-7xl'>STAY LOW KEY</h1>
          <p className='text-3xl font-[500]'>&apos;Stay focused on the end goal until you succeed&apos;</p>
        </div>

        <div className='space-y-6 slogan'>
          <h2 className='text-2xl'>Live with your own values, not others.</h2>
          <p className='text-[#ffffff80] text-sm leading-loose font-medium'>STAY LOW KEY means「 understand 」and 「 live by believing in one&apos;s values without matching the values of others.  Everybody has a belief or story, and it is worth giving back to society only by that person. ALL-IN is formed by each person who lives with his own values</p>
        </div>
      </div>
    </div>
  )
}

export default Section2

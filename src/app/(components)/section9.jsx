"use client"

import React from 'react'
// import Staylowkey from './svgs/staylowkey'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Staylowkey from '@/assets/svgs/staylowkey'

gsap.registerPlugin(ScrollTrigger)

const Section9 = () => {
  const timeline  = React.useRef(null);
  // const section9Ref = React.useRef(null);
  const { contextSafe } = useGSAP(()=>{
    const section9 = document.querySelector("#section9");
    const motto = document.querySelector(".motto1");
    const slogan  = document.querySelectorAll(".slogan1");
    const miniSlogan  = document.querySelector(".minislogan1");
    const mainSection  = document.querySelector(".mainsection1");
    timeline.current = gsap.timeline({
      scrollTrigger : {
        trigger : section9,
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
    // scope : section9Ref
  })
  return (
    <div className="relative flex items-center justify-center w-full h-[120vh] overflow-hidden" id="section9">
      <div className='absolute top-0 -left-10 motto1'>
        <Staylowkey
        width={"900"}
        height={"910"}
        fill={"#0D0D0D"}
        />
      </div>
      <div className='relative flex flex-col justify-start w-full max-w-6xl px-20 text-white gap-y-16 mainsection1'>
        <div className='absolute top-0 left-0 uppercase text-[#ffffff80] text-[.7rem] transition-transform -rotate-90 duration-500 translate-y-8 font-extrabold tracking-wider -translate-x-7 minislogan1'>
          our slogan
        </div>
        <div className='flex flex-col gap-y-6 slogan1'>
          <h1 className='font-semibold tracking-wider text-7xl'>STAY LOW KEY</h1>
          <p className='text-3xl font-[500]'>&apos;Stay focused on the end goal until you succeed&apos;</p>
        </div>

        <div className='space-y-6 slogan1'>
          <h2 className='text-2xl'>Live with your own values, not others.</h2>
          <p className='text-[#ffffff80] text-sm leading-loose font-medium'>STAY LOW KEY means「 understand 」and 「 live by believing in one&apos;s values without matching the values of others.  Everybody has a belief or story, and it is worth giving back to society only by that person. ALL-IN is formed by each person who lives with his own values</p>
        </div>
      </div>
    </div>
  )
}

export default Section9

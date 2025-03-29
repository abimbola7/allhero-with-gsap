"use client"

import React from 'react'
// import Staylowkey from './svgs/staylowkey'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Staylowkey from '@/assets/svgs/staylowkey'

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
    <div className="relative flex items-center justify-center w-full h-fit py-20 tab:py-0 tab:h-[120vh] overflow-hidden px-0 md:px-6" id="section2">
      <div className='absolute bottom-0 -left-0 tab:top-0 tab:bottom-auto tab:left-auto tab:-right-64 motto'>
        <Staylowkey
        className="w-[283x] h-[296px] tab:w-[900px] tab:h-[910px]"
        width={"auto"}
        height={"auto"}
        fill={"#0D0D0D"}
        />
      </div>
      <div className='relative flex flex-col justify-start w-full max-w-3xl px-2 text-white tab:px-0 tab:max-w-4xl gap-y-5 tab:gap-y-16 mainsection'>
        <div className='relative tab:absolute top-0 -left-16 uppercase text-[#ffffff80] text-[.7rem] tab:-rotate-90 tab:translate-y-8 font-extrabold tracking-wider tab:-translate-x-7 minislogan border'>
          our slogan
        </div>
        <div className='flex flex-col gap-y-6 slogan'>
          <h1 className='text-5xl font-semibold tracking-wider tab:text-7xl'>STAY LOW KEY</h1>
          <p className='text-xl tab:text-3xl font-bold tab:font-[500]'>&apos;Stay focused on the end goal until you succeed&apos;</p>
        </div>

        <div className='space-y-6 slogan'>
          <h2 className='text-lg tab:text-2xl'>Live with your own values, not others.</h2>
          <p className='text-[#ffffff80] text-sm leading-loose font-medium'>STAY LOW KEY means「 understand 」and 「 live by believing in one&apos;s values without matching the values of others.  Everybody has a belief or story, and it is worth giving back to society only by that person. ALL-IN is formed by each person who lives with his own values</p>
        </div>
      </div>
    </div>
  )
}

export default Section2

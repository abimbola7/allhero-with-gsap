"use client"

import React from 'react'
// import Staylowkey from './svgs/staylowkey'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Staylowkey from '@/assets/svgs/staylowkey'
import IconSvg from '@/assets/svgs/iconsvg'
import Umplex from '@/assets/svgs/umplex'
import Note from '@/assets/svgs/note'
import Wanted from '@/assets/svgs/wanted'
import { FaPinterest } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger)

const Section9 = () => {
  const timeline  = React.useRef(null);
  // const section9Ref = React.useRef(null);
  const { contextSafe } = useGSAP(()=>{
    const section9 = document.querySelector("#section9");
    const motto = document.querySelector(".motto1");
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
    // .from(slogan, {
    //   x: -250,
    //   opacity : 0,
    //   duration : 1.2,
    //   ease : "power4.out",
    // },0)

    // gsap.from(miniSlogan, {
    //   x : -200,
    //   opacity : 0,
    //   delay : 0,
    //   ease: "bounce.out",
    //   duration : .5,
    //   scrollTrigger : {
    //     trigger : mainSection,
    //     toggleActions : "play none none reset",
    //   }
    // })
  }, {
    // scope : section9Ref
  })
  return (
    <div className="relative flex items-center justify-center w-full py-24 h-fit tab:h-[120vh] overflow-hidden px-3 flex-col" id="section9">
      <div className='absolute bottom-0 left-0 tab:top-0 tab:left-10 motto1 tab:bottom-auto'>
        <Staylowkey
        className="w-[283x] h-[296px] tab:w-[900px] tab:h-[910px]"
        width={"auto"}
        height={"auto"}
        fill={"#0D0D0D"}
        />
      </div>
      <div className="w-full max-w-6xl relative z-[10] mx-auto ">
        <div className='flex items-center justify-center tab:justify-between py-12 border-b-[.1px] border-b-[#262626]'>
          <div className=''>
            <img src="/icon.png" alt="" className="w-[95px] h-[95px]" />
          </div>

          <div className='items-center hidden space-x-12 text-xs font-bold tracking-wide uppercase tab:flex text-white/50'>
            {
              [
                ["ABOUT"],
                ["SERVICE"],
                ["WORKS"],
                ["COMPANY"],
                ["CAREER"],
                ["NEWS"],
                ["CONTACT"]
              ].map(([item]) => (
                <p key={item} className='transition-colors duration-200 cursor-pointer hover:text-white'>{item}</p>
              ))
            }
          </div>
        </div>
        <div className='flex tab:flex-col items-center justify-center relative z-[10] w-full'>
          <div className='flex flex-row items-center space-x-3'>
            <Umplex />
            <Note />
            <Wanted />
            <FaPinterest className="cursor-pointer" color={"rgb(255 255 255 / 0.5)"} size={24}/>
            <CiFacebook className="cursor-pointer" color={"rgb(255 255 255 / 0.5)"} size={24}/>
            <IoLogoInstagram className="cursor-pointer" color={"rgb(255 255 255 / 0.5)"} size={24}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section9

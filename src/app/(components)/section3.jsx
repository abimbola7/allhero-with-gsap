"use client"

import React from 'react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const Section3 = () => {
  const containerRef = React.useRef(null);
  const timeline = React.useRef(null)
  const { contextSafe } = useGSAP(() => {
    const section3 = document.getElementById("section3");
    const leftImage  = gsap.utils.toArray(".leftImage");
    console.log(leftImage);
    timeline.current  = gsap.timeline({
      scrollTrigger : {
        trigger : section3,
        start : "100px bottom",
        toggleActions : "play none none reset",
        markers : true,
      }
    })
    .from(leftImage, {
      opacity : 0,
      x : -200,
      duration : .5,
      delay : .16,
      // ease : "power4.out",
      stagger : -.15
    })
  },  {
    scope : containerRef
  })
  return (
    <div className="w-full h-[150vh] bg-[#181818] grid grid-cols-3" id="section3" ref={containerRef}>
      <div className='relative w-full before:absolute before:w-full before:h-[50%] before:bg-black'>
        <div className='w-[189%] relative leftImage z-[10]'>
          <img src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/top/about-1125x750-c-center.jpg" alt="" className='absolute top-0 left-0 w-full h-auto py-28'/>
        </div>
      </div>
      <div className='col-span-2 overflow-hidden'>
        <div className='w-full h-full bg-[#640000] leftImage'>

        </div>
      </div>
    </div>
  )
}

export default Section3

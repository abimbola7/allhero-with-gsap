"use client"

import React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import Staylowkey from './svgs/staylowkey';

gsap.registerPlugin(ScrollTrigger);

const Section7 = () => {
  const timeline = React.useRef()
  const section7 = React.useRef()

  const { contextSafe } = useGSAP(() => {
    const gridItems = gsap.utils.toArray(".gri-items");
    
    
    timeline.current = gsap.timeline({
      scrollTrigger: {
        trigger: section7.current,
        start: "top bottom",
        toggleActions: "play none none reset",
        markers: true,
      },
    })
    .from(gridItems, {
      opacity: 0,
      xPercent: -17,
      stagger: 0.15,
      duration: 0.3,
    })
  }, {

  })
  return (
    <div className="w-full min-h-screen bg-[#181818]">
      <div className="grid w-full h-full max-w-6xl grid-cols-4 py-12 mx-auto justify-items-center gap-7" ref={section7}>
        <div className="relative flex flex-col w-full col-span-2 gri-items group">
          <div className="relative w-full cursor-pointer">
            <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full transition-all duration-200 opacity-0 bg-black/20 grid-hover group-hover:opacity-100'>
              <p className="text-sm font-bold text-white transition-all duration-200 -translate-x-[50%] group-hover:translate-x-0 tracking-wide">
                VIEW
              </p>
            </div>
            <div className="py-11 px-8 bg-[#640000] w-fit absolute top-0 left-0 text-white text-sm font-semibold z-20">
              <p>Career News Press</p>
            </div>
            <img
              src="https://allhero.co.jp/wp-content/uploads/2018/10/career.jpg"
              alt=""
              className=""
            />
          </div>

          <div className="flex flex-col p-10 space-y-6 bg-white">
           <div className='flex items-center space-x-5'>
            <span className="font-bold text-black text-7xl">
              C
            </span>
            <p className='text-xl font-bold tracking-wider text-black'>
              New heroes with diverse personalities, such as creators and HR/CX strategic
            </p>
           </div>
            <p className='text-sm text-[rgba(0,0,0,.6)] font-medium'>
            With seven joints, one step closer to the future that ALL-IN sees. Solving essential recruitment challenges cannot occur in the first evening of the morning. It is necessary to review from the company&apos;s core strategies and brands ―. ALL-IN thinks so, &#34;HR strategy&#34; &#34;brand...
            </p>

            <Link href="#" className="text-[#640000] !text-xs font-semibold">
              Pick up published on 19 Feb 2025
            </Link>

          </div>
        </div>
        <div className="flex flex-col w-full gri-items group">
          <div className="relative w-full">
            <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full transition-all duration-200 opacity-0 bg-black/20 grid-hover group-hover:opacity-100'>
              <p className="text-xs font-bold text-white transition-all duration-200 -translate-x-[50%] group-hover:translate-x-0 tracking-wide">
                VIEW
              </p>
            </div>
            <div className="p-8 bg-[#640000] w-fit absolute top-0 left-0 text-white text-sm font-semibold">
              <p>News</p>
            </div>
            <img
              src="https://allhero.co.jp/wp-content/uploads/2025/02/seminar_202502.jpg"
              alt=""
            />
          </div>

          <div className="flex flex-col p-6 space-y-6 bg-white">
           <div className='flex items-center space-x-5'>
            <span className="text-5xl font-bold text-black">
              N
            </span>
            <p className='text-base font-bold tracking-wide text-black'>
              SHIFT/All-in Joint Webinar Notice
            </p>
           </div>
            <p className='text-sm text-[rgba(0,0,0,.6)] font-medium leading-[1.7]'>
            【SHIFT/All-in Joint Webinar 】 New trend in 2025! We have released the production operation of the two recruitment content companies that have successfully hired engineers! 【 Held on February 25th at 13:00 】 The key to the market conditions for hiring difficulties is the effective use of adopted content. &#34;Employment of IT personnel becomes difficult every year...
            </p>

            <Link href="#" className="text-[#640000] !text-xs font-semibold">
              Pick up published on 19 Feb 2025
            </Link>

          </div>
        </div>
        <div className="flex flex-col w-full gri-items">
          <div className="relative w-full">
            <div className='absolute top-0 left-0 z-50 flex items-center justify-center w-full h-full'>
              <Staylowkey
              width={"100"}
              height={"110"}
              fill={"#ffffff"}
              />
            </div>
            <img
              src="https://allhero.co.jp/wp-content/themes/allhero.co.jp/assets/images/top/instagram.jpg"
              alt=""
              className='brightness-50'
            />
          </div>
        </div>
        
      </div>
    </div>
  )
};

export default Section7;
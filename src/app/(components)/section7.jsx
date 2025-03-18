"use client"

import React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const Section7 = () => {
  const timeline = React.useRef()
  const section7 = React.useRef()

  const { contextSafe } = useGSAP(() => {
    const gridItems = gsap.utils.toArray(".gri-items")
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
      <div className="w-full max-w-6xl h-full mx-auto grid grid-cols-4 justify-items-center gap-7 py-12" ref={section7}>
        <div className="col-span-2 w-full gri-items flex flex-col">
          <div className="w-full relative">
            <div className="py-11 px-8 bg-[#640000] w-fit absolute top-0 left-0 text-white text-sm font-semibold">
              <p>Career News Press</p>
            </div>
            <img
              src="https://allhero.co.jp/wp-content/uploads/2018/10/career.jpg"
              alt=""
              className=""
            />
          </div>

          <div className="p-10 flex flex-col space-y-6 bg-white">
           <div className='flex items-center space-x-5'>
            <span className="text-7xl font-bold text-black">
              C
            </span>
            <p className='text-xl font-bold text-black tracking-wider'>
              New heroes with diverse personalities, such as creators and HR/CX strategic
            </p>
           </div>
            <p className='text-sm text-[rgba(0,0,0,.6)] font-medium'>
            With seven joints, one step closer to the future that ALL-IN sees. Solving essential recruitment challenges cannot occur in the first evening of the morning. It is necessary to review from the company&apos;s core strategies and brands ―. ALL-IN thinks so, &#34;HR strategy&#34; &#34;brand...
            </p>

            <Link href="#" className="text-[#640000] !text-xs font-medium">
              Pick up published on 19 Feb 2025
            </Link>

          </div>
        </div>
        <div className="w-full gri-items flex flex-col">
          <div className="w-full relative">
            <div className="p-8 bg-[#640000] w-fit absolute top-0 left-0 text-white text-sm font-semibold">
              <p>News</p>
            </div>
            <img
              src="https://allhero.co.jp/wp-content/uploads/2025/02/seminar_202502.jpg"
              alt=""
            />
          </div>

          <div className="p-6 flex flex-col space-y-6 bg-white">
           <div className='flex items-center space-x-5'>
            <span className="text-5xl font-bold text-black">
              N
            </span>
            <p className='text-base font-bold text-black tracking-wide'>
              SHIFT/All-in Joint Webinar Notice
            </p>
           </div>
            <p className='text-sm text-[rgba(0,0,0,.6)] font-medium leading-[1.7]'>
            【SHIFT/All-in Joint Webinar 】 New trend in 2025! We have released the production operation of the two recruitment content companies that have successfully hired engineers! 【 Held on February 25th at 13:00 】 The key to the market conditions for hiring difficulties is the effective use of adopted content. &#34;Employment of IT personnel becomes difficult every year...
            </p>

            <Link href="#" className="text-[#640000] !text-xs font-medium">
              Pick up published on 19 Feb 2025
            </Link>

          </div>
        </div>
        <div className="w-full gri-items flex flex-col">
          <div className="w-full relative">
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
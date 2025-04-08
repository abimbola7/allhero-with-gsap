"use client"
import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Hamburger from './hamburger';
import IconSvg from '@/assets/svgs/iconsvg';
import Link from 'next/link';
import TransitionLink from './transitionLink';



gsap.registerPlugin(ScrollTrigger)

const Header = () => {
  const status = useSelector(state=>state.ui.show);
  const headerRef = React.useRef();
  useGSAP(()=>{
    if (headerRef.current) {
      gsap.from(headerRef?.current, {
        delay : 1.5,
        yPercent : -100,
        duration : 1,
        opacity : 0
      })
    }
  },{
    dependencies : [status],
  })

  useGSAP(() => {
    const section2 = document.querySelector("#section2");
    const header = gsap.utils.toArray(".header");
    
    const tl = gsap.timeline({
      scrollTrigger : {
        trigger : section2,
        start : "top 20%",
        end : "10% top",
        toggleActions : "play none reverse none",
        // scrub : 2,
        // markers : true,
      }
    }).to(header, {
      x : 100,
      duration : .3,
      stagger : -.04,
      opacity : 0
    })
  }, {
    dependencies : [status]
  })

  useGSAP(()=>{
    const mm  = gsap.matchMedia()
    const section2 = document.querySelector("#section2");
    const hamburger = gsap.utils.toArray(".hamburger");
    mm.add("(min-width: 991px)", () => {
      const tl1 = gsap.timeline({
        scrollTrigger : {
          trigger : section2,
          start : "top 21%",
          end : "1% top",
          toggleActions : "play none reverse none",
          // scrub : 2,
          // markers : true  
        }
      })
      .from(".icon", {
        x : -100,
        ease : "expo.inOut",
        duration : 1,
        opacity : 0
      },0)
      .from(".hamburger", {
        x : 100,
        duration : .3,
        opacity : 100,
        stagger : -.05,
        ease : "expo.inOut"
      },0)
    })

    return () => {
      mm.revert();
    }
  }, {
    dependencies : [status]
  })
  
  
  return (
    <>
      {
        status && (
          <div className='relative'>
            <div className='fixed flex items-center justify-between w-full px-8 h-fit left-0 logo top-0 z-[100]'>
              <TransitionLink 
              href={"/"}
              key={2}
              className='icon relative z-[1000] mt-4 cursor-pointer'>
                <IconSvg
                fill={"#fff"}
                width={"70"}
                height={"70"}
                key={2}
                />  
              </TransitionLink>

              <Hamburger />
            </div>
            <header className='fixed w-full z-[100000] top-0 left-0' ref={headerRef}>
              <div className='max-w-[95%] mx-auto hidden tab:flex items-center justify-end space-x-12 font-bold uppercase text-white pb-4 pt-16 text-sm'>
                <div className='header'>about</div>
                <TransitionLink key={1} href={"/services"} className='cursor-pointer header'>
                  service
                </TransitionLink>
                <div className='header'>work</div>
                <div className='header'>company</div>
                <div className='header'>career</div>
                <div className='header'>news</div>
                <div className='header'>contact</div>
              </div>
            </header> 
          </div>
        )    
      }
    </>
  )
}


export default Header

"use client"
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Icon from './svgs/icon';
import Hamburger from './hamburger';



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
    const header = gsap.utils.toArray(".header")
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
    const section2 = document.querySelector("#section2");
    const hamburger = gsap.utils.toArray(".hamburger");
    gsap.timeline({
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
  }, {
    dependencies : [status]
  })

  
  return (
    <>
      {
        status && (
          <header className='fixed w-full z-[100000] top-0 left-0' ref={headerRef}>
            <div className='absolute top-0 left-0 flex items-end justify-between w-full h-full px-8 logo'>
              <div className='icon'>
                <Icon
                fill={"#fff"}
                height={"70"}
                width={"70"}
                key={2}   
                />  
              </div>
              <Hamburger />
            </div>
            <div className='max-w-[95%] mx-auto flex items-center justify-end space-x-12 font-bold uppercase text-white pb-4 pt-16 text-sm'>
              <div className='header'>about</div>
              <div className='header'>service</div>
              <div className='header'>work</div>
              <div className='header'>company</div>
              <div className='header'>career</div>
              <div className='header'>news</div>
              <div className='header'>contact</div>
            </div>
          </header> 
        )    
      }
    </>
  )
}

export default Header

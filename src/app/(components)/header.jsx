"use client"
import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hamburger from './hamburger';
import IconSvg from '@/assets/svgs/iconsvg';
import TransitionLink from './transitionLink';
import { usePathname, useRouter } from 'next/navigation';
import { animatePageOut } from '../utils/animate';



gsap.registerPlugin(ScrollTrigger)

const Header = () => {
  const dispatch = useDispatch()
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname)
  const status = useSelector(state=>state.ui.show);
  const headerRef = React.useRef();

  const handleClick = (href) => {
    if (pathname !== href) {
      animatePageOut(href, router, dispatch)
    }
  }
  
  useGSAP(()=>{
    gsap.set(".animheader",
      {
        xPercent : -100
      }
    )
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


  useGSAP(()=>{
    const header = gsap.utils.toArray(".header");
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
      .to(header, {
        x : 100,
        duration : .3,
        stagger : -.04,
        opacity : 0
      },0).to(".mainheader", {
        display : "none"
      },0)
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
  
  const headerHover = (className) => {
    gsap.to(`.${className}`, {
      xPercent : 0,
      duration: .4
    })
  }

  const headerOut = (className) => {
    gsap.to(`.${className}`, {
      xPercent : -100,
      duration: .4
    })
  }
  
  return (
    <>
      {
        status && (
          <div className='relative'>
            <div className='fixed flex items-end justify-between w-full px-8 h-fit left-0 logo top-0 z-[300]'>
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
            <header className='fixed w-full z-[300] top-0 left-0 mainheader' ref={headerRef}>
              <div className='max-w-[95%] mx-auto hidden tab:flex items-center justify-end space-x-12 font-bold uppercase text-white pb-4 pt-12 text-sm relative z-[200]'>
                {
                  [
                    ["about", "/about"],
                    ["service","/service"],
                    ["work", "/work"],
                    ["company", "/company"],
                    ["career", "/career"],
                    ["news", "/news"],
                    ["contact", "/contact"],
                  ].map(([item, href], index) => (
                    <div
                    key={href}
                    className={`header cursor-pointer text-xs relative overflow-hidden ${ pathname === href && "text-[#A42319]" }`}
                    onClick={() => handleClick(href)}
                    onMouseEnter={() => {
                      pathname !== href && headerHover(`${`animateheader${index+1}`}`)}
                    }
                    onMouseLeave={() => {
                      pathname !== href && headerOut(`${`animateheader${index+1}`}`)}
                    }
                    href={href}
                    >
                      <div 
                      className={`absolute animheader animateheader${index+1} bottom-0 w-full h-0.5 bg-white pointer-events-none`}></div>
                      { item }
                    </div>
                  ))
                }
              </div>
            </header> 
          </div>
        )    
      }
    </>
  )
}


export default Header

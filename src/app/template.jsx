"use client"

import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useDispatch } from 'react-redux'
import { showHeader } from '@/store/uislice'


const Template = ({ children }) => {
  const dispatch = useDispatch()
  const timeline = React.useRef()
  useGSAP(()=>{
    timeline.current = gsap.timeline({
      defaults : {
        immediateRender : true,
        duration : 2,
        delay : 1,
        opacity : 1,
        onComplete : () => {
          dispatch(showHeader())
        }
      }
    })
    .set(".red", {
      xPercent : -101, 
      autoAlpha : 1
    }, 0)
    .to(".iconn", {
      x : 100,
      ease : "power2.out",
      opacity : 0,
      duration : .2
    }, 0)
    .to(".red", {
      autoAlpha : 1,
      xPercent : 200,
      ease : "power4.out",
    }, 0)
    .to(".overlay", {
      zIndex : -100
    }, .8)
  })

 
  return (
    <>
      <div className='fixed w-full h-full bg-black overlay z-[100] top-0 left-0'>
        <div className='flex items-center justify-center w-full h-full'>
          <img src='/icon.png' alt='img' className='object-cover iconn'/>
        </div>
        <div className='absolute top-0 left-0 w-3/4 h-full bg-[#B30606] opacity-0 red'></div>
      </div>
      { children }
    </>
  )
}

export default Template

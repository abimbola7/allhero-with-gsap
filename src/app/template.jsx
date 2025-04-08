"use client"

import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useDispatch } from 'react-redux'
import { showHeader } from '@/store/uislice'
import { animatePageIn } from './utils/animate'


const Template = ({ children }) => {
  const dispatch = useDispatch()
  // useGSAP(()=>{
  //   const openingRef = document.querySelector(".opening");
  //   const iconn = document.querySelector(".iconn");
  //   const overlay = document.querySelector(".overlay");
  //   gsap.timeline({
  //     defaults : {
  //       // immediateRender : false,
  //       duration : .6,
  //       delay : 1,
  //       opacity : 1,
  //       onComplete : () => {
  //         dispatch(showHeader())
  //       }
  //     }
  //   })
  //   .from(openingRef, {
  //     xPercent : -100, scaleX : 1
  //   }, 0)
  //   .to(iconn, {
  //     x : 100,
  //     ease : "power2.out",
  //     opacity : 0,
  //     duration : .5
  //   }, 0)
  //   .to(openingRef, {
  //     scaleX : 0, transformOrigin : "right"
  //   }, 0.2)
  //   .to(overlay, {
  //     zIndex : -100
  //   }, .7)
  // })

  useGSAP(() => {
    animatePageIn(dispatch);
  }, {
  dependencies : [dispatch]
  });
 
  return (
    <>
      <div className='fixed w-full h-full bg-black overlay z-[10000] top-0 left-0'>
        <div className='flex items-center justify-center w-full h-full iconn'>
          <img src='/icon.png' alt='img' className='object-cover w-20 h-20 tab:w-fit tab:h-fit'/>
        </div>
        <div 
        className='absolute top-0 left-0 w-full !p-0 !m-0 h-full bg-[#B30606] opening opacity-0'></div>
      </div>
      { children }
    </>
  )
}

export default Template

import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hamburger = () => {
  const hamburgerContainer = React.useRef(null);
  const timeline = React.useRef(null);
  const { contextSafe } = useGSAP(() => {
    const hamburger = gsap.utils.toArray(".hamburger")
    timeline.current = gsap.timeline({
      paused : true,
      duration : .1,
    })
    .to(".hamburger", {
      width : "100%",
      stagger : -.05
    })
    console.log(hamburger)
    
  }, { scope : hamburgerContainer })  

  const mouseEnter = contextSafe(() => {
    timeline?.current?.play();
  })
  
  const mouseLeave = contextSafe(() => {
    timeline?.current?.reverse();
  })
  
  return (
    <div 
    onMouseEnter={mouseEnter}
    onMouseLeave={mouseLeave}
    className='relative h-5 mb-3 cursor-pointer w-7 z-[100]' 
    ref={hamburgerContainer}>
      <div className='w-full h-[.2rem] bg-white absolute hamburger top-0 left-0'></div>
      <div className='w-[50%] h-[.2rem] bg-white absolute hamburger top-[45%] right-0'></div>
      <div className='w-[75%] h-[.2rem] bg-white absolute hamburger bottom-0 right-0'></div>
    </div>
  )
}

export default Hamburger

import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useSelector, useDispatch } from 'react-redux';
import XLogo from './ui/XLogo';
import { showSideBar } from '@/store/uislice';

const Hamburger = () => {
  const showBar = useSelector(state=>state.ui.showBar)
  const dispatch = useDispatch()
  console.log(showBar)
  const hamburgerContainer = React.useRef(null);
  const timeline = React.useRef(null);
  const timeline1 = React.useRef(null);
  const { contextSafe } = useGSAP(() => {
    console.log(document.querySelector(".xSymb"))
    const xSymb = document.querySelector(".xSymb")
    const hamb = document.querySelector(".hamb")
    const hamburger = gsap.utils.toArray(".hamburger")

    gsap.set(hamb, { x : 0 });
    gsap.set(xSymb, { x : 200 });

    timeline.current = gsap.timeline({
      paused : true,
      duration : .1,
    })
    .to(".hamburger", {
      width : "100%",
      stagger : -.05
    })
  
    timeline1.current = gsap.timeline({
      paused : true
    }).to(hamb, {
      x : 200
    }, 0)
    .to(xSymb, {
      x : -20
    }, .3)


    // if (showBar) {
    //   timeline1.current?.play()
    // } else {
    //   timeline1.current?.reverse()
    // }
    
  }, { 
    scope : hamburgerContainer,
  })  

  React.useEffect(() => {
    if (showBar) {
      timeline1.current?.play()
    } else {
      timeline1.current?.reverse()
    }
  }, [showBar])

  const mouseEnter = contextSafe(() => {
    timeline?.current?.play();
  })
  
  const mouseLeave = contextSafe(() => {
    timeline?.current?.reverse();
  })
  
  return (

    <>
      <div
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className='relative h-5 mb-3 cursor-pointer w-7 z-[100] hamb'
      onClick={() => dispatch(showSideBar())} 
      ref={hamburgerContainer}>
        <div className='w-full h-[.25rem] bg-white absolute hamburger top-0 left-0'></div>
        <div className='w-[50%] h-[.2rem] bg-white absolute hamburger top-[45%] right-0'></div>
        <div className='w-[75%] h-[.2rem] bg-white absolute hamburger bottom-0 right-0'></div>
      </div>

      {/* <XLogo /> */}

      <div 
      onClick={() => dispatch(showSideBar())}
      className='absolute h-5 mb-3 cursor-pointer w-7 z-[100] xSymb right-0'>
        <div className='w-full h-[.2rem] bg-white absolute hamburger top-0 origin-top-left rotate-[39deg] right-0'></div>
        <div className='w-full h-[.2rem] bg-white absolute hamburger bottom-0 right-0 origin-bottom-left -rotate-[39deg]'></div>
      </div>
    </>
  )
}

export default Hamburger

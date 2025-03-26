"use client"
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'

// import Icon from './svgs/icon'
import { TfiAngleLeft } from "react-icons/tfi";
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import Motto from '@/assets/svgs/motto'
import IconSvg from '@/assets/svgs/iconsvg'

gsap.registerPlugin(ScrollToPlugin);

const Slider2 = () => {
  const timeline = React.useRef()
  const container = React.useRef()
  const { contextSafe } = useGSAP(() => {
    const images = gsap.utils.toArray(".imgt");
    const fadeDuration = .5;
    const stayDuration = 2;
    // show the first one
    gsap.set(images[0],{
      autoAlpha : 1
    })

    timeline.current = gsap.timeline({
      repeat : -1,
      ease : "power2.inOut",
      delay : 2
    }).fromTo(images.slice(1), {
      xPercent : -15
    }, {
      xPercent : 0,
      delay : stayDuration,
      autoAlpha : 1,
      duration : fadeDuration,
      stagger : fadeDuration + stayDuration,
    })
    .to(images.slice(0, images.length - 1), {
      autoAlpha : 0,
      xPercent : -15,
      duration : .01,
      stagger : fadeDuration + stayDuration
    }, fadeDuration + stayDuration)
    .set(images[0], {
      xPercent : 0,
      autoAlpha : 1,
    })
    .to(images[images.length - 1], {
      autoAlpha : 0,
      xPercent : -15,
      duration : fadeDuration
    }, "+=" + stayDuration)

  }, {
    scope : container
  })

  const scrollToView = contextSafe(() => {
    gsap.to(window, {
      ease : "none",
      // duration : 1,
      scrollTo : "#section2",
      // scrollBehavior : "smooth"
    })
  })

  return (
    <div className='relative overflow-x-hidden' ref={container}>
      <div className="absolute z-[10] w-full h-full flex items-center justify-center overflow-hidden border border-red-500">
        <div className='absolute top-0 left-0 p-14'>
          <IconSvg
          fill={"#B30606"}
          height={"160"}
          width={"160"}
          key={"1"}
          />
        </div>
        <div className='absolute flex items-center space-x-8 tracking-wider text-white transition-transform -rotate-90 -left-4 bottom-40 '>
          <div onClick={scrollToView} className='p-3 border rounded-full border-[hsla(0,0%,100%,.3)] cursor-pointer'>
            <TfiAngleLeft size={16}/>
          </div>
          <p className='text-sm font-bold tracking-wider'>Scroll to web site</p>
        </div>
        <div className='mt-20'>
          <Motto />
        </div>
      </div>
      <div className='relative w-full h-full overflow-x-hidden'>
        <div className='overflow-hidden imgt img1'>
        <Image
          src={'https://res.cloudinary.com/dmkjaieb2/image/upload/v1721236524/img1_ki3zxp.png'}
          width={500}
          height={500}
          alt='img'
          quality={100}
          className='object-cover object-center w-full h-full'
          priority
          />
        </div>
        <div className='overflow-hidden imgt img2'>
        <Image
          src={'https://res.cloudinary.com/dmkjaieb2/image/upload/v1721236525/img4_j5pxep.png'}
          width={500}
          height={500}
          alt='img'
          quality={100}
          className='object-cover object-center w-full h-full'
          priority
          />
        </div>
        <div className='overflow-hidden imgt img3'>
        <Image
          src={'https://res.cloudinary.com/dmkjaieb2/image/upload/v1721236525/img2_ramrf8.png'}
          width={500}
          height={500}
          alt='img'
          quality={100}
          className='object-cover object-center w-full h-full'
          priority
          />
        </div>
        <div className='overflow-hidden imgt img4'>
        <Image
          src={'https://res.cloudinary.com/dmkjaieb2/image/upload/v1721236525/img3_odh6ua.png'}
          width={500}
          height={500}
          alt='img'
          quality={100}
          className='object-cover object-center w-full h-full'
          priority
          />
        </div>      
      </div>
    </div>
  )
}

export default Slider2

"use client"
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'
import TextTransition, { presets } from 'react-text-transition'

const texts = [ "sign", "job", "secret", "value"]

const Slider1 = () => {
  const [ index, setIndex ] = React.useState(0)
  const timeline = React.useRef()
  const container = React.useRef()
  const fadeDuration = .5;
  const stayDuration = 2;
  const { contextSafe } = useGSAP(() => {
    const images = gsap.utils.toArray(".imgt");
    // show the first one
    gsap.set(images[0],{
      autoAlpha : 1
    })

    timeline.current = gsap.timeline({
      repeat : -1,
      ease : "power2.inOut",
      delay : 2
    }).fromTo(images.slice(1), {
      yPercent : -15
    }, {
      yPercent : 0,
      delay : stayDuration,
      autoAlpha : 1,
      duration : fadeDuration,
      stagger : fadeDuration + stayDuration,
    })
    .to(images.slice(0, images.length - 1), {
      autoAlpha : 0,
      yPercent : -15,
      duration : .01,
      stagger : fadeDuration + stayDuration
    }, fadeDuration + stayDuration)
    .set(images[0], {
      yPercent : 0,
      autoAlpha : 1,
    })
    .to(images[images.length - 1], {
      autoAlpha : 0,
      yPercent : -15,
      duration : fadeDuration
    }, "+=" + stayDuration)

  }, {
    scope : container
  })

  React.useEffect(() => {
    setTimeout(() => {
      const intervalId = setInterval(() => {
        setIndex((index) => index + 1)
      }, (stayDuration + fadeDuration) * 1000)
      return () => {
        clearTimeout(intervalId)
      }
    }, 1400)
  }, [])

  return (
    <div className='relative overflow-x-hidden' ref={container}>
      <div className='w-full h-[80vh] relative overflow-x-hidden'>
        <div className='overflow-hidden imgt img1 white'>
        <Image
          src={'https://res.cloudinary.com/dmkjaieb2/image/upload/v1721149993/first_xvuf2n.png'}
          width={500}
          height={500}
          alt='img'
          quality={100}
          className='object-cover object-center w-full h-full'
          priority
          />
        </div>
        <div className='overflow-hidden imgt img2 black'>
        <Image
          src={'https://res.cloudinary.com/dmkjaieb2/image/upload/v1721149992/second_bzoqxh.png'}
          width={500}
          height={500}
          alt='img'
          quality={100}
          className='object-cover object-center w-full h-full'
          priority
          />
        </div>
        <div className='overflow-hidden imgt img3 black'>
        <Image
          src={'https://res.cloudinary.com/dmkjaieb2/image/upload/v1721149993/third_ku4wj4.png'}
          width={500}
          height={500}
          alt='img'
          quality={100}
          className='object-cover object-center w-full h-full'
          priority
          />
        </div>
        <div className='overflow-hidden imgt img4 black'>
        <Image
          src={'https://res.cloudinary.com/dmkjaieb2/image/upload/v1721149994/fourth_aztttm.png'}
          width={500}
          height={500}
          alt='img'
          quality={100}
          className='object-cover object-center w-full h-full'
          priority
          />
        </div>      
      </div>
      <div className='h-[20vh] w-full bg-white flex items-center justify-left font-semibold text-2xl px-10 space-x-20'>
        <p>Recruitment Advertising Agency</p>
        <div className="flex items-center justify-center space-x-20 text-[.7rem] font-semibold tracking-widest uppercase">
          <p>hero</p>
          <h1>
            <TextTransition springConfig={presets.wobbly}>
              { texts[index % texts.length] }
            </TextTransition>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Slider1

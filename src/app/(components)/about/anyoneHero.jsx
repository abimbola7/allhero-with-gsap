"use client"
import { textAnimation } from '@/app/utils/animate'
import { useGSAP } from '@gsap/react'
import React from 'react'

const AnyoneHero = () => {
  useGSAP(() => {
    textAnimation(".heroSect")
  })
  return (
    <div className='w-full grid grid-cols-1 tab:grid-cols-2 justify-items-center bg-[#181818] '>
      <div className='py-60 bg-[#640000] w-full flex items-center text-white flex-col heroSect'>
        <div className='flex flex-col w-full gap-10 px-6 tab:px-0 tab:max-w-[280px] relative'>
          <div className='relative tab:absolute top-0 left-0 tab:-left-20 uppercase text-[#ffffff80] text-[.7rem] !rotate-0 tab:!-rotate-90 tab:translate-y-8 font-extrabold tracking-wider tab:-translate-x-7 minislogan w-fit h-fit !transform-none'>
            VISION
          </div>
          <div className='flex flex-col gap-4 w-full max-w-[280px]'>
            <h1 className="text-[6rem] leading-none font-semibold heroSect">
              Anyone Can Be a HERO. 
            </h1>
            <p className='text-[14px] font-semibold text-[hsla(0,0%,100%,.5)] tracking-wide heroSect'>
              There is <span className='text-white'>no supporting role.</span>
            </p>
          </div>

          <div className='flex flex-col gap-4'>
            <h1 className="text-3xl tracking-wide heroSect">
              Everyone is the protagonist
            </h1>
            <p className="text-[15px] heroSect">
            ALL-IN has no supporting role. The protagonist in his life is himself, who is no one else. ALL-IN provides a place where only that person has and can break through.
            </p>
          </div>
        </div>

      </div>
      <div className='py-60 bg-[#ffffff] w-full flex items-center text-black flex-col heroSect'>
        <div className='flex flex-col w-full gap-10 px-6 tab:px-0 tab:max-w-[280px] relative'>
          <div className='relative tab:absolute top-0 left-0 tab:-left-20 uppercase text-[#000] text-[.7rem] !rotate-0 tab:!-rotate-90 tab:translate-y-8 font-extrabold tracking-wider tab:-translate-x-7 minislogan w-fit h-fit !transform-none'>
            MISSION
          </div>
          <div className='flex flex-col gap-4 w-full max-w-[280px]'>
            <h1 className="text-[6rem] leading-none font-semibold heroSect">
              Be your own HERO. 
            </h1>
            <p className='text-[14px] font-semibold text-[rgba(0,0,0,.5)] tracking-wide heroSect'>
              There is <span className='text-black'>no supporting role.</span>
            </p>
          </div>

          <div className='flex flex-col gap-4'>
            <h1 className="text-3xl tracking-wide heroSect">
              I am a hero
            </h1>
            <p className="text-[15px] heroSect">
            There are always challenges that can be solved because of that person, and who can help because of that person. Not only the chosen person can be a hero, but anyone can be a hero of someone who has not yet seen.
            </p>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default AnyoneHero

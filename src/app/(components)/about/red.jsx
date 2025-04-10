"use client"
import React from 'react'
import { mockAnimation } from '@/app/utils/animate'
import { useGSAP } from '@gsap/react'

const Red = () => {
  useGSAP(() => {
    mockAnimation(".minisection2")
  })
  return (
    <div className="w-full h-fit tab:h-screen bg-[#181818] red flex items-center py-10" id='section2'>
      <div className='relative flex flex-col justify-start w-full max-w-3xl px-3 text-white tab:px-0 tab:max-w-5xl gap-y-5 tab:gap-y-16 mx-auto minisection2'>
        <div className='relative tab:absolute top-0 left-0 tab:-left-10 uppercase text-[#ffffff80] text-[.7rem] !rotate-0 tab:!-rotate-90 tab:translate-y-8 font-extrabold tracking-wider tab:-translate-x-7 minislogan w-fit h-fit !transform-none'>
          our slogan
        </div>
        <div className='w-full grid tab:grid-cols-3 gap-1'>
          <div className='py-2 grid-items'>
            <h1 className='text-7xl font-bold text-white'>
              RED
            </h1>
            <p className='mt-3 text-[hsla(0,0%,100%,.5)] text-sm font-semibold'>
              Collaboration with <span className="text-white">all other colors</span>
            </p>

            <div className='mt-4 tab:mt-8'>
              <div className='w-32 h-6 grid grid-cols-5'>
                <div className='col-span-2 bg-[#A42319]'></div>
                <div className='bg-[#7E1911]'></div>
                <div className='bg-[#5C100A]'></div>
                <div className='bg-[#420A06]'></div>
              </div>
            </div>

            <h2 className='text-lg tab:text-3xl font-semibold tracking-wide mt-4 tab:mt-14'>The color of bonds for betting all.</h2>
          </div>
          <div className='col-span-2 flex flex-col space-y-6 grid-items'>
            <h1 className="text-xl tab:text-3xl font-medium">Shoot out sensitivity with the color of the bond.</h1>
            <p className="text-[hsla(0,0%,100%,.5)] text-[15px] tracking-wider">
            A person&apos; heart is shaken when sensitivity is stimulated. We stick to the quality of the output because we believe that elements such as logic art, digital and analog that have reached the details of the production are all together and shoot out users with first impressions. Red in corporate color is a color that increases a person&apos; sensitivity even more. If you change your perspective, it can be said that it is a color that shakes people&apos; hearts. Bet everything for customers waiting for help and positioned red as “ bond color ”.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Red

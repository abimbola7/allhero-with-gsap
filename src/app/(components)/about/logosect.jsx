"use client"
import All from '@/assets/svgs/all'
import BrandLogo from '@/assets/svgs/brandlogo'
import Flag from '@/assets/svgs/flag'
import Mountain from '@/assets/svgs/mountain'
import Plane from '@/assets/svgs/plane'
import React from 'react'

const LogoSect = () => {
  return (
    <div className='w-full h-full  bg-[#640000]'>
      <div className="w-full max-w-6xl mx-auto py-[150px] flex flex-col gap-8 items-center text-white">
        <div>
          <BrandLogo
          height={"auto"}
          width={"auto"}
          fill={"#ffffff"}
          className={"max-w-[900px] max-h-[300px] h-full w-full allin mx-auto"}
          />
        </div>

        <p className='!text-lg font-semibold allin allin'>
          A naughty cloak with four meanings
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 tab:grid-cols-4'>
        <div className='py-24 px-14 bg-[#5A0000] flex flex-col gap-8'>
          <div className='flex flex-col items-center justify-center gap-6 text-center text-white'>
            <Mountain
            height={"auto"}
            width={"auto"}
            fill={"#ffffff"}
            className={"max-w-[50px] max-h-[50px] h-full w-full allin"}
            />

            <p className='text-lg font-semibold allin'>Mountain</p>
          </div>

          <p className='text-[#ffffff80] text-sm text-justify allin'>
          We will carry out a stable management on a mountain-like majestic scale so that we do not have any financial hardship with all the people involved.
          </p>
        </div>
        <div className='py-24 px-14 bg-[#510000] flex flex-col gap-8'>
          <div className='flex flex-col items-center justify-center gap-6 text-center text-white'>
            <Plane
            height={"auto"}
            width={"auto"}
            fill={"#ffffff"}
            className={"max-w-[50px] max-h-[50px] h-full w-full allin"}
            />

            <p className='text-lg font-semibold allin'>Fly</p>
          </div>

          <p className='text-[#ffffff80] text-sm text-justify allin'>
          Give the client wings to accelerate growth and use their own wings to flap freely.
          </p>
        </div>
        <div className='py-24 px-14 bg-[#540000] sm:bg-[#510000] tab:bg-[#5A0000] flex flex-col gap-8'>
          <div className='flex flex-col items-center justify-center gap-6 text-center text-white'>
            <Flag
            height={"auto"}
            width={"auto"}
            fill={"#ffffff"}
            className={"max-w-[50px] max-h-[50px] h-full w-full allin"}
            />

            <p className='text-lg font-semibold allin'>Flag</p>
          </div>

          <p className='text-[#ffffff80] text-sm text-justify allin'>
          A hero symbol that &apos;we are here&apos;. Raise the flag high in heaven even during a storm.
          </p>
        </div>
        <div className='py-24 px-14 bg-[#510000] sm:bg-[#540000] tab:bg-[#510000] flex flex-col gap-8'>
          <div className='flex flex-col items-center justify-center gap-6 text-center text-white'>
            <All
            height={"auto"}
            width={"auto"}
            fill={"#ffffff"}
            className={"max-w-[50px] max-h-[50px] h-full w-full allin"}
            />

            <p className='text-lg font-semibold allin'>All</p>
          </div>

          <p className='text-[#ffffff80] text-sm text-justify allin'>
          It is one of the words that forms the company name and shows the readiness to &apos;bet the whole thing.&apos;
          </p>
        </div>
      </div>
    </div>
  )
}

export default LogoSect

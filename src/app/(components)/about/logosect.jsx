"use client"
import BrandLogo from '@/assets/svgs/brandlogo'
import React from 'react'

const LogoSect = () => {
  return (
    <div className='w-full h-full  bg-[#640000] px-10 tab:px-0'>
      <div className="w-full max-w-6xl mx-auto py-[150px] flex flex-col gap-10 items-center text-white">
        <div>
          <BrandLogo
          height={"auto"}
          width={"auto"}
          fill={"#ffffff"}
          className={"max-w-[900px] max-h-[300px] h-full w-full allin mx-auto"}
          />
        </div>

        <p className='!text-lg font-semibold allin'>
          A naughty cloak with four meanings
        </p>
      </div>
      <div className='grid grid-cols-4'>
        <div className=''>
          
        </div>
      </div>
    </div>
  )
}

export default LogoSect

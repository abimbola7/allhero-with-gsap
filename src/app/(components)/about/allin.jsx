"use client"
import { textAnimation } from '@/app/utils/animate'
import AllinSvg from '@/assets/svgs/allinsvg'
import { useGSAP } from '@gsap/react'
import React from 'react'

const Allin = () => {
  useGSAP(() => {
    textAnimation(".allin")
  })
  return (
    <div className='w-full h-full py-[150px] tab:py-[300px] bg-[#000000] px-10 tab:px-0'>
      <div className="flex flex-col w-full max-w-5xl gap-12 mx-auto tab:gap-20">
        <div>
          <AllinSvg
          height={"auto"}
          width={"auto"}
          fill={"#ffffff"}
          className={"max-w-[900px] max-h-[260px] h-full w-full allin"}
          />
        </div>

        <p className="text-[hsla(0,0%,100%,.5)] text-[15px] font-medium tracking-wider allin">
          By placing the center of gravity on the left side, we expressed the forward tilt position of &apos;running around&apos;. While designing for sporty to give out the lightness of footwork, we also add strength and smartness to help you reach out with peace of mind.
        </p>
      </div>
    </div>
  )
}

export default Allin

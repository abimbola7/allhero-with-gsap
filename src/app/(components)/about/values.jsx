"use client"

import { textAnimation } from '@/app/utils/animate'
import { useGSAP } from '@gsap/react'
import React from 'react'

const Values = () => {

  useGSAP(() => {
    textAnimation(".listitem")
  })
  const values  = [
    {
      title : "Stay Low Key",
      desc : "Live with your own values, not others"
    },
    {
      title : "Be Your Own Hero",
      desc : "Become a hero for yourself"
    },
    {
      title : "Just Choose Kind",
      desc : "If you get lost, choose kindness"
    },
    {
      title : "Done is better than Perfect",
      desc : "Aim for competition rather than perfection"
    },
    {
      title : "Be Collective",
      desc : "Cooperative, not conflicting"
    },
    {
      title : "Be Transferable",
      desc : "Flexible and general purpose"
    },
  ]
  return (
    <div className='w-full h-full py-[300px] bg-[#181818] px-10 tab:px-0'>
      <div className="flex flex-col w-full max-w-5xl gap-10 mx-auto tab:flex-row tab:gap-0">
        <div className='tab:flex-[37] max-w-[280px] tab:mx-auto w-full flex flex-col gap-4'>
          <h1 className="text-[5rem] leading-none font-semibold heroSect text-white text-left">
            We Build Value.
          </h1>
          <p className='text-[14px] font-semibold text-[hsla(0,0%,100%,.5)] tracking-wide heroSect'>
            There is <span className='text-white'>no supporting role.</span>
          </p>
        </div>
        <div className='tab:flex-[63] flex justify-end w-full tab:px-10'>
          <div className='grid w-full grid-rows-6 gap-4 space-y-4'>
            {
              values.map((item, i) => (
                <div 
                className="flex flex-row items-center py-2 pb-8 gap-10 text-white border-b border-[hsla(0,0%,100%,.1)] listitem" 
                key={i}>
                  <span className='text-[hsla(0,0%,100%,.5)] text-xs font-semibold'>{ `0${i+1}` }</span>
                  <h1 className='text-2xl font-semibold w-fit'>{ item.title }</h1>
                  <p className='w-fit text-[hsla(0,0%,100%,.5)]'>{ item.desc }</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Values

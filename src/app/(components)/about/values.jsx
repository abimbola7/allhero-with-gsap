"use client"

import React from 'react'

const Values = () => {
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
    <div className='w-full h-full py-[300px] bg-[#181818] 1'>
      <div className="flex flex-row w-full max-w-5xl mx-auto">
        <div className='flex-[37] max-w-[280px] mx-auto w-full flex flex-col gap-4 '>
          <h1 className="text-[5rem] leading-none font-semibold heroSect text-white">
            We Build Value.
          </h1>
          <p className='text-[14px] font-semibold text-[hsla(0,0%,100%,.5)] tracking-wide heroSect'>
            There is <span className='text-white'>no supporting role.</span>
          </p>
        </div>
        <div className='flex-[63] flex justify-end w-full px-10'>
          <div className='grid w-full grid-rows-6 gap-4 space-y-4'>
            {
              values.map((item, i) => (
                <div 
                className="flex flex-row items-center py-2 pb-8 space-x-10 text-white border-b border-[hsla(0,0%,100%,.1)]" 
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

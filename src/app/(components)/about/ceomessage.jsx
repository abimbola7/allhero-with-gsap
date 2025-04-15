"use client"
import React from 'react'

const CeoMessage = () => {
  return (
    <div className='w-full h-full py-[150px] tab:py-[300px] bg-[#181818] px-3 sm:px-10 tab:px-3'>
      <div className='grid w-full max-w-6xl grid-cols-1 mx-auto tab:grid-cols-2 gap-20'>
        <div className=''>
          <img src="/stewie.jpeg" alt="jpeg" className="object-center object-cover w-full h-full rounded-xl heroSect" />
        </div>
        <div className='w-full flex flex-col gap-20'>
          <div className="w-full max-w-[250px] text-white flex flex-col gap-6">
            <h1 className="text-[4rem] leading-none font-semibold heroSect">
              Just Choose The Dark Side
            </h1>

            <p className='text-[14px] font-semibold text-[hsla(0,0%,100%,.5)] tracking-wide heroSect'>
              CEO <span className='text-white'>Darth Vader</span>
            </p>
          </div>

          <div className='flex flex-col gap-4'>
            <h4 className='font-semibold text-2xl text-white tracking-wider heroSect'>
              What… can one do for those in need?
            </h4>

            <p className='text-[hsla(0,0%,100%,.5)] text-[15px] tracking-wide heroSect'>
            I have risen through the ranks of the Empire not through privilege, but through the aid of others. I know the value of support. When I entered the Recruitment Division of the Imperial Outreach Corps, my doctrine was clear: only the premier holoplans, the top-tier transmissions worthy of the Empire’s cause.
            But then came resistance… a minor functionary named Mashiro, a salesman from the Outer Rim.
            He spoke of lesser plans. &apos;Cheaper placements. Higher turnover.&apos; Foolishness.
            And when one seeks to attract elite beings from Mandalorian tacticians to Core World engineers—you do not whisper in the void.
            You broadcast… with power. With reach. With purpose.
            That is my creed. That is my command. And that… is the path to true order.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CeoMessage;
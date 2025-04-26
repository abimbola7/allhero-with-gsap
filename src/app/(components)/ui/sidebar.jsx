"use client"

import { animatePageOut } from '@/app/utils/animate';
import IconSvg from '@/assets/svgs/iconsvg';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Sidebar = () => {
  const showBar = useSelector(state=>state.ui.showBar)
  const dispatch = useDispatch()
  const router = useRouter();
  const pathname = usePathname();
  const handleClick = (href) => {
    if (pathname !== href) {
      animatePageOut(href, router, dispatch)
    }
  }
  return (
    <>
      {
        showBar && (
      <div className='w-full h-screen bg-black fixed z-[100] flex items-center justify-center px-3'>
        {/* <div className='absolute top-0 left-0 p-4 tab:p-10'>
            <IconSvg
            fill={"#B30606"}
            height={"auto"}
            width={"auto"}
            className='w-[85px] h-[85px] tab:w-[140px] tab:h-[140px]'
            key={"1"}
            />
        </div> */}
        <div className='flex flex-col w-full max-w-2xl'>
          {
            [
              ["about", "/about"],
              ["service","/service"],
              ["work", "/work"],
              ["company", "/company"],
              ["career", "/career"],
              ["news", "/news"],
              ["contact", "/contact"],
            ].map(([item, href], index) => (
              <div
              key={index}
              onClick={() => handleClick(href)}
              className='text-6xl font-semibold text-white capitalize cursor-pointer hover:text-[#B30606] transition-colors duration-[900ms] w-fit'>
                {item}
              </div>
            ))  
          }
        </div>
      </div>
        )
      }
    </>
  )
}

export default Sidebar

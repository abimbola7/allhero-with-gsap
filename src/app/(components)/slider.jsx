"use client"

import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Slider1 from './slider1'
import Slider2 from './slider2'

const Slider = () => {
  const container = React.useRef()
  const timeline = React.useRef()
  const { contextSafe } = useGSAP(() => {

  })
  return (
    <div className='w-full h-screen grid grid-cols-2 overflow-hidden section1'>
      <Slider2 />
      <Slider1 />
    </div>
  )
}

export default Slider

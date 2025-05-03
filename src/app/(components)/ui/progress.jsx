"use client"

import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Progress = ({ stay, fade }) => {
  const progressRef = useRef()

  useGSAP(() => {
    gsap.set(progressRef.current, { width: '0%' })

    gsap.timeline({ repeat: -1, defaults: { ease: 'none' } })
      .to(progressRef.current, {
        width: '100%',
        duration: stay + fade + .8
      })
      .set(progressRef.current, { width: '0%' }) // Reset instantly after each full cycle
  }, [stay, fade])

  return (
    <div
      ref={progressRef}
      className="absolute bottom-0 left-0 h-1 bg-[#B30606] w-0"
    />
  )
}

export default Progress

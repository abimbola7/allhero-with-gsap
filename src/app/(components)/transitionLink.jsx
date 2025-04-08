"use client"
import { usePathname, useRouter } from "next/navigation"
import React from 'react'
import { animatePageOut } from "../utils/animate";
import { useDispatch } from "react-redux";

const TransitionLink = ({ href, className, children }) => {
  const dispatch = useDispatch()
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router, dispatch)
    }
  }
  return (
    <div
    className={className}
    onClick={handleClick}
    >
      { children }
    </div>
  )
}

export default TransitionLink

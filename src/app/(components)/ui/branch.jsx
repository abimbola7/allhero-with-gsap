import React from 'react'

const Branch = ({ title, id, className }) => {
  return (
    <div className={`flex items-center space-x-2 text-[#ffffff80] text-xs font-semibold tracking-widest ${ className  }`}>
      <span>{id}</span>
      <div className="w-28 h-[.1px] bg-[#ffffff80]"/>
      <span>{title}</span>
    </div>
  )
}

export default Branch

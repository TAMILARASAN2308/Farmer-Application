import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-200 p-5 w-full'>
      <ul className='flex flex-wrap items-center justify-center gap-8 my-2'>
        <li className='text-sm text-slate-500 hover:text-slate-700 cursor-pointer'>Privacy Policy</li>
        <li className='text-sm text-slate-500 hover:text-slate-700 cursor-pointer'>Security</li>
        <li className='text-sm text-slate-500 hover:text-slate-700 cursor-pointer'>Terms and Service</li>
      </ul>
      <div className='text-center text-sm'>&copy; 2024. All rights reserved.</div>
    </div>
  )
}

export default Footer

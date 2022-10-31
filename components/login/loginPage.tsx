import React from 'react'
import { IconContext } from 'react-icons';

import { BsGoogle } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa"
import { BsApple } from "react-icons/bs"

export default function Login() {
  return (
    <div className='flex justify-center bg-[#F9DFDA] bg-[url("/image/vaccine.svg")]'>
      <div className='mt-16 mb-16 w-1/4 p-1 rounded-3xl bg-white shadow-xl'>
        <div className='text-center mt-16'>
          <h1 className='font-bold text-2xl mb-2'>User Login</h1>
          <p className='font-normal text-md px-2'>Hey, Enter your details to get sign in to your account</p>
        </div>
        <div className='flex flex-col items-center mt-8 gap-4'>
          <div className='w-9/12 h-10 border-2 rounded-md'>
            <input
              className='w-full px-3 py-1.5 rounded-md'
              type="email"
              placeholder='email' />
          </div>
          <div className='w-9/12 h-10 border-2 rounded-md'>
            <input
              className='w-full px-3 py-1.5 rounded-md'
              type="password"
              placeholder='passoword' />
          </div>
        </div>
        <div className='flex flex-col items-center gap-3 mt-4 mb-4'>
          <h3 className='text-sm font-medium mr-28 cursor-pointer'>having trouble with sign in?</h3>
          <button className='w-9/12 h-10 bg-[#F3C7BD] rounded-md font-semibold text-sm hover:hover:bg-[#FDAE9C] hover:shadow-md'>
            Sign in
          </button>
          <h3 className='text-sm font-medium'>-or sign in with-</h3>
        </div>
        <div className='flex flex-row justify-center mt-4 gap-2'>
          <div className='flex w-auto h-10 border-2 gap-1 px-1 rounded-md cursor-pointer hover:shadows-sm hover:shadow-md'>
            <IconContext.Provider value={{ color: "black", className: "mt-2", size: '1.2rem' }}>
              <BsGoogle />
              <h2 className='mt-2 text-sm font-semibold'>Google</h2>
            </IconContext.Provider>
          </div>
          <div className='flex w-auto h-10 border-2 gap-1 px-1 rounded-md cursor-pointer hover:shadow-md'>
            <IconContext.Provider value={{ color: "black", className: 'mt-2', size: '1.2rem' }}>
              <FaFacebook />
              <h2 className='mt-2 text-sm font-semibold'>Facebook</h2>
            </IconContext.Provider>
          </div>
          <div className='flex w-auto h-10 border-2 gap-1 px-1 rounded-md cursor-pointer hover:shadow-md'>
            <IconContext.Provider value={{ color: "black", className: 'mt-2', size: '1.2rem' }}>
              <BsApple />
              <h2 className='mt-2 text-sm font-semibold'>Apple ID</h2>
            </IconContext.Provider>
          </div>
        </div>
        <div className='text-center mt-4 mb-16 text-sm'>
          Dont Have an account ?
          <h2 className='text-sm font-semibold cursor-pointer'>Request now</h2>
        </div>
      </div>
    </div>
  )
}

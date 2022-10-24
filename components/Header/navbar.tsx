import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
    <nav className='mt-8'>
      <div className='flex justify-between items-center'>
        <div className='mx-4 font-bold text-md'>
        <Link href={"/"} passHref>
            ALOHA
          </Link>
          <p className='font-normal'>Creatic</p>
        </div>
        <div>
          <ul className='flex gap-6'>
            <li className='cursor-pointer hover:font-semibold '>Home</li>
            <li className='cursor-pointer hover:font-semibold '>About</li>
            <li className='cursor-pointer hover:font-semibold '>Services</li>
          </ul>
        </div>
        <button className='mx-4 bg-[#F3C7BD] px-6 py-1 rounded-xl hover:shadow-md hover:bg-[#FDAE9C]'>
          <Link href={"/loginpage"} passHref>
            Login
          </Link>
        </button>
      </div>
    </nav>
  )
}

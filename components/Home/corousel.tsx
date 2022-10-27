import React from 'react'
import Image from 'next/image'
import mediation from '../../public/image/mediation.svg'
import { CgArrowLongRight } from "react-icons/cg";
import { IconContext } from 'react-icons';

export default function Corousel() {
  return (
    <div className='flex justify-center mt-16'>
      <div className='w-3/5 h-1/2 bg-[#F3C7BD] rounded-lg cursor-normal hover:shadow-md transition ease-in-out hover:translate-y-1 hover:scale-110'>
        <div className='flex justify-between'>
          <div className='mt-16 mx-10'>
            <h1 className='w-1 text-2xl font-bold mb-4'>Nature Lover</h1>
            <p className='w-2/3'>
              Nature love is someone who thrive
              on spending time in the outdors and
              observating wild animals and plant
            </p>
            <div className='flex gap-2 mt-6 font-medium cursor-pointer'>
              <h2 className='mt-2'>Explore More</h2>
              <IconContext.Provider value={{className: "mt-1", size: '2.3rem'}}>
                <CgArrowLongRight />
              </IconContext.Provider>
            </div>
          </div>
          <div>
            <Image
              src={mediation}
              alt='mediation'
              width='900px'
              height='650px'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

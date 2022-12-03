import React from 'react'
import Image from 'next/image'
import check from "../../public/image/check.svg"
import rongten from "../../public/image/rontgen.svg"

export default function Content() {
    return (
        <div className='flex justify-center'>
            <div className='w-3/5 mt-4'>
                <h1 className='font-medium'>Categories</h1>
                <div className='flex gap-4'>
                    <div className='w-56 h-auto bg-[#FCF0E4] mt-2 rounded-md transition ease-in-out hover:translate-y-1 hover:scale-110 cursor-pointer'>
                        <div className='flex flex-col items-center'>
                            <Image
                                src={check}
                                alt='vitamin'
                                width='200px'
                                height='200px'
                            />
                            <p className='font-semibold'>Inpatient</p>
                        </div>
                    </div>
                    <div className='w-56 bg-[#A5D1F1] mt-2 rounded-md transition ease-in-out hover:translate-y-1 hover:scale-110'>
                        <div className='flex flex-col items-center'>
                            <Image
                                src={rongten}
                                alt='vitamin'
                                width='200px'
                                height='200px'
                            />
                            <p className='font-semibold'>Rontgen</p>
                        </div>
                    </div>
                    <div className='w-56 bg-[#FCA783] mt-2 rounded-md transition ease-in-out hover:translate-y-1 hover:scale-110'>

                    </div>
                    <div className='w-56 bg-[#C0DD91] mt-2 rounded-md transition ease-in-out hover:translate-y-1 hover:scale-110'>

                    </div>
                    <div className='w-56 bg-[#D3A6F6] mt-2 rounded-md transition ease-in-out hover:translate-y-1 hover:scale-110'>

                    </div>
                    <div className='w-56 bg-[#99EDF3] mt-2 rounded-md transition ease-in-out hover:translate-y-1 hover:scale-110'>

                    </div>
                    <div className='w-56 bg-[#6F8EFD] mt-2 rounded-md transition ease-in-out hover:translate-y-1 hover:scale-110'>

                    </div>
                </div>
            </div>
        </div>
    )
}

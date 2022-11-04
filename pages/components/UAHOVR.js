import React from 'react'
import Image from 'next/image'

const UAHOVR = () => {
    return (
        <div className='mb-40 relative'>
            <div className='flex'>
                <div className='w-2/3 relative'>
                    <Image
                        src='https://www.underarmour.com/_next/image/?url=https%3A%2F%2Funderarmour.scene7.com%2Fis%2Fimage%2FUnderarmour%2F%2FSS22_Run_HOVR_Sonic5_Site_7_5_W%3Fqlt%3D75%26fmt%3Djpg%26scl%3D1%26&w=1920&q=75'
                        width='100vw'
                        height='75px'
                        layout='responsive'
                        alt='People running with UAHOVR shoes'
                    />

                </div>
                <div className="w-1/3 mt-10 h-full">
                    <Image
                        src='https://www.underarmour.com/_next/image/?url=https%3A%2F%2Funderarmour.scene7.com%2Fis%2Fimage%2FUnderarmour%2F%2FSS22_Run_HOVR_Sonic5_Site_4_5_W%3Fqlt%3D75%26fmt%3Djpg%26scl%3D1%26&w=1920&q=75'
                        width='100vw'
                        height='136px'
                        layout='responsive'
                        alt='Woman running with UAHOVR shoes'
                    />
                </div>
            </div>

            <div className='flex flex-col items-center text-center md:absolute md:text-white md:top-20 lg:top-48 xl:top-96 md:text-left md:w-[25%] md:ml-10'>
                <p className='font-extrabold text-3xl'>LIGHT + AIRY. <br /> COACHES YOUR FORM.</p>
                <p className='text-xs'>One of our best-selling running shoes, built to perform even better with real-time coaching to help you run faster, farther.</p>
                <button className='py-3 px-8 bg-black text-white rounded mt-4 text-xs hover:bg-gray-700 active:bg-gray-700 md:mt-10 md:bg-white md:text-black md:hover:text-gray-600 md:hover:bg-white'>Shop UA HOVR&trade; Sonic 5</button>
            </div>
        </div>
    )
}

export default UAHOVR
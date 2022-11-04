import React from 'react'
import Image from 'next/image'

const Meridian = () => {
    return (
        <div className='flex flex-col items-center justify-center text-center md:mt-20 md:flex-row'>


            <div className='flex flex-col items-center md:w-1/3 md:ml-10'>
                <div className='w-1/2 mt-20 md:w-full'>
                    <h2>UA Meridian</h2>
                    <p className='font-extrabold text-2xl'>OUR SOFTEST FABRIC FOR YOUR TOUGHEST WORKOUTS</p>
                    <p>We created the ultimate quick-dry hybrid that lets you go hard without losing that super-soft feel.</p>
                </div>

                <div className='flex flex-col my-5 w-[90%]'>
                    <button className='bg-black text-white mb-2 rounded p-1 hover:bg-gray-600'>
                        <a href='women'>
                            Shop Women
                        </a>
                    </button>
                    <button className='bg-black text-white my-2 rounded p-1 hover:bg-gray-600'>
                        <a href='men'>
                            Shop Men
                        </a>
                    </button>
                </div>
            </div>


            <div className='w-[100vw]'>
                <Image
                    width='100vw'
                    height='100%'
                    layout='responsive'
                    src={'https://www.underarmour.com/_next/image/?url=https%3A%2F%2Funderarmour.scene7.com%2Fis%2Fimage%2FUnderarmour%2F%2FFW22_TRN_Cogender_Meridian_Site_2_1_COG_AMR%3Fqlt%3D75%26fmt%3Djpg%26scl%3D1%26&w=2048&q=75'}
                    alt='Under Armour Meridians'
                />
            </div>


        </div>
    )
}

export default Meridian
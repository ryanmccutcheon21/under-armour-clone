import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div>
            <Image
                src='https://www.underarmour.com/_next/image/?url=https%3A%2F%2Funderarmour.scene7.com%2Fis%2Fimage%2FUnderarmour%2F%2FFW22_Outdoor_Freedom_RepositioningCampaign_Collection_Site_Hero_2_1%3Fqlt%3D75%26fmt%3Djpg%26scl%3D1%26&w=2048&q=75'
                width='100vw'
                height='50vh'
                layout='responsive'
            />

            <div className='flex flex-col items-center mt-5 md:absolute md:top-72 md:text-white md:left-14'>
                <h2>UA Freedom Collection</h2>
                <p className='font-extrabold text-2xl md:text-3xl'>WORKS HARD. <br /> GIVES BACK.</p>
                <p className='text-xs'>Every purchase supports those in service.</p>
                <button className='mt-5 py-2 px-10 bg-gray-800 text-white cursor-pointer rounded md:bg-white md:text-black md:hover:text-gray-700'>Shop UA Freedom Collection</button>
            </div>
        </div>
    )
}

export default Hero
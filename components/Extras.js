import React from 'react'
import Image from 'next/image'

const Extras = () => {
    return (
        <div className='flex mx-5 justify-between mb-40'>
            <div className='cursor-pointer w-[45vw]'>
                <Image
                    src='https://www.underarmour.com/_next/image/?url=https%3A%2F%2Funderarmour.scene7.com%2Fis%2Fimage%2FUnderarmour%2F%2FFW22_Collegiate_Site_8_5%3Fqlt%3D75%26fmt%3Djpg%26scl%3D1%26&w=1920&q=75'
                    width='100vw'
                    height='100%'
                    layout='responsive'
                    alt='extra'
                />
                <p className='hover:underline mt-5'>Shop Fan Gear</p>
            </div>

            <div className='cursor-pointer w-[45vw]'>
                <Image
                    src='https://www.underarmour.com/_next/image/?url=https%3A%2F%2Funderarmour.scene7.com%2Fis%2Fimage%2FUnderarmour%2F%2FFW22_YTH_RivalFleece_Site_8_5_G%3Fqlt%3D75%26fmt%3Djpg%26scl%3D1%26&w=1920&q=75'
                    width='100vw'
                    height='100%'
                    layout='responsive'
                    alt='extra'
                />
                <p className='hover:underline mt-5'>Shop Kids&#39; Fleece</p>
            </div>

        </div>
    )
}

export default Extras
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

const carouselData = [
    {
        src: 'https://www.underarmour.com/_next/image/?url=https%3A%2F%2Funderarmour.scene7.com%2Fis%2Fimage%2FUnderarmour%2FV5-1373728-592_FC%3Frp%3Dstandard-0pad%257CgridTileDesktop%26scl%3D1%26fmt%3Djpg%26qlt%3D50%26resMode%3Dsharp2%26cache%3Don%252Con%26bgc%3DF0F0F0%26wid%3D512%26hei%3D640%26size%3D512%252C640&w=1200&q=75',
        description: "Men's UA Meridian Short Sleeve",
        price: '$60.00'
    },
    {
        src: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1374493-176_FC?rp=standard-0pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=566&hei=708&size=566,708',
        description: "Women's UA Meridian Crop Top",
        price: '$65.00'
    },
    {
        src: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1373921-486_FC?rp=standard-0pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=566&hei=708&size=566,708',
        description: "Women's UA Meridian Ankle Leggings",
        price: '$60.00'
    },
    {
        src: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1375417-592_FC?rp=standard-0pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=566&hei=708&size=566,708',
        description: "Women's UA Meridian Crop Top",
        price: '$65.00'
    },
]

const moreItems = [
    {
        src: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1373730-176_FC?rp=standard-0pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=566&hei=708&size=566,708',
        description: "Men's UA Meridian Tapered Pants",
        price: '$90.00'
    },
    {
        src: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1373922-001_FC?rp=standard-0pad|pdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=566&hei=708&size=566,708',
        description: "Women's UA Meridian Jacket",
        price: '$85.00'
    },
]

const Carousel = () => {

    return (
        <div className='flex flex-grow mt-20 mb-40'>
            {carouselData.map(({ src, description, price }, idx) => {
                if (idx < 4) {
                    return (
                        <div className='mx-3 w-[200px] h-[200px]' key={idx}>
                            <Image src={src} alt='item' width='200px' height='200px' />
                            <p>{description}</p>
                            <p className='text-gray-600'>{price}</p>
                        </div>
                    )
                }
                return null
            }
            )}
            {/* <button className='rounded-full w-10 h-10 shadow-md my-auto'>&gt;</button> */}
        </div>
    )
}

export default Carousel
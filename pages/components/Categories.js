import React from 'react'
import Image from 'next/image'

const images = [
    {
        href: 'men',
        src: 'https://www.underarmour.com/_next/image/?url=https%3A%2F%2Funderarmour.scene7.com%2Fis%2Fimage%2FUnderarmour%2F%2FSS22_NewArrivals_Q3_Site_1_1_Nav_M%3Fqlt%3D75%26fmt%3Djpg%26scl%3D1%26&w=1920&q=75',
        tagline: 'Shop Men'
    },
    {
        href: 'women',
        src: 'https://www.underarmour.com/_next/image/?url=https%3A%2F%2Funderarmour.scene7.com%2Fis%2Fimage%2FUnderarmour%2F%2FSS22_NewArrivals_Q3_Site_1_1_Nav_W%3Fqlt%3D75%26fmt%3Djpg%26scl%3D1%26&w=1920&q=75',
        tagline: 'Shop Women'
    },
    {
        href: 'kids',
        src: 'https://www.underarmour.com/_next/image/?url=https%3A%2F%2Funderarmour.scene7.com%2Fis%2Fimage%2FUnderarmour%2F%2FFW22_BTS_NewArrivals_Site_1_1_B%3Fqlt%3D75%26fmt%3Djpg%26scl%3D1%26&w=1920&q=75',
        tagline: 'Shop Kids'
    },
    {
        href: 'shoes',
        src: 'https://www.underarmour.com/_next/image/?url=https%3A%2F%2Funderarmour.scene7.com%2Fis%2Fimage%2FUnderarmour%2F%2FSS22_NewArrivals_Q3_Site_1_1_Nav_Shoes%3Fqlt%3D75%26fmt%3Djpg%26scl%3D1%26&w=1920&q=75',
        tagline: 'Shop Shoes'
    }
]

const Categories = () => {
    return (
        <div className='flex flex-col items-center mt-10'>
            <h2 className='font-bold mt-20 text-xl'>Put Our Newest Gear To Work</h2>
            <div className='w-screen mt-10 px-5 md:flex'>
                {images.map(image => (
                    <a className='cursor-pointer w-full mx-4' href={image.href}>
                        <Image
                            src={image.src}
                            width='100vw'
                            height='100vh'
                            layout='responsive'
                            alt='category'
                        />
                        <p className='hover:underline'>{image.tagline}</p>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Categories
import React from 'react'
import Image from 'next/image'

const Categories = () => {
    return (
        <div className='flex flex-col items-center mt-10'>
            <h2 className='font-bold mb-5 text-xl'>Put Our Newest Gear To Work</h2>
            <div className='w-screen mt-10 px-5 md:flex'>
                <a className='cursor-pointer w-full mx-4' href='#'>
                    <Image
                        src='https://www.underarmour.com/_next/image/?url=https%3A%2F%2Funderarmour.scene7.com%2Fis%2Fimage%2FUnderarmour%2F%2FSS22_NewArrivals_Q3_Site_1_1_Nav_M%3Fqlt%3D75%26fmt%3Djpg%26scl%3D1%26&w=1920&q=75'
                        width='100vw'
                        height='100vh'
                        layout='responsive'
                    />
                    <p className='hover:underline'>Shop Women</p>
                </a>
                <a className='cursor-pointer w-full mx-4' href='#'>
                    <Image
                        src='https://www.underarmour.com/_next/image/?url=https%3A%2F%2Funderarmour.scene7.com%2Fis%2Fimage%2FUnderarmour%2F%2FSS22_NewArrivals_Q3_Site_1_1_Nav_W%3Fqlt%3D75%26fmt%3Djpg%26scl%3D1%26&w=1920&q=75'
                        width='100vw'
                        height='100vh'
                        layout='responsive'
                    />
                    <p className='hover:underline'>Shop Kids</p>
                </a>
                <a className='cursor-pointer w-full mx-4' href='#'>
                    <Image
                        src='https://www.underarmour.com/_next/image/?url=https%3A%2F%2Funderarmour.scene7.com%2Fis%2Fimage%2FUnderarmour%2F%2FFW22_BTS_NewArrivals_Site_1_1_B%3Fqlt%3D75%26fmt%3Djpg%26scl%3D1%26&w=1920&q=75'
                        width='100vw'
                        height='100vh'
                        layout='responsive'
                    />
                    <p className='hover:underline'>Shop Shoes</p>
                </a>
                <a className='cursor-pointer w-full mx-4' href='#'>
                    <Image
                        src='https://www.underarmour.com/_next/image/?url=https%3A%2F%2Funderarmour.scene7.com%2Fis%2Fimage%2FUnderarmour%2F%2FSS22_NewArrivals_Q3_Site_1_1_Nav_Shoes%3Fqlt%3D75%26fmt%3Djpg%26scl%3D1%26&w=1920&q=75'
                        width='100vw'
                        height='100vh'
                        layout='responsive'
                    />
                    <p className='hover:underline'>Shop Men</p>
                </a>
            </div>




        </div>
    )
}

export default Categories
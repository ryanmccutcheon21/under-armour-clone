import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Image from 'next/image'
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs'
import ReactPlayer from 'react-player'
import Footer from './components/Footer'

const products = [
    {
        name: "Unisex Curryy Flow 10 'Iron Sharpens Iron' Basketball Shoes",
        price: '$160.00',
        image: 'https://underarmour.scene7.com/is/image/Underarmour/3025620-001_DEFAULT?rp=standard-30pad%7CcartFullDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=208&hei=232&size=188%2C232'
    },
    {
        name: "Grade School Curry Flow 10 'Iron Sharpens Iron' Basketball Shoes",
        price: '$130.00',
        image: 'https://underarmour.scene7.com/is/image/Underarmour/3025628-001_DEFAULT?rp=standard-30pad%7CcartFullDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=208&hei=232&size=188%2C232'
    },
    {
        name: "Men's Curry UNDRTD 3/4 Tights",
        price: '$55.00',
        iamge: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1362586-001_FC?rp=standard-0pad%7CcartFullDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=208&hei=233&size=208%2C232'
    },
    {
        name: "Unisex Curry One Low FloTro Basketball Shoes",
        price: '$150.00',
        image: 'https://underarmour.scene7.com/is/image/Underarmour/3025632-001_DEFAULT?rp=standard-30pad%7CcartFullDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=208&hei=232&size=188%2C232'
    },
]

const extendedProducts = [
    {
        name: 'Unisex Curry UA HOVR Splash 2 Basketball Shoes',
        price: '$110.00',
        image: 'https://underarmour.scene7.com/is/image/Underarmour/3025636-001_DEFAULT?rp=standard-30pad%7CcartFullDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=208&hei=232&size=188%2C232'
    },
    {
        name: "Men's Curry Crewneck",
        price: '$55.00',
        image: 'https://underarmour.scene7.com/is/image/Underarmour/V5-1374300-001_FC?rp=standard-0pad%7CcartFullDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=208&hei=233&size=208%2C232'
    },
    {
        name: "Boy's Curry Big Splash Hoodie",
        price: '$45.00',
        image: 'https://underarmour.scene7.com/is/image/Underarmour/PS1374304-001_HF?rp=standard-0pad%7CcartFullDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=208&hei=233&size=208%2C232'
    },
    {
        name: "Girl's Curry Elmo 30 Crew",
        price: '$45.00',
        image: 'https://underarmour.scene7.com/is/image/Underarmour/PS1369664-001_HF?rp=standard-0pad%7CcartFullDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=F0F0F0&wid=208&hei=233&size=208%2C232'
    }
]

const Curry = () => {

    const [showExtended, setShowExtended] = useState(false)

    return (
        <div>
            <Navbar />
            <section className='bg-red-500 h-[75vh] flex flex-col justify-center bg-Curry bg-cover'>
                <p className='mx-auto text-white'>'Iron Sharpens Iron'</p>
                <h2 className='mx-auto mb-5 font-extrabold text-white text-4xl text-center'>Curry <br /> Flow 10</h2>
                <button className='mx-auto py-2 px-10 bg-white rounded hover:text-gray-500' type='button'>Shop Now</button>
            </section>
            <section className='flex justify-evenly h-[50vh] py-20'>
                <button type='button' className='ml-5' onClick={() => setShowExtended(false)}>
                    <BsArrowLeftCircle />
                </button>
                <ul className='flex'>
                    {!showExtended && products.map(product => (
                        <li className='mx-10'>
                            <Image width='100%' height='100%' src={product.image} />
                            <p>{product.name}</p>
                            <p className='text-gray-500'>{product.price}</p>
                        </li>
                    ))}
                    {showExtended && extendedProducts.map(product => (
                        <li className='mx-10'>
                            <Image width='100%' height='100%' src={product.image} />
                            <p>{product.name}</p>
                            <p className='text-gray-500'>{product.price}</p>
                        </li>
                    ))}
                </ul>
                <button type='button' className='mr-5' onClick={() => setShowExtended(true)}>
                    <BsArrowRightCircle />
                </button>
            </section>
            <section className='flex justify-center text-center max-w-xs mx-auto h-[50vh] mt-20'>
                <div>
                    <p className='font-extrabold text-3xl'>CHANGE THE METAVERSE FOR GOOD</p>
                    <p className='text-sm'>Stehpen Curry just broke one of the biggest records in basketball. Be part of history by claiming one of only 2,974 Genesis Curry Flow NFTs.</p>
                    <button type='button' className='text-white bg-black px-10 py-2 mt-3 rounded hover:bg-gray-500'>Learn More</button>
                </div>
            </section>
            <section className='h-[75vh]'>
                <ReactPlayer url='https://www.youtube.com/watch?v=pAuqIQ6IIK4' controls width='100vw' height='100%' />
            </section>
            <section className='flex justify-center text-center max-w-xs mx-auto h-[50vh] mt-20'>
                <div>
                    <p className='font-extrabold text-3xl'>THE GREATEST 3PT SHOOTER</p>
                    <p className='text-sm'>The real work is what people don't see. Only Stehpen Curry knows the hours it took to get to 2,974.</p>
                    <button type='button' className='text-white bg-black px-10 py-2 mt-3 rounded hover:bg-gray-500'>Shop Curry Brand</button>
                </div>
            </section>
            <section className='h-[75vh]'>
                <ReactPlayer url='https://www.youtube.com/watch?v=RL0U1PogbPo' controls width='100vw' height='100%' />
            </section>
            <section className='flex justify-center text-center max-w-xs mx-auto h-[50vh] mt-20'>
                <div>
                    <p className='font-extrabold text-3xl'>CHANGE THE GAME FOR GOOD</p>
                    <p className='text-sm'>Our mission goes beyond the court. It's about creating opportunity, access, and equality for youth sports in neighborhoods around the world.</p>
                </div>
            </section>
            <section className='h-[50vh] flex mb-20'>
                <div className='w-[50vw] bg-Curry-Sesame bg-contain bg-no-repeat'></div>
                <form className='text-center max-w-[25vw] mx-auto my-auto'>
                    <p className='font-extrabold text-2xl'>Stay in the loop.</p>
                    <p className='font-extrabold text-2xl mb-5'>Sign up for updates.</p>
                    <input type='email' className='border pl-2' placeholder='Email' />
                    <button className='bg-black text-white rounded px-5 py-1 mt-2 hover:bg-gray-800' type='submit'>Sign Up</button>
                    <p className='text-xs mt-5 text-gray-500'>By providing your e-mail, you agree to Under Armour Clone's <span className='underline hover:text-black hover:cursor-pointer'>Privacy Policy</span> and <span className='underline hover:text-black hover:cursor-pointer'>Terms &amp; Conditions</span>. You may unsubscribe later.</p>
                </form>
            </section>
            <Footer />
        </div>
    )
}

export default Curry
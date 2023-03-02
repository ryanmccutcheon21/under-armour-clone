import Image from 'next/image'
import React from 'react'
import { useState } from 'react'

const Products = ({ products }) => {
    const [num, setNum] = useState(15)

    return (
        <div className='lg:flex lg:flex-col lg:ml-[30%] block'>
            <ul className='flex flex-wrap my-5'>
                {products?.slice(0, num).map(product => (
                    <li key={product.image.url} className='m-2 border border-gray-500 rounded hover:cursor-pointer hover:shadow-xl shadow-gray-600 hover:scale-105'>
                        <Image alt='Product Image' width={product.image.width} height={product.image.height} src={product.image.url} />
                    </li>
                ))}
            </ul>
            {num > 15 && (
                <div className='text-white text-center mb-5'>
                    <button className='px-2 py-1 rounded bg-red-800' onClick={() => setNum(15)}>View Less</button>
                </div>
            )}
            {num < 24 && (
                <div className='text-white text-center mb-5'>
                    <button className='px-2 py-1 rounded bg-red-800' onClick={() => setNum(prev => prev + 3)}>View More</button>
                </div>
            )}
        </div>
    )
}

export default Products
import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import Link from 'next/link'

const dropdowns = [
    {
        label: 'Product Category',
        options: [
            'Clothing',
            'Shoes',
            'Accessories'
        ]
    },
    {
        label: 'Product Type',
        options: [
            'Polos',
            'Pants',
            'Hoodies & Sweatshirts',
            'Vests',
            'Jackets',
            'Short Sleeves',
            'Graphics',
            'Sleeveless',
            'Long Sleeves',
            'Leggings'
        ]
    },
    {
        label: 'Sports',
        options: [
            'Baseball',
            'Basketball',
            'Fanwear',
            'Fishing',
            'Football',
            'Soccer',
            'Golf',
            'Hockey',
            'Hunting',
            'Lacrosse',
            'Sportstyle',
            'Military Tactical',
            'Outdoor',
            'Running',
            'Training'
        ]
    },
    {
        label: 'Color',
        options: [
            'Red',
            'Orange',
            'Yellow',
            'Green',
            'Blue',
            'Indigo',
            'Violet'
        ]
    },
    {
        label: 'Size',
        options: [
            'Extra Small',
            'Small',
            'Medium',
            'Large',
            'Extra Large',
            '2XL',
            '3XL'
        ]
    },
    {
        label: 'Size Range',
        options: [
            'Tall'
        ]
    },
    {
        label: 'Fit',
        options: [
            'Stretch Fit',
            'Adjustable',
            'Wide',
            'Compression',
            'One Size Fits All',
            'Fitted',
            'Loose'
        ]
    },
    {
        label: 'Price',
        options: [
            'Under $25',
            '$25-$50',
            '$50-$75',
            '$75-$100',
            '$100-$200',
            '$200+'
        ]
    },
    {
        label: 'Gear Type',
        options: [
            'HeatGear',
            'ColdGear',
            'AllSeasonGear'
        ]
    }
]

const Sidebar = ({ label, category }) => {

    const [showDropdown, setShowDropdown] = useState(false)

    const handleClick = () => {
        setShowDropdown(!showDropdown)
    }

    return (
        <div className='absolute border border-red-800'>
            <Link href='/men'>
                <p className='m-5 text-lg hover:cursor-pointer hover:underline'>{category}</p>
            </Link>
            <h1 className='font-bold mx-5 text-3xl my-5'>{label}</h1>
            <Link href='/men'>
                <p className='font-bold mx-5 mb-5 hover:cursor-pointer hover:underline'>{category}</p>
            </Link>
            <div className='mx-10'>
                <ul className='text-[gray] border-b-2 pb-5'>
                    <li key='1' className='hover:text-black hover:cursor-pointer hover:underline'>Baselayer</li>
                    <li key='2' className='hover:text-black hover:cursor-pointer hover:underline'>Outerwear</li>
                    <li key='3' className='hover:text-black hover:cursor-pointer hover:underline'>Pants &amp; Leggings</li>
                    <li key='4' className='hover:text-black hover:cursor-pointer hover:underline'>Shoes</li>
                    <li key='5' className='hover:text-black hover:cursor-pointer hover:underline'>Shorts</li>
                    <li key='6' className='hover:text-black hover:cursor-pointer hover:underline'>Swimwear</li>
                    <li key='7' className='hover:text-black hover:cursor-pointer hover:underline'>Tops</li>
                    <li key='8' className='hover:text-black hover:cursor-pointer hover:underline'>Underwear</li>
                </ul>
                <div className='py-5 border-b-2'>
                    <span className='mr-20'>Filter</span>
                    <button type='button' className='text-[gray] hover:text-black underline'>Clear All</button>
                </div>
                {dropdowns.map((item) => (
                    <div key={item.label}>
                        <div className='py-5 flex justify-between border-b-2'>
                            <p>{item.label}</p>
                            <button type='button' onClick={handleClick}>
                                <IoIosArrowDown />
                            </button>
                        </div>
                        {/* Dropdonw */}
                        {showDropdown && (
                            <form className='flex flex-col'>
                                {item.options.map(opt => (
                                    <div className='flex justify-center' key={opt}>
                                        <input type='checkbox' id={opt} className='mr-2' />
                                        <label htmlFor={opt}>{opt}</label>
                                    </div>
                                ))}
                            </form>
                        )}
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Sidebar
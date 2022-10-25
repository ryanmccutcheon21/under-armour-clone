import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const dropdowns = [
    {
        label: 'Product Category',
        checkbox: [
            'Clothing',
            'Shoes',
            'Accessories'
        ]
    },
    {
        label: 'Product Type'
    },
    {
        label: 'Sports'
    },
    {
        label: 'Color'
    },
    {
        label: 'Size'
    },
    {
        label: 'Size Range'
    },
    {
        label: 'Fit'
    },
    {
        label: 'Price'
    }
]

const Sidebar = ({ label, category }) => {

    const [showDropdown, setShowDropdown] = useState(false)

    const handleClick = () => {
        setShowDropdown(!showDropdown)
    }

    return (
        <div className='inline-block border border-red-800'>
            <p>{category}</p>
            <h1>{label}</h1>
            <p>{category}</p>
            <ul>
                <li>Baselayer</li>
                <li>Outerwear</li>
                <li>Pants &amp; Leggings</li>
                <li>Shoes</li>
                <li>Shorts</li>
                <li>Swimwear</li>
                <li>Tops</li>
                <li>Underwear</li>
            </ul>
            <div>
                <span>Filter</span>
                <button>Clear All</button>
            </div>
            {dropdowns.map((item) => (
                <div>
                    <span>{item.label}</span>
                    <button type='button' onClick={handleClick}>
                        <IoIosArrowDown />
                    </button>
                    {/* Dropdonw */}
                    {showDropdown && (
                        <form className='flex flex-col'>
                            <input type='checkbox' id='clothing' />
                            <label for='clothing'>Clothing</label>
                            <input type='checkbox' id='shoes' />
                            <label for='shoes'>Shoes</label>
                            <input type='checkbox' id='accessories' />
                            <label for='accessories'>Accessories</label>
                        </form>
                    )}
                </div>
            ))}

        </div>
    )
}

export default Sidebar
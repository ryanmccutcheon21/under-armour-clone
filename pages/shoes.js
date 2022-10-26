import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const Shoes = () => {
    return (
        <div>
            <Navbar />
            <Sidebar label='Shoes' category="Shoes" />
        </div>
    )
}

export default Shoes
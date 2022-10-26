import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const Kids = () => {
    return (
        <div>
            <Navbar />
            <Sidebar label='Kids' category="Kids'" />
        </div>
    )
}

export default Kids
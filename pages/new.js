import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const New = () => {
    return (
        <div>
            <Navbar />
            <Sidebar label='New' category='New Arrivals' />
        </div>
    )
}

export default New
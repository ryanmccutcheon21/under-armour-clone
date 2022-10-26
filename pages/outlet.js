import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const Outlet = () => {
    return (
        <div>
            <Navbar />
            <Sidebar label='Outlet' category="UA Outlet" />
        </div>
    )
}

export default Outlet
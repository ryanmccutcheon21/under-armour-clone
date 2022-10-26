import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const Women = () => {
    return (
        <div>
            <Navbar />
            <Sidebar label='Women' category="Women's" />
        </div>
    )
}

export default Women
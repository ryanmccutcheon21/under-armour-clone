import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Men = () => {
    return (
        <div>
            <Navbar />
            <Sidebar label="Men's" category='Men' />
            <Footer />
        </div>
    )
}

export default Men
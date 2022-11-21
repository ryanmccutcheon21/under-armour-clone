import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

import { fetchData, mediaUrl, options } from '../utils/fetchData'
import Products from './components/Products'

export const getStaticProps = async () => {
    const { payload: { products } } = await fetchData(`${mediaUrl}`, options)
    return {
        props: { products }
    }
}

const Outlet = ({ products }) => {
    return (
        <div>
            <Navbar />
            <Sidebar label='Outlet' category="UA Outlet" />
            <Products products={products} />
        </div>
    )
}

export default Outlet
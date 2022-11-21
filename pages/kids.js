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

const Kids = ({ products }) => {
    return (
        <div>
            <Navbar />
            <Sidebar label='Kids' category="Kids'" />
            <Products products={products} />
        </div>
    )
}

export default Kids
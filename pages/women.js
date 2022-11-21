import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Products from './components/Products'

import { fetchData, mediaUrl, options } from '../utils/fetchData'

export const getStaticProps = async () => {
    const { payload: { products } } = await fetchData(`${mediaUrl}`, options)
    return {
        props: { products }
    }
}

const Women = ({ products }) => {
    return (
        <div>
            <Navbar />
            <Sidebar label='Women' category="Women's" />
            <Products products={products} />

        </div>
    )
}

export default Women
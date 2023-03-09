import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Products from '../components/Products'

import { fetchData, mediaUrl, options } from '../../utils/fetchData'

export const getStaticProps = async () => {
    const { payload: { products } } = await fetchData(`${mediaUrl}`, options)
    return {
        props: { products }
    }
}

const withCategory = (label, category) => {
    const EnhancedComponent = ({ products }) => {
        return (
            <div>
                <Navbar />
                <Sidebar label={label} category={category} />
                <Products products={products} />
            </div>
        )
    }
    return EnhancedComponent
}

export const Women = withCategory("Women's", 'Women')
export const Shoes = withCategory('Shoes', 'Shoes')
export const Men = withCategory("Men's", 'Men')
export const Kids = withCategory("Kids's", 'Kids')
export const Outlet = withCategory("Outlet", 'UA Outlet')


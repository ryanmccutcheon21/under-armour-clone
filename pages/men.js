import Footer from './components/Footer'
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

const Men = ({ products }) => {

    return (
        <div>
            <Navbar />
            <Sidebar label="Men's" category='Men' />
            <Products products={products} />
            <Footer />
        </div>
    )
}

export default Men
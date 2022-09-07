import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Meridian from '../components/Meridian'
import Carousel from '../components/Carousel'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <Meridian />
      <Carousel />
    </div>
  )
}

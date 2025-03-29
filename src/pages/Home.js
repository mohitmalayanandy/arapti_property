import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Featured from '../components/Featured'
import Categories from '../components/Categories'
import Trending from '../components/Trending'
import ByLocation from '../components/ByLocation'
import OurLands from '../components/OurLands'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Featured />
      <Categories />
      <Trending />
      <ByLocation />
      <OurLands />
    </div>
  )
}

export default Home

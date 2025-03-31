import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Featured from '../components/Featured'
import Categories from '../components/Categories'
import Trending from '../components/Trending'
import ByLocation from '../components/ByLocation'
import OurLands from '../components/OurLands'
import Inquiry from '../components/Inquiry'
import Footer from '../components/Footer'
import Feedback from '../components/Feedback'
import Blogs from '../components/Blogs'



const Home = () => {
  return (
    <div>
      {/* 
      <Navbar />
      <Banner />
      <Featured />
      <Categories />
      <Trending />
      <ByLocation /> 
      <OurLands />
      <Inquiry />
      <Feedback />
      <Footer />
      */}
      
      <Blogs />
    </div>
  )
}

export default Home

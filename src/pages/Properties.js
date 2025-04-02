import React from 'react'
import PropertyListing from '../components/PropertyListing'
import PropertyBanner from '../components/PropertyBanner'
import PropertyLands from '../components/PropertyLands'

const Properties = () => {
  return (
    <div className='mb-16'>
      <PropertyBanner />
      <PropertyListing />
      <PropertyLands />
    </div>
  )
}

export default Properties

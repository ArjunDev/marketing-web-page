import React from 'react'
import BannerPage from '../banner';
import ServicesPage from '../services';
import TestimonialsPage from '../testimonials';

const HomePage = () => {
  console.log("home Page")
  return (
    <div className='h-full w-full'>
      <BannerPage/>
      <ServicesPage/>
      <TestimonialsPage/>
    </div>
  )
}

export default HomePage;
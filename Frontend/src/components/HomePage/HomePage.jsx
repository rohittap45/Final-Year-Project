import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import WhyChooseUs from './WhyChooseUs'
import ObjectivesSection from './ObjectivesSection'
import FooterSection from './FooterSection'

function HomePage() {
  return (
   <>
      <Navbar/>
      <HeroSection/>
      <WhyChooseUs/>
      <ObjectivesSection/>
      <FooterSection/>
   </>
  )
}

export default HomePage
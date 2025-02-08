import React from 'react'
import Header from './components/main/Header'
import HeroSection from './components/main/HeroSection'

import LogoDisplay from './components/main/Logo'
import MonitoringDashboard from './components/main/MonitoringDashboard'
import TestimonialSection from './components/main/TestimonialSection'
import PricingSection from './components/main/PricingSection'
import SpacePromo from './components/main/SpacePromo'
import FAQSection from './components/main/FaqSection'

const FrontPage = () => {
  return (
      <>
      <Header />
      <HeroSection />
      <LogoDisplay />
      <MonitoringDashboard />
      <TestimonialSection />
      <PricingSection />
      <SpacePromo />
      <FAQSection />
      
      </>
  )
}

export default FrontPage
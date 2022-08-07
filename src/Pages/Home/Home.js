import React from 'react'
import Footer from '../../components/Footer/Footer';
import Partner from '../../components/partner/Partner';
import Hero from '../../components/Hero/Hero';
import ScrollButton from '../../components/Topbutton/ScrollButton'
import Facility from '../../components/Facility/Facility';
import Testimonial from '../../components/Testimonials/Testimonial';
import SocialIcon from '../../components/SocialIcon/SocialIcon';
import Project from '../../components/Projects/Project';
import Contact from '../Contact/Contact';
import Whatsapp from '../../components/Whatsapp/Whatsapp';
import Company from '../../components/Company/Company';

const Home = () => {
  return (
    <div>
      <Hero />
      <Company/>
      <Project />
      <Facility />
      <ScrollButton />
      <Testimonial />
      <Partner />
      <Whatsapp/>
      <SocialIcon/>
      <Footer />
    </div>
  )
}

export default Home
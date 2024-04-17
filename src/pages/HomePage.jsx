import React from 'react';

// import Navbar from '../components/Navbar'
import Nav from '../components/Nav'
import Craft from '../components/Craft'
import Why from '../components/Why'
import Help from '../components/Help'
import Three from '../components/Three'
import Testimonial from '../components/Testimonial'
import Recent from '../components/Recent'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <>
      <Nav />
      <Craft />
      <Why />
      <Help />
      <Three />
      <Testimonial />
      <Recent />
      <Footer />
    </>
  );
};

export default HomePage;
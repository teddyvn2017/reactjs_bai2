import React from 'react';

// import Navbar from '../components/Navbar'
// import Nav from '../components/Nav'
import Craft from '../components/Craft'
import Why from '../components/Why'
import Help from '../components/Help'
import Three from '../components/Three'
import Testimonial from '../components/Testimonial'
import Recent from '../components/Recent'
// import Footer from '../components/Footer'
import Layout from '../layouts/Layout';

const HomePage = () => {
  return (
    <Layout>     
      <Craft />
      <Why />
      <Help />
      <Three />
      <Testimonial />
      <Recent />      
    </Layout>
  );
};

export default HomePage;
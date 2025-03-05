import React from 'react';
import NavOnly from '../components/NavOnly';
import Footer from '../components/Footer';

const Layout = ({children}) => {
  return (
    <>
    <NavOnly />
        <main>{children}</main>
    <Footer />
    </>
    
  )
}

export default Layout
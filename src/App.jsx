import { Component, useState } from 'react'
import './App.css'
//import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import Footer from './components/Footer'
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import BlogPage from './pages/BlogPage';
import ServicesPage from './pages/ServicesPage';
import ContactUsPage from './pages/ContactUsPage';
import RegisterPage from './pages/RegisterPage';
import NavOnly from './components/NavOnly';

function App() {
  
  let component

  switch(window.location.pathname){
    case '/':
    case '/home': component = <HomePage />; 
                  break;
    case '/about-us': component = <AboutUsPage />; break;
    case '/blog': component= <BlogPage />; break;
    case '/services': component= <ServicesPage/>; break;
    case '/contact-us': component= <ContactUsPage/>; break;
    case '/dang-nhap': component= <LoginPage/>; break;
    case '/dang-ky': component= <RegisterPage/>; break;
    
  }

  //console.log('component', component)
  	return (
   
		<>    
			{/* condition ? result1 : result2     */}
			{
			window.location.pathname === '/' || window.location.pathname === '/home' ? (
			<>{component}</>) : (<><NavOnly />{component}<Footer /> </>)
			}                    
		</>
  	)
}

export default App

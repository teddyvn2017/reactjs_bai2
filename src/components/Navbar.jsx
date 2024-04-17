import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
// import { useRef } from "react";
// import Humburger from './icon/Humburger.jsx';
import { BsPersonCircle ,BsBag   } from "react-icons/bs";
import Hero from './Hero';
import {motion, useCycle, AnimatePresence, MotionConfig} from 'framer-motion'

// import { MotionConfig, motion } from "framer-motion";

//const Hero = () => {
const Navbar = () => {
    // const [isOpen, setIsOpen] = React.useState(false);
    

    const [mobileNav, setMobileNav] = useState(false);

    

    const toggleMobileNav = () => {
		setMobileNav(!mobileNav);
	};


    const navLinks = [
        {
            id:1,   
            title:"Home",
            href:"/"
        },
        {
            id:2,   
            title:"About us",
            href:"/aboutus"
        },
        {
            id:3,   
            title:"Services",
            href:"/services"
        },
        {
            id:4,   
            title:"Blog",
            href:"/blog"
        },
        {
            id:5,   
            title:"Contact us",
            href:"/contactus"
        }

    ];
   
    return (
        <section className="w-full bg-mau_nen_primary h-auto pb-8">
            <nav className="fixed left-0 top-0 bg-mau_nen_primary w-full z-20 shadow-md">
                <div className="container flex items-center justify-between md:flex-row h-20 max-w-[1280px]">
                    <h1 className="text-mau_trang font-bold font-inter text-xl">FurniExpert</h1>
                    <ul className="hidden gap-10 text-mau_trang md:flex md:flex-row text-base">
                        <li>
                            <a href="/" className="nav__link">Home</a>
                        </li>                    
                        <li>
                            <a href="/work" className="nav__link">About us</a>
                        </li>
                        <li>
                            <a href="/blog" className="nav__link">Services</a>
                        </li>
                        <li>
                            <a href="/blog" className="nav__link">Blog</a>
                        </li>
                        <li>
                            <a href="/blog" className="nav__link">Contact us</a>
                        </li>
                    </ul>


                    
                    {/* <NavMobile /> */}
                   
                    <div className="lg:hidden relative z-10">
                        <motion.button 
                            animate = {mobileNav ? 'open' : 'closed'}
                            onClick={() => toggleMobileNav()} 
                            className="flex flex-col space-y-[4px]">

                            <motion.span 
                                variants={{
                                    closed: {rotate:0, y:0},
                                    open: {rotate:45, y:7},
                                }}
                                className="w-6 h-[3px] bg-white block rounded-full">                                
                            </motion.span>
                            <motion.span 
                                variants={{
                                    closed: {opacity:1},
                                    open: {opacity:0},
                                }}
                                className="w-6 h-[3px] bg-white block rounded-full">

                            </motion.span>
                            <motion.span 
                                variants={{
                                    closed: {rotate:0, y: 0},
                                    open: {rotate:-45, y:-7},
                                }}
                                className="w-6 h-[3px] bg-white block rounded-full">

                            </motion.span>
                        </motion.button>
                    </div>

                    <AnimatePresence>             
                    {/* Nếu giá giá trị mobileNav = true thì hiển thị menu */}
                        {mobileNav && (

                            <MotionConfig transition={{
                                type:"spring",
                                bounce:0.099
                            }}>
                                <motion.div 
                                    key = "mobile-nav"
                                    variants={{
                                        open: {
                                                x: "0%",
                                                transition: {
                                                    type:"spring",
                                                    bounce:0.099,
                                                    when:"beforeChildren",
                                                }
                                        },
                                        closed:{
                                            x:"-100%",
                                            transition: {
                                                type:"spring",
                                                bounce:0.099,
                                                when:"afterChildren",
                                            }
                                        },
                                    }}

                                    initial = "closed"
                                    animate = "open"
                                    exit = "closed"
                                    className="lg:hidden fixed inset-0 bg-mau_nen_primary mx-auto 
                                    flex flex-col items-center justify-center gap-10 text-center">

                                    <motion.div>
                                        <motion.ul className="space-y-10 text-mau_trang">
                                            
                                            <li>
                                                <motion.a whileHover={{scale:1.4}}
                                                    href="/work" className="text-4xl font-bold">About us
                                                </motion.a>
                                            </li>
                                            <li>
                                                <a href="/blog" className="text-4xl font-bold">Services</a>
                                            </li>
                                            <li>
                                                <a href="/blog" className="text-4xl font-bold">Blog</a>
                                            </li>
                                            <li>
                                                <a href="/blog" className="text-4xl font-bold">Contact us</a>
                                            </li>
                                        </motion.ul>
                                    </motion.div>                      
                                </motion.div>
                            </MotionConfig>
                        )}
                    </AnimatePresence>

                    <div className="flex flex-row justify-center items-center gap-[28px] text-2xl text-mau_trang">
                        {/* Nhớ install react bootstrap icon */}
                        {/* npm install react-bootstrap-icons --save */}
                        {/* Vào trang web https://react-icons.github.io/react-icons/icons/bs/ để chọn*/}
                        <BsPersonCircle />
                        <BsBag />
                    </div>

                </div>
                
            </nav>
            <Hero />
            
        </section>
    )
 }



export default Navbar;



// const MobileNavLink = ({id,title,href}) => {
//     return (
//         <div>
//             {/* <Link to={id} href={href}>
//                 {title}
//             </Link> */}
//         </div>
//     )
// }
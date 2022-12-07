import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import { motion } from "framer-motion";

function Navbar() {

    // to access a DOM element directly
    const navRef = useRef();

    // hold a mutable value in its .current property
    // onClick add or remove "Navbar__Responsive" className
    const showNavbar = () => {
        navRef.current.classList.toggle("Navbar__Responsive");
    };

    const Scroll = () => {
        document.body.scrollTop = document.documentElement.scrollTop = 0
    }

    // returns div that:
    // contains logo and brand which navigates to homepage
    // contains nav links of company, location and contact which navigates to their respective pages
    return (
        <header className="Header">
            <Link to='/' className="Navbar__Brand" onClick={() => Scroll()}>
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1.5, 1, 1],
                        rotate: [0, 0, 360, 360, 0],
                    }}
                    className="Navbar__Logo" />
                <motion.div
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.2 }}
                    className='Navbar__Title'>
                    DESIGNO
                </motion.div>
            </Link>
            <nav ref={navRef} className='Navbar__Items'>
                <Link to='/ourcompany' onClick={() => { Scroll(); showNavbar() }}
                    className="Navbar__Link1"><p className="Navbar__LinkText">OUR COMPANY</p></Link>
                <Link to='/location' onClick={() => { Scroll(); showNavbar() }}
                    className="Navbar__Link2"><p className="Navbar__LinkText">LOCATIONS</p></Link>
                <Link to='/contact' onClick={() => { Scroll(); showNavbar() }}
                    className="Navbar__Link3"><p className="Navbar__LinkText">CONTACT</p></Link>
                <button
                    className="Navbar__Button Navbar__CloseButton"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="Navbar__Button" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;
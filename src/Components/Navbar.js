import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom"
import "../Styles/Navbar.css"

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("Navbar__Responsive");
    };

    return (
        <header className="Header">
            <Link to='/' className="Navbar__Brand">
                <div className="Navbar__Logo" />
                <div className='Navbar__Title'>
                    DESIGNO
                </div>
            </Link>
            <nav ref={navRef} className='Navbar__Items'>
                <Link to='/ourcompany' className="Navbar__Link1"><p className="Navbar__LinkText">OUR COMPANY</p></Link>
                <Link to='/location' className="Navbar__Link2"><p className="Navbar__LinkText">LOCATIONS</p></Link>
                <Link to='/contact' className="Navbar__Link3"><p className="Navbar__LinkText">CONTACT</p></Link>
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
import React from "react";
import { Link, useNavigate } from "react-router-dom"
import { FaFacebookSquare, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa"
import { BsPinterest } from "react-icons/bs"
import "../Styles/Footer.css"
import { motion } from "framer-motion";

function Footer() {

    const navigate = useNavigate();

    const Scroll = () => {
        document.body.scrollTop = document.documentElement.scrollTop = 0
    }

    return (
        <div className='Footer'>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className='Footer__Card'>
                <div className='Footer__Caption'>
                    <p className='Footer__Caption1'>Let's talk about your project</p>
                    <p className='Footer__Caption2'>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
                </div>
                <div className='Footer__ButtonDiv'>
                    <button className='Footer__Button' onClick={() => { Scroll(); navigate('/contact') }}>GET IN TOUCH</button>
                </div>
                <div className='Footer__Circle'>
                    <div className='Footer__CircleR1'>
                        <div className='Footer__Circle1' />
                        <div className='Footer__Circle2' />
                        <div className='Footer__Circle3' />
                    </div>
                    <div className='Footer__CircleR2'>
                        <div className='Footer__Circle4' />
                        <div className='Footer__Circle3' />
                        <div className='Footer__Circle4' />
                        <div className='Footer__Circle1' />
                    </div>
                </div>
            </motion.div>
            <div className='Footer__Block'>
                <motion.header
                    initial={{ x: 200 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    className="Footer__Header">
                    <Link to='/' className="Footer__Brand" onClick={() => Scroll()}>
                        <div className="Footer__Logo" />
                        <div className='Footer__Title'>
                            DESIGNO
                        </div>
                    </Link>
                    <hr className="hr__Line1" />
                    <nav className='Footer__Items'>
                        <Link to='/ourcompany' onClick={() => Scroll()}
                            className="Footer__Link1"><p className="Footer__LinkText">OUR COMPANY</p></Link>
                        <Link to='/location' onClick={() => Scroll()}
                            className="Footer__Link2"><p className="Footer__LinkText">LOCATIONS</p></Link>
                        <Link to='/contact' onClick={() => Scroll()}
                            className="Footer__Link3"><p className="Footer__LinkText">CONTACT</p></Link>
                    </nav>
                </motion.header>
                <hr className="hr__Line2" />
                <motion.div
                    initial={{ x: 200 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    className="Footer__Below">
                    <div className="Footer__Address">
                        <p><b>Designo Central Office</b></p>
                        <p>3886 Wellington Street</p>
                        <p>Toronto, Ontario M9C 3J5</p>
                    </div>
                    <div className="Footer__Contact">
                        <p><b>Contact Us (Central Office)</b></p>
                        <p><b>P: +1 253-863-8967</b></p>
                        <p><b>M: contact@designo.co</b></p>
                    </div>
                    <div className="Footer__Icons">
                        <FaFacebookSquare className="fb" onClick={() => { window.location.assign("https://www.facebook.com/") }} />
                        <FaYoutube className="yt" onClick={() => { window.location.assign("https://www.youtube.com/") }} />
                        <FaTwitter className="tw" onClick={() => { window.location.assign("https://twitter.com/i/flow/login") }} />
                        <BsPinterest className="ps" onClick={() => { window.location.assign("https://in.pinterest.com/pinterest/") }} />
                        <FaInstagram className="insta" onClick={() => { window.location.assign("https://www.instagram.com/") }} />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Footer;
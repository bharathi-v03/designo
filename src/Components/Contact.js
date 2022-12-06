import React, { useState, useEffect } from 'react';
import "../Styles/Contact.css";
import { useNavigate } from "react-router-dom"
import toronto from "../Images/toronto.svg"
import sydney from "../Images/sydney.svg"
import london from "../Images/london.svg"
import { HiExclamationCircle } from "react-icons/hi";
import { motion } from "framer-motion";

function Contact() {

    const navigate = useNavigate();

    const [sname, setName] = useState(true);
    const [semail, setEmail] = useState(true);
    const [smessage, setMessage] = useState(true);

    const checkEmpty = (e) => {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        if (name.length !== 0) {
            setName(true);
        }
        else {
            setName(false);
            e.preventDefault();
        }
        if (email.length !== 0) {
            setEmail(true);
        }
        else {
            setEmail(false);
            e.preventDefault();
        }
        if (message.length !== 0) {
            setMessage(true);
        }
        else {
            setMessage(false);
            e.preventDefault();
        }
    }

    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0
    }, [])

    return (
        <div className='Contact'>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className='Company__Card1 Contact__Company__Card1'>
                <div className='Contact__Cicle' />
                <div className='Company__Caption'>
                    <p className='Company__Caption1'>Contact Us</p>
                    <p className='Company__Caption2'>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
                </div>
                <div className='Contact__Form__Div' onSubmit={checkEmpty}>
                    <form className='Contact__Form'>
                        <div className='Contact__Input__Div'>
                            <input type='text' placeholder='Name' className='Contact__Input' id='name' />
                            {!sname && (<div className='Contact__Error'>Enter a valid input <span><HiExclamationCircle /></span></div>)}
                        </div>
                        <div className='Contact__Input__Div'>
                            <input type='email' placeholder='Email Address' className='Contact__Input' id='email' />
                            {!semail && (<div className='Contact__Error'>Enter a valid input <span><HiExclamationCircle /></span></div>)}
                        </div>
                        <div className='Contact__Input__Div'>
                            <input type='text' placeholder='Phone' className='Contact__Input' id='phone' />
                        </div>
                        <div className='Contact__Message__Div'>
                            <textarea type='text' placeholder='Your message' rows="5" className='Contact__Message' id='message' />
                            {!smessage && (<div className='Contact__ErrorM'>Enter a valid input <span><HiExclamationCircle /></span></div>)}
                        </div>
                        <div className='Contact__Button__Div'>
                            <button type='submit' className='Contact__Button'>SUBMIT</button>
                        </div>
                    </form>
                </div>
            </motion.div>
            <div className='Descript__Card Company__Descript__Card'>
                <motion.div
                    initial={{ y: 200 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className='Descript__Card1 Company__Descript__Card1'>
                    <div className='Descript__Image Company__Descript__Image'>
                        <img className='Descript__Image Company__Descript__Image' src={toronto} alt='' />
                        <div className='Descript__Circle1 Company__Descript__Circle1' />
                    </div>
                    <div className='Descript__Caption Company__Descript__Caption'>
                        <p className='Descript__Caption1'>CANADA</p>
                    </div>
                    <div className='Location__Btn__Div'>
                        <button className='Location__Button' onClick={() => navigate('/location')}>SEE LOCATION</button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ y: 200 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className='Descript__Card2 Company__Descript__Card2'>
                    <div className='Descript__Image Company__Descript__Image'>
                        <img className='Descript__Image Company__Descript__Image' src={sydney} alt='' />
                        <div className='Descript__Circle2 Company__Descript__Circle2' />
                    </div>
                    <div className='Descript__Caption Company__Descript__Caption'>
                        <p className='Descript__Caption1'>AUSTRALIA</p>
                    </div>
                    <div className='Location__Btn__Div'>
                        <button className='Location__Button' onClick={() => navigate('/location')}>SEE LOCATION</button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ y: 200 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    className='Descript__Card3 Company__Descript__Card3'>
                    <div className='Descript__Image Company__Descript__Image'>
                        <img className='Descript__Image Company__Descript__Image' src={london} alt='' />
                        <div className='Descript__Circle3 Company__Descript__Circle3' />
                    </div>
                    <div className='Descript__Caption Company__Descript__Caption'>
                        <p className='Descript__Caption1'>UNITED KINGDOM</p>
                    </div>
                    <div className='Location__Btn__Div'>
                        <button className='Location__Button' onClick={() => navigate('/location')}>SEE LOCATION</button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Contact;
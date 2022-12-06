import React, { useEffect } from 'react';
import "../Styles/WebDesign.css"
import { useNavigate } from "react-router-dom"
import "../Styles/Home.css";
import "../Styles/HomeDesign.css";
import "../Styles/HomeDescript.css";
import webDesign from "../Images/webDesign.jpg";
import graphicDesign from "../Images/graphicDesign.jpg";
import { motion } from "framer-motion";

function AppDesign() {

    const navigate = useNavigate();

    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0
    }, [])

    const AppDesignJson = [
        {
            "image": require("../Images/AppDesign/image1.jpg"),
            "title": "AIRFILTER",
            "caption": "Solving the problem of poor indoor air quality by filtering the air"
        },
        {
            "image": require("../Images/AppDesign/image2.jpg"),
            "title": "EYECAM",
            "caption": "Product that lets you edit your favorite photos and videos at any time"
        },
        {
            "image": require("../Images/AppDesign/image3.jpg"),
            "title": "FACEIT",
            "caption": "Get to meet your favorite internet superstar with the faceit app"
        },
        {
            "image": require("../Images/AppDesign/image4.jpg"),
            "title": "TODO",
            "caption": "A todo app that features cloud sync with light and dark mode"
        },
        {
            "image": require("../Images/AppDesign/image5.jpg"),
            "title": "LOOPSTUDIOS",
            "caption": "A Virtual Reality experience app made for Loopstudios"
        },
        {
            "image": require("../Images/AppDesign/image6.jpg"),
            "title": "DEVFINDER",
            "caption": "A search app for finding the Github users and their codes"
        }
    ]

    return (
        <div className='WebDesign'>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className='WebDesign__Card'>
                <div className='WebDesign__Caption'>
                    <p className='WebDesign__Caption1'>App Design</p>
                    <p className='WebDesign__Caption2'>Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.</p>
                </div>
                <div className='WebDesign__Circle'>
                    <div className='WebDesign__CircleR1'>
                        <div className='WebDesign__Circle1' />
                        <div className='WebDesign__Circle2' />
                        <div className='WebDesign__Circle3' />
                    </div>
                    <div className='WebDesign__CircleR2'>
                        <div className='WebDesign__Circle4' />
                        <div className='WebDesign__Circle3' />
                        <div className='WebDesign__Circle4' />
                        <div className='WebDesign__Circle1' />
                    </div>
                </div>
            </motion.div>
            <div className='Design__Ellipse1' />
            <motion.div
                initial={{ y: 200 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                className='WebDesign__Projects'>
                {AppDesignJson.map((ele, key) => {
                    return (
                        <div key={key} className='WebDesign__Pjs'>
                            <div className='WebDesign__PImg'>
                                <img className='WebDesign__JPG' src={ele.image} alt='' />
                            </div>
                            <div className='WebDesign__PCaption'>
                                <div className='WebDesign__PTitle'>{ele.title}</div>
                                <div className='WebDesign__PSubTitle'>{ele.caption}</div>
                            </div>
                        </div>
                    )
                })}
            </motion.div>
            <motion.div
                initial={{ x: 200 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true }}
                className='InnerPage__Card'>
                <div className='InnerPage__Card1' onClick={() => navigate('/webDesign')}>
                    <img className='InnerPage__appDesign' src={webDesign} alt='' />
                    <div className='InnerPage__Card__Caption'>
                        <p className='InnerPage__Card__Caption1'>WEB DESIGN</p>
                        <p className='InnerPage__Card__Caption2'>VIEW PROJECTS <span className='gt'>{">"}</span></p>
                    </div>
                </div>
                <div className='InnerPage__Card2' onClick={() => navigate('/graphicDesign')}>
                    <img className='InnerPage__graphicDesign' src={graphicDesign} alt='' />
                    <div className='InnerPage__Card__Caption'>
                        <p className='InnerPage__Card__Caption1'>GRAPHIC DESIGN</p>
                        <p className='InnerPage__Card__Caption2'>VIEW PROJECTS <span className='gt'>{">"}</span></p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default AppDesign;
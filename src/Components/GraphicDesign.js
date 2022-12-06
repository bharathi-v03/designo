import React, { useEffect } from 'react';
import "../Styles/WebDesign.css";
import { useNavigate } from "react-router-dom"
import "../Styles/Home.css";
import "../Styles/HomeDesign.css";
import "../Styles/HomeDescript.css";
import webDesign from "../Images/webDesign.jpg";
import appDesign from "../Images/appDesign.jpg";
import { motion } from "framer-motion";

function GraphicDesign() {

    const navigate = useNavigate();

    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0
    }, [])

    const GraphicDesignJson = [
        {
            "image": require("../Images/GraphicDesign/image1.jpg"),
            "title": "TIM BROWN",
            "caption": "A book cover designed for Tim Brown’s new release, ‘Change’"
        },
        {
            "image": require("../Images/GraphicDesign/image2.jpg"),
            "title": "BOXED WATER",
            "caption": "A simple packaging concept made for ‘Boxed Water Is Better’"
        },
        {
            "image": require("../Images/GraphicDesign/image3.jpg"),
            "title": "SCIENCE!",
            "caption": "A poster made in collaboration with the Federal Art Project"
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
                    <p className='WebDesign__Caption1'>Graphic Design</p>
                    <p className='WebDesign__Caption2'>We deliver eye-catching branding materials that are tailored to meet your business objectives.</p>
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
                {GraphicDesignJson.map((ele, key) => {
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
                <div className='InnerPage__Card2' onClick={() => navigate('/appDesign')}>
                    <img className='InnerPage__graphicDesign' src={appDesign} alt='' />
                    <div className='InnerPage__Card__Caption'>
                        <p className='InnerPage__Card__Caption1'>APP DESIGN</p>
                        <p className='InnerPage__Card__Caption2'>VIEW PROJECTS <span className='gt'>{">"}</span></p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default GraphicDesign;
import React, { useEffect } from 'react';
import "../Styles/WebDesign.css"
import { useNavigate } from "react-router-dom"
import "../Styles/Home.css";
import "../Styles/HomeDesign.css";
import "../Styles/HomeDescript.css";
import appDesign from "../Images/appDesign.jpg";
import graphicDesign from "../Images/graphicDesign.jpg";

function WebDesign() {

    const navigate = useNavigate();

    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0
    }, [])

    const WebDesignJson = [
        {
            "image": require("../Images/WebDesign/image1.jpg"),
            "title": "BLOGR",
            "caption": "Blogr is a platform for creating an online blog or publication"
        },
        {
            "image": require("../Images/WebDesign/image2.jpg"),
            "title": "EXPRESS",
            "caption": "A multi-carrier shipping website for ecommerce business"
        },
        {
            "image": require("../Images/WebDesign/image3.jpg"),
            "title": "PHOTON",
            "caption": "A state-of-the-art music player with high-resolution audio and DSP effects"
        },
        {
            "image": require("../Images/WebDesign/image4.jpg"),
            "title": "TRANSFER",
            "caption": "Site for low-cost money transfers and sending money within seconds"
        },
        {
            "image": require("../Images/WebDesign/image5.jpg"),
            "title": "BUILDER",
            "caption": "Connects users with local contractors based on their location"
        },
        {
            "image": require("../Images/WebDesign/image6.jpg"),
            "title": "CAMP",
            "caption": "Get expert training in coding, data, design, and digital marketing"
        }
    ]

    return (
        <div className='WebDesign'>
            <div className='WebDesign__Card'>
                <div className='WebDesign__Caption'>
                    <p className='WebDesign__Caption1'>Web Design</p>
                    <p className='WebDesign__Caption2'>We build websites that serve as powerful marketing tools and bring memorable brand experiences.</p>
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
            </div>
            <div className='Design__Ellipse1' />
            <div className='WebDesign__Projects'>
                {WebDesignJson.map((ele, key) => {
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
            </div>
            <div className='InnerPage__Card'>
                <div className='InnerPage__Card1' onClick={() => navigate('/appDesign')}>
                    <img className='InnerPage__appDesign' src={appDesign} alt='' />
                    <div className='InnerPage__Card__Caption'>
                        <p className='InnerPage__Card__Caption1'>APP DESIGN</p>
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
            </div>
        </div>
    );
}

export default WebDesign;
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import "../Styles/Home.css";
import "../Styles/HomeDesign.css";
import "../Styles/HomeDescript.css";
import homeCard from "../Images/homeCard.svg";
import webDesign from "../Images/webDesign.jpg";
import appDesign from "../Images/appDesign.jpg";
import graphicDesign from "../Images/graphicDesign.jpg";
import passionate from "../Images/passionate.svg"
import resourceful from "../Images/resourceful.svg"
import friendly from "../Images/friendly.svg"

function Home() {

    const navigate = useNavigate();

    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0
    }, [])

    return (
        <div className='Home'>
            <div className='Home__Card1'>
                <div className='Home__Circle' />
                <div className='Home__Caption'>
                    <p className='Home__Caption1'>Award-winning custom designs and digital branding solutions</p>
                    <p className='Home__Caption2'>With over 100 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
                    <button className='Home__LearnMore' onClick={() => navigate('/ourcompany')}>LEARN MORE</button>
                </div>
                <div className='Home__Card1Image'>
                    <img className='Home__Image1' src={homeCard} alt='' />
                </div>
            </div>
            <div className='Home__Ellipse1' />
            <div className='Design__Card'>
                <div className='Design__Card1' onClick={() => navigate('/webDesign')}>
                    <img className='webDesign' src={webDesign} alt='' />
                    <div className='Card__Caption'>
                        <p className='Card__Caption1'>WEB DESIGN</p>
                        <p className='Card__Caption2'>VIEW PROJECTS <span className='gt'>{">"}</span></p>
                    </div>
                </div>
                <div className='Design__Cards23'>
                    <div className='Design__Card2' onClick={() => navigate('/appDesign')}>
                        <img className='appDesign' src={appDesign} alt='' />
                        <div className='Card__Caption'>
                            <p className='Card__Caption1'>APP DESIGN</p>
                            <p className='Card__Caption2'>VIEW PROJECTS <span className='gt'>{">"}</span></p>
                        </div>
                    </div>
                    <div className='Design__Card3' onClick={() => navigate('/graphicDesign')}>
                        <img className='graphicDesign' src={graphicDesign} alt='' />
                        <div className='Card__Caption'>
                            <p className='Card__Caption1'>GRAPHIC DESIGN</p>
                            <p className='Card__Caption2'>VIEW PROJECTS <span className='gt'>{">"}</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Home__Ellipse2' />
            <div className='Descript__Card'>
                <div className='Descript__Card1'>
                    <div className='Descript__Image'>
                        <img className='Descript__Image' src={passionate} alt='' />
                        <div className='Descript__Circle1' />
                    </div>
                    <div className='Descript__Caption'>
                        <p className='Descript__Caption1'>PASSIONATE</p>
                        <p className='Descript__Caption2'>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
                    </div>
                </div>
                <div className='Descript__Card2'>
                    <div className='Descript__Image'>
                        <img className='Descript__Image' src={resourceful} alt='' />
                        <div className='Descript__Circle2' />
                    </div>
                    <div className='Descript__Caption'>
                        <p className='Descript__Caption1'>RESOURCEFUL</p>
                        <p className='Descript__Caption2'>Everythind that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superios results that fulfill our clients' needs.</p>
                    </div>
                </div>
                <div className='Descript__Card3'>
                    <div className='Descript__Image'>
                        <img className='Descript__Image' src={friendly} alt='' />
                        <div className='Descript__Circle3' />
                    </div>
                    <div className='Descript__Caption'>
                        <p className='Descript__Caption1'>FRIENDLY</p>
                        <p className='Descript__Caption2'>We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
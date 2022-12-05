import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import "../Styles/OurCompany.css";
import image1 from "../Images/OurCompany/image1.jpg";
import image2 from "../Images/OurCompany/image2.jpeg";
import image3 from "../Images/OurCompany/image3.jpeg";
import toronto from "../Images/toronto.svg"
import sydney from "../Images/sydney.svg"
import london from "../Images/london.svg"

function OurCompany() {

    const navigate = useNavigate();

    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0
    }, [])

    return (
        <div className='Company'>
            <div className='Company__Card1'>
                <div className='Company__Circle' />
                <div className='Company__Caption'>
                    <p className='Company__Caption1'>About Us</p>
                    <p className='Company__Caption2'>Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences.</p>
                </div>
                <div className='Company__Card1Image'>
                    <img className='Company__Image1' src={image1} alt='' />
                </div>
            </div>
            <div className='Home__Ellipse1 Company__Ellipse1' />
            <div className='Company__Card2'>
                <div className='Company__Caption'>
                    <p className='Company__Caption1 Company__Caption1A'>World-class talent</p>
                    <p className='Company__Caption2 Company__Caption2A'>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.</p>
                    <p className='Company__Caption2 Company__Caption3'>Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.</p>
                </div>
                <div className='Company__Card1Image Company__Card1ImageA'>
                    <img className='Company__Image1 Company__Image1A' src={image2} alt='' />
                </div>
                <div className='Company__Circles'>
                    <div className='Company__CircleR1'>
                        <div className='Company__Circle4' />
                    </div>
                    <div className='Company__CircleR2'>
                        <div className='Company__Circle3' />
                        <div className='Company__Circle2' />
                    </div>
                </div>
            </div>
            <div className='Home__Ellipse2 Company__Ellipse2' />
            <div className='Descript__Card Company__Descript__Card'>
                <div className='Descript__Card1 Company__Descript__Card1'>
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
                </div>
                <div className='Descript__Card2 Company__Descript__Card2'>
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
                </div>
                <div className='Descript__Card3 Company__Descript__Card3'>
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
                </div>
            </div>
            <div className='Company__Card3'>
                <div className='Company__Caption'>
                    <p className='Company__Caption1 Company__Caption1A'>The real deal</p>
                    <p className='Company__Caption2 Company__Caption2A'>As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.</p>
                    <p className='Company__Caption2 Company__Caption3'>We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>
                </div>
                <div className='Company__Card1Image Company__Card1ImageA'>
                    <img className='Company__Image1 Company__Image1A' src={image3} alt='' />
                </div>
                <div className='Company__Circles2'>
                    <div className='Company__CircleR1'>
                        <div className='Company__Circle4' />
                    </div>
                    <div className='Company__CircleR2'>
                        <div className='Company__Circle3' />
                        <div className='Company__Circle2' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurCompany;
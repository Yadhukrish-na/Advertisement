import React from 'react';
import Style from './home.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import img1 from '../../assets/Mark.jpeg'
import img2 from '../../assets/creative.jpeg'
import img3 from '../../assets/digi.jpeg'
import img4 from '../../assets/Social.jpeg'

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <div className={Style.container}>
                <h2>Empowering Brands with Creativity and Strategy</h2>
                <p>We deliver impactful solutions to boost your brand's success.</p>
            </div>

            <div className={Style.services}>
                <h2>Our Services</h2>
                    
                <div className={Style.service}>
                    <h3>Media Planning</h3>
                    <p>
                    "Strategically selecting and optimizing media channels to reach your
                     target audience, maximize ROI, and drive business results."</p>
                     <div className={Style.image1}>
                     <img src={img1} alt="" />
                     </div>
                     
                </div>
                <div className={Style.service}>
                    <h3>Creative Services</h3>
                    <p>
                        "Unlocking your brand's potential with innovative and engaging 
                        creative solutions, including graphics, videos, copywriting, and more."</p>
                        <div className={Style.image2}>
                     <img src={img2} alt="" />
                     </div>
                </div>
                <div className={Style.service}>
                    <h3>Digital Marketing</h3>
                    <p>
                    "Boosting your online presence and driving business growth through expertly
                     crafted digital marketing strategies, including SEO, social media, email, and more."

                    </p>
                    <div className={Style.image3}>
                     <img src={img3} alt="" />
                     </div>
                </div>
                <div className={Style.service}>
                    <h3> Event Management</h3>
                    <p>
                        "Bringing your vision to life with meticulously planned 
                    and executed events, conferences, and experiences that leave a lasting impression."</p>
                    <div className={Style.image4}>
                     <img src={img4} alt="" />
                     </div>
                </div>



            </div>

            <div className={Style.contact}>
                
                <p>Let's collaborate and bring your ideas to life.</p>
               
            </div>

            
        </div>
    );
};

export default HomePage;
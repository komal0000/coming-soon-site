import React, { useState, useEffect } from 'react';
import './ComingSoon.css';
import logo from './images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faYoutube,faInstagram  } from '@fortawesome/free-brands-svg-icons';
const ComingSoon = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const countDownDate = new Date("Oct 30, 2024 15:37:25").getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval);
            } else {
                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="coming-soon-container">
            <div className="header" style={{color:'black'}}>
                <div className="logo">
                    <img src={logo} alt="logo" height={'100%'} width={'100%'}/>
                </div>
                <h1>We'Re Coming Soon</h1>
                <div className='line'>
                </div>
                <h3> We're coming soon! We're working hard to give you the best experience!</h3>
            </div>
            <div className="countdown mb-5" >
                <div className="text" style={{color:'white'}}>
                    CountDown
                </div>
                <div className="time">
                {`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
                </div>
            </div>
            <div className="social-icons">
                <div className="item">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
                </div>
                <div className="item">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </div>
                <div className="item">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
                </div>
                <div className="item">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
                </div>
                <div className="item">
                <FontAwesomeIcon icon={faInstagram } size="2x" />
                </div>
            </div>
                    </div>
    );
};

export default ComingSoon;

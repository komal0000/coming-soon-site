import React, { useState, useEffect } from 'react';
import './ComingSoon.css';
import logo from './images/logo12.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin,faXTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ComingSoon = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const countDownDate = new Date("Sep 14, 2024 15:37:25").getTime();

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
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="Coming Soon Logo" style={{ height: '100%', width: '100%' }} />
                </div>
                <h1>Coming soon: Hyperlocal news and stories from the Northeast! Stay tuned</h1>
                <div className="line"></div>
                <h3>We&apos;re working hard to give you the best experience!</h3>
            </div>
            <div className="countdown">
                <div className="time">
                    {`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
                </div>
            </div>
            <div className="social-icons">
                <div className="item">
                    <a href="https://www.facebook.com/thenortheastjournal" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                </div>
                <div className="item">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                </div>
                <div className="item">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faXTwitter} size="2x" />
                    </a>
                </div>
                <div className="item">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                    </a>
                </div>
                <div className="item">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;

import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1>Your Smile, <br /><span>Our Priority</span></h1>
                <p>Experience world-class dental care with a gentle touch. We are dedicated to restoring and enhancing the natural beauty of your smile.</p>
                <div className="hero-btns">
                    <a href="#contact" className="btn btn-primary">Book Appointment</a>
                    <a href="#services" className="btn btn-outline">View Services</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

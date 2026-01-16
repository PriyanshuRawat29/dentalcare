import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-image">
                        <img src="/assets/images/about-dentist.png" alt="Dr. Sarah Johnson, Lead Dentist" />
                        <div className="experience-badge">
                            <span className="years">15+</span>
                            <span className="text">Years of<br />Experience</span>
                        </div>
                    </div>
                    <div className="about-text">
                        <h4 className="sub-heading">About Us</h4>
                        <h2>Caring for Your Smile with Excellence</h2>
                        <p>At BrightSmile Dental Clinic, we believe that a healthy smile is the foundation of a happy life. Led by Dr. Sarah Johnson, our team of dedicated professionals uses the latest technology to provide comfortable and effective treatments.</p>
                        <p>We understand that visiting the dentist can be stressful for some, which is why we've designed our clinic to be a sanctuary of calm and comfort. Your well-being is our top priority.</p>
                        <ul className="about-list">
                            <li><FaCheckCircle /> State-of-the-art Technology</li>
                            <li><FaCheckCircle /> Comfortable & Relaxing Environment</li>
                            <li><FaCheckCircle /> Highly Qualified Team</li>
                        </ul>
                        <a href="#contact" className="btn btn-secondary">Meet Our Team</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

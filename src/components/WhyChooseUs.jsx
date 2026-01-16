import React from 'react';
import { FaUserDoctor, FaMicroscope, FaPumpMedical, FaWallet } from 'react-icons/fa6';

const WhyChooseUs = () => {
    return (
        <section id="why-choose-us" className="section why-choose-us">
            <div className="container">
                <div className="section-header text-center">
                    <h4 className="sub-heading">Why Choose Us</h4>
                    <h2>Experience the Difference</h2>
                </div>
                <div className="features-grid">
                    <div className="feature-box">
                        <div className="feature-icon">
                            <FaUserDoctor />
                        </div>
                        <h3>Experienced Dentists</h3>
                        <p>Our team brings years of expertise and continuous learning to treat you better.</p>
                    </div>
                    <div className="feature-box">
                        <div className="feature-icon">
                            <FaMicroscope />
                        </div>
                        <h3>Modern Equipment</h3>
                        <p>We utilize the latest dental technology for precise and painless treatments.</p>
                    </div>
                    <div className="feature-box">
                        <div className="feature-icon">
                            <FaPumpMedical />
                        </div>
                        <h3>Hygienic Clinic</h3>
                        <p>We strictly adhere to sterilization protocols to ensure a safe environment.</p>
                    </div>
                    <div className="feature-box">
                        <div className="feature-icon">
                            <FaWallet />
                        </div>
                        <h3>Affordable Care</h3>
                        <p>Top-quality dental services at transparent and competitive prices.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;

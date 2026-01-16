import React from 'react';
import { FaTeeth, FaHandSparkles, FaTooth, FaTeethOpen, FaGem, FaChildReaching, FaArrowRight } from 'react-icons/fa6';

const ServiceCard = ({ icon, title, description }) => (
    <div className="service-card">
        <div className="icon-box">
            {icon}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#contact" className="read-more">Learn More <FaArrowRight /></a>
    </div>
);

const Services = () => {
    const servicesData = [
        {
            icon: <FaTeeth />,
            title: "General Dentistry",
            description: "Routine check-ups, exams, and fillings to maintain optimal oral health."
        },
        {
            icon: <FaHandSparkles />,
            title: "Teeth Cleaning",
            description: "Professional cleaning to remove plaque and tartar for a brighter smile."
        },
        {
            icon: <FaTooth />, // approximated
            title: "Root Canal",
            description: "Advanced therapy to save infected teeth and relieve pain effectively."
        },
        {
            icon: <FaTeethOpen />,
            title: "Braces & Orthodontics",
            description: "Traditional braces and clear aligners to straighten teeth for all ages."
        },
        {
            icon: <FaGem />,
            title: "Cosmetic Dentistry",
            description: "Veneers, bonding, and whitening to create your dream smile."
        },
        {
            icon: <FaChildReaching />,
            title: "Pediatric Dentistry",
            description: "Gentle and fun dental care designed specifically for children."
        }
    ];

    return (
        <section id="services" className="section services">
            <div className="container">
                <div className="section-header text-center">
                    <h4 className="sub-heading">Our Services</h4>
                    <h2>Comprehensive Dental Care</h2>
                    <p>We offer a wide range of customized dental treatments to suit your individual needs.</p>
                </div>
                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

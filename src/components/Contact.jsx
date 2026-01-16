import React, { useState } from 'react';
import { FaLocationDot, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa6';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        mobileNumber: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState(null); // null, 'success', 'error'

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        if (formData.fullName && formData.mobileNumber && formData.message) {
            setFormStatus('success');
            // Reset form after a delay
            setTimeout(() => {
                setFormData({ fullName: '', mobileNumber: '', message: '' });
                setFormStatus(null);
            }, 3000);
        } else {
            setFormStatus('error');
        }
    };

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h4 className="sub-heading">Contact Us</h4>
                        <h2>Get in Touch</h2>
                        <p>Ready to schedule your appointment? Have any questions? Reach out to us today.</p>

                        <div className="info-item">
                            <FaLocationDot />
                            <div>
                                <h5>Visit Us</h5>
                                <p>PRampur Rd, near Hotel Amardeep, Haldwani, Karayalpur Chatursingh, Uttarakhand 263139</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <FaPhone />
                            <div>
                                <h5>Call Us</h5>
                                <p>+91 9756876886</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <FaEnvelope />
                            <div>
                                <h5>Email Us</h5>
                                <p>Pritambora93@gmail.com</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <FaClock />
                            <div>
                                <h5>Opening Hours</h5>
                                <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-box">
                        <h3>Book an Appointment</h3>
                        <form id="appointmentForm" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    placeholder="John Doe"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mobileNumber">Mobile Number</label>
                                <input
                                    type="tel"
                                    id="mobileNumber"
                                    name="mobileNumber"
                                    placeholder="+1 555 000 0000"
                                    value={formData.mobileNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Purpose / Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="I would like to book a check-up..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Submit Request</button>
                        </form>
                        {formStatus === 'success' && (
                            <div className="form-message success" style={{ marginTop: '15px' }}>
                                Thank you! We will contact you soon.
                            </div>
                        )}
                        {formStatus === 'error' && (
                            <div className="form-message error" style={{ marginTop: '15px' }}>
                                Please fill out all fields.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

import React, { useState, useEffect } from 'react';
import { FaTooth, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isSticky ? 'sticky' : ''}`} id="navbar">
            <div className="container">
                <a href="#" className="logo" onClick={closeMenu}>
                    <FaTooth /> Bright<span>Smile</span>
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <button
                        onClick={toggleTheme}
                        className="theme-toggle-btn"
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: isSticky ? 'var(--text-dark)' : 'var(--text-white)',
                            cursor: 'pointer',
                            fontSize: '1.2rem',
                            display: 'flex',
                            alignItems: 'center',
                            transition: 'var(--transition)'
                        }}
                        aria-label="Toggle Theme"
                    >
                        {theme === 'light' ? <FaMoon /> : <FaSun />}
                    </button>

                    <div
                        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                        id="mobile-menu"
                        onClick={toggleMenu}
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>

                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#services" className="nav-link" onClick={closeMenu}>Services</a>
                    </li>
                    <li className="nav-item">
                        <a href="#why-choose-us" className="nav-link" onClick={closeMenu}>Why Choose Us</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link nav-btn" onClick={closeMenu}>Book Appointment</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;

import React, { useState, useEffect } from 'react';
import './backToTop.css';

function BackToTop() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',  // Smooth scrolling back to top
        });
    };

    return (
        <a
            onClick={backToTop}  // Fix: Call the correct function
            className={`back-to-top d-flex align-items-center justify-content-center ${
                scroll > 100 ? 'active' : ''
            }`}
        >
            <i className="bi bi-arrow-up-short"></i>
        </a>
    );
}

export default BackToTop;

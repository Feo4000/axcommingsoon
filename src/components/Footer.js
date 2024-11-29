// src/components/Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p>© 2024 AnnotateX. All rights reserved.</p>
                <div className="footer-links">
                    <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
                    <a href="/terms-of-service" className="footer-link">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

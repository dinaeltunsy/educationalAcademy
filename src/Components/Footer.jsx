import React from 'react';
import { Card } from 'primereact/card';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <Card className="footer-section" title="About Us">
                    <p>
                        Jupiter Academy is dedicated to providing top-notch educational resources 
                        and courses to students globally.
                    </p>
                </Card>
                <Card className="footer-section" title="Contact Information">
                    <p>Email: contact@jupiteracademy.com</p>
                    <p>Phone: +123-456-7890</p>
                    <p>Address: 123 Education St., Knowledge City</p>
                </Card>
                <Card className="footer-section" title="Quick Links">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/courses">Courses</a></li>
                        <li><a href="/pages/about">About Us</a></li>
                        <li><a href="/pages/contact">Contact</a></li>
                    </ul>
                </Card>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Jupiter Academy. All rights reserved.</p>
                <p>Developed By: Dina Eltounsi</p>
            </div>
        </div>
    );
};

export default Footer;

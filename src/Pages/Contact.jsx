import React, { useState } from 'react';
import { database } from '../firebase'; // Adjust the path as needed
import { ref, push } from 'firebase/database'; // For Realtime Database
import './contact.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Push data to Firebase Realtime Database
        const dbRef = ref(database, 'contact');
        push(dbRef, formData)
            .then(() => {
                setSuccessMessage('Your message has been sent successfully!');
                setFormData({ name: '', email: '', message: '' }); // Reset form
            })
            .catch((error) => {
                console.error('Error saving data:', error);
            });
    };

    return (
        <>

        <div className="contact-container">
            <h1>Contact Us</h1>
            <section className="contact-info">
                <p>Please reach us out at <a href="mailto:info@yourcompany.com">info@yourcompany.com</a>.<br/> or </p>
            </section>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
            {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
        </>
    );
};

export default ContactUs;

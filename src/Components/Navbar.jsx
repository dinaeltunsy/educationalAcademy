import React from 'react';
import { Menubar } from 'primereact/menubar';
import {Link} from 'react-router-dom'; 
import './navbar.css';

const Navbar = () => {
    // Menu items
    const items = [
        { 
            label: <Link to="/">Home</Link>, // Link to Home page
            icon: 'pi pi-home' 
        },
        {
            label: 'Courses',
            icon: 'pi pi-book',
            items: [
                { label: <Link to="/pages/exampage">Maths</Link>, icon: 'pi pi-calculator',  items:[{label: <Link to="/pages/Syllabus/Maths">Foundation Program</Link>}, {label: <Link to="/pages/Syllabus/Maths">Grade 1</Link>}]}, // Link to Maths
                { label: <Link to="/pages/exampage">Science</Link>, icon: 'pi pi-lightbulb', items:[{label: <Link to="/pages/exampage">Foundation Program</Link>}, {label: <Link to="/pages/exampage">Grade 1</Link>}, {label: <Link to="/pages/exampage">Grade 2</Link>}] }, // Link to Science
                { label: <Link to="/pages/exampage">French</Link>, icon: 'pi pi-globe' } // Link to French
            ]
        },
        { 
            label: <Link to="/pages/about">About Us</Link>, // Link to About Us page
            icon: 'pi pi-info-circle' 
        },
        { 
            label: <Link to="/pages/contact">Contact</Link>, // Link to Contact page
            icon: 'pi pi-phone' 
        }
    ];

    // Logo as the start element
    const start = <h1 style={{ margin: 0 }}>Jupiter Academy</h1>;

    return (
        <div className="card">
            <Menubar model={items} start={start} />
        </div>
    );
};

export default Navbar;

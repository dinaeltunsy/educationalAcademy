import React from 'react';
import './about.css';
import { Card } from 'primereact/card';
import employeeImg1 from '../Pages/Syllabus/Images/employee1.jpeg';
import employeeImg2 from '../Pages/Syllabus/Images/employee2.jpeg';
import employeeImg3 from '../Pages/Syllabus/Images/employee3.jpeg';




const About = () => {
    
    const CardColors = [
            '#000000','#14213D','#FCA311','#52B2BF'
    ]

    const Values =[
        {
            Title: 'Quality',
            description:'We are dedicated to delivering excellence in every aspect of our work, setting high standards to ensure our solutions are reliable, effective, and impactful.',
     
        }, 
        {
            Title: 'Integrity',
            description:'We are committed to transparency and excellence in everything we do.',
    
            
        }, 
        {
            Title: 'Innovation',
            description:'We continuously improve and evolve, embracing technology to provide state-of-the-art learning experiences.',

        }, 
        {
            Title: 'Inclusivity',
            description:'We strive to make learning accessible and engaging for all.',
         
        },
        {
            Title: 'Collaboration',
            description:'We believe that success is achieved through teamwork and open communication, fostering a culture where diverse perspectives drive innovative solutions.'
            
        }
    ]
    const TeamImgsList =[
        {
            Cardimg: employeeImg1,
            employeename: 'Jane Doe',
            employeeposition: 'Frontend Developer',
        },
        {
            Cardimg: employeeImg2,
            employeename: 'Marry John',
            employeeposition: 'UI Designer',

        },
        {
            Cardimg:employeeImg3, 
            employeename: 'Clary Smith',
            employeeposition: 'FullStack Developer',

        }
    ]


    return (
        <div className="about-us-container">
            <div className="background-image-section">
             <div className="overlay-aboutus">
                <h1>ABOUT US</h1>
                <h2>& WHO WE ARE</h2>
                <p className='Aboutus-intro'>We are a dedicated team passionate about transforming learning and assessment experiences through accessible and engaging online platforms. With a commitment to providing high-quality resources, we support individuals in reaching their educational goals, from skill-building to knowledge testing. Our team blends expertise in education, technology, and design to craft user-friendly, innovative solutions tailored to meet diverse learning needs.</p>
             </div>
            </div>
        

            <section className="mission-vision">
                <h2>Our Mission</h2>
                <p>Our mission is to empower learners and educators alike by delivering reliable, interactive, and inspiring tools that foster lifelong learning. We believe education should be accessible, enjoyable, and rewarding, no matter where you are in the world.</p>
                <h2>Our Vision</h2>
                <p>We envision a world where everyone has access to the resources they need to succeed. By bridging technology with education, we aim to create inclusive, cutting-edge solutions that adapt to the evolving landscape of online learning.</p>
            </section>

            <section className="core-values">
                <h2>Our Values</h2>
                <div className="core-values-cards">
                    {Values.map((value, index) => (
                        <Card 
                            key={index} 
                            className="ValuesCard" 
                            style={{ backgroundColor: CardColors[index % CardColors.length] }}
                        >
                            <h2>{value.Title}</h2>
                            <p>{value.description}</p>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="team">
                <h2>Meet the Team</h2>
                <div className="team-member">
                {TeamImgsList.map((ListImg, ImgIndex)=>(
                    <div>
                        <img key={ImgIndex} src={ListImg.Cardimg} alt="Team Member" />
                        <h3>{ListImg.employeename}</h3>
                        <p>{ListImg.employeeposition}</p>
                    </div>

                ))}
                    
                </div>
                {/* Add more team members similarly */}
            </section>

            <section className="contact-info">
                <h2>Contact Us</h2>
                <p>For any inquiries, please reach out at <a href="mailto:info@yourcompany.com">info@yourcompany.com</a>.</p>
            </section>
        </div>
    );
};

export default About;

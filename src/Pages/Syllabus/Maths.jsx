import React from 'react';
import './maths.css'; // Add any custom styling here
import { Card } from 'primereact/card';
import ImageMaths from '../Syllabus/Images/mathsbkground.jpg';
import ImageMaths2 from '../Syllabus/Images/mathsbkground2.jpg';
import ImageMaths3 from '../Syllabus/Images/mathsbkground3.jpg';
import ImageMaths4 from '../Syllabus/Images/mathsbkground4.jpg';
import ImageMaths5 from '../Syllabus/Images/mathsbkground5.jpg';




const Maths = () => {
    // Example data for each unit
    const syllabusUnits = [
        {

            CardImage: ImageMaths,
            unitTitle: 'Unit 1: Algebra',
            description: 'Explore the fundamentals of algebra, including equations, inequalities, and expressions.'
        },
        {
            CardImage: ImageMaths2,
            unitTitle: 'Unit 2: Geometry',
            description: 'Dive into the world of shapes, angles, and geometric principles.'
        },
        {
            CardImage: ImageMaths3,
            unitTitle: 'Unit 3: Trigonometry',
            description: 'Learn about trigonometric functions, identities, and their applications.'
        },
        {
            CardImage: ImageMaths4,
            unitTitle: 'Unit 4: Calculus',
            description: 'An introduction to calculus concepts like limits, derivatives, and integrals.'
        },
        {
            CardImage: ImageMaths5,
            unitTitle: 'Unit 5: Probability & Statistics',
            description: 'Understand basic probability, data analysis, and statistical measures.'
        }
    ];

    return (
        <div className="syllabus-container">
            <h1>Math Course Syllabus</h1>
            <div className="syllabus-cards">
                {syllabusUnits.map((unit, index) => (
                    <Card key={index} className="syllabus-card">
                        <img className='card-img' src={unit.CardImage} alt=''/>
                        <div className='sub-card'>
                         <h2>{unit.unitTitle}</h2>
                         <p>{unit.description}</p>
                        </div>

                    </Card>
                ))}
            </div>
       
        </div>
    );
};

export default Maths;

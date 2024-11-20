import React, { useState } from 'react';
import './home.css';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import ImageSlider from '../Components/ImageSlider';
import { useNavigate } from 'react-router-dom';
import data from '../Exams/data.json'; // Import the JSON data

const Home = () => {
    const navigate = useNavigate();
    const [examId, setExamId] = useState(''); // Store user input
    const [error, setError] = useState(''); // Store error message

    const exams = [
        {
            title: 'Maths',
            icon: 'pi pi-calculator',
            description: 'Test your mathematical skills and understanding of concepts.',
            link: '/pages/exampage',
            examIds: 'examID123' // Unique exam ID
        },
        {
            title: 'Science',
            icon: 'pi pi-lightbulb',
            description: 'Explore the world of science and challenge your knowledge.',
            link: '/pages/exampage',
            examIds: 'examID456' // Unique exam ID
        },
        {
            title: 'French',
            icon: 'pi pi-globe',
            description: 'Evaluate your proficiency in the French language.',
            link: '/pages/exampage',
            examIds: 'examID122' // Unique exam ID
        }
    ];

    // Handle user input submission for exam search
    const handleFindExam = () => {
        const matchedExam = data.exams.find(exam => exam.examId === examId.trim());
        
        if (matchedExam) {
            // Navigate to exam page if found
            navigate(`/pages/exampage`, { state: { examId: matchedExam.examId } });
            setError(''); // Clear any previous error
        } else {
            // Display an error if not found
            setError('Exam ID not found. Please enter a valid ID.');
        }
    };

    return (
        <>
            <ImageSlider />

            <div className="exam-id-input">
                <input 
                    type="text" 
                    value={examId} 
                    onChange={(e) => setExamId(e.target.value)} 
                    placeholder="Enter Exam ID" 
                    className='examid-input-fld'
                />
                <Button 
                    label="Find Exam" 
                    icon="pi pi-search" 
                    onClick={handleFindExam} 
                    className=" examstart-btn btn" 
                />
                {error && <p className="error-message">{error}</p>}
            </div>

            <div className="exam-cards">
                {exams.map((exam, index) => (
                    <Card
                        key={index}
                        title={<span className='card-title'><i className={`${exam.icon} exam-icon`}></i> {exam.title}</span>}
                        className="exam-card"
                        footer={
                            <Button 
                                label="Start Exam" 
                                icon="pi pi-arrow-right" 
                                onClick={() => navigate(`/pages/exampage`, { state: { examId: exam.examIds } })}
                                className="examstart-btn btn" 
                            />
                        }
                    >
                        <p className='card-description'>{exam.description}</p>
                    </Card>
                ))}
            </div>
        </>
    );
};

export default Home;

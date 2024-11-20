import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import data from '../Exams/data.json';
import './exampage.css';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';

const ExamPage = () => {
    const location = useLocation();
    const { examId } = location.state || {}; // Get examId from the route state

    const [examTitle, setExamTitle] = useState('');
    const [questions, setQuestions] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [score, setScore] = useState(null);
    const [correctAnswers, setCorrectAnswers] = useState({});
    const [error, setError] = useState(''); // Error message if exam is not found

    useEffect(() => {
        // Check for a matching exam in the JSON data
        const examData = data.exams.find(exam => exam.examId === examId);
        if (examData) {
            setExamTitle(examData.title);
            setQuestions(examData.questions);

            // Extract correct answers for grading
            const correctAnswersData = {};
            examData.questions.forEach((question) => {
                correctAnswersData[question.questionId] = question.options.find(option => option.isCorrect).text;
            });
            setCorrectAnswers(correctAnswersData);
        } else {
            // If no matching exam, set an error message
            setError('Exam not found. Please check the exam ID and try again.');
        }
    }, [examId]);

    const handleAnswerChange = (questionId, answer) => {
        setSelectedAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionId]: answer
        }));
    };

    const handleSubmit = () => {
        let calculatedScore = 0;
        questions.forEach((question) => {
            const correctAnswer = correctAnswers[question.questionId];
            const userAnswer = selectedAnswers[question.questionId];
            if (userAnswer === correctAnswer) {
                calculatedScore += 1;
            }
        });
        setScore(calculatedScore);
    };

    if (error) {
        return <div className="error-message">{error}</div>; // Display error if exam is not found
    }

    return (
        <div>
            <div className='background-img' alt='background'>
                <h1 className='Exam-title'>MCQ Examination <br/>{examTitle}</h1>
            </div>
            
            {questions.map((question, index) => ( 
                <div key={question.questionId}>
                    <h2 className='Question-no'>{`Question ${index + 1}:`}-</h2>
                    <h3 className='Questions'>{question.text}</h3>
                    {question.options.map((option, i) => (
                        <div className='Question-choices' key={i}>
                            <input
                                type="radio"
                                id={`q${index}_opt${i}`}
                                name={`question${index}`}
                                value={option.text}
                                onChange={() => handleAnswerChange(question.questionId, option.text)}
                            />
                            <label htmlFor={`q${index}_opt${i}`}>{option.text}</label>
                        </div>
                    ))}
                </div>
            ))}

            <Button className='Submit-btn' onClick={handleSubmit} icon="pi pi-check" iconPos="right">Submit</Button>

            {score !== null && (
                <div className='Scoring-section'>
                    <h2>Score: {score} / {questions.length}</h2>
                    <h3>Correct Answers:</h3>
                    <ul>
                        {questions.map((question, index) => (
                            <li key={question.questionId}>
                               {`Question ${index + 1}: `} {question.text} - Correct Answer: {correctAnswers[question.questionId]}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ExamPage;

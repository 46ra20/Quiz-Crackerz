import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './Quiz.css'
import { AiFillEye } from 'react-icons/ai'
import QuizOption from './QuizOption';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Quiz = () => {
    const getQuiz = useLoaderData();
    const { questions,id,name } = getQuiz.data;
    const replaceText = (value)=>{
        const removeFirstTag = value.replace('<p>','');
        return removeFirstTag.replace('</p>','');
    }
    const notify = (isRight) => {
        if(isRight === 'true'){
            toast.success("Wow, Right Answer!!!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else if(isRight === 'false'){
            toast.error("Wrong Answer", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else{
            toast.warning(`${isRight}`)
        }
    };

    return (
        <div className='my=5 py-5 container' key={id}>
            <div className='border-bottom my-3'>
                <h2 className='text-center'>Question About {name}.</h2>
                <h2 className='text-center'>Are you Ready??</h2>
            </div>
            {
                questions.map(quiz =>
                    <Card border="primary" className='d-grid col-lg-8 mx-auto my-4 shadow' key={quiz.id}>
                        <Card.Header className='fs-5 d-flex justify-content-between align-items-center'>
                            <span>Question:- {replaceText(quiz.question)}</span>
                            <span style={{ cursor: 'pointer' }} title="Show Right Answer" className='border px-3 pb-1 rounded cHover' onClick={()=>notify(quiz.correctAnswer)}><AiFillEye></AiFillEye></span>
                        </Card.Header>
                        <Card.Body className='gap-4'>
                            <Row>
                                {
                                    quiz.options.map(option => <QuizOption option={option} correctAnswer={quiz.correctAnswer} key={option.id} notify={notify}></QuizOption>)
                                }
                            </Row>
                        </Card.Body>
                    </Card>
                )
            }
            <ToastContainer />
        </div>
    );
};

export default Quiz;
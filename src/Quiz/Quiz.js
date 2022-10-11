import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const getQuiz = useLoaderData();
    const { questions,id,name } = getQuiz.data;
    return (
        <div className='my=5 py-5 container' key={id}>
            <div className='border-bottom my-3'>
                <h2 className='text-center'>Question About {name}</h2>
                <h2 className='text-center'>Are you Ready??</h2>
            </div>
            {
                questions.map(quiz =>
                    <Card border="primary" className='d-grid col-lg-8 mx-auto my-4 shadow' key={quiz.id}>
                        <Card.Header className='fs-5'>Question:- {quiz.question}</Card.Header>
                        <Card.Body className='gap-4'>
                            <Row>
                                {
                                    quiz.options.map(option => <Col className='p-3 border rounded m-2 mx-auto' xs={12} md={6} lg={5} style={{cursor:'pointer'}}><li>{option}</li></Col>)
                                }
                            </Row>
                        </Card.Body>
                    </Card>
                )
            }
        </div>
    );
};

export default Quiz;
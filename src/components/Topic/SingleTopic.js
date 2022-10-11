import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const SingleTopic = ({topic, quizPage}) => {
    return (
        <Card style={{ width: '18rem', margin: '10px' }} key={topic.id}>
            <Card.Img variant="top" src={topic.logo} className="bg-light" />
            <Card.Body className='d-flex justify-content-between align-items-center'>
                <Card.Title>{topic.name}</Card.Title>
                <Button variant="primary" onClick={quizPage(topic.id)}>Quiz</Button>
            </Card.Body>
        </Card>
    );
};

export default SingleTopic;
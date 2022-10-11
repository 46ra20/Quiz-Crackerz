import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const SingleTopic = ({topic}) => {
    return (
        <Card style={{ width: '18rem'}} key={topic.id} className='w-100 mx-auto mx-md-2 my-2'>
            <Card.Img variant="top" src={topic.logo} style={{backgroundColor:'gray'}} />
            <Card.Body className='d-flex justify-content-between align-items-center'>
                <Card.Title>{topic.name}</Card.Title>
                <Link to={`/topic/quiz/${topic.id}`}><Button variant="primary">Quiz</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default SingleTopic;
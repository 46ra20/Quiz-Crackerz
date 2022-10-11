import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const SingleTopic = ({topic}) => {
    return (
        <Card style={{ width: '18rem', margin: '10px' }} key={topic.id}>
            <Card.Img variant="top" src={topic.logo} style={{backgroundColor:'gray'}} />
            <Card.Body className='d-flex justify-content-between align-items-center'>
                <Card.Title>{topic.name}</Card.Title>
                <Link to={`/topic/quiz/${topic.id}`}><Button variant="primary">Quiz</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default SingleTopic;
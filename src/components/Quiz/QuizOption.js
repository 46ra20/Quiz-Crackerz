import React, { useState } from 'react';
import { Col } from 'react-bootstrap';

const QuizOption = ({ option, correctAnswer,notify }) => {
    const [ans, setAns] = useState(false);
    const [normal, setNormal] =useState(false);
    const getAnswer = (option, correctAnswer) => {
        if (option === correctAnswer) {
            setAns(true);
            notify('true');
        }
        else {
            setAns(false);
            notify('false')
        }
    }
    return (
        <Col className={`cuHover p-3 border rounded m-2 mx-auto ${normal ? `${ans ? 'correct' : 'wrong'}` : 'normal'}`} xs={12} md={6} lg={5} style={{ cursor: 'pointer' }} onClick={() => (setNormal(true),getAnswer(option, correctAnswer))}>
            <li className='px-2'>{option}</li>
        </Col>
    );
};

export default QuizOption;
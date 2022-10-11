import React from 'react';
import { Card } from 'react-bootstrap';

const Blog = () => {
    const qusAndAnswer = [
        { 
            question: 'What is the features of React?',
             answer: 'Currently ,React Js gaining popularity as the best Java Script framework among web developers. It is plying essential font-end ecosystem. The important features of React Js are flowing. JSx, One-way-direction, Data binding, Virtual DOM, Simplicity, Performance.' 
        },
        { 
            question:'How does context api work?',
            answer:'The context api a way for a react app to effectively produce global variable that can be passed around. This is the alternative to prop drilling or move prop grandparent to child parent.'
        },
        {   question: 'What is useRef Hook?',
            answer: 'Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with <div ref={myRef} /> , React will set its .current property to the corresponding DOM node whenever that node changes.' 
        },
    ];
    return (
        <div className='my-5 container'>
            <h2 className='text-center border-bottom py-2'>Question and Answer</h2>
            <div className='d-grid col-md-8 col-sm-12 mx-auto'>
                {
                    qusAndAnswer.map(qandA => 
                        <Card border = "primary"className='my-3'>
                            <Card.Header>Question:- {qandA.question}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {qandA.answer}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                }
            </div>
        </div>
    );
};

export default Blog;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleTopic from './SingleTopic';
import Img from './header.jpg'

const Topic = () => {
    const getData = useLoaderData();
    const {data} = getData;
    return (
        <div className='container mt-5'>
            <div className='mx-auto mx-md-2 border-bottom d-flex align-items-center bg-light rounded' style={{marginTop:'75px'}}>
                <img src={Img} alt='education is power' style={{height:'140px',width:'200px'}} className='rounded-1'></img>
                <div className='ps-3'>
                    <h3>Practice make man perfect.</h3>
                    <p>Sharp your Knowledge with smart way!!!</p>
                </div>
            </div>
            <div className='d-sm-block d-md-flex my-2 py-3 mx-auto'>
                {
                    data.map(topic => <SingleTopic topic={topic} key={topic.id}></SingleTopic>)
                }
            </div>
        </div>
    );
};

export default Topic;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleTopic from '../Topic/SingleTopic';
import Img from './header.jpg';

const Home = () => {
    const getData = useLoaderData();
    const {data} = getData;
    return (
        < div className='container'>
            <div className='mx-auto mx-md-2 border-bottom d-md-flex align-items-center bg-light rounded' style={{ marginTop: '75px' }}>
                <img src={Img} alt='education is power' className='rounded-1 col-sm-12 col-md-2 img-fluid'></img>
                <div className='ps-3 text-center col-sm-12 col-md-10'>
                    <h3>Practice make man perfect.</h3>
                    <p>Sharp your Knowledge with smart way!!!</p>
                </div>
            </div>
            <div className='d-sm-block d-md-flex my-2 py-3 mx-auto'>
                {
                    data.map(topic => <SingleTopic topic={topic} key={topic.id}></SingleTopic>)
                }
            </div>
        </div >
    );
};

export default Home;
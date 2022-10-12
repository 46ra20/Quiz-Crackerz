import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleTopic from './SingleTopic';

const Topic = () => {
    const getData = useLoaderData();
    const {data} = getData;
    return (
        <div className='container mt-5'>
            <div className='d-sm-block d-md-flex my-2 py-3 mx-auto'>
                {
                    data.map(topic => <SingleTopic topic={topic} key={topic.id}></SingleTopic>)
                }
            </div>
        </div>
    );
};

export default Topic;
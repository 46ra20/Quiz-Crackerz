import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleTopic from './SingleTopic';

const Topic = () => {
    const getData = useLoaderData();
    const {data} = getData;
    return (
        <div className='container d-flex my-5 mx-auto'>
            {
                data.map(topic => <SingleTopic topic={topic} key={topic.id}></SingleTopic>)
            }
        </div>
    );
};

export default Topic;
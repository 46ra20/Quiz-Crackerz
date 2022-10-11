import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleTopic from './SingleTopic';

const Topic = () => {
    const getData = useLoaderData();
    function quizPage(props){
        console.log('hello im-clicked',props);
    };
    const {data} = getData;
    return (
        <div className='container d-flex my-5 mx-auto'>
            {
                data.map(topic => <SingleTopic topic={topic} quizPage={quizPage} key={topic.id}></SingleTopic>)
            }
            {/* <button onClick={}>hello</button> */}
        </div>
    );
};

export default Topic;
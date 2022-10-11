import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='w-50 mx-auto my-5 border rounded p-4 text-center'>
            <h3>Sorry we can't find any page with this link.</h3>
            <h4>Please Make Sure</h4>
            <h4>Or go <Link to={'/topic'}>Home</Link></h4>
        </div>
    );
};

export default Error;
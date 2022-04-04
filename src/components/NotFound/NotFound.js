import React from 'react';
import NotFoundPage from '../../Assets/Image/404.jpg'

const NotFound = () => {
    return (
        <div className='flex justify-center w-full'>
            <img className='w-3/5' src={NotFoundPage} alt="" />
        </div>
    );
};

export default NotFound;
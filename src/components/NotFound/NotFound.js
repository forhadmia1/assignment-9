import React from 'react';
import NotFoundPage from '../../Assets/Image/404.jpg'

const NotFound = () => {
    return (
        <div className='flex justify-center'>
            <img className='w-2/4' src={NotFoundPage} alt="" />
        </div>
    );
};

export default NotFound;
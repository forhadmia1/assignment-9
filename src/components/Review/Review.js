import React from 'react';

const Review = ({ review }) => {
    const { name, comment, rating, picture } = review;
    return (
        <div className='shadow-lg rounded'>
            <div className="flex justify-center"><img className='w-20 h-20 rounded-full' src={picture} alt="" /></div>
            <div className=" p-4">
                <h2 className='text-2xl font-bold'>{name}</h2>
                <p className='text-md'>{comment}</p>
                <p><small className='font-bold'>Review: {rating}</small></p>
            </div>
        </div>
    );
};

export default Review;
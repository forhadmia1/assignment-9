import React from 'react';
import useReviewdata from '../../hooks/useReviewdata';
import Review from '../Review/Review';

const Reviews = () => {

    const [reviews] = useReviewdata();

    return (
        <div className='grid grid-cols-3 gap-6 mt-12 mx-16'>
            {
                reviews.map(review => <Review key={review.id} review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;
import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Review = ({ review }) => {
    const { name, comment, rating, picture } = review;
    return (
        <div className='shadow-lg rounded mt-4'>
            <div className="flex justify-center"><img className='w-32 h-32 rounded-full' src={picture} alt="" /></div>
            <div className=" p-4">
                <h2 className='text-2xl font-bold'>{name}</h2>
                <div>
                    <Rating
                        initialRating={rating}
                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                        readonly
                    ></Rating>
                </div>
                <p className='text-md'>{comment}</p>
            </div>
        </div>
    );
};

export default Review;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../../Assets/Image/headphone.jpg'
import useReviewdata from '../../hooks/useReviewdata';
import Review from '../Review/Review';

const Home = () => {
    const navigate = useNavigate()
    const [reviews] = useReviewdata();

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 md:mt-12'>
                <div className=" md:ml-16 flex items-center p-4 md:p-0 order-2">
                    <div>
                        <h1 className='text-4xl font-bold text-sky-500'>The Best Headphone Forever</h1>
                        <p className='mt-4 text-xl'>It is a very high-performance wireless Bluetooth headphones in rose gold, Compatible with iOS and Android devices, With fast fuel, 5 minutes of charging gives you 3 hours of playback when the battery is low.</p>
                        <button className='bg-sky-700 px-6 py-2 text-white font-bold rounded-md hover:text-black mt-6'>Live Demo</button>
                    </div>
                </div>
                <div className="flex items-center justify-center order-1 md:order-3">
                    <img className='md:w-[500px] md:h-[500px] p-4' src={image} alt="headphone_image" />
                </div>
            </div>
            <div className='my-10'>
                <h2 className='text-center text-2xl font-bold'>Customer Reviews 3</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mx-16'>
                    {
                        reviews.slice(0, 3).map(review => <Review key={review.id} review={review}></Review>)
                    }
                </div>
                <div className='flex justify-center mt-8'>
                    <button onClick={() => navigate(`/reviews`)} className='bg-sky-700 px-8 py-2 text-white font-bold rounded-3xl hover:text-black'>See all Reviews</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
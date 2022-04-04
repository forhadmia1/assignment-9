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
            <div className='grid grid-cols-2 mt-12'>
                <div className=" ml-16 flex items-center ">
                    <div>
                        <h1 className='text-4xl font-bold'>This is the Headphone reviews site</h1>
                        <p className='mt-4 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sapiente tenetur amet assumenda praesentium alias inventore iusto quo atque nisi aperiam dolore consectetur corrupti neque, incidunt officia qui tempore perspiciatis quaerat, iure fugiat. Cupiditate molestias, praesentium expedita fugiat pariatur vitae?</p>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <img className='w-[500px] h-[500px] rounded-lg' src={image} alt="headphone_image" />
                </div>
            </div>
            <div className='my-10'>
                <h2 className='text-center text-2xl font-bold'>Customer Reviews 3</h2>
                <div className='grid grid-cols-3 gap-6 mt-12 mx-16'>
                    {
                        reviews.slice(0, 3).map(review => <Review key={review.id} review={review}></Review>)
                    }
                </div>
                <div className='flex justify-center mt-8'>
                    <button onClick={() => navigate(`/reviews`)} className='bg-sky-700 px-4 py-2 text-white font-bold rounded-3xl hover:text-black'>See all Reviews</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
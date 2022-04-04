import React from 'react';

const Blogs = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mx-8 gap-8 mt-6'>
            <div>
                <h1 className='text-2xl font-bold'>1. What is context api?</h1>
                <p className='text-xl mt-4'>Generally we pass a data from parrent to child component, then the child to another one its call props drilling. At this way we pass the data at every level of component tree. context api provides us a way to pass data from parrent to targeted component with out passing props at every level.</p>
            </div>
            <div>
                <h1 className='text-2xl font-bold'>2. What is Symentic tag?</h1>
                <p className='text-xl mt-4'>Those tag have a meaning full name and which tell about type of content is called symentic tag. Symentic tag make the code easier. These are the example of symentic tag: article, aside, address, header, footer etc.</p>
            </div>
        </div>
    );
};

export default Blogs;
import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='flex gap-6 justify-center py-4 text-xl font-semibold sticky top-0'>
            <CustomLink to={'/'}>Home</CustomLink>
            <CustomLink to={'/reviews'}>Reviews</CustomLink>
            <CustomLink to={'/dashboard'}>Dashboard</CustomLink>
            <CustomLink to={'/blogs'}>Blogs</CustomLink>
            <CustomLink to={'/about'}>About</CustomLink>
        </nav>
    );
};

export default Header;
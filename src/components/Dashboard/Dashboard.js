import React from 'react';
import MyBarChart from '../MyBarChart/MyBarChart';
import MyLineChart from '../MyLineChart/MyLineChart';

const Dashboard = () => {
    return (
        <div className='grid grid-cols-2 mt-16'>
            <MyLineChart />
            <MyBarChart />
        </div>
    );
};

export default Dashboard;
import React from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChartData from '../../hooks/useChartData';

const MyBarChart = () => {
    const [data] = useChartData();
    return (
        <div>
            <h1 className='text-2xl font-bold text-blue-500 text-center'>Investment vs Revenue</h1>
            <div className="flex justify-center mt-4">
                <BarChart width={350} height={200} data={data}>
                    <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                    <Bar dataKey="revenue" stackId="a" fill="#41A8F7" />
                    <XAxis dataKey={'month'} />
                    <YAxis dataKey={'investment'} />
                    <Tooltip />
                </BarChart>
            </div>
        </div>
    );
};

export default MyBarChart;
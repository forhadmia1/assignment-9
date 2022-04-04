import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChartData from '../../hooks/useChartData';

const MyLineChart = () => {
    const [data] = useChartData();

    return (
        <div>
            <h1 className='text-2xl font-bold text-blue-500 text-center'>Month Wise Sell</h1>
            <div className="flex justify-center mt-4">
                <LineChart width={350} height={200} data={data}>
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                    <XAxis dataKey="month" />
                    <YAxis dataKey="sell" />
                    <Tooltip />
                </LineChart>
            </div>
        </div>
    );
};

export default MyLineChart;
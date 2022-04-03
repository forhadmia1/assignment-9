import React from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChartData from '../../hooks/useChartData';

const MyBarChart = () => {
    const [data] = useChartData();
    return (
        <div>
            <BarChart width={600} height={400} data={data}>
                <Bar dataKey="investment" fill="#8884d8" />
                <XAxis dataKey={'month'} />
                <YAxis dataKey={'investment'} />
                <Tooltip />
            </BarChart>
        </div>
    );
};

export default MyBarChart;
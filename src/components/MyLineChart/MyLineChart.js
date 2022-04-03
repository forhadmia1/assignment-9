import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChartData from '../../hooks/useChartData';

const MyLineChart = () => {
    const [data] = useChartData();

    return (
        <div>
            <LineChart width={600} height={400} data={data}>
                <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                <XAxis dataKey="month" />
                <YAxis dataKey="sell" />
                <Tooltip />
            </LineChart>

        </div>
    );
};

export default MyLineChart;
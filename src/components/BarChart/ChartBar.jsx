import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

const ChartBar = (props) => {

    let dataKeys = props.dataKeys.map(bar => <Bar key={bar.key} dataKey={bar.key} fill={bar.color} />)

    return (
        <ResponsiveContainer width='100%' height={300}>
             <BarChart
            width={1000}
            height={300}
            data={props.data}
            barSize={20}
            margin={{
                top: 5, right: 30, left: 20, bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{fontSize: 10}}/>
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            {dataKeys}
        </BarChart>
        </ResponsiveContainer>
    )
}

export default ChartBar

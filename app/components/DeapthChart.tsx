import React from 'react';
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
} from 'recharts';

const DepthChart: React.FC<{ bids: [number, number][]; asks: [number, number][] }> = ({
	bids,
	asks,
}) => {
	const data = [
		...bids.map(([price, size]) => ({ price, size, type: 'BID' })),
		...asks.map(([price, size]) => ({ price, size, type: 'ASK' })),
	];

	return (
		<AreaChart
			width={500}
			height={300}
			data={data}
			margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="price" />
			<YAxis />
			<Tooltip />
			<Area
				type="monotone"
				dataKey="size"
				stroke="#113534"
				fill="#113534"
				stackId="1"
			/>
			<Area
				type="monotone"
				dataKey="size"
				stroke="#3d1e28"
				fill="#3d1e28"
				stackId="2"
			/>
		</AreaChart>
	);
};

export default DepthChart;

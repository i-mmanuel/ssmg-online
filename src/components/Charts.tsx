import { XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Area, AreaChart } from "recharts";

interface elementProps {
	name: string;
	uv: number;
	pv: number;
	amt: number;
}

interface ChartsProps {
	data: Array<elementProps>;
	width?: number;
	height?: number;
}

// const Charts = (props: ChartsProps) => (
// 	<LineChart width={600} height={300} data={props.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
// 		<Line type="monotone" dataKey="uv" stroke="#8884d8" />
// 		<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
// 		<XAxis dataKey="name" />
// 		<YAxis />
// 		<Tooltip />
// 	</LineChart>
// );

const Charts = (props: ChartsProps) => (
	<ResponsiveContainer>
		<AreaChart
			data={props.data}
			margin={{
				top: 10,
				right: 30,
				left: 0,
				bottom: 0,
			}}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="name" />
			<YAxis />
			<Tooltip />
			<Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
		</AreaChart>
	</ResponsiveContainer>
);

// const Charts = (props: ChartsProps) => (
// 	<BarChart width={props.width} height={props.height} data={props.data}>
// 		<XAxis dataKey="name" stroke="#8884d8" />
// 		<YAxis />
// 		<Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
// 		<Legend
// 			width={100}
// 			wrapperStyle={{
// 				top: 40,
// 				right: 20,
// 				backgroundColor: "#f5f5f5",
// 				border: "1px solid #d5d5d5",
// 				borderRadius: 3,
// 				lineHeight: "40px",
// 			}}
// 		/>
// 		<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
// 		<Bar dataKey="uv" fill="#8884d8" barSize={30} />
// 	</BarChart>
// );

export default Charts;

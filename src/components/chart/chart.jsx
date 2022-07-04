import './chart.scss';
import {
    AreaChart,
    Area,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
  
const data = [
    { date: 1, currentValue: 120 },
    { date: 2, currentValue: 116 },
    { date: 3, currentValue: 111 },
    { date: 4, currentValue: 109 },
    { date: 5, currentValue: 90 },
    { date: 6, currentValue: 101 },
];

const Chart = ({ aspect, title, currents }) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 30, bottom: 10 }}
        >
          <defs>
            <linearGradient id="currentValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="currentValue"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#currentValue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
  
export default Chart;
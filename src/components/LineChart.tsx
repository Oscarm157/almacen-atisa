
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

interface LineChartProps {
  data: Array<{ name: string; value: number }>;
  colors: string[];
  title: string;
}

export const LineChart = ({ data, colors, title }: LineChartProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-bold text-[#1c1c1c] mb-4">{title}</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#dddddd" />
            <XAxis dataKey="name" stroke="#1c1c1c" />
            <YAxis stroke="#1c1c1c" />
            <Line type="monotone" dataKey="value" stroke={colors[0]} />
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

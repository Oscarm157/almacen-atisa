
import { AreaChart as RechartsAreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

interface AreaChartProps {
  data: Array<{ name: string; value: number }>;
  colors: string[];
  title: string;
}

export const AreaChart = ({ data, colors, title }: AreaChartProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-bold text-[#1c1c1c] mb-4">{title}</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsAreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#dddddd" />
            <XAxis dataKey="name" stroke="#1c1c1c" />
            <YAxis stroke="#1c1c1c" />
            <Area type="monotone" dataKey="value" fill={colors[0]} stroke={colors[0]} />
          </RechartsAreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

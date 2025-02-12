
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";

interface BarChartProps {
  data: Array<{ name: string; value: number }>;
  colors: string[];
  title: string;
}

export const BarChart = ({ data, colors, title }: BarChartProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-bold text-[#1c1c1c] mb-4">{title}</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#dddddd" />
            <XAxis dataKey="name" stroke="#1c1c1c" />
            <YAxis stroke="#1c1c1c" />
            <Tooltip
              contentStyle={{ 
                backgroundColor: 'white',
                border: '1px solid #cccccc',
                borderRadius: '4px',
                padding: '8px'
              }}
              formatter={(value: any) => [`${value}`, 'Cantidad']}
            />
            <Bar dataKey="value" fill={colors[0]} />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

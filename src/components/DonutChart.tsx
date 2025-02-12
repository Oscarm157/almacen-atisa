
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

interface DonutChartProps {
  data: Array<{ name: string; value: number }>;
  colors: string[];
  title: string;
}

export const DonutChart = ({ data, colors, title }: DonutChartProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-bold text-[#1c1c1c] mb-4">{title}</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              nameKey="name"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ 
                backgroundColor: 'white',
                border: '1px solid #cccccc',
                borderRadius: '4px',
                padding: '8px'
              }}
              formatter={(value: any, name: any) => [`${value}`, name]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

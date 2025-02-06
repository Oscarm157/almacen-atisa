
import { DonutChart } from "@/components/DonutChart";
import { BarChart } from "@/components/BarChart";
import { LineChart } from "@/components/LineChart";
import { AreaChart } from "@/components/AreaChart";

interface ChartData {
  name: string;
  value: number;
}

interface ChartsGridProps {
  data: ChartData[];
  colors: string[];
}

export const ChartsGrid = ({ data, colors }: ChartsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <DonutChart
        title="Existencia por familia de insumos"
        data={data}
        colors={colors}
      />
      <BarChart
        title="Insumos en riesgo"
        data={data}
        colors={colors}
      />
      <LineChart
        title="Entradas por proveedor"
        data={data}
        colors={colors}
      />
      <AreaChart
        title="Salidas por Partida"
        data={data}
        colors={colors}
      />
    </div>
  );
};

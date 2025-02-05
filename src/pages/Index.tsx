
import { useToast } from "@/components/ui/use-toast";
import { Sidebar } from "@/components/Sidebar";
import { MetricCard } from "@/components/MetricCard";
import { DonutChart } from "@/components/DonutChart";
import { BarChart } from "@/components/BarChart";
import { LineChart } from "@/components/LineChart";
import { AreaChart } from "@/components/AreaChart";
import { UserProfile } from "@/components/UserProfile";
import { LocationSelector } from "@/components/LocationSelector";

const Index = () => {
  const { toast } = useToast();

  const showMoreInfo = (metric: string) => {
    toast({
      title: "Más información",
      description: `Mostrando más información sobre ${metric}`,
    });
  };

  const chartData = [
    { name: "Grupo A", value: 60 },
    { name: "Grupo B", value: 40 },
    { name: "Grupo C", value: 30 },
    { name: "Grupo D", value: 50 },
  ];

  const chartColors = ["#c42c30", "#1c1c1c"];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <LocationSelector />
          <UserProfile />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Insumos registrados"
            value="450"
            bgColor="bg-[#c42c30]"
            onInfoClick={() => showMoreInfo("insumos")}
          />
          <MetricCard
            title="Existencia en cantidad"
            value="15,356"
            bgColor="bg-[#d14347]"
            onInfoClick={() => showMoreInfo("existencia")}
          />
          <MetricCard
            title="Existencia en importe"
            value="15,356"
            bgColor="bg-[#de5a5e]"
            onInfoClick={() => showMoreInfo("importe")}
          />
          <MetricCard
            title="Movimientos del día"
            value="56"
            bgColor="bg-[#eb7175]"
            onInfoClick={() => showMoreInfo("movimientos")}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DonutChart
            title="Existencia por familia de insumos"
            data={chartData}
            colors={chartColors}
          />
          <BarChart
            title="Insumos en riesgo"
            data={chartData}
            colors={chartColors}
          />
          <LineChart
            title="Entradas por proveedor"
            data={chartData}
            colors={chartColors}
          />
          <AreaChart
            title="Salidas por Partida"
            data={chartData}
            colors={chartColors}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;

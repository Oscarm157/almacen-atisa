import { useToast } from "@/components/ui/use-toast";
import { Sidebar } from "@/components/Sidebar";
import { MetricCard } from "@/components/MetricCard";
import { DonutChart } from "@/components/DonutChart";
import { BarChart } from "@/components/BarChart";
import { LineChart } from "@/components/LineChart";
import { AreaChart } from "@/components/AreaChart";
import { UserProfile } from "@/components/UserProfile";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Search, Pencil, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const warehouseData = {
  "PIP Sur": {
    insumosRegistrados: 450,
    existenciaCantidad: 15356,
    existenciaImporte: 985000,
    movimientosDia: 56,
    chartData: [
      { name: "Grupo A", value: 60 },
      { name: "Grupo B", value: 40 },
      { name: "Grupo C", value: 30 },
      { name: "Grupo D", value: 50 },
    ]
  },
  "Bronce II": {
    insumosRegistrados: 780,
    existenciaCantidad: 12450,
    existenciaImporte: 675000,
    movimientosDia: 42,
    chartData: [
      { name: "Grupo A", value: 45 },
      { name: "Grupo B", value: 55 },
      { name: "Grupo C", value: 25 },
      { name: "Grupo D", value: 35 },
    ]
  },
  "Link": {
    insumosRegistrados: 320,
    existenciaCantidad: 8900,
    existenciaImporte: 435000,
    movimientosDia: 28,
    chartData: [
      { name: "Grupo A", value: 30 },
      { name: "Grupo B", value: 45 },
      { name: "Grupo C", value: 60 },
      { name: "Grupo D", value: 25 },
    ]
  },
  "Hottah": {
    insumosRegistrados: 590,
    existenciaCantidad: 18200,
    existenciaImporte: 890000,
    movimientosDia: 64,
    chartData: [
      { name: "Grupo A", value: 55 },
      { name: "Grupo B", value: 35 },
      { name: "Grupo C", value: 45 },
      { name: "Grupo D", value: 40 },
    ]
  },
  "Prisma X": {
    insumosRegistrados: 910,
    existenciaCantidad: 22500,
    existenciaImporte: 1250000,
    movimientosDia: 78,
    chartData: [
      { name: "Grupo A", value: 70 },
      { name: "Grupo B", value: 50 },
      { name: "Grupo C", value: 40 },
      { name: "Grupo D", value: 60 },
    ]
  }
};

const Existencia = () => {
  const { toast } = useToast();
  const [selectedWarehouse, setSelectedWarehouse] = useState("PIP Sur");
  const currentData = warehouseData[selectedWarehouse as keyof typeof warehouseData];

  const showMoreInfo = (metric: string) => {
    toast({
      title: "Más información",
      description: `Mostrando más información sobre ${metric}`,
    });
  };

  const handleWarehouseChange = (warehouse: string) => {
    setSelectedWarehouse(warehouse);
  };

  const chartColors = ["#c42c30", "#1c1c1c"];

  // Generate random numbers between 300 and 1400
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * (1400 - 300 + 1)) + 300;
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-64">
        <div className="sticky top-0 z-10 bg-gray-50 p-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#1c1c1c]">Datos Generales</h2>
            <UserProfile />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard
              title="Insumos registrados"
              value={currentData.insumosRegistrados.toString()}
              bgColor="bg-[#33C3F0]"
              onInfoClick={() => showMoreInfo("insumos")}
            />
            <MetricCard
              title="Existencia en cantidad"
              value={currentData.existenciaCantidad.toString()}
              bgColor="bg-[#8E9196]"
              onInfoClick={() => showMoreInfo("existencia")}
            />
            <MetricCard
              title="Existencia en importe"
              value={currentData.existenciaImporte.toLocaleString()}
              bgColor="bg-[#4CAF50]"
              onInfoClick={() => showMoreInfo("importe")}
            />
            <MetricCard
              title="Movimientos del día"
              value={currentData.movimientosDia.toString()}
              bgColor="bg-[#F97316]"
              onInfoClick={() => showMoreInfo("movimientos")}
            />
          </div>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <DonutChart
              title="Existencia por familia de insumos"
              data={currentData.chartData}
              colors={chartColors}
            />
            <BarChart
              title="Insumos en riesgo"
              data={currentData.chartData}
              colors={chartColors}
            />
            <LineChart
              title="Entradas por proveedor"
              data={currentData.chartData}
              colors={chartColors}
            />
            <AreaChart
              title="Salidas por Partida"
              data={currentData.chartData}
              colors={chartColors}
            />
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex justify-between items-center mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Buscar ubicación o insumo..."
                  className="pl-12 border-gray-200 focus:border-[#ea384c] transition-colors rounded-lg"
                />
              </div>
              <Button className="bg-[#ea384c] text-white hover:bg-[#d42d3d] transition-all duration-300 rounded-lg shadow-sm">
                <Plus className="mr-2 h-5 w-5" />
                Agregar insumo
              </Button>
            </div>

            <div className="overflow-hidden rounded-xl border border-gray-200">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#ea384c] hover:bg-[#ea384c]">
                    {[...Array(6)].map((_, index) => (
                      <TableHead 
                        key={index} 
                        className="text-white font-medium"
                      >
                        Título {index + 1}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[...Array(5)].map((_, rowIndex) => (
                    <TableRow key={rowIndex} className="hover:bg-gray-50 transition-colors border-b border-gray-100">
                      {[...Array(5)].map((_, colIndex) => (
                        <TableCell key={colIndex} className="text-gray-700">
                          {generateRandomNumber()}
                        </TableCell>
                      ))}
                      <TableCell>
                        <div className="w-8 h-8 rounded-full bg-[#ea384c] flex items-center justify-center hover:bg-[#d42d3d] transition-colors cursor-pointer">
                          <Pencil className="h-4 w-4 text-white" />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-[#ea384c] hover:bg-[#ea384c]">
                    <TableCell className="font-medium text-white">Totales</TableCell>
                    {[...Array(4)].map((_, index) => (
                      <TableCell key={index} className="font-medium text-white">
                        {generateRandomNumber()}
                      </TableCell>
                    ))}
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <Button className="bg-[#ea384c] text-white hover:bg-[#d42d3d] transition-all duration-300 shadow-sm">
                Guardar
              </Button>
              <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50 transition-all duration-300">
                Cancelar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Existencia;

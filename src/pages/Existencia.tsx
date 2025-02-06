import { Sidebar } from "@/components/Sidebar";
import { UserProfile } from "@/components/UserProfile";
import { useWarehouse } from "@/context/WarehouseContext";
import { MetricsGrid } from "@/components/existencia/MetricsGrid";
import { ChartsGrid } from "@/components/existencia/ChartsGrid";
import { DataTable } from "@/components/existencia/DataTable";

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
  const { selectedWarehouse } = useWarehouse();
  const currentData = warehouseData[selectedWarehouse as keyof typeof warehouseData];
  const chartColors = ["#c42c30", "#1c1c1c"];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-64">
        <div className="sticky top-0 z-10 bg-gray-50 p-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#1c1c1c]">Datos Generales</h2>
            <UserProfile />
          </div>

          <MetricsGrid
            insumosRegistrados={currentData.insumosRegistrados}
            existenciaCantidad={currentData.existenciaCantidad}
            existenciaImporte={currentData.existenciaImporte}
            movimientosDia={currentData.movimientosDia}
          />
        </div>

        <div className="p-4">
          <ChartsGrid data={currentData.chartData} colors={chartColors} />
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default Existencia;

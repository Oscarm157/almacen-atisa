
import { Sidebar } from "@/components/Sidebar";
import { UserProfile } from "@/components/UserProfile";
import { LocationSelector } from "@/components/LocationSelector";
import { LineChart } from "@/components/LineChart";
import { BarChart } from "@/components/BarChart";
import { DonutChart } from "@/components/DonutChart";

const Reportes = () => {
  return (
    <div className="flex min-h-screen bg-[#ffffff]">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <LocationSelector />
          <UserProfile />
        </div>

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Reportes y Análisis
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Movimientos Mensuales</h3>
            <div className="h-[300px]">
              <LineChart />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Distribución por Categoría</h3>
            <div className="h-[300px]">
              <BarChart />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Estado de Inventario</h3>
            <div className="h-[300px]">
              <DonutChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reportes;

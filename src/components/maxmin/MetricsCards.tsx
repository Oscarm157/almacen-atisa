
import { AlertTriangle, ArrowUpDown } from "lucide-react";

interface MetricsCardsProps {
  underMin: number;
  normal: number;
  overMax: number;
}

export const MetricsCards = ({ underMin, normal, overMax }: MetricsCardsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
      <div className="bg-white p-4 sm:p-6 rounded-xl border border-[#8E9196] shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-red-100 p-3 rounded-full">
            <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-700">Stock Bajo Mínimo</h3>
            <p className="text-xl sm:text-2xl font-bold text-red-600">{underMin}</p>
          </div>
        </div>
        <p className="text-sm sm:text-base text-gray-600">Insumos por debajo del nivel mínimo</p>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-xl border border-[#8E9196] shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-yellow-100 p-3 rounded-full">
            <ArrowUpDown className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-700">Stock Normal</h3>
            <p className="text-xl sm:text-2xl font-bold text-yellow-600">{normal}</p>
          </div>
        </div>
        <p className="text-sm sm:text-base text-gray-600">Insumos en nivel óptimo</p>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-xl border border-[#8E9196] shadow-sm hover:shadow-md transition-all duration-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-700">Stock Sobre Máximo</h3>
            <p className="text-xl sm:text-2xl font-bold text-blue-600">{overMax}</p>
          </div>
        </div>
        <p className="text-sm sm:text-base text-gray-600">Insumos por encima del nivel máximo</p>
      </div>
    </div>
  );
};

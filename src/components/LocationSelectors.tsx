
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { warehouseData } from "@/data/warehouseData";

interface LocationSelectorsProps {
  selectedWarehouse: string;
  selectedPasillo: string;
  selectedRack: string;
  selectedEstante: string;
  selectedInsumo: string;
  setPasillo: (value: string) => void;
  setRack: (value: string) => void;
  setEstante: (value: string) => void;
  setInsumo: (value: string) => void;
}

export const LocationSelectors = ({
  selectedWarehouse,
  selectedPasillo,
  selectedRack,
  selectedEstante,
  selectedInsumo,
  setPasillo,
  setRack,
  setEstante,
  setInsumo,
}: LocationSelectorsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-white p-6 rounded-xl border border-[#8E9196] shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Pasillo</h3>
        <div className="bg-gray-50 p-3 rounded-lg">
          <Select value={selectedPasillo} onValueChange={setPasillo}>
            <SelectTrigger className="w-full bg-[#ea384c] text-white hover:bg-[#d42d3d] transition-all duration-300">
              <SelectValue placeholder="Seleccionar Pasillo" />
            </SelectTrigger>
            <SelectContent>
              {warehouseData[selectedWarehouse].pasillos.map((num) => (
                <SelectItem key={num} value={String(num)}>
                  Pasillo {num}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-[#8E9196] shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Rack</h3>
        <div className="bg-gray-50 p-3 rounded-lg">
          <Select value={selectedRack} onValueChange={setRack}>
            <SelectTrigger className="w-full bg-[#ea384c] text-white hover:bg-[#d42d3d] transition-all duration-300">
              <SelectValue placeholder="Seleccionar Rack" />
            </SelectTrigger>
            <SelectContent>
              {warehouseData[selectedWarehouse].racks.map((num) => (
                <SelectItem key={num} value={String(num)}>
                  Rack {num}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-[#8E9196] shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Estante</h3>
        <div className="bg-gray-50 p-3 rounded-lg">
          <Select value={selectedEstante} onValueChange={setEstante}>
            <SelectTrigger className="w-full bg-[#ea384c] text-white hover:bg-[#d42d3d] transition-all duration-300">
              <SelectValue placeholder="Seleccionar Estante" />
            </SelectTrigger>
            <SelectContent>
              {warehouseData[selectedWarehouse].estantes.map((code) => (
                <SelectItem key={code} value={code}>
                  {code}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-[#8E9196] shadow-sm hover:shadow-md transition-all duration-300">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Insumo</h3>
        <div className="bg-gray-50 p-3 rounded-lg">
          <Select value={selectedInsumo} onValueChange={setInsumo}>
            <SelectTrigger className="w-full bg-[#ea384c] text-white hover:bg-[#d42d3d] transition-all duration-300">
              <SelectValue placeholder="Seleccionar Insumo" />
            </SelectTrigger>
            <SelectContent>
              {warehouseData[selectedWarehouse].insumos.map((item) => (
                <SelectItem key={item.id} value={item.id}>
                  {item.id} – {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

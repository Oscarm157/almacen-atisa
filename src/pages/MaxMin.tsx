import { Sidebar } from "@/components/Sidebar";
import { UserProfile } from "@/components/UserProfile";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Search, AlertTriangle, ArrowUpDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { LocationSelector } from "@/components/LocationSelector";
import { useWarehouse } from "@/context/WarehouseContext";
import { useState } from "react";

const warehouseData = {
  "PIP Sur": {
    underMin: 24,
    normal: 156,
    overMax: 12,
    items: [
      { code: "INS-1001", name: "Tornillos hex. 1/4", current: 15, min: 20, max: 100, status: "Bajo Mínimo" },
      { code: "INS-1002", name: "Tuercas 3/8", current: 50, min: 20, max: 100, status: "Normal" },
      { code: "INS-1003", name: "Arandelas planas", current: 120, min: 20, max: 100, status: "Sobre Máximo" }
    ]
  },
  "Bronce II": {
    underMin: 18,
    normal: 142,
    overMax: 15,
    items: [
      { code: "INS-2001", name: "Pernos 5/16", current: 10, min: 25, max: 120, status: "Bajo Mínimo" },
      { code: "INS-2002", name: "Cables #12", current: 80, min: 30, max: 150, status: "Normal" },
      { code: "INS-2003", name: "Terminales", current: 200, min: 40, max: 180, status: "Sobre Máximo" }
    ]
  },
  "Link": {
    underMin: 31,
    normal: 128,
    overMax: 9,
    items: [
      { code: "INS-3001", name: "Tubería PVC", current: 5, min: 15, max: 80, status: "Bajo Mínimo" },
      { code: "INS-3002", name: "Conectores", current: 45, min: 20, max: 90, status: "Normal" },
      { code: "INS-3003", name: "Abrazaderas", current: 95, min: 10, max: 60, status: "Sobre Máximo" }
    ]
  },
  "Hottah": {
    underMin: 15,
    normal: 165,
    overMax: 20,
    items: [
      { code: "INS-4001", name: "Fusibles", current: 8, min: 20, max: 100, status: "Bajo Mínimo" },
      { code: "INS-4002", name: "Contactores", current: 60, min: 25, max: 120, status: "Normal" },
      { code: "INS-4003", name: "Relés", current: 150, min: 30, max: 140, status: "Sobre Máximo" }
    ]
  },
  "Prisma X": {
    underMin: 28,
    normal: 145,
    overMax: 17,
    items: [
      { code: "INS-5001", name: "Válvulas", current: 12, min: 30, max: 150, status: "Bajo Mínimo" },
      { code: "INS-5002", name: "Manómetros", current: 70, min: 25, max: 130, status: "Normal" },
      { code: "INS-5003", name: "Filtros", current: 180, min: 20, max: 100, status: "Sobre Máximo" }
    ]
  }
};

const MaxMin = () => {
  const { selectedWarehouse } = useWarehouse();
  const currentData = warehouseData[selectedWarehouse as keyof typeof warehouseData];
  const [selectedWarehouseLocal, setSelectedWarehouseLocal] = useState("PIP Sur");

  const handleWarehouseChange = (warehouse: string) => {
    setSelectedWarehouseLocal(warehouse);
  };

  return (
    <div className="flex min-h-screen bg-[#ffffff]">
      <Sidebar />
      <div className="flex-1 ml-64 p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#1c1c1c]">
            Máximos y Mínimos
          </h2>
          <UserProfile />
        </div>

        <div className="mb-6">
          <LocationSelector onWarehouseChange={handleWarehouseChange} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-[#8E9196] shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-100 p-3 rounded-full">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Stock Bajo Mínimo</h3>
                <p className="text-2xl font-bold text-red-600">{currentData.underMin}</p>
              </div>
            </div>
            <p className="text-gray-600">Insumos por debajo del nivel mínimo</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#8E9196] shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <ArrowUpDown className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Stock Normal</h3>
                <p className="text-2xl font-bold text-yellow-600">{currentData.normal}</p>
              </div>
            </div>
            <p className="text-gray-600">Insumos en nivel óptimo</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#8E9196] shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <AlertTriangle className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Stock Sobre Máximo</h3>
                <p className="text-2xl font-bold text-blue-600">{currentData.overMax}</p>
              </div>
            </div>
            <p className="text-gray-600">Insumos por encima del nivel máximo</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="flex justify-between items-center mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Buscar insumo..."
                className="pl-12 border-gray-200 focus:border-[#ea384c] transition-colors rounded-lg"
              />
            </div>
            <Button className="bg-[#ea384c] text-white hover:bg-[#d42d3d]">
              Actualizar Niveles
            </Button>
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#ea384c] hover:bg-[#ea384c]">
                  <TableHead className="text-white font-medium">Código</TableHead>
                  <TableHead className="text-white font-medium">Insumo</TableHead>
                  <TableHead className="text-white font-medium">Stock Actual</TableHead>
                  <TableHead className="text-white font-medium">Mínimo</TableHead>
                  <TableHead className="text-white font-medium">Máximo</TableHead>
                  <TableHead className="text-white font-medium">Estado</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentData.items.map((item, index) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    <TableCell>{item.code}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.current}</TableCell>
                    <TableCell>{item.min}</TableCell>
                    <TableCell>{item.max}</TableCell>
                    <TableCell>
                      <span className={`px-3 py-1 rounded-full ${
                        item.status === "Bajo Mínimo"
                          ? "bg-red-100 text-red-800"
                          : item.status === "Normal"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                      }`}>
                        {item.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaxMin;

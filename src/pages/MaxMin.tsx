import { Sidebar } from "@/components/Sidebar";
import { UserProfile } from "@/components/UserProfile";
import { LocationSelector } from "@/components/LocationSelector";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Search, AlertTriangle, ArrowUpDown } from "lucide-react";
import { Input } from "@/components/ui/input";

const MaxMin = () => {
  return (
    <div className="flex min-h-screen bg-[#ffffff]">
      <Sidebar />
      <div className="flex-1 p-4">
        <div className="flex justify-end items-center mb-2">
          <UserProfile />
        </div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#1c1c1c]">
            Máximos y Mínimos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-[#8E9196] shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-100 p-3 rounded-full">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Stock Bajo Mínimo</h3>
                <p className="text-2xl font-bold text-red-600">24</p>
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
                <p className="text-2xl font-bold text-yellow-600">156</p>
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
                <p className="text-2xl font-bold text-blue-600">12</p>
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
                {[...Array(5)].map((_, index) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    <TableCell>INS-{1000 + index}</TableCell>
                    <TableCell>Insumo {index + 1}</TableCell>
                    <TableCell>{Math.floor(Math.random() * 100)}</TableCell>
                    <TableCell>{20}</TableCell>
                    <TableCell>{100}</TableCell>
                    <TableCell>
                      <span className={`px-3 py-1 rounded-full ${
                        index % 3 === 0 
                          ? "bg-red-100 text-red-800"
                          : index % 3 === 1
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                      }`}>
                        {index % 3 === 0 
                          ? "Bajo Mínimo"
                          : index % 3 === 1
                          ? "Normal"
                          : "Sobre Máximo"}
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

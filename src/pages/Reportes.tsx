import { Sidebar } from "@/components/Sidebar";
import { UserProfile } from "@/components/UserProfile";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Search, BarChart2, FileDown } from "lucide-react";
import { Input } from "@/components/ui/input";

const Reportes = () => {
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * (1400 - 300 + 1)) + 300;
  };

  return (
    <div className="flex min-h-screen bg-[#ffffff]">
      <Sidebar />
      <div className="flex-1 p-4">
        <div className="flex justify-end items-center mb-2">
          <UserProfile />
        </div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#1c1c1c]">
            Reportes de Inventario
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-[#8E9196] shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Reporte de Existencias</h3>
              <BarChart2 className="h-6 w-6 text-[#ea384c]" />
            </div>
            <p className="text-gray-600 mb-4">Consulta las existencias actuales por almacén</p>
            <Button className="w-full bg-[#ea384c] hover:bg-[#d42d3d]">
              <FileDown className="mr-2 h-4 w-4" />
              Generar Reporte
            </Button>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#8E9196] shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Reporte de Movimientos</h3>
              <BarChart2 className="h-6 w-6 text-[#ea384c]" />
            </div>
            <p className="text-gray-600 mb-4">Historial de entradas y salidas de insumos</p>
            <Button className="w-full bg-[#ea384c] hover:bg-[#d42d3d]">
              <FileDown className="mr-2 h-4 w-4" />
              Generar Reporte
            </Button>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#8E9196] shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Reporte de Valorización</h3>
              <BarChart2 className="h-6 w-6 text-[#ea384c]" />
            </div>
            <p className="text-gray-600 mb-4">Valor actual del inventario por almacén</p>
            <Button className="w-full bg-[#ea384c] hover:bg-[#d42d3d]">
              <FileDown className="mr-2 h-4 w-4" />
              Generar Reporte
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="flex justify-between items-center mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Buscar reportes..."
                className="pl-12 border-gray-200 focus:border-[#ea384c] transition-colors rounded-lg"
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#ea384c] hover:bg-[#ea384c]">
                  <TableHead className="text-white font-medium">Fecha</TableHead>
                  <TableHead className="text-white font-medium">Tipo de Reporte</TableHead>
                  <TableHead className="text-white font-medium">Usuario</TableHead>
                  <TableHead className="text-white font-medium">Almacén</TableHead>
                  <TableHead className="text-white font-medium">Estado</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[...Array(5)].map((_, index) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    <TableCell>{new Date().toLocaleDateString()}</TableCell>
                    <TableCell>Reporte de Existencias</TableCell>
                    <TableCell>Usuario {index + 1}</TableCell>
                    <TableCell>Almacén Principal</TableCell>
                    <TableCell>
                      <span className="px-3 py-1 rounded-full bg-green-100 text-green-800">
                        Completado
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

export default Reportes;

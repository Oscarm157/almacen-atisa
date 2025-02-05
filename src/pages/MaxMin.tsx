
import { Sidebar } from "@/components/Sidebar";
import { UserProfile } from "@/components/UserProfile";
import { LocationSelector } from "@/components/LocationSelector";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ArrowUpDown } from "lucide-react";

const MaxMin = () => {
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
            Máximos y Mínimos
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Buscar por código o descripción..."
                className="pl-12 border-gray-200"
              />
            </div>
            <Button className="bg-[#ea384c] hover:bg-[#d42d3d] text-white">
              <ArrowUpDown className="mr-2 h-4 w-4" />
              Ajustar Niveles
            </Button>
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#ea384c] hover:bg-[#ea384c]">
                  <TableHead className="text-white">Código</TableHead>
                  <TableHead className="text-white">Descripción</TableHead>
                  <TableHead className="text-white">Stock Actual</TableHead>
                  <TableHead className="text-white">Mínimo</TableHead>
                  <TableHead className="text-white">Máximo</TableHead>
                  <TableHead className="text-white">Estado</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[...Array(5)].map((_, index) => (
                  <TableRow key={index}>
                    <TableCell>INV-{1000 + index}</TableCell>
                    <TableCell>Producto {index + 1}</TableCell>
                    <TableCell>{Math.floor(Math.random() * 100)}</TableCell>
                    <TableCell>{20}</TableCell>
                    <TableCell>{100}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        index % 3 === 0 
                          ? "bg-red-100 text-red-800" 
                          : index % 3 === 1 
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                      }`}>
                        {index % 3 === 0 
                          ? "Bajo" 
                          : index % 3 === 1 
                            ? "Medio" 
                            : "Óptimo"}
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

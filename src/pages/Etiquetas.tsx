
import { Sidebar } from "@/components/Sidebar";
import { UserProfile } from "@/components/UserProfile";
import { LocationSelector } from "@/components/LocationSelector";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Search, Printer, Tags } from "lucide-react";

const Etiquetas = () => {
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
            Generación de Etiquetas
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
            <div className="flex gap-4">
              <Button className="bg-[#ea384c] hover:bg-[#d42d3d] text-white">
                <Tags className="mr-2 h-4 w-4" />
                Generar Etiquetas
              </Button>
              <Button variant="outline" className="border-gray-200">
                <Printer className="mr-2 h-4 w-4" />
                Imprimir
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#ea384c] hover:bg-[#ea384c]">
                  <TableHead className="text-white">Código</TableHead>
                  <TableHead className="text-white">Descripción</TableHead>
                  <TableHead className="text-white">Ubicación</TableHead>
                  <TableHead className="text-white">Cantidad</TableHead>
                  <TableHead className="text-white">Estado</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[...Array(5)].map((_, index) => (
                  <TableRow key={index}>
                    <TableCell>ETQ-{1000 + index}</TableCell>
                    <TableCell>Producto {index + 1}</TableCell>
                    <TableCell>A-{index + 1}-{index * 2}</TableCell>
                    <TableCell>{Math.floor(Math.random() * 100)}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        index % 2 === 0 
                          ? "bg-green-100 text-green-800" 
                          : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {index % 2 === 0 ? "Generada" : "Pendiente"}
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

export default Etiquetas;

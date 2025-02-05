
import { Sidebar } from "@/components/Sidebar";
import { UserProfile } from "@/components/UserProfile";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Search, Pencil, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const InsumosRegistrados = () => {
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
            <h2 className="text-2xl font-bold text-[#1c1c1c]">Insumos Registrados</h2>
            <UserProfile />
          </div>
        </div>

        <div className="p-4">
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

export default InsumosRegistrados;

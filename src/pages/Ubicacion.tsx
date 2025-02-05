
import { Sidebar } from "@/components/Sidebar";
import { UserProfile } from "@/components/UserProfile";
import { LocationSelector } from "@/components/LocationSelector";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Search, Pencil, Plus, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";

const Ubicacion = () => {
  const { toast } = useToast();

  const handleMoreInfo = (section: string) => {
    toast({
      title: "Más información",
      description: `Mostrando más información sobre ${section}`,
    });
  };

  // Generate random numbers between 300 and 1400
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * (1400 - 300 + 1)) + 300;
  };

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
            Ubicación de Insumos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Pasillo</h3>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="bg-[#ea384c] text-white p-4 rounded-lg flex items-center justify-between cursor-pointer hover:bg-[#d42d3d] transition-all duration-300">
                <span className="text-base font-medium">Pasillo 1</span>
                <ChevronDown className="h-5 w-5 transition-transform duration-300 group-hover:rotate-180" />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Rack</h3>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="bg-[#ea384c] text-white p-4 rounded-lg flex items-center justify-between cursor-pointer hover:bg-[#d42d3d] transition-all duration-300">
                <span className="text-base font-medium">Rack 1</span>
                <ChevronDown className="h-5 w-5 transition-transform duration-300 group-hover:rotate-180" />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Estante</h3>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="bg-[#ea384c] text-white p-4 rounded-lg flex items-center justify-between cursor-pointer hover:bg-[#d42d3d] transition-all duration-300">
                <span className="text-base font-medium">01-C-07</span>
                <ChevronDown className="h-5 w-5 transition-transform duration-300 group-hover:rotate-180" />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Insumo</h3>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="bg-[#ea384c] text-white p-4 rounded-lg flex items-center justify-between cursor-pointer hover:bg-[#d42d3d] transition-all duration-300">
                <span className="text-base font-medium">10101001 – Insumo X</span>
                <ChevronDown className="h-5 w-5 transition-transform duration-300 group-hover:rotate-180" />
              </div>
            </div>
          </div>
        </div>

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
              Agregar ubicación
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
  );
};

export default Ubicacion;

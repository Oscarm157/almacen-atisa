
import { Sidebar } from "@/components/Sidebar";
import { UserProfile } from "@/components/UserProfile";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Search, Pencil, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const Ubicacion = () => {
  const { toast } = useToast();
  const [selectedPasillo, setPasillo] = useState("1");
  const [selectedRack, setRack] = useState("1");
  const [selectedEstante, setEstante] = useState("01-C-07");
  const [selectedInsumo, setInsumo] = useState("10101001");

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
      <div className="flex-1 ml-64 p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#1c1c1c]">
            Ubicación de Insumos
          </h2>
          <UserProfile />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-[#8E9196] shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Pasillo</h3>
            <div className="bg-gray-50 p-3 rounded-lg">
              <Select value={selectedPasillo} onValueChange={setPasillo}>
                <SelectTrigger className="w-full bg-[#ea384c] text-white hover:bg-[#d42d3d] transition-all duration-300">
                  <SelectValue placeholder="Seleccionar Pasillo" />
                </SelectTrigger>
                <SelectContent>
                  {[...Array(5)].map((_, i) => (
                    <SelectItem key={i + 1} value={String(i + 1)}>
                      Pasillo {i + 1}
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
                  {[...Array(8)].map((_, i) => (
                    <SelectItem key={i + 1} value={String(i + 1)}>
                      Rack {i + 1}
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
                  {["01-A-07", "01-B-07", "01-C-07", "02-A-07", "02-B-07", "02-C-07"].map((code) => (
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
                  {[
                    { id: "10101001", name: "Insumo X" },
                    { id: "10101002", name: "Insumo Y" },
                    { id: "10101003", name: "Insumo Z" },
                    { id: "10101004", name: "Insumo W" },
                  ].map((item) => (
                    <SelectItem key={item.id} value={item.id}>
                      {item.id} – {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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


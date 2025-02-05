
import { Sidebar } from "@/components/Sidebar";
import { UserProfile } from "@/components/UserProfile";
import { LocationSelector } from "@/components/LocationSelector";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { MetricCard } from "@/components/MetricCard";
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

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-4">
          <LocationSelector />
          <UserProfile />
        </div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#222222]">Ubicación de Insumos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-[#e5e5e5] p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-[#403E43]">Pasillo</h3>
            <div className="bg-[#f8f8f8] p-2 rounded">
              <div className="bg-[#ea384c] text-white p-2 rounded flex items-center justify-between cursor-pointer hover:bg-[#d42d3f] transition-colors text-sm">
                <span>Pasillo 1</span>
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
          <div className="bg-[#e5e5e5] p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-[#403E43]">Rack</h3>
            <div className="bg-[#f8f8f8] p-2 rounded">
              <div className="bg-[#ea384c] text-white p-2 rounded flex items-center justify-between cursor-pointer hover:bg-[#d42d3f] transition-colors text-sm">
                <span>Rack 1</span>
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
          <div className="bg-[#e5e5e5] p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-[#403E43]">Estante</h3>
            <div className="bg-[#f8f8f8] p-2 rounded">
              <div className="bg-[#ea384c] text-white p-2 rounded flex items-center justify-between cursor-pointer hover:bg-[#d42d3f] transition-colors text-sm">
                <span>01-C-07</span>
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
          <div className="bg-[#e5e5e5] p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-[#403E43]">Insumo</h3>
            <div className="bg-[#f8f8f8] p-2 rounded">
              <div className="bg-[#ea384c] text-white p-2 rounded flex items-center justify-between cursor-pointer hover:bg-[#d42d3f] transition-colors text-sm">
                <span>10101001 – Insumo X</span>
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-5 w-5 text-gray-500" />
              <Input
                placeholder="Buscar ubicación o insumo..."
                className="pl-10"
              />
            </div>
            <Button className="bg-[#222222] text-white hover:bg-[#000000e6]">
              <Plus className="mr-2 h-4 w-4" />
              Agregar ubicación
            </Button>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#222222] hover:bg-[#222222]">
                  <TableHead className="text-white">Encabezados</TableHead>
                  <TableHead className="text-white"></TableHead>
                  <TableHead className="text-white"></TableHead>
                  <TableHead className="text-white"></TableHead>
                  <TableHead className="text-white"></TableHead>
                  <TableHead className="text-white"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[...Array(3)].map((_, index) => (
                  <TableRow key={index} className="bg-[#f8f8f8]">
                    <TableCell>
                      <Pencil className="h-4 w-4 text-[#8A898C]" />
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                ))}
                <TableRow className="bg-[#222222] text-white">
                  <TableCell>Totales</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <Button className="bg-[#222222] text-white hover:bg-[#000000e6]">
              Guardar
            </Button>
            <Button variant="outline" className="border-[#222222] text-[#222222] hover:bg-[#22222210]">
              Cancelar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ubicacion;

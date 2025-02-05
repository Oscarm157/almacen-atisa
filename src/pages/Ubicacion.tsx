
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
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <LocationSelector />
          <UserProfile />
        </div>

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#222222] to-[#444444]">
            Ubicación de Insumos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-[#e5e5e5] p-4 rounded-xl transition-all duration-300 hover:shadow-lg">
            <h3 className="text-lg font-semibold mb-3 text-[#403E43]">Pasillo</h3>
            <div className="bg-[#f8f8f8] p-2 rounded-lg backdrop-blur-sm">
              <div className="bg-gradient-to-r from-[#ea384c] to-[#d42d3f] text-white p-3 rounded-lg flex items-center justify-between cursor-pointer hover:from-[#d42d3f] hover:to-[#c01f2f] transition-all duration-300 text-sm shadow-md">
                <span>Pasillo 1</span>
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </div>
            </div>
          </div>
          <div className="bg-[#e5e5e5] p-4 rounded-xl transition-all duration-300 hover:shadow-lg">
            <h3 className="text-lg font-semibold mb-3 text-[#403E43]">Rack</h3>
            <div className="bg-[#f8f8f8] p-2 rounded-lg backdrop-blur-sm">
              <div className="bg-gradient-to-r from-[#ea384c] to-[#d42d3f] text-white p-3 rounded-lg flex items-center justify-between cursor-pointer hover:from-[#d42d3f] hover:to-[#c01f2f] transition-all duration-300 text-sm shadow-md">
                <span>Rack 1</span>
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </div>
            </div>
          </div>
          <div className="bg-[#e5e5e5] p-4 rounded-xl transition-all duration-300 hover:shadow-lg">
            <h3 className="text-lg font-semibold mb-3 text-[#403E43]">Estante</h3>
            <div className="bg-[#f8f8f8] p-2 rounded-lg backdrop-blur-sm">
              <div className="bg-gradient-to-r from-[#ea384c] to-[#d42d3f] text-white p-3 rounded-lg flex items-center justify-between cursor-pointer hover:from-[#d42d3f] hover:to-[#c01f2f] transition-all duration-300 text-sm shadow-md">
                <span>01-C-07</span>
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </div>
            </div>
          </div>
          <div className="bg-[#e5e5e5] p-4 rounded-xl transition-all duration-300 hover:shadow-lg">
            <h3 className="text-lg font-semibold mb-3 text-[#403E43]">Insumo</h3>
            <div className="bg-[#f8f8f8] p-2 rounded-lg backdrop-blur-sm">
              <div className="bg-gradient-to-r from-[#ea384c] to-[#d42d3f] text-white p-3 rounded-lg flex items-center justify-between cursor-pointer hover:from-[#d42d3f] hover:to-[#c01f2f] transition-all duration-300 text-sm shadow-md">
                <span>10101001 – Insumo X</span>
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 backdrop-blur-md bg-opacity-95">
          <div className="flex justify-between items-center mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Buscar ubicación o insumo..."
                className="pl-10 rounded-lg border-gray-200 focus:border-[#ea384c] transition-colors"
              />
            </div>
            <Button className="bg-gradient-to-r from-[#222222] to-[#444444] text-white hover:from-[#1a1a1a] hover:to-[#333333] transition-all duration-300 rounded-lg shadow-md">
              <Plus className="mr-2 h-4 w-4" />
              Agregar ubicación
            </Button>
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-100">
            <Table>
              <TableHeader>
                <TableRow className="bg-gradient-to-r from-[#222222] to-[#444444] hover:from-[#1a1a1a] hover:to-[#333333]">
                  <TableHead className="text-white font-medium">Encabezados</TableHead>
                  <TableHead className="text-white font-medium"></TableHead>
                  <TableHead className="text-white font-medium"></TableHead>
                  <TableHead className="text-white font-medium"></TableHead>
                  <TableHead className="text-white font-medium"></TableHead>
                  <TableHead className="text-white font-medium"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[...Array(3)].map((_, index) => (
                  <TableRow key={index} className="bg-gray-50 hover:bg-gray-100 transition-colors">
                    <TableCell>
                      <Pencil className="h-4 w-4 text-[#8A898C] hover:text-[#ea384c] transition-colors cursor-pointer" />
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                ))}
                <TableRow className="bg-gradient-to-r from-[#222222] to-[#444444] text-white">
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
            <Button className="bg-gradient-to-r from-[#222222] to-[#444444] text-white hover:from-[#1a1a1a] hover:to-[#333333] transition-all duration-300 shadow-md">
              Guardar
            </Button>
            <Button variant="outline" className="border-[#222222] text-[#222222] hover:bg-[#22222210] transition-all duration-300">
              Cancelar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ubicacion;


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
    <div className="flex min-h-screen bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d]">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <LocationSelector />
          <UserProfile />
        </div>

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ea384c] to-[#d42d3f]">
            Ubicación de Insumos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-[#2a2a2a] to-[#333333] p-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#ea384c]/10 group">
            <h3 className="text-lg font-semibold mb-4 text-white/90">Pasillo</h3>
            <div className="bg-[#1a1a1a]/40 p-3 rounded-lg backdrop-blur-sm">
              <div className="bg-gradient-to-r from-[#ea384c] to-[#d42d3f] text-white p-4 rounded-lg flex items-center justify-between cursor-pointer hover:from-[#d42d3f] hover:to-[#c01f2f] transition-all duration-300 shadow-lg group">
                <span className="text-base font-medium">Pasillo 1</span>
                <ChevronDown className="h-5 w-5 transition-transform duration-300 group-hover:rotate-180" />
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#2a2a2a] to-[#333333] p-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#ea384c]/10 group">
            <h3 className="text-lg font-semibold mb-4 text-white/90">Rack</h3>
            <div className="bg-[#1a1a1a]/40 p-3 rounded-lg backdrop-blur-sm">
              <div className="bg-gradient-to-r from-[#ea384c] to-[#d42d3f] text-white p-4 rounded-lg flex items-center justify-between cursor-pointer hover:from-[#d42d3f] hover:to-[#c01f2f] transition-all duration-300 shadow-lg group">
                <span className="text-base font-medium">Rack 1</span>
                <ChevronDown className="h-5 w-5 transition-transform duration-300 group-hover:rotate-180" />
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#2a2a2a] to-[#333333] p-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#ea384c]/10 group">
            <h3 className="text-lg font-semibold mb-4 text-white/90">Estante</h3>
            <div className="bg-[#1a1a1a]/40 p-3 rounded-lg backdrop-blur-sm">
              <div className="bg-gradient-to-r from-[#ea384c] to-[#d42d3f] text-white p-4 rounded-lg flex items-center justify-between cursor-pointer hover:from-[#d42d3f] hover:to-[#c01f2f] transition-all duration-300 shadow-lg group">
                <span className="text-base font-medium">01-C-07</span>
                <ChevronDown className="h-5 w-5 transition-transform duration-300 group-hover:rotate-180" />
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#2a2a2a] to-[#333333] p-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#ea384c]/10 group">
            <h3 className="text-lg font-semibold mb-4 text-white/90">Insumo</h3>
            <div className="bg-[#1a1a1a]/40 p-3 rounded-lg backdrop-blur-sm">
              <div className="bg-gradient-to-r from-[#ea384c] to-[#d42d3f] text-white p-4 rounded-lg flex items-center justify-between cursor-pointer hover:from-[#d42d3f] hover:to-[#c01f2f] transition-all duration-300 shadow-lg group">
                <span className="text-base font-medium">10101001 – Insumo X</span>
                <ChevronDown className="h-5 w-5 transition-transform duration-300 group-hover:rotate-180" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#2a2a2a] to-[#333333] rounded-xl shadow-2xl p-8 backdrop-blur-md">
          <div className="flex justify-between items-center mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50" />
              <Input
                placeholder="Buscar ubicación o insumo..."
                className="pl-12 bg-[#1a1a1a]/40 border-[#ea384c]/20 text-white placeholder:text-white/50 focus:border-[#ea384c] transition-colors rounded-lg"
              />
            </div>
            <Button className="bg-gradient-to-r from-[#ea384c] to-[#d42d3f] text-white hover:from-[#d42d3f] hover:to-[#c01f2f] transition-all duration-300 rounded-lg shadow-lg">
              <Plus className="mr-2 h-5 w-5" />
              Agregar ubicación
            </Button>
          </div>

          <div className="overflow-hidden rounded-xl border border-[#ea384c]/20">
            <Table>
              <TableHeader>
                <TableRow className="bg-gradient-to-r from-[#ea384c] to-[#d42d3f] hover:from-[#d42d3f] hover:to-[#c01f2f]">
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
                  <TableRow key={index} className="bg-[#1a1a1a]/40 hover:bg-[#1a1a1a]/60 transition-colors border-b border-[#ea384c]/10">
                    <TableCell className="text-white/90">
                      <Pencil className="h-5 w-5 text-white/50 hover:text-[#ea384c] transition-colors cursor-pointer" />
                    </TableCell>
                    <TableCell className="text-white/90"></TableCell>
                    <TableCell className="text-white/90"></TableCell>
                    <TableCell className="text-white/90"></TableCell>
                    <TableCell className="text-white/90"></TableCell>
                    <TableCell className="text-white/90"></TableCell>
                  </TableRow>
                ))}
                <TableRow className="bg-gradient-to-r from-[#ea384c] to-[#d42d3f] text-white">
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
            <Button className="bg-gradient-to-r from-[#ea384c] to-[#d42d3f] text-white hover:from-[#d42d3f] hover:to-[#c01f2f] transition-all duration-300 shadow-lg">
              Guardar
            </Button>
            <Button variant="outline" className="border-[#ea384c]/20 text-white hover:bg-[#ea384c]/10 transition-all duration-300">
              Cancelar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ubicacion;

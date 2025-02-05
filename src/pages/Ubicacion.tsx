
import { Sidebar } from "@/components/Sidebar";
import { UserProfile } from "@/components/UserProfile";
import { LocationSelector } from "@/components/LocationSelector";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { MetricCard } from "@/components/MetricCard";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Search, Pencil, Plus } from "lucide-react";
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
          <h2 className="text-2xl font-bold text-[#1c1c1c]">Ubicación de Insumos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-[#E6F4FF] p-4 rounded-lg">
            <h3 className="text-sm font-medium mb-2">Pasillo</h3>
            <div className="bg-[#33C3F0] text-white p-3 rounded">
              Pasillo 1
            </div>
          </div>
          <div className="bg-[#E6F4FF] p-4 rounded-lg">
            <h3 className="text-sm font-medium mb-2">Rack</h3>
            <div className="bg-[#33C3F0] text-white p-3 rounded">
              Rack 1
            </div>
          </div>
          <div className="bg-[#E6F4FF] p-4 rounded-lg">
            <h3 className="text-sm font-medium mb-2">Estante</h3>
            <div className="bg-[#33C3F0] text-white p-3 rounded">
              01-C-07
            </div>
          </div>
          <div className="bg-[#E6F4FF] p-4 rounded-lg">
            <h3 className="text-sm font-medium mb-2">Insumo</h3>
            <div className="bg-[#33C3F0] text-white p-3 rounded">
              10101001 – Insumo X
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
            <Button className="bg-black text-white hover:bg-black/90">
              <Plus className="mr-2 h-4 w-4" />
              Agregar ubicación
            </Button>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#0F4C75] hover:bg-[#0F4C75]">
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
                  <TableRow key={index} className="bg-gray-100">
                    <TableCell>
                      <Pencil className="h-4 w-4 text-gray-500" />
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                ))}
                <TableRow className="bg-[#0F4C75] text-white">
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
            <Button className="bg-black text-white hover:bg-black/90">
              Guardar
            </Button>
            <Button variant="outline" className="border-black text-black hover:bg-black/10">
              Cancelar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ubicacion;

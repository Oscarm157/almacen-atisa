
import { Sidebar } from "@/components/Sidebar";
import { UserProfile } from "@/components/UserProfile";
import { LocationSelector } from "@/components/LocationSelector";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { MetricCard } from "@/components/MetricCard";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Search } from "lucide-react";
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
          <MetricCard
            title="Total Ubicaciones"
            value="24"
            bgColor="bg-[#33C3F0]"
            onInfoClick={() => handleMoreInfo("Total Ubicaciones")}
          />
          <MetricCard
            title="Ubicaciones Ocupadas"
            value="18"
            bgColor="bg-[#8E9196]"
            onInfoClick={() => handleMoreInfo("Ubicaciones Ocupadas")}
          />
          <MetricCard
            title="Ubicaciones Disponibles"
            value="6"
            bgColor="bg-[#4CAF50]"
            onInfoClick={() => handleMoreInfo("Ubicaciones Disponibles")}
          />
          <MetricCard
            title="Insumos sin Ubicación"
            value="3"
            bgColor="bg-[#F97316]"
            onInfoClick={() => handleMoreInfo("Insumos sin Ubicación")}
          />
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-5 w-5 text-gray-500" />
              <Input
                placeholder="Buscar ubicación o insumo..."
                className="pl-10"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#ea384c] hover:bg-[#ea384c]">
                  <TableHead className="text-white">Código</TableHead>
                  <TableHead className="text-white">Ubicación</TableHead>
                  <TableHead className="text-white">Insumo</TableHead>
                  <TableHead className="text-white">Cantidad</TableHead>
                  <TableHead className="text-white">Estado</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[...Array(5)].map((_, index) => (
                  <TableRow key={index}>
                    <TableCell>A-{index + 1}</TableCell>
                    <TableCell>Pasillo {index + 1}</TableCell>
                    <TableCell>Insumo {index + 1}</TableCell>
                    <TableCell>{(index + 1) * 10}</TableCell>
                    <TableCell>
                      <span className="px-2 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        Activo
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

export default Ubicacion;


import { Sidebar } from "@/components/Sidebar";
import { UserProfile } from "@/components/UserProfile";
import { LocationSelector } from "@/components/LocationSelector";
import { Plus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { MetricCard } from "@/components/MetricCard";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";

const Conteos = () => {
  const { toast } = useToast();

  const handleNewCount = () => {
    toast({
      title: "Nuevo conteo",
      description: "Iniciando nuevo conteo de inventario",
    });
  };

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
          <h2 className="text-2xl font-bold text-[#1c1c1c]">Conteos de Inventario</h2>
          <Button 
            onClick={handleNewCount}
            className="bg-[#c42c30] hover:bg-[#ea384c] text-white"
          >
            <Plus className="w-5 h-5 mr-2" />
            Nuevo Conteo
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Insumos A"
            value="450"
            bgColor="bg-[var(--blue-card)]"
            onInfoClick={() => handleMoreInfo("Insumos A")}
          />
          <MetricCard
            title="Insumos B"
            value="15,356"
            bgColor="bg-[var(--gray-card)]"
            onInfoClick={() => handleMoreInfo("Insumos B")}
          />
          <MetricCard
            title="Insumos C"
            value="15,356"
            bgColor="bg-[var(--green-card)]"
            onInfoClick={() => handleMoreInfo("Insumos C")}
          />
          <MetricCard
            title="Total insumos"
            value="56"
            bgColor="bg-[var(--coral-card)]"
            onInfoClick={() => handleMoreInfo("Total insumos")}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Teórico/Sistema Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <h3 className="text-lg font-semibold p-4 border-b">Conteos - Teórico/Sistema</h3>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#006d77] hover:bg-[#006d77]">
                    <TableHead className="text-white">Encabezados</TableHead>
                    <TableHead className="text-white">Campo 1</TableHead>
                    <TableHead className="text-white">Campo 2</TableHead>
                    <TableHead className="text-white">Campo 3</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[...Array(5)].map((_, index) => (
                    <TableRow key={index}>
                      <TableCell className="bg-gray-50">Dato {index + 1}</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-[#006d77] text-white hover:bg-[#006d77]">
                    <TableCell>Totales</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>0</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Físico Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <h3 className="text-lg font-semibold p-4 border-b">Físico</h3>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#006d77] hover:bg-[#006d77]">
                    <TableHead className="text-white">Encabezados</TableHead>
                    <TableHead className="text-white">Campo 1</TableHead>
                    <TableHead className="text-white">Campo 2</TableHead>
                    <TableHead className="text-white">Campo 3</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[...Array(5)].map((_, index) => (
                    <TableRow key={index}>
                      <TableCell className="bg-gray-50">Dato {index + 1}</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-[#006d77] text-white hover:bg-[#006d77]">
                    <TableCell>Totales</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>0</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <Button variant="outline" className="bg-black text-white hover:bg-gray-800">
            Cancelar
          </Button>
          <Button className="bg-black text-white hover:bg-gray-800">
            Guardar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Conteos;

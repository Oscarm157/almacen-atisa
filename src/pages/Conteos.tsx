import { Sidebar } from "@/components/Sidebar";
import { UserProfile } from "@/components/UserProfile";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { MetricCard } from "@/components/MetricCard";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";

const Conteos = () => {
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
      <div className="flex-1 ml-64 p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#1c1c1c]">Conteos de Inventario</h2>
          <UserProfile />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Insumos A"
            value="450"
            bgColor="bg-[#33C3F0]"
            onInfoClick={() => handleMoreInfo("Insumos A")}
          />
          <MetricCard
            title="Insumos B"
            value="15,356"
            bgColor="bg-[#8E9196]"
            onInfoClick={() => handleMoreInfo("Insumos B")}
          />
          <MetricCard
            title="Insumos C"
            value="15,356"
            bgColor="bg-[#4CAF50]"
            onInfoClick={() => handleMoreInfo("Insumos C")}
          />
          <MetricCard
            title="Total insumos"
            value="56"
            bgColor="bg-[#F97316]"
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
                  <TableRow className="bg-[#ea384c] hover:bg-[#ea384c]">
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
                  <TableRow className="bg-[#ea384c] text-white hover:bg-[#ea384c]">
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
                  <TableRow className="bg-[#ea384c] hover:bg-[#ea384c]">
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
                  <TableRow className="bg-[#ea384c] text-white hover:bg-[#ea384c]">
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


import { Sidebar } from "@/components/Sidebar";
import { UserProfile } from "@/components/UserProfile";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Search, BarChart2, FileDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useWarehouse } from "@/context/WarehouseContext";

const warehouseData = {
  "PIP Sur": {
    existencias: 450,
    movimientos: 12345,
    valoracion: 985000,
    reportHistory: Array(5).fill(null).map((_, index) => ({
      date: new Date(2024, 2, 15 - index).toLocaleDateString(),
      type: "Reporte de Existencias",
      user: "Carlos Ruiz",
      status: "Completado"
    }))
  },
  "Bronce II": {
    existencias: 780,
    movimientos: 8901,
    valoracion: 675000,
    reportHistory: Array(5).fill(null).map((_, index) => ({
      date: new Date(2024, 2, 15 - index).toLocaleDateString(),
      type: "Reporte de Movimientos",
      user: "Ana López",
      status: "Completado"
    }))
  },
  "Link": {
    existencias: 320,
    movimientos: 5678,
    valoracion: 435000,
    reportHistory: Array(5).fill(null).map((_, index) => ({
      date: new Date(2024, 2, 15 - index).toLocaleDateString(),
      type: "Reporte de Valorización",
      user: "Miguel Torres",
      status: "Completado"
    }))
  },
  "Hottah": {
    existencias: 590,
    movimientos: 9012,
    valoracion: 890000,
    reportHistory: Array(5).fill(null).map((_, index) => ({
      date: new Date(2024, 2, 15 - index).toLocaleDateString(),
      type: "Reporte de Existencias",
      user: "Laura Sánchez",
      status: "Completado"
    }))
  },
  "Prisma X": {
    existencias: 910,
    movimientos: 15678,
    valoracion: 1250000,
    reportHistory: Array(5).fill(null).map((_, index) => ({
      date: new Date(2024, 2, 15 - index).toLocaleDateString(),
      type: "Reporte de Movimientos",
      user: "Roberto García",
      status: "Completado"
    }))
  }
};

const Reportes = () => {
  const { toast } = useToast();
  const { selectedWarehouse } = useWarehouse();
  const currentData = warehouseData[selectedWarehouse as keyof typeof warehouseData];

  const handleMoreInfo = (section: string) => {
    toast({
      title: "Más información",
      description: `Mostrando más información sobre ${section} en ${selectedWarehouse}`,
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-64 p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#1c1c1c]">Reportes de Inventario</h2>
          <UserProfile />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-[#8E9196] shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Reporte de Existencias</h3>
              <BarChart2 className="h-6 w-6 text-[#ea384c]" />
            </div>
            <p className="text-gray-600 mb-4">Existencias actuales: {currentData.existencias}</p>
            <Button className="w-full bg-[#ea384c] hover:bg-[#d42d3d]">
              <FileDown className="mr-2 h-4 w-4" />
              Generar Reporte
            </Button>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#8E9196] shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Reporte de Movimientos</h3>
              <BarChart2 className="h-6 w-6 text-[#ea384c]" />
            </div>
            <p className="text-gray-600 mb-4">Movimientos totales: {currentData.movimientos}</p>
            <Button className="w-full bg-[#ea384c] hover:bg-[#d42d3d]">
              <FileDown className="mr-2 h-4 w-4" />
              Generar Reporte
            </Button>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#8E9196] shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Reporte de Valorización</h3>
              <BarChart2 className="h-6 w-6 text-[#ea384c]" />
            </div>
            <p className="text-gray-600 mb-4">Valor actual: ${currentData.valoracion.toLocaleString()}</p>
            <Button className="w-full bg-[#ea384c] hover:bg-[#d42d3d]">
              <FileDown className="mr-2 h-4 w-4" />
              Generar Reporte
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="flex justify-between items-center mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Buscar reportes..."
                className="pl-12 border-gray-200 focus:border-[#ea384c] transition-colors rounded-lg"
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#ea384c] hover:bg-[#ea384c]">
                  <TableHead className="text-white font-medium">Fecha</TableHead>
                  <TableHead className="text-white font-medium">Tipo de Reporte</TableHead>
                  <TableHead className="text-white font-medium">Usuario</TableHead>
                  <TableHead className="text-white font-medium">Almacén</TableHead>
                  <TableHead className="text-white font-medium">Estado</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentData.reportHistory.map((report, index) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    <TableCell>{report.date}</TableCell>
                    <TableCell>{report.type}</TableCell>
                    <TableCell>{report.user}</TableCell>
                    <TableCell>{currentWarehouse}</TableCell>
                    <TableCell>
                      <span className="px-3 py-1 rounded-full bg-green-100 text-green-800">
                        {report.status}
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

export default Reportes;

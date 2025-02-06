import { Sidebar } from "@/components/Sidebar";
import { UserProfile } from "@/components/UserProfile";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Search, Plus, Printer, QrCode } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface LabelData {
  [key: string]: {
    etiquetas: {
      id: string;
      tipo: string;
      descripcion: string;
      fecha: string;
      estado: string;
    }[];
  };
}

const warehouseData: LabelData = {
  "PIP Sur": {
    etiquetas: [
      {
        id: "ETQ-1001",
        tipo: "Código de Barras",
        descripcion: "Etiqueta para Insumo PIP-1",
        fecha: "2024-03-15",
        estado: "Activa"
      },
      {
        id: "ETQ-1002",
        tipo: "Código QR",
        descripcion: "Etiqueta para Insumo PIP-2",
        fecha: "2024-03-14",
        estado: "Activa"
      },
      {
        id: "ETQ-1003",
        tipo: "Código de Barras",
        descripcion: "Etiqueta para Insumo PIP-3",
        fecha: "2024-03-13",
        estado: "Inactiva"
      }
    ]
  },
  "Bronce II": {
    etiquetas: [
      {
        id: "ETQ-2001",
        tipo: "Código QR",
        descripcion: "Etiqueta para Material B2-1",
        fecha: "2024-03-15",
        estado: "Activa"
      },
      {
        id: "ETQ-2002",
        tipo: "Código de Barras",
        descripcion: "Etiqueta para Material B2-2",
        fecha: "2024-03-14",
        estado: "Activa"
      }
    ]
  },
  "Link": {
    etiquetas: [
      {
        id: "ETQ-3001",
        tipo: "Código QR",
        descripcion: "Etiqueta para Producto L-1",
        fecha: "2024-03-15",
        estado: "Activa"
      },
      {
        id: "ETQ-3002",
        tipo: "Código de Barras",
        descripcion: "Etiqueta para Producto L-2",
        fecha: "2024-03-14",
        estado: "Inactiva"
      },
      {
        id: "ETQ-3003",
        tipo: "Código QR",
        descripcion: "Etiqueta para Producto L-3",
        fecha: "2024-03-13",
        estado: "Activa"
      }
    ]
  },
  "Hottah": {
    etiquetas: [
      {
        id: "ETQ-4001",
        tipo: "Código de Barras",
        descripcion: "Etiqueta para Item H-1",
        fecha: "2024-03-15",
        estado: "Activa"
      }
    ]
  },
  "Prisma X": {
    etiquetas: [
      {
        id: "ETQ-5001",
        tipo: "Código QR",
        descripcion: "Etiqueta para Componente P-1",
        fecha: "2024-03-15",
        estado: "Activa"
      },
      {
        id: "ETQ-5002",
        tipo: "Código de Barras",
        descripcion: "Etiqueta para Componente P-2",
        fecha: "2024-03-14",
        estado: "Activa"
      }
    ]
  }
};

const Etiquetas = () => {
  const [selectedWarehouse, setSelectedWarehouse] = useState("PIP Sur");

  return (
    <div className="flex min-h-screen bg-[#ffffff]">
      <Sidebar />
      <div className="flex-1 ml-64 p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#1c1c1c]">
            Generación de Etiquetas - {selectedWarehouse}
          </h2>
          <UserProfile />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-[#8E9196] shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Código de Barras</h3>
              <QrCode className="h-6 w-6 text-[#ea384c]" />
            </div>
            <p className="text-gray-600 mb-4">Generar etiquetas con código de barras</p>
            <Button className="w-full bg-[#ea384c] hover:bg-[#d42d3d]">
              <Printer className="mr-2 h-4 w-4" />
              Imprimir
            </Button>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#8E9196] shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Código QR</h3>
              <QrCode className="h-6 w-6 text-[#ea384c]" />
            </div>
            <p className="text-gray-600 mb-4">Generar etiquetas con código QR</p>
            <Button className="w-full bg-[#ea384c] hover:bg-[#d42d3d]">
              <Printer className="mr-2 h-4 w-4" />
              Imprimir
            </Button>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#8E9196] shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Etiquetas Personalizadas</h3>
              <QrCode className="h-6 w-6 text-[#ea384c]" />
            </div>
            <p className="text-gray-600 mb-4">Crear etiquetas con diseño personalizado</p>
            <Button className="w-full bg-[#ea384c] hover:bg-[#d42d3d]">
              <Plus className="mr-2 h-4 w-4" />
              Crear Nueva
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="flex justify-between items-center mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Buscar etiquetas..."
                className="pl-12 border-gray-200 focus:border-[#ea384c] transition-colors rounded-lg"
              />
            </div>
            <Button className="bg-[#ea384c] text-white hover:bg-[#d42d3d]">
              <Plus className="mr-2 h-5 w-5" />
              Nueva Etiqueta
            </Button>
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-200">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#ea384c] hover:bg-[#ea384c]">
                  <TableHead className="text-white font-medium">ID</TableHead>
                  <TableHead className="text-white font-medium">Tipo</TableHead>
                  <TableHead className="text-white font-medium">Descripción</TableHead>
                  <TableHead className="text-white font-medium">Fecha de Creación</TableHead>
                  <TableHead className="text-white font-medium">Estado</TableHead>
                  <TableHead className="text-white font-medium">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {warehouseData[selectedWarehouse].etiquetas.map((etiqueta) => (
                  <TableRow key={etiqueta.id} className="hover:bg-gray-50">
                    <TableCell>{etiqueta.id}</TableCell>
                    <TableCell>{etiqueta.tipo}</TableCell>
                    <TableCell>{etiqueta.descripcion}</TableCell>
                    <TableCell>{new Date(etiqueta.fecha).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <span className={`px-3 py-1 rounded-full ${
                        etiqueta.estado === 'Activa' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {etiqueta.estado}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" className="hover:bg-gray-100">
                        <Printer className="h-4 w-4" />
                      </Button>
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

export default Etiquetas;

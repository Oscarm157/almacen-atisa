
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";

interface InventoryItem {
  code: string;
  name: string;
  current: number;
  min: number;
  max: number;
  status: string;
}

interface InventoryTableProps {
  items: InventoryItem[];
  onSearch: (value: string) => void;
}

export const InventoryTable = ({ items, onSearch }: InventoryTableProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 sm:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="relative flex-1 w-full max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Buscar insumo..."
            className="pl-12 border-gray-200 focus:border-[#ea384c] transition-colors rounded-lg w-full"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <Button className="bg-[#ea384c] text-white hover:bg-[#d42d3d] w-full sm:w-auto">
          Actualizar Niveles
        </Button>
      </div>

      <div className="overflow-x-auto">
        <div className="rounded-xl border border-gray-200 min-w-[600px]">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#ea384c] hover:bg-[#ea384c]">
                <TableHead className="text-white font-medium">Código</TableHead>
                <TableHead className="text-white font-medium">Insumo</TableHead>
                <TableHead className="text-white font-medium">Stock Actual</TableHead>
                <TableHead className="text-white font-medium">Mínimo</TableHead>
                <TableHead className="text-white font-medium">Máximo</TableHead>
                <TableHead className="text-white font-medium">Estado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell>{item.code}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.current}</TableCell>
                  <TableCell>{item.min}</TableCell>
                  <TableCell>{item.max}</TableCell>
                  <TableCell>
                    <span className={`px-3 py-1 rounded-full text-xs sm:text-sm ${
                      item.status === "Bajo Mínimo"
                        ? "bg-red-100 text-red-800"
                        : item.status === "Normal"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-blue-100 text-blue-800"
                    }`}>
                      {item.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

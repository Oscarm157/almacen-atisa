
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { useIsMobile } from "@/hooks/use-mobile";

interface TableData {
  dato: string;
  campo1: string;
  campo2: string;
  campo3: string;
}

interface ConteoTablesProps {
  teorico: TableData[];
  fisico: TableData[];
}

export const ConteoTables = ({ teorico, fisico }: ConteoTablesProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="grid grid-cols-1 gap-6 mb-6">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <h3 className="text-lg font-semibold p-4 border-b">Conteos - Teórico/Sistema</h3>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#ea384c] hover:bg-[#ea384c]">
                <TableHead className="text-white whitespace-nowrap">Encabezados</TableHead>
                <TableHead className="text-white whitespace-nowrap">Campo 1</TableHead>
                <TableHead className="text-white whitespace-nowrap">Campo 2</TableHead>
                <TableHead className="text-white whitespace-nowrap">Campo 3</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teorico.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="bg-gray-50 whitespace-nowrap">{row.dato}</TableCell>
                  <TableCell className="whitespace-nowrap">{row.campo1}</TableCell>
                  <TableCell className="whitespace-nowrap">{row.campo2}</TableCell>
                  <TableCell className="whitespace-nowrap">{row.campo3}</TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-[#ea384c] text-white hover:bg-[#ea384c]">
                <TableCell className="whitespace-nowrap">Totales</TableCell>
                <TableCell className="whitespace-nowrap">
                  {teorico.reduce((acc, row) => acc + parseInt(row.campo1), 0)}
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  {teorico.reduce((acc, row) => acc + parseInt(row.campo2), 0)}
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  {teorico.reduce((acc, row) => acc + parseInt(row.campo3), 0)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <h3 className="text-lg font-semibold p-4 border-b">Físico</h3>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#ea384c] hover:bg-[#ea384c]">
                <TableHead className="text-white whitespace-nowrap">Encabezados</TableHead>
                <TableHead className="text-white whitespace-nowrap">Campo 1</TableHead>
                <TableHead className="text-white whitespace-nowrap">Campo 2</TableHead>
                <TableHead className="text-white whitespace-nowrap">Campo 3</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fisico.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="bg-gray-50 whitespace-nowrap">{row.dato}</TableCell>
                  <TableCell className="whitespace-nowrap">{row.campo1}</TableCell>
                  <TableCell className="whitespace-nowrap">{row.campo2}</TableCell>
                  <TableCell className="whitespace-nowrap">{row.campo3}</TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-[#ea384c] text-white hover:bg-[#ea384c]">
                <TableCell className="whitespace-nowrap">Totales</TableCell>
                <TableCell className="whitespace-nowrap">
                  {fisico.reduce((acc, row) => acc + parseInt(row.campo1), 0)}
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  {fisico.reduce((acc, row) => acc + parseInt(row.campo2), 0)}
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  {fisico.reduce((acc, row) => acc + parseInt(row.campo3), 0)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

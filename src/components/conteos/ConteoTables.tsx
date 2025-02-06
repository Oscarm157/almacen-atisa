
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";

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
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
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
              {teorico.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="bg-gray-50">{row.dato}</TableCell>
                  <TableCell>{row.campo1}</TableCell>
                  <TableCell>{row.campo2}</TableCell>
                  <TableCell>{row.campo3}</TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-[#ea384c] text-white hover:bg-[#ea384c]">
                <TableCell>Totales</TableCell>
                <TableCell>
                  {teorico.reduce((acc, row) => acc + parseInt(row.campo1), 0)}
                </TableCell>
                <TableCell>
                  {teorico.reduce((acc, row) => acc + parseInt(row.campo2), 0)}
                </TableCell>
                <TableCell>
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
                <TableHead className="text-white">Encabezados</TableHead>
                <TableHead className="text-white">Campo 1</TableHead>
                <TableHead className="text-white">Campo 2</TableHead>
                <TableHead className="text-white">Campo 3</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fisico.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="bg-gray-50">{row.dato}</TableCell>
                  <TableCell>{row.campo1}</TableCell>
                  <TableCell>{row.campo2}</TableCell>
                  <TableCell>{row.campo3}</TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-[#ea384c] text-white hover:bg-[#ea384c]">
                <TableCell>Totales</TableCell>
                <TableCell>
                  {fisico.reduce((acc, row) => acc + parseInt(row.campo1), 0)}
                </TableCell>
                <TableCell>
                  {fisico.reduce((acc, row) => acc + parseInt(row.campo2), 0)}
                </TableCell>
                <TableCell>
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


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Info } from "lucide-react";

interface DetailedMetricsPanelProps {
  insumosRegistrados: number;
  existenciaCantidad: number;
  existenciaImporte: number;
  movimientosDia: number;
}

export const DetailedMetricsPanel = ({
  insumosRegistrados,
  existenciaCantidad,
  existenciaImporte,
  movimientosDia
}: DetailedMetricsPanelProps) => {
  return (
    <Tabs defaultValue="insumos" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="insumos">Insumos</TabsTrigger>
        <TabsTrigger value="existencia">Existencia</TabsTrigger>
        <TabsTrigger value="importe">Importe</TabsTrigger>
        <TabsTrigger value="movimientos">Movimientos</TabsTrigger>
      </TabsList>
      
      <TabsContent value="insumos">
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-[#33C3F0] p-3 rounded-full">
              <Info className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Detalles de Insumos Registrados</h3>
              <p className="text-gray-600 mb-4">Total de insumos registrados: {insumosRegistrados}</p>
              <ul className="space-y-2 text-sm">
                <li>• Insumos activos: {Math.round(insumosRegistrados * 0.8)}</li>
                <li>• Insumos inactivos: {Math.round(insumosRegistrados * 0.2)}</li>
                <li>• Última actualización: {new Date().toLocaleDateString()}</li>
              </ul>
            </div>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="existencia">
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-[#8E9196] p-3 rounded-full">
              <Info className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Detalles de Existencia en Cantidad</h3>
              <p className="text-gray-600 mb-4">Total en existencia: {existenciaCantidad}</p>
              <ul className="space-y-2 text-sm">
                <li>• En almacén principal: {Math.round(existenciaCantidad * 0.7)}</li>
                <li>• En tránsito: {Math.round(existenciaCantidad * 0.3)}</li>
                <li>• Última actualización: {new Date().toLocaleDateString()}</li>
              </ul>
            </div>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="importe">
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-[#4CAF50] p-3 rounded-full">
              <Info className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Detalles de Existencia en Importe</h3>
              <p className="text-gray-600 mb-4">Total en importe: ${existenciaImporte}</p>
              <ul className="space-y-2 text-sm">
                <li>• Valor en almacén: ${Math.round(existenciaImporte * 0.85)}</li>
                <li>• Valor en tránsito: ${Math.round(existenciaImporte * 0.15)}</li>
                <li>• Última actualización: {new Date().toLocaleDateString()}</li>
              </ul>
            </div>
          </div>
        </Card>
      </TabsContent>

      <TabsContent value="movimientos">
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-[#F97316] p-3 rounded-full">
              <Info className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Detalles de Movimientos del Día</h3>
              <p className="text-gray-600 mb-4">Total de movimientos: {movimientosDia}</p>
              <ul className="space-y-2 text-sm">
                <li>• Entradas: {Math.round(movimientosDia * 0.4)}</li>
                <li>• Salidas: {Math.round(movimientosDia * 0.6)}</li>
                <li>• Última actualización: {new Date().toLocaleDateString()}</li>
              </ul>
            </div>
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

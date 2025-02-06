
import { MetricCard } from "@/components/MetricCard";
import { useToast } from "@/components/ui/use-toast";

interface MetricsGridProps {
  insumosRegistrados: number;
  existenciaCantidad: number;
  existenciaImporte: number;
  movimientosDia: number;
}

export const MetricsGrid = ({
  insumosRegistrados,
  existenciaCantidad,
  existenciaImporte,
  movimientosDia
}: MetricsGridProps) => {
  const { toast } = useToast();

  const showMoreInfo = (metric: string) => {
    toast({
      title: "Más información",
      description: `Mostrando más información sobre ${metric}`,
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <MetricCard
        title="Insumos registrados"
        value={insumosRegistrados.toString()}
        bgColor="bg-[#33C3F0]"
        onInfoClick={() => showMoreInfo("insumos")}
      />
      <MetricCard
        title="Existencia en cantidad"
        value={existenciaCantidad.toString()}
        bgColor="bg-[#8E9196]"
        onInfoClick={() => showMoreInfo("existencia")}
      />
      <MetricCard
        title="Existencia en importe"
        value={existenciaImporte.toLocaleString()}
        bgColor="bg-[#4CAF50]"
        onInfoClick={() => showMoreInfo("importe")}
      />
      <MetricCard
        title="Movimientos del día"
        value={movimientosDia.toString()}
        bgColor="bg-[#F97316]"
        onInfoClick={() => showMoreInfo("movimientos")}
      />
    </div>
  );
};

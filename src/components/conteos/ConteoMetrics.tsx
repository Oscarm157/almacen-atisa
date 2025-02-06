
import { MetricCard } from "@/components/MetricCard";

interface ConteoMetricsProps {
  metrics: {
    insumosA: string;
    insumosB: string;
    insumosC: string;
    totalInsumos: string;
  };
  onInfoClick: (section: string) => void;
}

export const ConteoMetrics = ({ metrics, onInfoClick }: ConteoMetricsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <MetricCard
        title="Insumos A"
        value={metrics.insumosA}
        bgColor="bg-[#33C3F0]"
        onInfoClick={() => onInfoClick("Insumos A")}
      />
      <MetricCard
        title="Insumos B"
        value={metrics.insumosB}
        bgColor="bg-[#8E9196]"
        onInfoClick={() => onInfoClick("Insumos B")}
      />
      <MetricCard
        title="Insumos C"
        value={metrics.insumosC}
        bgColor="bg-[#4CAF50]"
        onInfoClick={() => onInfoClick("Insumos C")}
      />
      <MetricCard
        title="Total insumos"
        value={metrics.totalInsumos}
        bgColor="bg-[#F97316]"
        onInfoClick={() => onInfoClick("Total insumos")}
      />
    </div>
  );
};

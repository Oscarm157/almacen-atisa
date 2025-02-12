
import { useState } from "react";
import { MetricCard } from "@/components/MetricCard";
import { DetailedMetricsPanel } from "./DetailedMetricsPanel";

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
  const [showPanel, setShowPanel] = useState(false);

  const handleInfoClick = () => {
    setShowPanel(!showPanel);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Insumos registrados"
          value={Math.round(insumosRegistrados)}
          bgColor="bg-[#33C3F0]"
          onInfoClick={handleInfoClick}
        />
        <MetricCard
          title="Existencia en cantidad"
          value={Math.round(existenciaCantidad)}
          bgColor="bg-[#8E9196]"
          onInfoClick={handleInfoClick}
        />
        <MetricCard
          title="Existencia en importe"
          value={`$${Math.round(existenciaImporte)}`}
          bgColor="bg-[#4CAF50]"
          onInfoClick={handleInfoClick}
        />
        <MetricCard
          title="Movimientos del día"
          value={Math.round(movimientosDia)}
          bgColor="bg-[#F97316]"
          onInfoClick={handleInfoClick}
        />
      </div>

      {showPanel && (
        <div className="bg-white rounded-lg shadow p-4">
          <DetailedMetricsPanel
            insumosRegistrados={insumosRegistrados}
            existenciaCantidad={existenciaCantidad}
            existenciaImporte={existenciaImporte}
            movimientosDia={movimientosDia}
          />
        </div>
      )}
    </div>
  );
};

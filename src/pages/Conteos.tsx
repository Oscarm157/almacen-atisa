
import { Sidebar } from "@/components/Sidebar";
import { UserProfile } from "@/components/UserProfile";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useWarehouse } from "@/context/WarehouseContext";
import { ConteoMetrics } from "@/components/conteos/ConteoMetrics";
import { ConteoTables } from "@/components/conteos/ConteoTables";
import { useState } from "react";

const warehouseData = {
  "PIP Sur": {
    metrics: {
      insumosA: "450",
      insumosB: "15,356",
      insumosC: "12,890",
      totalInsumos: "28,696"
    },
    teorico: [
      { dato: "Insumo A", campo1: "125", campo2: "98", campo3: "27" },
      { dato: "Insumo B", campo1: "234", campo2: "200", campo3: "34" },
      { dato: "Insumo C", campo1: "89", campo2: "85", campo3: "4" },
      { dato: "Insumo D", campo1: "45", campo2: "42", campo3: "3" },
      { dato: "Insumo E", campo1: "167", campo2: "150", campo3: "17" }
    ],
    fisico: [
      { dato: "Insumo A", campo1: "130", campo2: "100", campo3: "30" },
      { dato: "Insumo B", campo1: "245", campo2: "210", campo3: "35" },
      { dato: "Insumo C", campo1: "92", campo2: "88", campo3: "4" },
      { dato: "Insumo D", campo1: "48", campo2: "44", campo3: "4" },
      { dato: "Insumo E", campo1: "175", campo2: "155", campo3: "20" }
    ]
  },
  "Bronce II": {
    metrics: {
      insumosA: "680",
      insumosB: "12,450",
      insumosC: "9,870",
      totalInsumos: "22,000"
    },
    teorico: [
      { dato: "Insumo A", campo1: "200", campo2: "180", campo3: "20" },
      { dato: "Insumo B", campo1: "300", campo2: "280", campo3: "20" },
      { dato: "Insumo C", campo1: "150", campo2: "140", campo3: "10" },
      { dato: "Insumo D", campo1: "80", campo2: "75", campo3: "5" },
      { dato: "Insumo E", campo1: "250", campo2: "230", campo3: "20" }
    ],
    fisico: [
      { dato: "Insumo A", campo1: "210", campo2: "190", campo3: "20" },
      { dato: "Insumo B", campo1: "310", campo2: "290", campo3: "20" },
      { dato: "Insumo C", campo1: "155", campo2: "145", campo3: "10" },
      { dato: "Insumo D", campo1: "85", campo2: "80", campo3: "5" },
      { dato: "Insumo E", campo1: "260", campo2: "240", campo3: "20" }
    ]
  },
  "Link": {
    metrics: {
      insumosA: "520",
      insumosB: "8,900",
      insumosC: "7,600",
      totalInsumos: "17,020"
    },
    teorico: [
      { dato: "Insumo A", campo1: "150", campo2: "140", campo3: "10" },
      { dato: "Insumo B", campo1: "280", campo2: "260", campo3: "20" },
      { dato: "Insumo C", campo1: "120", campo2: "110", campo3: "10" },
      { dato: "Insumo D", campo1: "60", campo2: "55", campo3: "5" },
      { dato: "Insumo E", campo1: "200", campo2: "190", campo3: "10" }
    ],
    fisico: [
      { dato: "Insumo A", campo1: "155", campo2: "145", campo3: "10" },
      { dato: "Insumo B", campo1: "285", campo2: "265", campo3: "20" },
      { dato: "Insumo C", campo1: "125", campo2: "115", campo3: "10" },
      { dato: "Insumo D", campo1: "65", campo2: "60", campo3: "5" },
      { dato: "Insumo E", campo1: "205", campo2: "195", campo3: "10" }
    ]
  },
  "Hottah": {
    metrics: {
      insumosA: "390",
      insumosB: "6,780",
      insumosC: "5,430",
      totalInsumos: "12,600"
    },
    teorico: [
      { dato: "Insumo A", campo1: "100", campo2: "90", campo3: "10" },
      { dato: "Insumo B", campo1: "180", campo2: "170", campo3: "10" },
      { dato: "Insumo C", campo1: "80", campo2: "75", campo3: "5" },
      { dato: "Insumo D", campo1: "40", campo2: "35", campo3: "5" },
      { dato: "Insumo E", campo1: "150", campo2: "140", campo3: "10" }
    ],
    fisico: [
      { dato: "Insumo A", campo1: "105", campo2: "95", campo3: "10" },
      { dato: "Insumo B", campo1: "185", campo2: "175", campo3: "10" },
      { dato: "Insumo C", campo1: "85", campo2: "80", campo3: "5" },
      { dato: "Insumo D", campo1: "45", campo2: "40", campo3: "5" },
      { dato: "Insumo E", campo1: "155", campo2: "145", campo3: "10" }
    ]
  },
  "Prisma X": {
    metrics: {
      insumosA: "420",
      insumosB: "7,890",
      insumosC: "6,540",
      totalInsumos: "14,850"
    },
    teorico: [
      { dato: "Insumo A", campo1: "120", campo2: "110", campo3: "10" },
      { dato: "Insumo B", campo1: "220", campo2: "200", campo3: "20" },
      { dato: "Insumo C", campo1: "90", campo2: "85", campo3: "5" },
      { dato: "Insumo D", campo1: "50", campo2: "45", campo3: "5" },
      { dato: "Insumo E", campo1: "180", campo2: "170", campo3: "10" }
    ],
    fisico: [
      { dato: "Insumo A", campo1: "125", campo2: "115", campo3: "10" },
      { dato: "Insumo B", campo1: "225", campo2: "205", campo3: "20" },
      { dato: "Insumo C", campo1: "95", campo2: "90", campo3: "5" },
      { dato: "Insumo D", campo1: "55", campo2: "50", campo3: "5" },
      { dato: "Insumo E", campo1: "185", campo2: "175", campo3: "10" }
    ]
  }
};

const Conteos = () => {
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
          <h2 className="text-2xl font-bold text-[#1c1c1c]">Conteos de Inventario</h2>
          <UserProfile />
        </div>

        <ConteoMetrics 
          metrics={currentData.metrics} 
          onInfoClick={handleMoreInfo} 
        />

        <ConteoTables 
          teorico={currentData.teorico} 
          fisico={currentData.fisico} 
        />

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

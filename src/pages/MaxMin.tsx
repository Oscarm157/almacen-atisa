
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { UserProfile } from "@/components/UserProfile";
import { useWarehouse } from "@/context/WarehouseContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { MetricsCards } from "@/components/maxmin/MetricsCards";
import { InventoryTable } from "@/components/maxmin/InventoryTable";
import { warehouseData } from "@/data/warehouseMaxMinData";

const MaxMin = () => {
  const { selectedWarehouse } = useWarehouse();
  const isMobile = useIsMobile();
  const [searchQuery, setSearchQuery] = useState("");

  const currentData = warehouseData[selectedWarehouse as keyof typeof warehouseData];
  const filteredItems = currentData.items.filter(
    item => 
      item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-[#ffffff]">
      <Sidebar />
      <div className={`flex-1 p-4 ${!isMobile ? 'ml-64' : 'ml-0'}`}>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1c1c1c]">
            Máximos y Mínimos
          </h2>
          <UserProfile />
        </div>

        <MetricsCards 
          underMin={currentData.underMin}
          normal={currentData.normal}
          overMax={currentData.overMax}
        />

        <InventoryTable 
          items={filteredItems}
          onSearch={setSearchQuery}
        />
      </div>
    </div>
  );
};

export default MaxMin;

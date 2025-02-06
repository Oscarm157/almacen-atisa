
import { createContext, useContext, ReactNode, useState } from "react";

type WarehouseContextType = {
  selectedWarehouse: string;
  setSelectedWarehouse: (warehouse: string) => void;
};

const WarehouseContext = createContext<WarehouseContextType | undefined>(undefined);

export function WarehouseProvider({ children }: { children: ReactNode }) {
  const [selectedWarehouse, setSelectedWarehouse] = useState("PIP Sur");

  return (
    <WarehouseContext.Provider value={{ selectedWarehouse, setSelectedWarehouse }}>
      {children}
    </WarehouseContext.Provider>
  );
}

export function useWarehouse() {
  const context = useContext(WarehouseContext);
  if (context === undefined) {
    throw new Error("useWarehouse must be used within a WarehouseProvider");
  }
  return context;
}

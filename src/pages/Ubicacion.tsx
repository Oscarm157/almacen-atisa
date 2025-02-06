
import { Sidebar } from "@/components/Sidebar";
import { UserProfile } from "@/components/UserProfile";
import { useToast } from "@/components/ui/use-toast";
import { useState, useEffect } from "react";
import { LocationSelectors } from "@/components/LocationSelectors";
import { LocationTable } from "@/components/LocationTable";
import { warehouseData } from "@/data/warehouseData";

const Ubicacion = () => {
  const { toast } = useToast();
  const [selectedWarehouse, setSelectedWarehouse] = useState("PIP Sur");
  const [selectedPasillo, setPasillo] = useState("1");
  const [selectedRack, setRack] = useState("1");
  const [selectedEstante, setEstante] = useState("");
  const [selectedInsumo, setInsumo] = useState("");

  useEffect(() => {
    // Reset selections when warehouse changes
    setPasillo(String(warehouseData[selectedWarehouse].pasillos[0]));
    setRack(String(warehouseData[selectedWarehouse].racks[0]));
    setEstante(warehouseData[selectedWarehouse].estantes[0]);
    setInsumo(warehouseData[selectedWarehouse].insumos[0].id);
  }, [selectedWarehouse]);

  return (
    <div className="flex min-h-screen bg-[#ffffff]">
      <Sidebar />
      <div className="flex-1 ml-64 p-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#1c1c1c]">
            Ubicación de Insumos - {selectedWarehouse}
          </h2>
          <UserProfile />
        </div>

        <LocationSelectors
          selectedWarehouse={selectedWarehouse}
          selectedPasillo={selectedPasillo}
          selectedRack={selectedRack}
          selectedEstante={selectedEstante}
          selectedInsumo={selectedInsumo}
          setPasillo={setPasillo}
          setRack={setRack}
          setEstante={setEstante}
          setInsumo={setInsumo}
        />

        <LocationTable selectedWarehouse={selectedWarehouse} />
      </div>
    </div>
  );
};

export default Ubicacion;

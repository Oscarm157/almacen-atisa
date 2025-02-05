
import { Sidebar } from "@/components/Sidebar";
import { UserProfile } from "@/components/UserProfile";
import { LocationSelector } from "@/components/LocationSelector";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Conteos = () => {
  const { toast } = useToast();

  const handleNewCount = () => {
    toast({
      title: "Nuevo conteo",
      description: "Iniciando nuevo conteo de inventario",
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-4">
          <LocationSelector />
          <UserProfile />
        </div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#1c1c1c]">Conteos de Inventario</h2>
          <Button 
            onClick={handleNewCount}
            className="bg-[#c42c30] hover:bg-[#ea384c] text-white"
          >
            <Plus className="w-5 h-5 mr-2" />
            Nuevo Conteo
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {/* Placeholder for counts list */}
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <p className="text-gray-500">No hay conteos registrados</p>
            <p className="text-sm text-gray-400 mt-2">
              Haz clic en "Nuevo Conteo" para comenzar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conteos;

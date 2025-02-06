
import { Link, useLocation } from "react-router-dom";
import { 
  PackageSearch, 
  ClipboardList, 
  BarChart3, 
  ArrowLeftRight, 
  MapPin, 
  Tags 
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useWarehouse } from "@/context/WarehouseContext";

const menuItems = [
  { label: "Existencia", path: "/", icon: PackageSearch },
  { label: "Conteos", path: "/conteos", icon: ClipboardList },
  { label: "Reportes", path: "/reportes", icon: BarChart3 },
  { label: "Máximos y Mínimos", path: "/maxmin", icon: ArrowLeftRight },
  { label: "Ubicación", path: "/ubicacion", icon: MapPin },
  { label: "Etiquetas", path: "/etiquetas", icon: Tags },
];

const warehouseOptions = ["PIP Sur", "Bronce II", "Link", "Hottah", "Prisma X"];

const LogoSection = () => (
  <div className="h-16 mb-8 p-2 rounded-lg bg-[#c42c30] flex items-center justify-center">
    <img
      src="/lovable-uploads/c1f8150f-7538-4ae3-b3b7-2b8b78247208.png"
      alt="Atisa Logo"
      className="w-32"
      loading="eager"
      decoding="async"
      fetchPriority="high"
    />
  </div>
);

export const Sidebar = () => {
  const location = useLocation();
  const { selectedWarehouse, setSelectedWarehouse } = useWarehouse();

  return (
    <div className="fixed top-0 left-0 bg-black text-white w-64 h-screen p-4 overflow-y-auto">
      <LogoSection />
      
      <div className="mb-8">
        <label className="block text-sm font-medium mb-2">Almacén</label>
        <Select value={selectedWarehouse} onValueChange={setSelectedWarehouse}>
          <SelectTrigger className="w-full bg-[#ea384c] text-white hover:bg-[#d42d3d] transition-all duration-300">
            <SelectValue placeholder="Seleccionar Almacén" />
          </SelectTrigger>
          <SelectContent>
            {warehouseOptions.map((warehouse) => (
              <SelectItem key={warehouse} value={warehouse}>
                {warehouse}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path || 
              (item.path === "/" && location.pathname === "");
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block p-2 rounded transition-colors text-lg font-bold flex items-center gap-3
                    ${isActive 
                      ? "bg-[#c42c30] text-white" 
                      : "hover:bg-gray-800"
                    }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};



import { Link, useLocation } from "react-router-dom";
import { 
  PackageSearch, 
  ClipboardList, 
  BarChart3, 
  ArrowLeftRight, 
  MapPin, 
  Tags,
  ChevronDown
} from "lucide-react";
import { LocationSelector } from "@/components/LocationSelector";
import { useState, useEffect } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const subMenuItems = [
  { label: "Insumos registrados", path: "/insumos-registrados" },
  { label: "Existencia en cantidad", path: "/existencia-cantidad" },
  { label: "Existencia en importe", path: "/existencia-importe" },
  { label: "Movimientos del día", path: "/movimientos-dia" },
];

const otherMenuItems = [
  { label: "Conteos", path: "/conteos", icon: ClipboardList },
  { label: "Reportes", path: "/reportes", icon: BarChart3 },
  { label: "Máximos y Mínimos", path: "/maxmin", icon: ArrowLeftRight },
  { label: "Ubicación", path: "/ubicacion", icon: MapPin },
  { label: "Etiquetas", path: "/etiquetas", icon: Tags },
];

const LogoSection = () => (
  <div className="mb-8 p-2 rounded-lg bg-[#c42c30]">
    <img
      src="/lovable-uploads/c1f8150f-7538-4ae3-b3b7-2b8b78247208.png"
      alt="Atisa Logo"
      className="w-32 mx-auto"
      loading="eager"
      decoding="async"
      fetchPriority="high"
    />
  </div>
);

export const Sidebar = () => {
  const location = useLocation();
  const [isExistenciaOpen, setIsExistenciaOpen] = useState(false);

  // Auto-open submenu when on Existencia related pages
  useEffect(() => {
    const isExistenciaPage = location.pathname === "/" || 
      subMenuItems.some(item => location.pathname === item.path);
    setIsExistenciaOpen(isExistenciaPage);
  }, [location]);

  return (
    <div className="fixed top-0 left-0 bg-black text-white w-64 h-screen p-4 overflow-y-auto">
      <LogoSection />
      
      <div className="mb-8">
        <LocationSelector />
      </div>

      <nav>
        <ul className="space-y-2">
          <li>
            <Collapsible open={isExistenciaOpen} onOpenChange={setIsExistenciaOpen}>
              <CollapsibleTrigger className="w-full">
                <div className={`p-2 rounded transition-colors text-lg font-bold flex items-center justify-between
                  ${location.pathname === "/" ? "bg-[#c42c30] text-white" : "hover:bg-gray-800"}`}
                >
                  <div className="flex items-center gap-3">
                    <PackageSearch className="w-5 h-5" />
                    Existencia
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isExistenciaOpen ? 'rotate-180' : ''}`} />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <ul className="mt-2 ml-7 space-y-2">
                  {subMenuItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`block p-2 rounded transition-colors text-base flex items-center gap-2
                          ${location.pathname === item.path 
                            ? "bg-[#c42c30] text-white" 
                            : "hover:bg-gray-800"
                          }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CollapsibleContent>
            </Collapsible>
          </li>

          {otherMenuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`block p-2 rounded transition-colors text-lg font-bold flex items-center gap-3
                  ${location.pathname === item.path 
                    ? "bg-[#c42c30] text-white" 
                    : "hover:bg-gray-800"
                  }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

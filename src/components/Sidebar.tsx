
import { Link } from "react-router-dom";
import { 
  PackageSearch, 
  ClipboardList, 
  BarChart3, 
  ArrowLeftRight, 
  MapPin, 
  Tags 
} from "lucide-react";

const menuItems = [
  { label: "Existencia", path: "/", icon: PackageSearch },
  { label: "Conteos", path: "/conteos", icon: ClipboardList },
  { label: "Reportes", path: "/reportes", icon: BarChart3 },
  { label: "Máximos & Mínimos", path: "/maxmin", icon: ArrowLeftRight },
  { label: "Ubicación", path: "/ubicacion", icon: MapPin },
  { label: "Etiquetas", path: "/etiquetas", icon: Tags },
];

export const Sidebar = () => {
  return (
    <div className="bg-black text-white w-64 min-h-screen p-4">
      <div className="mb-8 p-2 rounded-lg bg-[#c42c30]">
        <img
          src="/lovable-uploads/c1f8150f-7538-4ae3-b3b7-2b8b78247208.png"
          alt="Atisa Logo"
          className="w-32 mx-auto"
        />
      </div>
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="block p-2 hover:bg-gray-800 rounded transition-colors text-lg font-bold flex items-center gap-3"
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

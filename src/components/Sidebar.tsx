import { Link } from "react-router-dom";

const menuItems = [
  { label: "Existencia", path: "/" },
  { label: "Conteos", path: "/conteos" },
  { label: "Reportes", path: "/reportes" },
  { label: "Máximos & Mínimos", path: "/maxmin" },
  { label: "Ubicación", path: "/ubicacion" },
  { label: "Etiquetas", path: "/etiquetas" },
];

export const Sidebar = () => {
  return (
    <div className="bg-black text-white w-64 min-h-screen p-4">
      <h1 className="text-xl font-bold mb-8 p-2">Almacén - Prisma XVIII</h1>
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="block p-2 hover:bg-gray-800 rounded transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
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
      <div className="mb-8 p-2">
        <img
          src="https://i.ibb.co/60d8y5my/Atisa-Group-3.png"
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
                className="block p-2 hover:bg-gray-800 rounded transition-colors text-lg font-bold"
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
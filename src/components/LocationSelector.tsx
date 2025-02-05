
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export const LocationSelector = () => {
  const [value, setValue] = useState("Prisma XVIII");
  const [isAnimating, setIsAnimating] = useState(false);
  
  const locations = [
    "Prisma XVIII",
    "Prisma XIX",
  ];

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
    setIsAnimating(true);
    // Reset animation state after animation completes
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div>
      <h2 className="text-white text-lg font-bold mb-2">Almacén</h2>
      <Select value={value} onValueChange={handleValueChange}>
        <SelectTrigger className="w-full text-lg font-bold bg-[#f3f3f3] text-[#1c1c1c] border-[#c42c30]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-[#f3f3f3] text-[#1c1c1c] border-[#c42c30]">
          {locations.map((location) => (
            <SelectItem
              key={location}
              value={location}
              className="hover:bg-[#c42c30] hover:text-[#dddddd] focus:bg-[#c42c30] focus:text-[#dddddd]"
            >
              {location}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {isAnimating && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 animate-fade-in">
          <div className="flex items-center justify-center h-full">
            <div className="text-white text-xl animate-fade-in">
              Cargando {value}...
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


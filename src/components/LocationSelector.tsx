
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const LocationSelector = () => {
  const [value, setValue] = useState("Prisma XVIII");
  const { toast } = useToast();
  
  const locations = [
    "Prisma XVIII",
    "Prisma XIX",
  ];

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
    toast({
      description: `Cambiando a ${newValue}...`,
      duration: 2000,
    });
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
    </div>
  );
};


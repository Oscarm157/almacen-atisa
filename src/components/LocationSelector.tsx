
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown } from "lucide-react";

const locations = [
  "Almacén - Prisma XVIII",
  "Almacén - Prisma XIX",
];

export const LocationSelector = () => {
  return (
    <Select defaultValue={locations[0]}>
      <SelectTrigger className="w-full text-lg font-bold bg-[#f3f3f3] text-[#1c1c1c] border-[#c42c30]">
        <SelectValue />
        <ChevronDown className="h-4 w-4 text-[#1c1c1c]" />
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
  );
};

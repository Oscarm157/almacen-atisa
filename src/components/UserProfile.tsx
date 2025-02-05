import { User } from "lucide-react";

export const UserProfile = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="text-right">
        <p className="text-sm font-medium">Juan Pérez</p>
      </div>
      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
        <User className="h-6 w-6 text-gray-600" />
      </div>
    </div>
  );
};
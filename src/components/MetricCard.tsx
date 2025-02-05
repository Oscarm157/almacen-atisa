import { Button } from "./ui/button";
import { Info } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  bgColor: string;
  onInfoClick: () => void;
}

export const MetricCard = ({ title, value, bgColor, onInfoClick }: MetricCardProps) => {
  return (
    <div className={`${bgColor} rounded-lg p-6 text-white`}>
      <h3 className="text-sm mb-4">{title}</h3>
      <p className="text-4xl font-bold mb-4">{value}</p>
      <Button
        variant="ghost"
        className="text-white hover:text-white/80"
        onClick={onInfoClick}
      >
        <Info className="mr-2 h-4 w-4" />
        Más Info
      </Button>
    </div>
  );
};
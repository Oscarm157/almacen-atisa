
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  bgColor: string;
  onInfoClick: () => void;
}

export const MetricCard = ({ title, value, bgColor, onInfoClick }: MetricCardProps) => {
  return (
    <div className={`${bgColor} rounded-lg overflow-hidden shadow-lg`}>
      <div className="px-4 py-3">
        <h3 className="text-sm text-white/90 mb-2">{title}</h3>
        <p className="text-4xl font-bold text-white mb-2">{value}</p>
      </div>
      <Button
        variant="ghost"
        onClick={onInfoClick}
        className="w-full bg-black/10 hover:bg-black/20 text-white px-4 py-2 flex items-center justify-center gap-2 rounded-none"
      >
        <span className="text-sm">Más Info</span>
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

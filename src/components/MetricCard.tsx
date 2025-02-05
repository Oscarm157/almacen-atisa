
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
    <div className={`${bgColor} rounded-lg p-6 text-white hover:opacity-95 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1`}>
      <h3 className="text-sm mb-4 opacity-90">{title}</h3>
      <p className="text-4xl font-bold mb-4">{value}</p>
      <Button
        variant="ghost"
        className="text-white hover:text-white/80 p-0"
        onClick={onInfoClick}
      >
        <span className="mr-2">Más Info</span>
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

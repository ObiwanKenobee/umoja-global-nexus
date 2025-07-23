import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

interface CounterCardProps {
  icon: string;
  value: string;
  label: string;
  duration?: number;
}

const CounterCard = ({ icon, value, label, duration = 2000 }: CounterCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className={`p-6 text-center transition-all duration-700 hover:shadow-emerald hover:scale-105 ${
      isVisible ? 'animate-counter-up' : 'opacity-0'
    }`}>
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-3xl font-bold text-primary mb-2">{value}</div>
      <div className="text-muted-foreground">{label}</div>
    </Card>
  );
};

export default CounterCard;
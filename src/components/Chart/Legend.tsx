import React from "react";

interface LegendProps {
  name: string;
  color: string;
}

export const Legend: React.FC<LegendProps> = ({ name, color }) => {
  return (
    <div className="flex flex-col items-center gap-2 md:flex-row text-center">
      <div
        className="w-4 h-4 border border-black"
        style={{ backgroundColor: color }}
      />
      <p>{name}</p>
    </div>
  );
};

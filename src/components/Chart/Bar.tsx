import React from "react";

interface BarProps {
  name: string;
  value: number;
  color: string;
  highest: number;
}

export const Bar: React.FC<BarProps> = ({ name, value, color, highest }) => {
  const percentage = (value / highest) * 100;
  return (
    <div
      className="flex flex-col items-center "
      style={{ height: `${percentage}%` }}
    >
      <div
        className={`w-8 h-full border border-black rounded-lg shadow-lg relative `}
        style={{
          backgroundColor: color,
        }}
      />
      <p className="text-black py-2">
        {" "}
        {name}
        <p>({value})</p>
      </p>
    </div>
  );
};

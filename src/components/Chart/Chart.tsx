import React, { useMemo } from "react";
import { Character } from "../../types";
import { generateRandomColor } from "../../utils";
import { Bar } from "./Bar";
import { Legend } from "./Legend";

const DEFAULT_CHART_HEIGHT = 250;

interface ChartProps {
  data: Character[];
  chartHeight?: number;
}

export const Chart: React.FC<ChartProps> = ({
  data,
  chartHeight = DEFAULT_CHART_HEIGHT,
}) => {
  const parsedData = useMemo(
    () =>
      data.map((d) => ({
        id: d.id,
        name: d.name,
        value: d.episode.length,
        color: generateRandomColor(),
      })),
    [data]
  );
  const highest = useMemo(
    () => [...parsedData].sort((a, b) => b.value - a.value)[0].value,
    [parsedData]
  );
  return (
    <div className="bg-grid-slate-100 border border-slate-400 p-4 w-full [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] ">
      <div className="flex justify-center gap-4 pt-1">
        {parsedData.map((data) => (
          <Legend
            name={data.name}
            color={data.color}
            key={`Legend-${data.id}`}
          />
        ))}
      </div>
      <div
        className={`flex justify-center items-end py-4 space-x-4 font-mono font-bold text-xs text-center text-white h-[${chartHeight}px]`}
      >
        {parsedData.map((data) => (
          <Bar
            highest={highest}
            name={data.name}
            value={data.value}
            color={data.color}
            key={`Bar-${data.id}`}
          />
        ))}
      </div>
    </div>
  );
};

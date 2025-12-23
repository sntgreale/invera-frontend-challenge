// Externals
import { useMemo } from "react";
import { RadialBar, RadialBarChart, Cell } from "recharts";

// Components
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/common/chart";

// Types
import type { RadialChartProps } from "../types/statistics.types";

// Utils
import { getDistributionColor } from "../utils/getDistributionColor";

export const RadialChart = ({
  totalUsers,
  distributionUsers,
}: RadialChartProps) => {
  const chartConfig = useMemo(() => {
    return distributionUsers.reduce((acc, item) => {
      const key = item.type.toLowerCase().trim();
      acc[key] = {
        label: item.type,
        color: getDistributionColor(item.type),
      };
      return acc;
    }, {} as ChartConfig);
  }, [distributionUsers]);

  const processedData = useMemo(() => {
    return distributionUsers?.map((item) => {
      const key = item.type.toLowerCase().trim();
      return {
        ...item,
        type: key,
        visitors: Math.round((item.percentage / 100) * totalUsers),
        fill: getDistributionColor(item.type),
      };
    });
  }, [distributionUsers, totalUsers]);

  return (
    <div className="flex w-full h-full items-center justify-center mb-20 md:mb-0 ">
      <ChartContainer
        config={chartConfig}
        className="w-full mx-auto aspect-square max-h-62.5 "
      >
        <RadialBarChart data={processedData} innerRadius={80} outerRadius={110}>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent nameKey="type" />}
          />

          <RadialBar dataKey="visitors" background cornerRadius={10}>
            {processedData.map((entry, index) => (
              <Cell key={`cell-${entry.type}-${index}`} fill={entry.fill} />
            ))}
          </RadialBar>

          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-lg font-semibold fill-current"
          >
            <tspan x="50%" dy="-0.5em">
              {totalUsers.toLocaleString()}
            </tspan>
            <tspan
              x="50%"
              dy="1.2em"
              className="text-sm font-normal opacity-60"
            >
              users
            </tspan>
          </text>
        </RadialBarChart>
      </ChartContainer>
    </div>
  );
};

// Components
import { Card } from "@/components/common/card";
import { RadialChart } from "./RadialChart";
import { StatisticsSkeleton } from "./StatisticsSkeleton";
import { StatisticsEmpty } from "./StatisticsEmpty";

// Types
import type { StatisticsContainerProps } from "../types/statistics.types";

// Utils
import { getDistributionColor } from "../utils/getDistributionColor";

export const StatisticsContainer = ({
  totalUsers,
  distributionUsers,
  loadingStatistics,
}: StatisticsContainerProps) => {
  if (loadingStatistics) return <StatisticsSkeleton />;

  if (
    !loadingStatistics &&
    (!distributionUsers || distributionUsers.length === 0)
  )
    return <StatisticsEmpty />;

  return (
    <Card className="py-8 px-6.25 flex-col gap-4 bg-background-alt-2 border-[0.6] border-border">
      {/* Title */}
      <div className="flex flex-1 mb-6">
        <span className="font-semibold text-foreground text-lg">
          Statistics
        </span>
      </div>

      {/* Content */}
      <div className="grid items-center justify-center grid-cols-1 md:grid-cols-2">
        {/* Radial Chart */}
        <RadialChart
          totalUsers={totalUsers}
          distributionUsers={distributionUsers}
        />

        {/* List of distribution data */}
        <div className="w-full h-full flex flex-col justify-center items-center gap-6 px-10">
          {distributionUsers!.map((item) => (
            <div
              key={item.type}
              className="w-full flex justify-center items-center"
            >
              <div
                className="w-1.75 h-1.75 rounded-full"
                style={{ backgroundColor: getDistributionColor(item.type) }}
              />
              <span className="flex-1 font-semibold text-foreground text-sm mx-2">
                {item.type}
              </span>
              <span className="font-medium text-sm">{item.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

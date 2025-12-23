// Components
import { Card } from "@/components/common/card";

export const StatisticsSkeleton = () => {
  return (
    <Card className="py-8 px-6.25 flex-col gap-4 dark:bg-background-alt-2 background-alt border-[0.6] border-border rounded-xl animate-pulse">
      {/* Title */}
      <div className="h-5 w-32 bg-muted rounded mb-6" />

      <div className="grid items-center justify-center grid-cols-1 md:grid-cols-2">
        {/* RadialChart Skeleton */}
        <div className="flex w-full h-full items-center justify-center mb-8 md:mb-0">
          <div className="w-48 h-48 bg-muted rounded-full" />
        </div>

        {/* List Skeleton */}
        <div className="w-full h-full flex flex-col justify-center items-center gap-6 px-10">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="w-full flex items-center gap-4">
              <div className="w-2.5 h-2.5 rounded-full bg-muted" />
              <div className="flex-1 h-4 bg-muted rounded" />
              <div className="h-4 w-10 bg-muted rounded" />
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

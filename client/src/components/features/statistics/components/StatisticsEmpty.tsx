export const StatisticsEmpty = () => (
  <div className="py-10 px-6.25 flex flex-col items-center justify-center bg-background-alt-2 border-2 border-dashed border-border rounded-xl text-center gap-2">
    <div className="text-sm sm:text-md md:text-lg font-semibold text-foreground">
      No statistics available
    </div>
    <div className="text-sm text-muted-foreground">
      We couldn't load the statistics data.
    </div>
  </div>
);

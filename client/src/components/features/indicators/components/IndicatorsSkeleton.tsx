export const IndicatorsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="p-5 h-24 flex items-center gap-4 dark:bg-background-alt-2 background-alt border border-border rounded-xl animate-pulse"
        >
          <div className="w-10 h-10 rounded-full bg-muted" />
          <div className="flex-1 space-y-2">
            <div className="h-4 w-24 bg-muted rounded" />
            <div className="h-3 w-16 bg-muted rounded" />
          </div>
        </div>
      ))}
    </div>
  );
};

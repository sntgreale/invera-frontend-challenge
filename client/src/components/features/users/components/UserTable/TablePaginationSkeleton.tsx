export const TablePaginationSkeleton = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-t border-border animate-pulse">
      <div className="flex items-center gap-2">
        <div className="h-4 w-20 bg-muted rounded" />
      </div>

      <div className="flex items-center gap-3">
        <div className="h-8 w-8 bg-muted rounded" />
        <div className="h-4 w-10 bg-muted rounded" />
        <div className="h-8 w-8 bg-muted rounded" />
      </div>
    </div>
  );
};

export const IndicatorsEmpty = () => {
  return (
    <div className="flex flex-col w-full h-25 rounded-2xl border-2 border-dashed bg-background-alt-2 items-center justify-center">
      <div className="text-sm sm:text-md md:text-lg font-semibold text-foreground">
        The indicators are not available.
      </div>
      <div className="text-sm text-muted-foreground">
        We couldn't load the indicators data.
      </div>
    </div>
  );
};

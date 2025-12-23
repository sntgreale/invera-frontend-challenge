// Components
import { IndicatorItem } from "./IndicatorItem";
import { IndicatorsSkeleton } from "./IndicatorsSkeleton";
import { IndicatorsEmpty } from "./IndicatorsEmpty";

// Types
import type { IndicatorsContainerProps } from "../types/indicators.types";

// Utils
import { IndicatorsData } from "../utils/constants";

export const IndicatorsContainer = ({
  indicators,
  loadingIndicators,
}: IndicatorsContainerProps) => {
  if (loadingIndicators) {
    return <IndicatorsSkeleton />;
  }

  if (!loadingIndicators && !Object.entries(indicators).length) {
    return <IndicatorsEmpty />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {Object.entries(indicators).map(([key, value]) => {
        // Find the configuration for the indicator
        const indicatorConfig =
          IndicatorsData.find((item) => item.key === key) ||
          IndicatorsData.find((item) => item.key === "missingIndicator");

        return (
          <IndicatorItem
            key={key}
            icon={indicatorConfig!.icon}
            label={indicatorConfig!.title}
            value={value ?? "-"}
          />
        );
      })}
    </div>
  );
};

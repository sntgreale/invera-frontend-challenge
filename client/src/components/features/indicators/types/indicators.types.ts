import type { LucideIcon } from "lucide-react";

export interface IndicatorItemProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
}

export interface IndicatorsContainerProps {
  indicators: Record<string, number>;
  loadingIndicators?: boolean;
}

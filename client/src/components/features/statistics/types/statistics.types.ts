export interface DistributionItemProps {
  type: string;
  percentage: number;
}

export interface RadialChartProps {
  totalUsers: number;
  distributionUsers: DistributionItemProps[];
}

export interface StatisticsContainerProps {
  totalUsers: number;
  distributionUsers: DistributionItemProps[];
  loadingStatistics?: boolean;
}

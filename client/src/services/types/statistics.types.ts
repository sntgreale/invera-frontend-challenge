export interface UserDistribution {
  type: string;
  percentage: number;
}

export interface UserStatistics {
  totalUsers: number;
  distribution: UserDistribution[];
}

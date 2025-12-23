import { http } from "./http";
import type { ApiResponse } from "./types/http.types";
import type { UserStatistics } from "./types/statistics.types";

const BASE_URL = "http://localhost:8000";

export const statisticsService = {
  getStatistics: (): Promise<ApiResponse<UserStatistics>> =>
    http<UserStatistics>(`${BASE_URL}/userTypes`),
};

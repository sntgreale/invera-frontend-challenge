import { http } from "./http";
import type { ApiResponse } from "./types/http.types";
import type { UserStatistics } from "./types/statistics.types";

const BASE_URL = import.meta.env.VITE_API_URL;

export const statisticsService = {
  getStatistics: (): Promise<ApiResponse<UserStatistics>> =>
    http<UserStatistics>(`${BASE_URL}/userTypes`),
};

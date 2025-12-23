import { http } from "./http";
import type { Indicators } from "./types/indicators.types";
import type { ApiResponse } from "./types/http.types";

const BASE_URL = import.meta.env.VITE_API_URL;

export const indicatorsService = {
  getIndicators: (): Promise<ApiResponse<Indicators>> =>
    http<Indicators>(`${BASE_URL}/statics`),
};

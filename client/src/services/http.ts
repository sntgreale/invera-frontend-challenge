import type { ApiResponse } from "./types/http.types";

export async function http<T>(
  url: string,
  options?: RequestInit
): Promise<ApiResponse<T> & { headers?: Headers }> {
  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      const msg = await res.text();
      return {
        success: false,
        data: null,
        error: msg || `HTTP error ${res.status}`,
        headers: res.headers,
      };
    }

    const data = (await res.json()) as T;

    return {
      success: true,
      data,
      error: null,
      headers: res.headers,
    };
  } catch (err: unknown) {
    return {
      success: false,
      data: null,
      error: err instanceof Error ? err.message : "Network error",
      headers: undefined,
    };
  }
}

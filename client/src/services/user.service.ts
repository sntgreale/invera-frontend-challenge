import { http } from "./http";
import type { User } from "./types/user.types";
import type { ApiResponse } from "./types/http.types";
import type { UserQueryParams } from "./types/query.types";
import type { UserFormData } from "@/components/features/users/schemas/userForm.schema";

const BASE_URL = import.meta.env.VITE_API_URL;

export const userService = {
  async getUsers(
    params: Partial<UserQueryParams>
  ): Promise<ApiResponse<{ users: User[]; totalCount: number }>> {
    const url = new URL(`${BASE_URL}/users`);

    if (params.page) url.searchParams.append("_page", String(params.page));
    if (params.limit) url.searchParams.append("_limit", String(params.limit));
    if (params.search) url.searchParams.append("q", params.search);
    if (params.sort) url.searchParams.append("_sort", params.sort);
    if (params.order) url.searchParams.append("_order", params.order);
    if (params.status) url.searchParams.append("status", params.status);

    const res = await http<User[]>(url.toString());

    if (!res.success) {
      return {
        success: false,
        data: null,
        error: res.error || "Error fetching users",
      };
    }

    const totalCount = res.headers?.get("x-total-count")
      ? parseInt(res.headers.get("x-total-count")!, 10)
      : res.data?.length || 0;

    return {
      success: true,
      data: {
        users: res.data || [],
        totalCount,
      },
      error: null,
    };
  },

  getUserById: (id: number): Promise<ApiResponse<User>> =>
    http<User>(`${BASE_URL}/users/${id}`),

  createUser: (userData: Omit<User, "id">): Promise<ApiResponse<User>> =>
    http<User>(`${BASE_URL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    }),

  updateUser: (
    id: number,
    userData: UserFormData
  ): Promise<ApiResponse<User>> =>
    http<User>(`${BASE_URL}/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    }),

  deleteUser: (id: number): Promise<ApiResponse<null>> =>
    http<null>(`${BASE_URL}/users/${id}`, {
      method: "DELETE",
    }),
};

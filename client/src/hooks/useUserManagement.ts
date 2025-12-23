// Externals
import { toast } from "sonner";
import { useState, useEffect, useCallback, useRef } from "react";

// Types
import type { User } from "@/services/types/user.types";
import type { UserFormData } from "@/components/features/users/schemas/userForm.schema";
import type { UserQueryParams } from "@/services/types/query.types";
import type { Indicators } from "@/services/types/indicators.types";
import type { ApiResponse } from "@/services/types/http.types";
import type { UserStatistics } from "@/services/types/statistics.types";

// Services
import { userService } from "@/services/user.service";
import { indicatorsService } from "@/services/indicators.service";
import { statisticsService } from "@/services/statistics.service";

export function useUserManagement() {
  const [users, setUsers] = useState<User[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const [indicators, setIndicators] = useState<Indicators>({});
  const [loadingIndicators, setLoadingIndicators] = useState<boolean>(false);

  const [stats, setStats] = useState<UserStatistics | null>(null);
  const [loadingStats, setLoadingStats] = useState<boolean>(false);

  const [query, setQuery] = useState<UserQueryParams>({
    page: 1,
    limit: 10,
    search: "",
    sort: "name",
    order: "asc",
  });

  const loadInitialUsersRef = useRef(false);
  const loadInitialStatsRef = useRef(false);

  // Get users
  const loadUsers = useCallback(async () => {
    setLoading(true);

    try {
      const res = await userService.getUsers(query);

      if (res.success && res.data) {
        setUsers(res.data.users);
        setTotalCount(res.data.totalCount);
      } else {
        toast.error("Error loading users");
        setUsers([]);
        setTotalCount(0);
      }
    } catch {
      toast.error("Network error", {
        description: "Cannot connect to server. Please try again later.",
      });
      setUsers([]);
      setTotalCount(0);
    } finally {
      setLoading(false);
    }
  }, [query]);

  // Get statistics & indicators
  const loadStats = useCallback(async () => {
    setLoadingIndicators(true);
    setLoadingStats(true);

    try {
      const [st, ind] = await Promise.allSettled([
        statisticsService.getStatistics(),
        indicatorsService.getIndicators(),
      ]);

      // Handle statistics
      if (st.status === "fulfilled" && st.value.success && st.value.data) {
        setStats(st.value.data);
      } else {
        toast.error("Error loading statistics");
        setStats(null);
      }

      // Handle indicators
      if (ind.status === "fulfilled" && ind.value.success && ind.value.data) {
        setIndicators(ind.value.data);
      } else {
        toast.error("Error loading indicators");
        setIndicators({});
      }
    } catch {
      toast.error("Error loading dashboard data");
      setStats(null);
      setIndicators({});
    } finally {
      setLoadingIndicators(false);
      setLoadingStats(false);
    }
  }, []);

  useEffect(() => {
    if (loadInitialUsersRef.current) return;

    loadInitialUsersRef.current = true;
    loadUsers();
  }, [loadUsers]);

  useEffect(() => {
    if (loadInitialStatsRef.current) return;

    loadInitialStatsRef.current = true;
    loadStats();
  }, [loadStats]);

  // Function to create user
  const createUser = async (
    payload: UserFormData
  ): Promise<ApiResponse<User>> => {
    const res = await userService.createUser(payload);

    if (!res.success) {
      toast.error("Error creating user", { description: res.error! });
      return res;
    }

    toast.success("User created successfully");
    // Assuming that the indicators/statistics depend on the users obtained (shown in the table)
    await Promise.all([loadUsers(), loadStats()]);

    return res;
  };

  // Function to update user
  const updateUser = async (
    id: number,
    payload: UserFormData
  ): Promise<ApiResponse<User>> => {
    const res = await userService.updateUser(id, payload);

    if (!res.success) {
      toast.error("Error updating user", { description: res.error! });
      return res;
    }

    toast.success("User updated successfully");
    await loadUsers();

    return res;
  };

  // Function to delete user
  const deleteUser = async (id: number): Promise<ApiResponse<null>> => {
    const res = await userService.deleteUser(id);

    if (!res.success) {
      toast.error("Error deleting user", { description: res.error! });
      return res;
    }

    toast.success("User deleted successfully");
    // Assuming that the indicators/statistics depend on the users obtained (shown in the table)
    await Promise.all([loadUsers(), loadStats()]);

    return res;
  };

  return {
    users,
    totalCount,
    loading,

    query,
    setQuery,

    indicators,
    loadingIndicators,

    stats,
    loadingStats,

    createUser,
    updateUser,
    deleteUser,

    refreshUsers: loadUsers,
    refreshStats: loadStats,
  };
}

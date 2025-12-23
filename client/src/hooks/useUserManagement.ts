// Externals
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

// Types
import type { User } from "@/services/types/user.types";
import type { UserFormData } from "@/components/features/users/schemas/userForm.schema";
import type { ApiResponse } from "@/services/types/http.types";
import type { Indicators } from "@/services/types/indicators.types";

// Services
import { userService } from "@/services/user.service";
import { indicatorsService } from "@/services/indicators.service";

export function useUserManagement() {
  const loadInitialStatsRef = useRef(false);

  const [indicators, setIndicators] = useState<Indicators>({});
  const [loadingIndicators, setLoadingIndicators] = useState<boolean>(false);

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
    await Promise.all([loadStats()]);
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
    return res;
  };

  // Get statistics & indicators
  const loadStats = useCallback(async () => {
    setLoadingIndicators(true);

    try {
      const [ind] = await Promise.allSettled([
        indicatorsService.getIndicators(),
      ]);

      // Handle indicators
      if (ind.status === "fulfilled" && ind.value.success && ind.value.data) {
        setIndicators(ind.value.data);
      } else {
        toast.error("Error loading indicators");
        setIndicators({});
      }
    } catch {
      toast.error("Error loading dashboard data");
      setIndicators({});
    } finally {
      setLoadingIndicators(false);
    }
  }, []);

  useEffect(() => {
    if (loadInitialStatsRef.current) return;

    loadInitialStatsRef.current = true;
    loadStats();
  }, [loadStats]);

  return {
    createUser,
    updateUser,

    indicators,
    loadingIndicators,
  };
}

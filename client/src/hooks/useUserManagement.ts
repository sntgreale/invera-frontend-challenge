// Externals
import { toast } from "sonner";

// Types
import type { User } from "@/services/types/user.types";
import type { UserFormData } from "@/components/features/users/schemas/userForm.schema";
import type { ApiResponse } from "@/services/types/http.types";

// Services
import { userService } from "@/services/user.service";

export function useUserManagement() {
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

  return {
    createUser,
    updateUser,
  };
}

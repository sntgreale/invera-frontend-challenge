// Externals
import { useState } from "react";

// Components
import Header from "@/components/layouts/Header";
import SectionHeader from "@/components/shared/SectionHeader";
import UserFormDialog from "@/components/features/users/components/UserForm";

// Types
import type { User } from "@/components/features/users/types/user.types";
import type { UserFormData } from "@/components/features/users/schemas/userForm.schema";

// Utils & Hooks
import { useUserManagement } from "@/hooks/useUserManagement";

const Dashboard = () => {
  const { createUser, updateUser } = useUserManagement();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState<"create" | "edit">("create");
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);

  const handleFormSubmit = async (data: UserFormData) => {
    if (dialogMode === "create") {
      await createUser(data);
    } else if (selectedUser?.id) {
      await updateUser(selectedUser.id, data);
    }
    setIsDialogOpen(false);
  };

  return (
    <div className="w-full h-full flex-col">
      <Header />
      <div className="w-full h-full flex-1 dark:bg-background p-5 md:container md:mx-auto">
        <SectionHeader
          handleAddUserClick={() => {
            setSelectedUser(undefined);
            setDialogMode("create");
            setIsDialogOpen(true);
          }}
        />
      </div>

      <UserFormDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        mode={dialogMode}
        user={selectedUser}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default Dashboard;

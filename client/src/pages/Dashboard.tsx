// Externals
import { useState } from "react";

// Components
import Header from "@/components/layouts/Header";
import SectionHeader from "@/components/shared/SectionHeader";
import IndicatorsContainer from "@/components/features/indicators/components";
import UserFormDialog from "@/components/features/users/components/UserForm";
import StatisticsContainer from "@/components/features/statistics/components";

// Types
import type { User } from "@/components/features/users/types/user.types";
import type { UserFormData } from "@/components/features/users/schemas/userForm.schema";

// Utils & Hooks
import { useUserManagement } from "@/hooks/useUserManagement";

const Dashboard = () => {
  const {
    createUser,
    updateUser,

    indicators,
    loadingIndicators,

    stats,
    loadingStats,
  } = useUserManagement();

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

        <div className="flex flex-col gap-6">
          <IndicatorsContainer
            indicators={indicators}
            loadingIndicators={loadingIndicators}
          />

          <StatisticsContainer
            totalUsers={stats?.totalUsers ?? 0}
            distributionUsers={stats?.distribution ?? []}
            loadingStatistics={loadingStats}
          />
        </div>
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

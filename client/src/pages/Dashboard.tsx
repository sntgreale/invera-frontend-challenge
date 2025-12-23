// Externals
import { useEffect, useState } from "react";

// Components
import ContentHeader from "@/components/shared/SectionHeader";
import Header from "@/components/layouts/Header";
import UserFormDialog from "@/components/features/users/components/UserForm/";
import IndicatorsContainer from "@/components/features/indicators/components/";
import StatisticsContainer from "@/components/features/statistics/components/";
import UsersDataTable from "@/components/features/users/components/UserTable/";

// Utils
import { useUserManagement } from "@/hooks/useUserManagement";

// Types & validations
import type { User } from "@/components/features/users/types/user.types";
import type { UserFormData } from "@/components/features/users/schemas/userForm.schema";
import { useDebounce } from "@/hooks/useDebounce";

const Dashboard = () => {
  const {
    users,
    totalCount,
    query,
    setQuery,
    createUser,
    updateUser,
    deleteUser,
    loading,

    indicators,
    loadingIndicators,

    stats,
    loadingStats,
  } = useUserManagement();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState<"create" | "edit">("create");
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);

  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    if (debouncedSearchQuery !== query.search) {
      setQuery((p) => ({
        ...p,
        search: debouncedSearchQuery,
        page: 1,
      }));
    }
  }, [debouncedSearchQuery, query.search, setQuery]);

  const handleSearch = (search: string) => {
    setSearchQuery(search);
  };

  const handleOpenEdit = (user: User) => {
    setSelectedUser(user);
    setDialogMode("edit");
    setIsDialogOpen(true);
  };

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
        <ContentHeader
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

          <UsersDataTable
            users={users}
            totalCount={totalCount}
            currentPage={query.page}
            rowsPerPage={query.limit}
            onPageChange={(page) => setQuery((p) => ({ ...p, page }))}
            onRowsPerPageChange={(limit) =>
              setQuery((p) => ({ ...p, limit, page: 1 }))
            }
            onSearch={handleSearch}
            searchQuery={searchQuery}
            onSort={(sort) =>
              setQuery((p) => ({
                ...p,
                sort,
                order: p.order === "asc" ? "desc" : "asc",
              }))
            }
            onEditUser={handleOpenEdit}
            onDeleteUser={deleteUser}
            isLoading={loading}
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

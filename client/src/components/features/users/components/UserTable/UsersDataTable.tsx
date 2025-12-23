// Externals
import { useState } from "react";

// Components
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/common/table";
import { Checkbox } from "@/components/common/checkbox";
import { UserTableRow } from "./UserTableRow";
import { TablePagination } from "./TablePagination";
import { TableSearchHeader } from "./TableSearchHeader";
import { TableSortHeader } from "./TableSortHeader";

// Types
import { type UsersDataTableProps } from "../../types/user.types";
import { UserTableRowSkeleton } from "./UserTableRowSkeleton";
import { TablePaginationSkeleton } from "./TablePaginationSkeleton";

export const UsersDataTable = ({
  users,
  totalCount,
  currentPage,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
  onSearch,
  searchQuery,
  onSort,
  onEditUser,
  onDeleteUser,
  isLoading,
}: UsersDataTableProps) => {
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const totalPages = Math.ceil(totalCount / rowsPerPage);

  const start = (currentPage - 1) * rowsPerPage + 1;
  const end = Math.min(currentPage * rowsPerPage, totalCount);

  return (
    <div className="w-full dark:bg-background-alt-2 rounded-lg border border-border">
      <TableSearchHeader
        searchQuery={searchQuery || ""}
        onSearchChange={onSearch}
        totalCount={totalCount}
        range={`${start} - ${end}`}
        isLoading={isLoading}
      />

      <Table>
        <TableHeader>
          <TableRow>
            <th className="py-4 px-6 w-12">
              <Checkbox
                checked={
                  selectedUsers.length === users.length && users.length > 0
                }
                onCheckedChange={() =>
                  setSelectedUsers(
                    selectedUsers.length === users.length
                      ? []
                      : users.map((u) => u.id)
                  )
                }
              />
            </th>
            <TableSortHeader
              field="name"
              icon="User"
              label="Name"
              onSort={(f) => onSort(f, "asc")}
            />
            <TableSortHeader
              field="phone"
              icon="Phone"
              label="Phone"
              onSort={(f) => onSort(f, "asc")}
              className="hidden md:table-cell"
            />
            <TableSortHeader
              field="location"
              icon="Pin"
              label="Location"
              onSort={(f) => onSort(f, "asc")}
              className="hidden md:table-cell"
            />
            <TableSortHeader
              field="company"
              icon="ToyBrick"
              label="Company"
              onSort={(f) => onSort(f, "asc")}
              className="hidden md:table-cell"
            />
            <TableSortHeader
              field="status"
              icon="SquareCheck"
              label="Status"
              onSort={(f) => onSort(f, "asc")}
            />
            <th className="w-20" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <>
              {Array.from({ length: rowsPerPage }).map((_, i) => (
                <UserTableRowSkeleton key={i} />
              ))}
            </>
          ) : users && users.length > 0 ? (
            users.map((user) => (
              <UserTableRow
                key={user.id}
                user={user}
                isSelected={selectedUsers.includes(user.id)}
                onSelect={() =>
                  setSelectedUsers((prev) =>
                    prev.includes(user.id)
                      ? prev.filter((id) => id !== user.id)
                      : [...prev, user.id]
                  )
                }
                onEdit={() => onEditUser(user)}
                onDelete={() => onDeleteUser(user.id)}
              />
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} className="h-24 text-center">
                No results found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {isLoading ? (
        <TablePaginationSkeleton />
      ) : (
        <TablePagination
          currentPage={currentPage}
          totalPages={totalPages}
          rowsPerPage={rowsPerPage}
          totalCount={totalCount}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
        />
      )}
    </div>
  );
};

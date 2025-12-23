// Externals
import { useState, useMemo } from "react";

// Types
import {
  type SortDirection,
  type SortField,
  type User,
} from "../types/user.types";

export const useUserTable = (users: User[]) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortField, setSortField] = useState<SortField | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const filteredUsers = useMemo(() => {
    const query = searchQuery.toLowerCase();
    if (!query) return users;
    return users.filter((user) =>
      Object.values(user).some((val) =>
        String(val).toLowerCase().includes(query)
      )
    );
  }, [users, searchQuery]);

  const sortedUsers = useMemo(() => {
    if (!sortField) return filteredUsers;
    return [...filteredUsers].sort((a, b) => {
      const aValue = a[sortField] ?? "";
      const bValue = b[sortField] ?? "";
      if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
      if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredUsers, sortField, sortDirection]);

  const totalPages = Math.ceil(sortedUsers.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedUsers = sortedUsers.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  const handleSort = (field: SortField) => {
    setSortDirection((prev) =>
      sortField === field && prev === "asc" ? "desc" : "asc"
    );
    setSortField(field);
  };

  return {
    searchQuery,
    setSearchQuery,
    selectedUsers,
    setSelectedUsers,
    currentPage,
    setCurrentPage,
    rowsPerPage,
    setRowsPerPage,
    sortField,
    sortDirection,
    paginatedUsers,
    totalPages,
    totalCount: sortedUsers.length,
    startIndex,
    handleSort,
  };
};

import { type UserFormData } from "../schemas/userForm.schema";
import type { TABLE_HEADER_ICONS } from "../utils/constants";

// User Form types
export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  company: string;
  companyLogo?: string;
  status: "Online" | "Offline";
  avatar?: string;
}

export interface UserFormDialogProps {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  mode: "create" | "edit";
  user?: UserFormData;
  onSubmit: (data: UserFormData) => void;
}

export interface UserFormFieldsProps {
  mode: "create" | "edit";
  userId?: number;
}

export interface UserFormTextFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
}

export interface UserFormSelectFieldProps {
  name: string;
  label: string;
  options: { label: string; value: string }[];
}

export interface UserFormIdFieldProps {
  userId?: number;
}

// User Table types
export interface UsersDataTableProps {
  users: User[];
  totalCount: number;
  currentPage: number;
  rowsPerPage: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rows: number) => void;
  onSearch: (query: string) => void;
  onSort: (field: string, direction: "asc" | "desc") => void;
  onEditUser: (user: User) => void;
  onDeleteUser: (userId: number) => void;
  isLoading?: boolean;
  searchQuery?: string;
}

export interface UserTableSearchHeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  totalCount: number;
  range: string;
  isLoading?: boolean;
}

export interface TableSortHeaderProps {
  field: string;
  label: string;
  icon: keyof typeof TABLE_HEADER_ICONS;
  currentField?: string | null;
  direction?: "asc" | "desc";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSort: (field: any) => void;
  className?: string;
}

export interface UserTableRowProps {
  user: User;
  isSelected: boolean;
  onSelect: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export interface UserTablePaginationProps {
  currentPage: number;
  totalPages: number;
  rowsPerPage: number;
  totalCount: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rows: number) => void;
}

export type SortField = "name" | "phone" | "location" | "company" | "status";
export type SortDirection = "asc" | "desc";

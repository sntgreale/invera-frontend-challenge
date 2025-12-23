// Externals
import { Search } from "lucide-react";

// Components
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/common/input-group";

// Types
import type { UserTableSearchHeaderProps } from "../../types/user.types";

export const TableSearchHeader = ({
  searchQuery,
  onSearchChange,
  totalCount,
  range,
  isLoading,
}: UserTableSearchHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between px-6 py-6 gap-4 border-b">
      <div className="flex items-center gap-6 flex-1 w-full">
        <h2 className="text-lg font-semibold whitespace-nowrap">All Users</h2>
        <div className="relative w-full max-w-sm">
          <InputGroup>
            <InputGroupInput
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
            <InputGroupAddon>
              <Search className="h-4 w-4" />
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
      {isLoading ? (
        <div className="flex items-center justify-end animate-pulse">
          <div className="flex items-center gap-2">
            <div className="h-4 w-20 bg-muted rounded" />
          </div>
        </div>
      ) : (
        <div className="text-sm text-muted-foreground whitespace-nowrap">
          {range} of {totalCount}
        </div>
      )}
    </div>
  );
};

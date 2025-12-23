// Externals
import { ArrowUpDown } from "lucide-react";

// Components
import { Button } from "@/components/common/button";
import { TableHead } from "@/components/common/table";

// Utils
import { cn } from "@/lib/utils";
import { TABLE_HEADER_ICONS } from "../../utils/constants";

// Types
import type { TableSortHeaderProps } from "../../types/user.types";

export const TableSortHeader = ({
  field,
  label,
  icon,
  currentField,
  onSort,
  className,
}: TableSortHeaderProps) => {
  const IconComponent = TABLE_HEADER_ICONS[icon];
  const isActive = currentField === field;

  return (
    <TableHead className={cn("py-3", className)}>
      <Button
        variant="ghost"
        onClick={() => onSort(field)}
        className="hover:bg-transparent p-0 flex gap-2 font-semibold"
      >
        <IconComponent
          className={cn(
            "h-3 w-3",
            isActive ? "text-primary" : "text-muted-foreground"
          )}
        />
        {label}
        <ArrowUpDown
          className={cn("h-3 w-3 opacity-50", isActive && "opacity-100")}
        />
      </Button>
    </TableHead>
  );
};

// Externals
import { MoreVertical } from "lucide-react";

// Components
import { Card } from "@/components/common/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/common/dropdown-menu";

// Types
import type { IndicatorItemProps } from "../types/indicators.types";

export const IndicatorItem = ({
  icon: Icon,
  label,
  value,
}: IndicatorItemProps) => {
  return (
    <Card className="p-5 flex-row items-center gap-4 bg-background-alt-2 border-[0.6] border-border">
      <div className="w-10 h-10 items-center justify-center flex rounded-full bg-background-alt text-text-accent">
        <Icon className="w-3.75 h-3.75" />
      </div>
      <div className="flex-1 min-w-0 ">
        <span className="font-semibold text-foreground text-lg">{label}</span>
        <p className="text-muted-foreground text-sm">{value}</p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="shrink-0 hover:bg-accent rounded p-1">
          <MoreVertical className="w-5 h-5 text-muted-foreground" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem className="text-destructive">
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Card>
  );
};

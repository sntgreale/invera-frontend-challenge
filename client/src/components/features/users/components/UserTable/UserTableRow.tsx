// Externals
import { memo } from "react";
import { Pencil, Trash2 } from "lucide-react";

// Components
import { TableRow, TableCell } from "@/components/common/table";
import { Checkbox } from "@/components/common/checkbox";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/common/avatar";
import { Button } from "@/components/common/button";
import { Badge } from "@/components/common/badge";

// Types
import { type UserTableRowProps } from "../../types/user.types";

export const UserTableRow = memo(
  ({ user, isSelected, onSelect, onEdit, onDelete }: UserTableRowProps) => {
    return (
      <TableRow className="group odd:bg-background">
        {/* Checkbox */}
        <TableCell className="py-6 px-6">
          <Checkbox checked={isSelected} onCheckedChange={onSelect} />
        </TableCell>
        {/* Name and avatar */}
        <TableCell>
          <div className="flex items-center gap-3">
            <Avatar className="h-7 w-7">
              <AvatarImage src={user.avatar} />
              <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-medium">{user.name}</span>
              <span className="text-xs text-muted-foreground">
                {user.email}
              </span>
            </div>
          </div>
        </TableCell>
        {/* Phone */}
        <TableCell className="text-muted-foreground hidden md:table-cell">
          {user.phone}
        </TableCell>
        {/* Location */}
        <TableCell className="text-muted-foreground hidden md:table-cell">
          {user.location}
        </TableCell>
        {/* Company */}
        <TableCell className="text-muted-foreground hidden md:table-cell">
          <div className="flex items-center gap-2">
            {user.companyLogo && (
              <Avatar className="h-5 w-5">
                <AvatarImage src={user.companyLogo} />
                <AvatarFallback>{user.company[0]}</AvatarFallback>
              </Avatar>
            )}
            <span>{user.company}</span>
          </div>
        </TableCell>
        {/* Status */}
        <TableCell>
          <Badge
            variant={user.status === "Online" ? "outline" : "secondary"}
            className={
              user.status === "Online" ? "border-green-500 text-green-500" : ""
            }
          >
            {user.status}
          </Badge>
        </TableCell>
        {/* Actions */}
        <TableCell className="text-right">
          <div className="flex justify-end gap-2">
            <Button size="icon" variant="ghost" onClick={onEdit}>
              <Pencil className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={onDelete}
              className="text-destructive hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </TableCell>
      </TableRow>
    );
  }
);

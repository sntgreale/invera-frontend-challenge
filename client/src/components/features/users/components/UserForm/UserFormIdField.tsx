// Components
import { Input } from "@/components/common/input";
import { Label } from "@/components/common/label";

// Types
import type { UserFormIdFieldProps } from "../../types/user.types";

export const UserFormIdField = ({ userId }: UserFormIdFieldProps) => (
  <div className="grid gap-2">
    <Label htmlFor="id">ID</Label>
    <Input id="id" type="number" disabled value={userId} className="bg-muted" />
  </div>
);

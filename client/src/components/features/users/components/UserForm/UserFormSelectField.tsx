// Externals
import { useFormContext } from "react-hook-form";

// Components
import { Label } from "@/components/common/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/common/select";

// Types
import type { UserFormSelectFieldProps } from "../../types/user.types";

export const UserFormSelectField = ({
  name,
  label,
  options,
}: UserFormSelectFieldProps) => {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const value = watch(name);
  const fieldError = errors[name]?.message as string | undefined;

  return (
    <div className="grid gap-2">
      <Label htmlFor={name}>{label}</Label>

      <Select
        value={value}
        onValueChange={(v) => setValue(name, v, { shouldValidate: true })}
      >
        <SelectTrigger>
          <SelectValue placeholder={`Select ${label.toLowerCase()}`} />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {fieldError && <p className="text-sm text-red-500">{fieldError}</p>}
    </div>
  );
};

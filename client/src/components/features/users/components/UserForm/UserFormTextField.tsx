// Externals
import { useFormContext } from "react-hook-form";

// Components
import { Input } from "@/components/common/input";
import { Label } from "@/components/common/label";

// Types
import type { UserFormTextFieldProps } from "../../types/user.types";

export const UserFormTextField = ({
  name,
  label,
  placeholder,
  type = "text",
  disabled = false,
}: UserFormTextFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const fieldError = errors[name]?.message as string | undefined;

  return (
    <div className="grid gap-2">
      <Label htmlFor={name}>{label}</Label>

      <Input
        id={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register(name)}
      />

      {fieldError && <p className="text-sm text-red-500">{fieldError}</p>}
    </div>
  );
};

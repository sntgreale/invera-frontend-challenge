// Components
import { UserFormTextField } from "./UserFormTextField";
import { UserFormSelectField } from "./UserFormSelectField";
import { UserFormIdField } from "./UserFormIdField";

// Types
import type { UserFormFieldsProps } from "../../types/user.types";

export const UserFormFields = ({
  mode,
  userId,
}: Pick<UserFormFieldsProps, "mode" | "userId">) => {
  return (
    <div className="grid gap-4 py-4">
      {mode === "edit" && <UserFormIdField userId={userId} />}

      <UserFormTextField name="name" label="Name *" placeholder="John Doe" />
      <UserFormTextField
        name="email"
        label="Email *"
        type="email"
        placeholder="john@example.com"
      />
      <UserFormTextField
        name="phone"
        label="Phone *"
        placeholder="(123) 456-7890"
      />
      <UserFormTextField
        name="location"
        label="Location *"
        placeholder="United States"
      />
      <UserFormTextField
        name="company"
        label="Company *"
        placeholder="Example Inc."
      />

      <UserFormSelectField
        name="status"
        label="Status *"
        options={[
          { label: "Online", value: "Online" },
          { label: "Offline", value: "Offline" },
        ]}
      />
    </div>
  );
};

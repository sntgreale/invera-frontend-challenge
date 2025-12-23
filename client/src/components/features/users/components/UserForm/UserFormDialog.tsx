// Externals
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Components
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/common/dialog";
import { Button } from "@/components/common/button";
import { UserFormFields } from "./UserFormFields";

// Schemas & Types
import {
  userFormSchema,
  type UserFormData,
} from "../../schemas/userForm.schema";
import type { UserFormDialogProps } from "../../types/user.types";

export const UserFormDialog = ({
  open,
  onOpenChange,
  mode,
  user,
  onSubmit,
}: UserFormDialogProps) => {
  const methods = useForm<UserFormData>({
    resolver: zodResolver(userFormSchema),
    values: user ?? {
      id: undefined,
      name: "",
      email: "",
      phone: "",
      location: "",
      company: "",
      status: "Online",
    },
  });

  const submit = (data: UserFormData) => {
    const validatedData = userFormSchema.parse(data);
    onSubmit(validatedData);
    onOpenChange(false);
    if (mode === "create") methods.reset();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-125">
        <DialogHeader>
          <DialogTitle>
            {mode === "create" ? "Create New User" : "Edit User"}
          </DialogTitle>
          <DialogDescription>
            {mode === "create"
              ? "Add a new user to your system."
              : "Update the user information below."}
          </DialogDescription>
        </DialogHeader>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(submit)}>
            <UserFormFields mode={mode} userId={user?.id} />

            <DialogFooter>
              <Button
                variant="outline"
                type="button"
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button type="submit">
                {mode === "create" ? "Create User" : "Save Changes"}
              </Button>
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

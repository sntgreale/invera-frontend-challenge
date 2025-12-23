// Components
import { Button } from "@/components/common/button";

export const SectionHeader = ({
  handleAddUserClick,
}: {
  handleAddUserClick: () => void;
}) => {
  return (
    <div className="flex items-center justify-between my-8">
      <h1 className="text-foreground font-semibold text-2xl">Users</h1>

      <div className="flex items-center gap-3">
        <Button
          className="bg-primary text-primary-foreground hover:bg-primary/50 font-semibold"
          onClick={handleAddUserClick}
        >
          Add User
        </Button>
      </div>
    </div>
  );
};

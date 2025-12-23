// Externals
import { Moon, Sun } from "lucide-react";

// Components
import { Button } from "../../common/button";

// Utils
import { useTheme } from "@/hooks/useTheme";

export const Header = () => {
  const { toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-white/60 backdrop-blur dark:bg-black/60 text-black-1 dark:text-white-1 shadow-md dark:shadow-black w-full">
      <div className="flex items-center justify-center px-2 py-2">
        <div className="flex justify-end">
          <Button
            variant="outline"
            size="icon"
            className="px-4 py-2 rounded-md"
            onClick={toggleTheme}
          >
            <Sun className="h-4 w-4 dark:hidden" />
            <Moon className="h-4 w-4 hidden dark:block" />
          </Button>
        </div>
      </div>
    </header>
  );
};

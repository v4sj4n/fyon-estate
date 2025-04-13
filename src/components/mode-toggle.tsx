import { Moon, Sun } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";

import { ThemeProviderContext } from "@/components/theme-provider";
import { useContext } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useContext(ThemeProviderContext);

  return (
    <Button
      variant="outline"
      size="icon"
      className="border-0 hover:cursor-pointer"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

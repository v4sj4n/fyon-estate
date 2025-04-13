import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

interface MainPageWrapperProps extends PropsWithChildren {
  className?: string;
}

export const MainPageWrapper = ({ children, className }: MainPageWrapperProps) => {
  return (
    <main
      className={cn(
        "container mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 sm:py-10",
        className
      )}
    >
      {children}
    </main>
  );
};
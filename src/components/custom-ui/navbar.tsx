import { Link } from "@tanstack/react-router";
import { House, List, X } from "@phosphor-icons/react";
import { ModeToggle } from "../mode-toggle";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const activeProps = {
    className: "font-semibold text-primary",
  };

  const activePropsTitle = {
    className: "font-extrabold",
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 relative">
        {/* Logo - centered on both mobile and desktop */}
        <div className="flex justify-center absolute left-0 right-0 mx-auto pointer-events-none">
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-xl pointer-events-auto"
            activeProps={activePropsTitle}
            activeOptions={{ exact: true }}
          >
            <House weight="fill" className="h-5 w-5 text-primary" /> Fyon
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="flex md:hidden text-muted-foreground hover:text-foreground"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" weight="bold" />
          ) : (
            <List className="h-6 w-6" weight="bold" />
          )}
        </button>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link
            to="/properties"
            className="text-muted-foreground transition-colors hover:text-foreground"
            activeProps={activeProps}
          >
            Properties
          </Link>
          <Link
            to="/about"
            className="text-muted-foreground transition-colors hover:text-foreground"
            activeProps={activeProps}
          >
            About Us
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden md:inline-flex text-muted-foreground transition-colors hover:text-foreground text-sm"
            activeProps={activeProps}
          >
            Contact Us
          </Link>
          <ModeToggle />
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              to="/properties"
              className="text-muted-foreground transition-colors hover:text-foreground py-2"
              activeProps={activeProps}
              onClick={() => setIsMenuOpen(false)}
            >
              Properties
            </Link>
            <Link
              to="/about"
              className="text-muted-foreground transition-colors hover:text-foreground py-2"
              activeProps={activeProps}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-muted-foreground transition-colors hover:text-foreground py-2"
              activeProps={activeProps}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

import { House } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import { MainPageWrapper } from "./main-page-wrapper";

export const Footer = () => {
  return (
   <MainPageWrapper className="py-8">
     <footer className="border-t border-border/40">
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <House strokeWidth={2.5} className="text-primary" />
              <span>Fyon</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Helping you find your dream home with a seamless and personalized real estate experience.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-medium mb-4">Quick Links</h3>
            <div className="grid gap-2 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <Link to="/properties" className="text-muted-foreground hover:text-foreground transition-colors">Properties</Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            </div>
          </div>
          
          {/* Properties */}
          <div>
            <h3 className="font-medium mb-4">Properties</h3>
            <div className="grid gap-2 text-sm">
              <Link to="/properties" className="text-muted-foreground hover:text-foreground transition-colors">Houses</Link>
              <Link to="/properties" className="text-muted-foreground hover:text-foreground transition-colors">Apartments</Link>
              <Link to="/properties" className="text-muted-foreground hover:text-foreground transition-colors">Commercial</Link>
              <Link to="/properties" className="text-muted-foreground hover:text-foreground transition-colors">New Listings</Link>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-medium mb-4">Contact</h3>
            <div className="grid gap-2 text-sm text-muted-foreground">
              <p>123 Real Estate Blvd.</p>
              <p>Cityville, ST 12345</p>
              <p>info@fyonestate.com</p>
              <p>(555) 123-4567</p>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-4 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Fyon Estate. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
    </MainPageWrapper>
  );
};
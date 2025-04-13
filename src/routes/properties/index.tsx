import { useEffect, useMemo, useState } from "react";
import { EstateListingCard } from "@/components/custom-ui/estate-listing-card";
import { MainPageWrapper } from "@/components/custom-ui/main-page-wrapper";
import { realEstateListings } from "@/data/mock-estates";
import { createFileRoute } from "@tanstack/react-router";
import { Input } from "@/components/ui/input";
import { MagnifyingGlass as Search } from "@phosphor-icons/react";

export const Route = createFileRoute("/properties/")({
  component: PropertiesPage,
  beforeLoad: () => {
    document.title = `Properties | Fyon Real Estate`;
  }
});

function PropertiesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm.trim().toLowerCase());
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  const filteredListings = useMemo(() => {
    if (!debouncedSearchTerm) return realEstateListings;

    return realEstateListings.filter((listing) => {
      const content =
        `${listing.address} ${listing.title} ${listing.description}`.toLowerCase();
      return content.includes(debouncedSearchTerm);
    });
  }, [debouncedSearchTerm]);

  return (
    <MainPageWrapper>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Property Listings
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore our diverse collection of premium real estate opportunities.
          </p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by address, city, or keyword..."
            className="pl-9 h-11 text-base"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredListings.map((listing) => (
            <EstateListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </MainPageWrapper>
  );
}

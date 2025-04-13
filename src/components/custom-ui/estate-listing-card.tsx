import { RealEstateListing } from "@/data/mock-estates";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { Bed, Bathtub as Bath, Ruler, House as Home, MapPin } from "@phosphor-icons/react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

export const EstateListingCard = ({
  listing,
}: {
  listing: RealEstateListing;
}) => {
  const {
    id,
    image,
    title,
    price,
    address,
    bedrooms,
    bathrooms,
    squareMeters,
    propertyType,
    salePercentage,
    description,
  } = listing;

  const discountedPrice =
    salePercentage > 0 ? price * (1 - salePercentage / 100) : null;
  const formattedOriginalPrice = price.toLocaleString();
  const formattedDiscountedPrice = discountedPrice
    ? discountedPrice.toLocaleString()
    : null;

  return (
    <Card className="overflow-hidden flex flex-col h-full border border-border rounded-2xl shadow-lg bg-background p-0 hover:shadow-xl transition-transform duration-300">
      <Link
        to="/properties/$id"
        params={{ id }}
        className="flex flex-col h-full"
      >
        <div className="relative overflow-hidden group">
          <AspectRatio ratio={16 / 9}>
            <img
              src={image}
              alt={`Exterior of ${title}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-t-2xl"
            />
          </AspectRatio>

          <Badge
            variant="secondary"
            className="absolute top-4 left-4 capitalize text-xs font-semibold bg-secondary/90 backdrop-blur-md text-secondary-foreground px-2 py-1 rounded-full shadow-md"
          >
            <Home className="h-3.5 w-3.5 mr-1.5" />
            {propertyType}
          </Badge>

          {salePercentage > 0 && (
            <Badge
              variant="destructive"
              className="absolute top-4 right-4 text-xs font-semibold bg-destructive/90 backdrop-blur-md text-destructive-foreground px-2 py-1 rounded-full shadow-md"
            >
              {salePercentage}% OFF
            </Badge>
          )}

          <div className="absolute bottom-0 right-0 p-3">
            <div
              className={cn(
                "relative z-10 px-4 py-2 rounded-lg shadow-xl",
                "bg-gradient-to-r from-emerald-600/90 to-emerald-500/80 backdrop-blur-sm",
                "border border-white/10"
              )}
            >
              {discountedPrice ? (
                <div className="flex flex-col items-end">
                  <span className="text-lg font-bold text-white">
                    ${formattedDiscountedPrice}
                  </span>
                  <span className="text-xs font-medium text-white/70 line-through">
                    ${formattedOriginalPrice}
                  </span>
                </div>
              ) : (
                <span className="text-lg font-bold text-white">
                  ${formattedOriginalPrice}
                </span>
              )}
            </div>
          </div>
        </div>

        <CardContent className="p-5 pt-4 pb-0 flex-grow space-y-4">
          <CardTitle className="text-2xl font-bold text-foreground">
            {title}
          </CardTitle>

          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1.5 flex-shrink-0" />
            <p className="line-clamp-1">{address}</p>
          </div>

          <div className="flex items-center justify-between text-sm py-2">
            <div className="flex items-center gap-1.5">
              <Bed className="h-4 w-4 text-muted-foreground" />
              <span className="font-semibold text-foreground">{bedrooms}</span>
              <span className="text-muted-foreground">Beds</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bath className="h-4 w-4 text-muted-foreground" />
              <span className="font-semibold text-foreground">{bathrooms}</span>
              <span className="text-muted-foreground">Baths</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Ruler className="h-4 w-4 text-muted-foreground" />
              <span className="font-semibold text-foreground">{squareMeters}</span>
              <span className="text-muted-foreground">m²</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </CardContent>

        <CardFooter className="p-5 pt-3 pb-5 mt-auto">
          <Badge
            variant="outline"
            className="hover:bg-foreground/10 text-sm px-3 py-1.5 rounded-full font-medium transition-all duration-200"
          >
            View Details
          </Badge>
        </CardFooter>
      </Link>
    </Card>
  );
};
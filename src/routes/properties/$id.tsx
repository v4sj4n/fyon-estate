import { MainPageWrapper } from "@/components/custom-ui/main-page-wrapper";
import {
  findPropertyByIdOrNull,
  getOtherSimiliarTypes,
} from "@/data/mock-estates";
import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import {
  Bed,
  Bathtub as Bath,
  Ruler,
  House,
  CheckCircle,
  MapPin,
  Phone,
  Calendar,
  CalendarBlank,
  CaretLeft,
  CaretRight,
  ShareFat,
  Star,
  ArrowSquareRight as ExternalLink,
  Building,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { EstateListingCard } from "@/components/custom-ui/estate-listing-card";
import { toast } from "sonner";

export const Route = createFileRoute("/properties/$id")({
  component: PropertyDetailPage,
  beforeLoad: async ({params}) => {
    document.title = `${params.id} Details | Fyon Real Estate`;
  }
});

function PropertyNotFound() {
  return (
    <MainPageWrapper>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center py-16">
        <Building className="h-16 w-16 text-muted-foreground/40 mb-6" />
        <h1 className="text-2xl font-bold mb-3">Property Not Found</h1>
        <p className="text-muted-foreground mb-6 max-w-sm">
          The property you are looking for might have been sold, rented, or the
          listing has expired.
        </p>
        <Button asChild variant="outline">
          <Link to="/properties">
            <CaretLeft className="mr-2 h-4 w-4" /> Back to Listings
          </Link>
        </Button>
      </div>
    </MainPageWrapper>
  );
}

function PropertyDetailPage() {
  const { id : propertyId } = useParams({ strict: false });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!propertyId) {
    return <PropertyNotFound />;
  }
  const propertyToDisplay = findPropertyByIdOrNull(propertyId);

  if (!propertyToDisplay) {
    return <PropertyNotFound />;
  }

  const propertyImages = [
    propertyToDisplay.image,
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1448630360428-65456885c650?w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop",
  ].filter(Boolean) as string[];

  const discountedPrice =
    propertyToDisplay.salePercentage > 0
      ? propertyToDisplay.price * (1 - propertyToDisplay.salePercentage / 100)
      : null;
  const propertyFeatures = propertyToDisplay.features || [];

  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % propertyImages.length);
  const prevImage = () =>
    setCurrentImageIndex(
      (prev) => (prev - 1 + propertyImages.length) % propertyImages.length
    );

  const similarProperties = getOtherSimiliarTypes(
    propertyToDisplay.propertyType,
    propertyId,
    3
  );

  const onClickShare = () => {
    // url copy to clipboard
    navigator.clipboard.writeText(window.location.href);
    toast.success("Property URL copied to clipboard!");
  }

  return (
    <MainPageWrapper className="py-8 md:py-12">
      <div className="space-y-10 md:space-y-16">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <span aria-hidden="true">/</span>
            </li>
            <li>
              <Link
                to="/properties"
                className="hover:text-primary transition-colors"
              >
                Properties
              </Link>
            </li>
            <li>
              <span aria-hidden="true">/</span>
            </li>
            <li>
              <span
                className="font-medium text-foreground line-clamp-1"
                aria-current="page"
              >
                {propertyToDisplay.title}
              </span>
            </li>
          </ol>
        </nav>

        <header>
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-8">
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Badge variant="outline" className="capitalize">
                  <House className="h-3 w-3 mr-1.5" />{" "}
                  {propertyToDisplay.propertyType}
                </Badge>
                {propertyToDisplay.salePercentage > 0 && (
                  <Badge variant="destructive">
                    {propertyToDisplay.salePercentage}% OFF
                  </Badge>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-1">
                {propertyToDisplay.title}
              </h1>
              <div className="flex items-center text-muted-foreground text-sm md:text-base">
                <MapPin className="h-4 w-4 mr-1.5 flex-shrink-0" />
                <span className="line-clamp-1">
                  {propertyToDisplay.address}
                </span>
              </div>
            </div>

            <div className="flex-shrink-0 flex flex-col items-start md:items-end gap-3 pt-2 md:pt-0">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="Share Property"
                  className="h-8 w-8"
                  onClick={onClickShare}
                >
                  <ShareFat className="h-4 w-4"  />
                </Button>
              </div>
              <div className="text-left md:text-right">
                {discountedPrice ? (
                  <>
                    <p className="text-3xl font-bold text-primary">
                      ${discountedPrice.toLocaleString()}
                    </p>
                    <p className="text-sm text-muted-foreground line-through">
                      ${propertyToDisplay.price.toLocaleString()}
                    </p>
                  </>
                ) : (
                  <p className="text-3xl font-bold text-primary">
                    ${propertyToDisplay.price.toLocaleString()}
                  </p>
                )}
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-8 md:space-y-10">
            <Card className="overflow-hidden border shadow-sm">
              <div className="relative group">
                <AspectRatio ratio={16 / 9} className="bg-muted">
                  {propertyImages.length > 0 ? (
                    <img
                      key={currentImageIndex}
                      src={propertyImages[currentImageIndex]}
                      alt={`${propertyToDisplay.title} - View ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover transition-opacity duration-300 ease-in-out"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <House className="h-20 w-20 text-muted-foreground/20" />
                    </div>
                  )}
                </AspectRatio>

                {propertyImages.length > 1 && (
                  <>
                    <Button
                      variant="secondary"
                      size="icon"
                      aria-label="Previous Image"
                      className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full h-8 w-8 bg-background/50 hover:bg-background/80 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md"
                      onClick={prevImage}
                    >
                      {" "}
                      <CaretLeft className="h-4 w-4" />{" "}
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      aria-label="Next Image"
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full h-8 w-8 bg-background/50 hover:bg-background/80 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md"
                      onClick={nextImage}
                    >
                      {" "}
                      <CaretRight className="h-4 w-4" />{" "}
                    </Button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
                      {propertyImages.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={cn(
                            "h-1.5 rounded-full transition-all duration-300",
                            idx === currentImageIndex
                              ? "w-4 bg-white"
                              : "w-1.5 bg-white/60 hover:bg-white/90"
                          )}
                          aria-label={`View image ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </Card>

            <Card className="border shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Property Overview</CardTitle>
              </CardHeader>
              <CardContent className="pt-2 pb-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    {
                      icon: Bed,
                      value: propertyToDisplay.bedrooms,
                      label: "Bedrooms",
                    },
                    {
                      icon: Bath,
                      value: propertyToDisplay.bathrooms,
                      label: "Bathrooms",
                    },
                    {
                      icon: Ruler,
                      value: propertyToDisplay.squareMeters,
                      label: "Sq. Meters",
                    },
                    {
                      icon: CalendarBlank,
                      value: propertyToDisplay.yearBuilt,
                      label: "Year Built",
                    },
                  ].map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg"
                    >
                      <spec.icon className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <span className="block text-base font-semibold">
                          {spec.value}
                        </span>
                        <span className="block text-xs text-muted-foreground">
                          {spec.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-6">
                <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none text-foreground/90 leading-relaxed">
                  <p className="whitespace-pre-line">
                    {propertyToDisplay.description}
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="features" className="mt-6">
                {propertyFeatures.length > 0 ? (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                    {propertyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground text-sm py-4">
                    No specific features listed for this property.
                  </p>
                )}
              </TabsContent>
              <TabsContent value="location" className="mt-6">
                <div className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden border">
                    <div className="h-full w-full flex flex-col items-center justify-center text-center p-4">
                      <MapPin className="h-10 w-10 text-muted-foreground/50 mb-3" />
                      <p className="font-medium text-muted-foreground">
                        Map Preview Unavailable
                      </p>
                      <p className="text-xs text-muted-foreground/80 max-w-xs truncate">
                        {propertyToDisplay.address}
                      </p>
                      <Button
                        variant="link"
                        size="sm"
                        asChild
                        className="mt-2 px-0 h-auto py-0 text-xs"
                      >
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(propertyToDisplay.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View on Google Maps{" "}
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <aside className="lg:col-span-1 space-y-6">
            <Card className="shadow-md border sticky top-24">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Contact Agent</CardTitle>
                <CardDescription>
                  Interested? Reach out for more details.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border">
                    <AvatarImage
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Jane Doe"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">Jane Doe</h3>
                    <p className="text-sm text-muted-foreground">
                      Fyon Real Estate
                    </p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          weight="fill"
                          key={i}
                          className={cn(
                            "h-3.5 w-3.5",
                            i < 4
                              ? "fill-primary text-primary"
                              : "fill-muted text-muted-foreground/30"
                          )}
                        />
                      ))}
                      <span className="text-xs text-muted-foreground ml-1.5">
                        (4.8/5 Rating)
                      </span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <Button className="w-full h-10 text-base" size="lg">
                    <Phone className="mr-2 h-4 w-4" /> Call Now
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full h-10 text-base"
                    size="lg"
                  >
                    <Calendar weight="fill" className="mr-2 h-4 w-4" /> Schedule
                    Tour
                  </Button>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>

        {similarProperties.length > 0 && (
          <section className="pt-12 md:pt-16">
            <Separator className="mb-10 md:mb-12" />
            <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {similarProperties.map((prop) => (
                <EstateListingCard key={prop.id} listing={prop} />
              ))}
            </div>
          </section>
        )}
      </div>
    </MainPageWrapper>
  );
}

import { MainPageWrapper } from "@/components/custom-ui/main-page-wrapper";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Phone, ArrowRight, Star } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

import { EstateListingCard } from "@/components/custom-ui/estate-listing-card";
import { stats } from "@/data/stats";
import { getRandomListings } from "@/data/mock-estates";
import { Footer } from "@/components/custom-ui/footer";
import { whyChooseFyon } from "@/data/index.whyCHooseFyon";
import { testimonials } from "@/data/index.testimonials";

export const Route = createFileRoute("/")({
  component: Index,
  beforeLoad: () => {
    document.title = "Fyon Real Estate";
  },
});

const SectionHeader = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => (
  <div className="mb-8 md:mb-12 max-w-2xl">
    {" "}
    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
    {description && (
      <p className="mt-2 text-lg text-muted-foreground">{description}</p>
    )}
  </div>
);

const CenteredSectionHeader = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => (
  <div className="mb-12 md:mb-16 max-w-2xl mx-auto text-center">
    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
    {description && (
      <p className="mt-2 text-lg text-muted-foreground">{description}</p>
    )}
  </div>
);

function Index() {
  const featuredListings = getRandomListings(3);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted/30 pt-20 pb-24 md:pt-28 md:pb-32 lg:pt-32 ">
        <div className="container relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6 lg:px-8 animate-in fade-in-0 duration-500 slide-in-from-bottom-20">
          <p className="mb-4 text-sm font-medium text-primary ">
            Welcome to Fyon Real Estate
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 max-w-3xl duration-700">
            Find Your Perfect <span className="text-primary">Place</span>
          </h1>

          <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mb-10 duration-700 delay-200">
            Explore curated listings, connect with trusted agents, and discover
            a space that truly feels like home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 duration-700 delay-400">
            <Button size="lg" variant="link" asChild>
              <Link to="/properties">
                Explore Properties
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Phone weight="fill" className="mr-2 h-4 w-4" />
              <Link to="/contact">Contact Us</Link>{" "}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/30">
        <MainPageWrapper className="py-0">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12">
            <SectionHeader
              title="Featured Listings"
              description="Handpicked properties available now."
            />
            <Button
              variant="ghost"
              asChild
              className="mt-4 md:mt-0 self-start md:self-center flex-shrink-0"
            >
              <Link to="/properties">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredListings.map((property) => (
              <EstateListingCard key={property.id} listing={property} />
            ))}
          </div>
        </MainPageWrapper>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <MainPageWrapper className="py-0">
          <CenteredSectionHeader
            title="Why Choose Fyon?"
            description="We simplify your property journey with expertise and technology."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {whyChooseFyon.map((feature) => (
              <Card
                key={feature.title}
                className="border bg-card text-center p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-5 inline-flex rounded-lg bg-primary/10 p-3">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-lg mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-sm">
                  {feature.description}
                </CardDescription>
              </Card>
            ))}
          </div>
        </MainPageWrapper>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <MainPageWrapper className="py-0">
          <CenteredSectionHeader
            title="Trusted by Homebuyers"
            description="See what our satisfied clients have to say about their experience."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="border shadow-sm transition-shadow hover:shadow-md flex flex-col bg-card"
              >
                {" "}
                <CardContent className="p-6 flex-grow">
                  <div className="flex mb-4">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          weight="fill"
                          className={cn(
                            "h-4 w-4",
                            i < testimonial.rating
                              ? "fill-primary text-primary"
                              : "fill-muted text-muted-foreground/30"
                          )}
                        />
                      ))}
                  </div>
                  <p className="italic text-foreground/80 text-base leading-relaxed">
                    "{testimonial.testimonial}"
                  </p>
                </CardContent>
                <CardFooter className="p-4 mt-auto bg-muted/50 border-t">
                  {" "}
                  <div className="flex items-center gap-3 w-full">
                    {" "}
                    <Avatar className="h-10 w-10">
                      {" "}
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </MainPageWrapper>
      </section>

      <section className="bg-background border-b">
        <MainPageWrapper className="py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>{" "}
              </div>
            ))}
          </div>
        </MainPageWrapper>
      </section>

      <section className="bg-primary text-primary-foreground">
        <MainPageWrapper className="py-16 md:py-20 text-center">
          {" "}
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Start your search today or get in touch with our expert agents for
            personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/properties">Browse Listings</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              Contact an Agent
            </Button>
          </div>
        </MainPageWrapper>
      </section>
      <Footer />
    </>
  );
}

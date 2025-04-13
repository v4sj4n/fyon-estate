import { MainPageWrapper } from "@/components/custom-ui/main-page-wrapper";
import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Building } from "@phosphor-icons/react"; 
import { Badge } from "@/components/ui/badge";
import { coreValues } from "@/data/about.coreValues";

export const Route = createFileRoute("/about/")({
  component: AboutPage,
  beforeLoad: () => {
    document.title = `About Us | Fyon Real Estate`;
  },
});

function AboutPage() {
  return (
    <>
      <section className="bg-muted/30 border-b py-16 md:py-24 ">
        <MainPageWrapper className="py-0 text-center animate-in fade-in-0 duration-500 slide-in-from-bottom-20">
          <Building className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-3">
            About Fyon
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner in finding the perfect property. We combine
            technology, expertise, and dedication.
          </p>
        </MainPageWrapper>
      </section>

      <MainPageWrapper>
        <div className="space-y-16 md:space-y-24">
          {/* Our Mission/Vision */}
          <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1000&auto=format&fit=crop" // Replace with relevant image
                alt="Team working together"
                className="rounded-lg shadow-md aspect-video object-cover"
              />
            </div>
            <div className="space-y-4">
              <Badge variant="outline">Our Purpose</Badge>
              <h2 className="text-3xl font-bold tracking-tight">
                Simplifying Your Real Estate Journey
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                At Fyon, our mission is to make the process of buying, selling,
                or renting property as seamless and stress-free as possible. We
                leverage cutting-edge technology and deep market knowledge to
                provide you with the best opportunities and expert guidance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe everyone deserves a place they love to call home, and
                we're committed to helping you find yours.
              </p>
            </div>
          </section>

          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">
                Our Core Values
              </h2>
              <p className="text-muted-foreground mt-2">
                What drives us every day.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
              {coreValues.map((value) => (
                <Card
                  key={value.title}
                  className="border bg-card text-center p-6 shadow-sm"
                >
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </section>

        </div>
      </MainPageWrapper>
    </>
  );
}

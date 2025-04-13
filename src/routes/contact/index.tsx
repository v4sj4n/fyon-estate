import { MainPageWrapper } from "@/components/custom-ui/main-page-wrapper";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Envelope as Mail,
  Phone,
  MapPin,
  PaperPlaneTilt as Send,
} from "@phosphor-icons/react";

export const Route = createFileRoute("/contact/")({
  component: ContactPage,
  beforeLoad: () => {
    document.title = `Contact Us | Fyon Real Estate`;
  },
});

function ContactPage() {
  return (
    <>
      <section className="bg-muted/30 border-b py-16 md:py-24">
        <MainPageWrapper className="py-0 text-center animate-in fade-in-0 duration-500 slide-in-from-bottom-20">
          <Mail className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-3">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to help. Contact us with any questions or to start your
            property search.
          </p>
        </MainPageWrapper>
      </section>

      <MainPageWrapper>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Contact Form */}
          <Card className="border shadow-sm">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form and we'll get back to you shortly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium mb-1.5 block"
                    >
                      Name
                    </label>
                    <Input id="name" placeholder="Your Name" required />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium mb-1.5 block"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium mb-1.5 block"
                  >
                    Subject
                  </label>
                  <Input id="subject" placeholder="Reason for contacting" />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium mb-1.5 block"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    rows={5}
                    required
                  />
                </div>
                <div>
                  <Button type="submit" className="w-full md:w-auto">
                    <Send className="h-4 w-4" /> Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>123 Fyon Street, Metropolis, NY 10001, USA</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href="tel:+1234567890" className="hover:text-primary">
                    (123) 456-7890
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <a href="mailto:info@fyon.com" className="hover:text-primary">
                    info@fyon.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Our Location</h3>
              <div className="aspect-video bg-muted rounded-lg border overflow-hidden">
                <div className="h-full w-full flex items-center justify-center text-muted-foreground">
                  Map Placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainPageWrapper>
    </>
  );
}

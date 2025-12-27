import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Keyboard, MessageSquare, Monitor, MousePointer, Volume2 } from "lucide-react";

const features = [
  {
    icon: Keyboard,
    title: "Keyboard Navigation",
    description: "All interactive elements are accessible via keyboard navigation, allowing users to navigate without a mouse.",
  },
  {
    icon: Eye,
    title: "Screen Reader Support",
    description: "Our website is optimized for screen readers with proper ARIA labels and semantic HTML structure.",
  },
  {
    icon: Monitor,
    title: "Responsive Design",
    description: "Content adapts to various screen sizes and zoom levels, ensuring readability across all devices.",
  },
  {
    icon: MousePointer,
    title: "Clear Focus States",
    description: "Interactive elements have visible focus indicators to help users track their location on the page.",
  },
  {
    icon: Volume2,
    title: "Alternative Text",
    description: "All images and media include descriptive alternative text for users who cannot see visual content.",
  },
  {
    icon: MessageSquare,
    title: "Feedback Welcome",
    description: "We continuously improve accessibility based on user feedback and evolving best practices.",
  },
];

export default function Accessibility() {
  return (
    <Layout>
      <section className="bg-primary py-16 lg:py-24">
        <div className="container-custom">
          <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            Accessibility Statement
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-primary-foreground/80">
            Our commitment to making our digital experiences accessible to everyone.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
              Our Commitment
            </h2>
            <p className="mb-6 text-lg text-muted-foreground">
              NexaTech Consulting is committed to ensuring digital accessibility for people 
              with disabilities. We are continually improving the user experience for everyone 
              and applying the relevant accessibility standards.
            </p>
            <p className="text-muted-foreground">
              We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at 
              Level AA. These guidelines explain how to make web content more accessible for 
              people with disabilities and more user-friendly for everyone.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className={`border-border/50 bg-card animate-slide-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-custom max-w-4xl">
          <h2 className="mb-8 font-display text-2xl font-bold text-foreground">
            Contact Us About Accessibility
          </h2>
          <p className="mb-4 text-muted-foreground">
            We welcome your feedback on the accessibility of the NexaTech Consulting website. 
            If you encounter accessibility barriers or have suggestions for improvement, 
            please let us know:
          </p>
          <ul className="mb-6 list-disc space-y-2 pl-6 text-muted-foreground">
            <li><strong className="text-foreground">Email:</strong> accessibility@nexatech.com</li>
            <li><strong className="text-foreground">Phone:</strong> +1 (212) 555-0100</li>
          </ul>
          <p className="text-muted-foreground">
            We try to respond to accessibility feedback within 5 business days and to propose 
            a solution within 10 business days.
          </p>
        </div>
      </section>
    </Layout>
  );
}

import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, Heart, ShoppingCart, Plane, Cpu, ChevronRight } from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "Financial Services",
    slug: "financial-services",
    description: "Transform banking, insurance, and capital markets with digital innovation that enhances customer experience while ensuring compliance and security.",
    challenges: [
      "Legacy system modernization",
      "Regulatory compliance complexity",
      "Digital banking transformation",
      "Fraud detection and prevention",
    ],
    solutions: [
      "Cloud-native core banking platforms",
      "AI-powered risk management",
      "Open banking and API ecosystems",
      "Digital customer onboarding",
    ],
  },
  {
    icon: Heart,
    title: "Healthcare",
    slug: "healthcare",
    description: "Improve patient outcomes and operational efficiency with technology solutions that connect care providers, patients, and health systems.",
    challenges: [
      "Interoperability between systems",
      "Patient data privacy and security",
      "Care coordination across providers",
      "Rising healthcare costs",
    ],
    solutions: [
      "Unified patient engagement platforms",
      "Telehealth and remote monitoring",
      "Healthcare analytics and AI diagnostics",
      "Electronic health record integration",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    slug: "retail",
    description: "Create seamless shopping experiences across channels with personalized, data-driven retail solutions that drive conversions and loyalty.",
    challenges: [
      "Omnichannel customer expectations",
      "Supply chain optimization",
      "Personalization at scale",
      "Inventory management",
    ],
    solutions: [
      "Unified commerce platforms",
      "AI-powered personalization engines",
      "Supply chain visibility solutions",
      "Customer data platforms",
    ],
  },
  {
    icon: Plane,
    title: "Travel & Logistics",
    slug: "travel",
    description: "Optimize operations and enhance traveler experiences with intelligent solutions that streamline bookings, logistics, and customer service.",
    challenges: [
      "Dynamic pricing optimization",
      "Real-time inventory management",
      "Customer experience personalization",
      "Operational efficiency",
    ],
    solutions: [
      "Revenue management systems",
      "Intelligent logistics platforms",
      "Mobile-first booking experiences",
      "IoT-enabled fleet management",
    ],
  },
  {
    icon: Cpu,
    title: "Technology & Media",
    slug: "technology",
    description: "Accelerate product innovation and content delivery with scalable platforms that engage audiences and drive digital growth.",
    challenges: [
      "Rapid product development cycles",
      "Content delivery at scale",
      "Audience engagement and retention",
      "Platform scalability",
    ],
    solutions: [
      "Microservices and cloud-native architectures",
      "Content management and delivery platforms",
      "User engagement analytics",
      "Streaming and media solutions",
    ],
  },
];

export default function Industries() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-24 lg:py-32">
        <div className="container-custom">
          <div className="max-w-3xl animate-slide-up">
            <p className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-accent">
              Industries We Serve
            </p>
            <h1 className="mb-6 font-display text-4xl font-bold text-primary-foreground md:text-5xl">
              Deep Domain Expertise
            </h1>
            <p className="text-lg text-primary-foreground/80 md:text-xl">
              We bring specialized knowledge and proven solutions to the industries 
              that drive the global economy.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <Card 
                key={industry.slug}
                className={`overflow-hidden border-border/50 bg-card animate-slide-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-3">
                    {/* Header */}
                    <div className="bg-primary p-8 lg:p-12">
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/20 text-accent">
                        <industry.icon className="h-7 w-7" />
                      </div>
                      <h2 className="mb-4 font-display text-2xl font-bold text-primary-foreground">
                        {industry.title}
                      </h2>
                      <p className="text-primary-foreground/80">
                        {industry.description}
                      </p>
                      <Link to={`/industries/${industry.slug}`} className="mt-6 inline-block">
                        <Button variant="coral">
                          Explore Solutions
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>

                    {/* Challenges */}
                    <div className="border-t border-border p-8 lg:border-l lg:border-t-0 lg:p-12">
                      <h3 className="mb-6 font-display text-lg font-semibold text-foreground">
                        Industry Challenges
                      </h3>
                      <ul className="space-y-3">
                        {industry.challenges.map((challenge) => (
                          <li key={challenge} className="flex items-start gap-2">
                            <ChevronRight className="mt-1 h-4 w-4 flex-shrink-0 text-accent" />
                            <span className="text-muted-foreground">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div className="border-t border-border bg-muted p-8 lg:border-l lg:border-t-0 lg:p-12">
                      <h3 className="mb-6 font-display text-lg font-semibold text-foreground">
                        Our Solutions
                      </h3>
                      <ul className="space-y-3">
                        {industry.solutions.map((solution) => (
                          <li key={solution} className="flex items-start gap-2">
                            <ChevronRight className="mt-1 h-4 w-4 flex-shrink-0 text-accent" />
                            <span className="text-foreground">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent">
        <div className="container-custom text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-accent-foreground md:text-4xl">
            Don't See Your Industry?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-accent-foreground/90">
            Our expertise extends beyond these sectors. Let's discuss how we can help 
            transform your business.
          </p>
          <Link to="/contact">
            <Button 
              variant="outline" 
              size="xl"
              className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

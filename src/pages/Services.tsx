import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Cpu, Globe, TrendingUp, Settings, ChevronRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-services.jpg";

const services = [
  {
    icon: Users,
    title: "Customer Experience",
    slug: "customer-experience",
    description: "Design and deliver exceptional digital experiences that drive customer loyalty and business growth.",
    outcomes: [
      "Increased customer satisfaction scores",
      "Higher conversion rates",
      "Improved customer retention",
      "Seamless omnichannel experiences",
    ],
    businessValue: "Transform every customer touchpoint into an opportunity for engagement and growth through human-centered design and innovative technology.",
  },
  {
    icon: Cpu,
    title: "Product Engineering",
    slug: "product-engineering",
    description: "Build innovative digital products with modern engineering practices, agile methodologies, and cutting-edge technology.",
    outcomes: [
      "Faster time-to-market",
      "Scalable architectures",
      "Reduced technical debt",
      "Continuous delivery pipelines",
    ],
    businessValue: "Accelerate innovation with modern engineering practices that enable rapid iteration and sustainable growth at scale.",
  },
  {
    icon: Globe,
    title: "Cloud & Platform Modernization",
    slug: "cloud-platform",
    description: "Modernize your infrastructure with cloud-native solutions, platform engineering, and infrastructure automation.",
    outcomes: [
      "Reduced infrastructure costs",
      "Improved scalability and resilience",
      "Enhanced security posture",
      "Faster deployment cycles",
    ],
    businessValue: "Future-proof your technology foundation with flexible, scalable cloud infrastructure that drives operational efficiency.",
  },
  {
    icon: TrendingUp,
    title: "Data, Analytics & AI",
    slug: "data-ai",
    description: "Unlock business insights and drive intelligent automation with advanced analytics, machine learning, and AI solutions.",
    outcomes: [
      "Data-driven decision making",
      "Predictive analytics capabilities",
      "Automated business processes",
      "Real-time insights and reporting",
    ],
    businessValue: "Transform raw data into strategic advantage with intelligent solutions that automate, predict, and optimize business outcomes.",
  },
  {
    icon: Settings,
    title: "Digital Operations & Managed Services",
    slug: "digital-operations",
    description: "Optimize and manage your digital ecosystem with comprehensive operational support and continuous improvement.",
    outcomes: [
      "24/7 operational support",
      "Proactive monitoring and maintenance",
      "Continuous optimization",
      "Cost-effective operations",
    ],
    businessValue: "Focus on your core business while we ensure your technology ecosystem runs smoothly, securely, and efficiently.",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-24 lg:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
        <div className="container-custom relative">
          <div className="max-w-3xl animate-slide-up">
            <p className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-accent">
              What We Do
            </p>
            <h1 className="mb-6 font-display text-4xl font-bold text-primary-foreground md:text-5xl">
              Comprehensive Digital Solutions
            </h1>
            <p className="text-lg text-primary-foreground/80 md:text-xl">
              From strategy to execution, we deliver end-to-end technology services 
              that transform enterprises and create lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.slug}
                className={`grid gap-8 lg:grid-cols-2 lg:gap-16 animate-slide-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h2 className="mb-4 font-display text-3xl font-bold text-foreground">
                    {service.title}
                  </h2>
                  <p className="mb-6 text-lg text-muted-foreground">
                    {service.description}
                  </p>
                  <p className="mb-6 text-foreground">
                    {service.businessValue}
                  </p>
                  <Link to={`/services/${service.slug}`}>
                    <Button variant="coral">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <Card className={`border-border/50 bg-muted ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <CardContent className="p-8">
                    <h3 className="mb-6 font-display text-xl font-semibold text-foreground">
                      Key Outcomes
                    </h3>
                    <ul className="space-y-4">
                      {service.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                          <span className="text-foreground">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-primary-foreground md:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80">
            Let's discuss how our services can help you achieve your digital transformation goals.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, ShoppingCart, Plane, Heart, Cpu, TrendingUp, Users, Globe, Award, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";

const services = [
  {
    icon: Users,
    title: "Customer Experience",
    description: "Design and deliver exceptional digital experiences that drive customer loyalty and business growth.",
    href: "/services/customer-experience",
  },
  {
    icon: Cpu,
    title: "Product Engineering",
    description: "Build innovative digital products with modern engineering practices and agile methodologies.",
    href: "/services/product-engineering",
  },
  {
    icon: Globe,
    title: "Cloud & Platform",
    description: "Modernize your infrastructure with cloud-native solutions and platform engineering.",
    href: "/services/cloud-platform",
  },
  {
    icon: TrendingUp,
    title: "Data, Analytics & AI",
    description: "Unlock business insights and drive intelligent automation with advanced analytics and AI.",
    href: "/services/data-ai",
  },
];

const industries = [
  { icon: Building2, name: "Financial Services", href: "/industries/financial-services" },
  { icon: Heart, name: "Healthcare", href: "/industries/healthcare" },
  { icon: ShoppingCart, name: "Retail & E-commerce", href: "/industries/retail" },
  { icon: Plane, name: "Travel & Logistics", href: "/industries/travel" },
  { icon: Cpu, name: "Technology & Media", href: "/industries/technology" },
];

const insights = [
  {
    category: "Technology Trends",
    title: "The Future of Generative AI in Enterprise",
    description: "How organizations can strategically adopt and scale generative AI capabilities.",
    date: "Dec 2024",
    readTime: "8 min read",
  },
  {
    category: "Cloud Strategy",
    title: "Navigating Multi-Cloud Complexity",
    description: "Best practices for managing multi-cloud environments efficiently and securely.",
    date: "Dec 2024",
    readTime: "6 min read",
  },
  {
    category: "Digital Transformation",
    title: "Building a Data-Driven Culture",
    description: "Steps to foster data literacy and analytics adoption across your organization.",
    date: "Nov 2024",
    readTime: "10 min read",
  },
];

const caseStudies = [
  {
    client: "Global Banking Institution",
    industry: "Financial Services",
    result: "60% faster time-to-market",
    description: "Transformed legacy core banking systems to a cloud-native microservices architecture.",
  },
  {
    client: "Healthcare Provider Network",
    industry: "Healthcare",
    result: "3M+ patients served",
    description: "Built a unified patient engagement platform across multiple healthcare systems.",
  },
  {
    client: "Retail Giant",
    industry: "Retail & E-commerce",
    result: "40% increase in conversions",
    description: "Reimagined the omnichannel customer experience with personalized recommendations.",
  },
];

const stats = [
  { value: "50+", label: "Countries" },
  { value: "10,000+", label: "Technologists" },
  { value: "500+", label: "Enterprise Clients" },
  { value: "25+", label: "Years of Innovation" },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] overflow-hidden bg-primary">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
        <div className="container-custom relative flex min-h-[90vh] items-center py-20">
          <div className="max-w-3xl animate-slide-up">
            <p className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-accent">
              Technology Excellence
            </p>
            <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Transform Your Enterprise with{" "}
              <span className="text-accent">Digital Innovation</span>
            </h1>
            <p className="mb-8 text-lg text-primary-foreground/80 md:text-xl">
              We partner with forward-thinking organizations to build technology 
              solutions that create extraordinary impact. From strategy to execution, 
              we deliver excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="hero-outline" size="xl">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-accent py-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className={`text-center animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="font-display text-3xl font-bold text-accent-foreground md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-accent-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mb-12 max-w-2xl">
            <p className="mb-2 font-display text-sm font-semibold uppercase tracking-wider text-accent">
              What We Do
            </p>
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              From customer experience to cloud modernization, we deliver end-to-end 
              technology services that drive measurable business outcomes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Link key={service.title} to={service.href}>
                <Card 
                  className={`group h-full border-border/50 bg-card transition-all duration-300 hover:border-accent hover:shadow-xl animate-slide-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 font-display text-xl font-semibold text-foreground group-hover:text-accent">
                      {service.title}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium text-accent">
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <p className="mb-2 font-display text-sm font-semibold uppercase tracking-wider text-accent">
              Industries We Serve
            </p>
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Deep Domain Expertise
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We bring specialized knowledge and proven solutions to the industries 
              that matter most to your business.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <Link key={industry.name} to={industry.href}>
                <div 
                  className={`group flex items-center gap-3 rounded-full border border-border bg-card px-6 py-3 transition-all duration-300 hover:border-accent hover:bg-accent hover:shadow-lg animate-fade-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <industry.icon className="h-5 w-5 text-accent group-hover:text-accent-foreground" />
                  <span className="font-display font-medium text-foreground group-hover:text-accent-foreground">
                    {industry.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <p className="mb-2 font-display text-sm font-semibold uppercase tracking-wider text-accent">
              Success Stories
            </p>
            <h2 className="mb-4 font-display text-3xl font-bold text-primary-foreground md:text-4xl">
              Proven Results, Real Impact
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {caseStudies.map((study, index) => (
              <Card 
                key={study.client}
                className={`border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur animate-slide-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent">
                    {study.industry}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-primary-foreground">
                    {study.client}
                  </h3>
                  <p className="mt-2 text-primary-foreground/70">
                    {study.description}
                  </p>
                  <p className="mt-4 font-display text-2xl font-bold text-accent">
                    {study.result}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-2 font-display text-sm font-semibold uppercase tracking-wider text-accent">
                Latest Insights
              </p>
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                Thought Leadership
              </h2>
            </div>
            <Link to="/insights">
              <Button variant="outline">
                View All Insights
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {insights.map((insight, index) => (
              <Card 
                key={insight.title}
                className={`card-hover group cursor-pointer border-border/50 bg-card animate-slide-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="font-medium text-accent">{insight.category}</span>
                    <span>•</span>
                    <span>{insight.readTime}</span>
                  </div>
                  <h3 className="mb-2 font-display text-xl font-semibold text-foreground group-hover:text-accent">
                    {insight.title}
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    {insight.description}
                  </p>
                  <p className="text-sm text-muted-foreground">{insight.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="section-padding bg-accent">
        <div className="container-custom text-center">
          <Award className="mx-auto mb-6 h-16 w-16 text-accent-foreground" />
          <h2 className="mb-4 font-display text-3xl font-bold text-accent-foreground md:text-4xl">
            Join Our Team of Innovators
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-accent-foreground/90">
            Be part of a global community of technologists who are passionate about 
            creating impact through technology excellence.
          </p>
          <Link to="/careers">
            <Button 
              variant="outline" 
              size="xl"
              className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
            >
              Explore Careers
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

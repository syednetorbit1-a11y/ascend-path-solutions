import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Globe, Target, Eye, Shield, Users, Award, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-about.jpg";

const leadership = [
  {
    name: "Sarah Chen",
    role: "Chief Executive Officer",
    bio: "25+ years leading global technology transformations across Fortune 500 companies.",
  },
  {
    name: "Marcus Rodriguez",
    role: "Chief Technology Officer",
    bio: "Former Google engineering leader, pioneer in cloud-native and AI technologies.",
  },
  {
    name: "Dr. Aisha Patel",
    role: "Chief Strategy Officer",
    bio: "McKinsey alumna with deep expertise in digital business strategy and innovation.",
  },
  {
    name: "James Okonkwo",
    role: "Chief People Officer",
    bio: "Passionate advocate for inclusive workplace culture and talent development.",
  },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We pursue excellence in everything we do, from code quality to client relationships.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with transparency, honesty, and ethical standards in all our dealings.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of diverse teams working together toward shared goals.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We embrace new ideas and technologies to drive meaningful change for our clients.",
  },
];

const offices = [
  { city: "New York", country: "USA" },
  { city: "London", country: "UK" },
  { city: "Singapore", country: "Singapore" },
  { city: "Sydney", country: "Australia" },
  { city: "São Paulo", country: "Brazil" },
  { city: "Berlin", country: "Germany" },
  { city: "Mumbai", country: "India" },
  { city: "Toronto", country: "Canada" },
];

const stats = [
  { value: "1998", label: "Founded" },
  { value: "50+", label: "Countries" },
  { value: "10,000+", label: "Employees" },
  { value: "500+", label: "Clients Served" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] overflow-hidden bg-primary">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
        <div className="container-custom relative flex min-h-[60vh] items-center py-20">
          <div className="max-w-3xl animate-slide-up">
            <p className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-accent">
              About Us
            </p>
            <h1 className="mb-6 font-display text-4xl font-bold text-primary-foreground md:text-5xl">
              Technology Excellence for a Better World
            </h1>
            <p className="text-lg text-primary-foreground/80 md:text-xl">
              For over 25 years, we've partnered with organizations worldwide to 
              deliver transformative technology solutions that create lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-accent py-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center animate-fade-in"
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

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="animate-slide-in-left">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Target className="h-7 w-7" />
              </div>
              <h2 className="mb-4 font-display text-3xl font-bold text-foreground">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground">
                To empower organizations with technology solutions that drive innovation, 
                enhance competitiveness, and create sustainable value for all stakeholders. 
                We believe technology should be a force for good, enabling businesses to 
                achieve their ambitions while contributing positively to society.
              </p>
            </div>
            <div className="animate-slide-in-right">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Eye className="h-7 w-7" />
              </div>
              <h2 className="mb-4 font-display text-3xl font-bold text-foreground">
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground">
                To be the world's most trusted technology partner, known for our 
                commitment to excellence, innovation, and ethical practices. We aspire 
                to shape a future where technology serves humanity, bridges divides, 
                and enables every organization to reach its full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <p className="mb-2 font-display text-sm font-semibold uppercase tracking-wider text-accent">
              What Drives Us
            </p>
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Our Core Values
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className={`border-border/50 bg-card text-center animate-slide-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <p className="mb-2 font-display text-sm font-semibold uppercase tracking-wider text-accent">
              Leadership
            </p>
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Meet Our Executive Team
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {leadership.map((leader, index) => (
              <Card 
                key={leader.name}
                className={`border-border/50 bg-card animate-slide-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gradient-to-br from-accent/20 to-primary/20" />
                  <h3 className="mb-1 font-display text-lg font-semibold text-foreground">
                    {leader.name}
                  </h3>
                  <p className="mb-3 text-sm font-medium text-accent">
                    {leader.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {leader.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <Globe className="mx-auto mb-4 h-12 w-12 text-accent" />
            <h2 className="mb-4 font-display text-3xl font-bold text-primary-foreground md:text-4xl">
              Global Presence
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
              With offices across six continents, we bring local expertise with 
              global perspective to every engagement.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
            {offices.map((office, index) => (
              <div 
                key={office.city}
                className={`flex items-center gap-2 rounded-lg bg-primary-foreground/10 p-3 animate-fade-in`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <MapPin className="h-4 w-4 flex-shrink-0 text-accent" />
                <div>
                  <p className="text-sm font-medium text-primary-foreground">{office.city}</p>
                  <p className="text-xs text-primary-foreground/60">{office.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Ethics */}
      <section className="section-padding bg-background">
        <div className="container-custom text-center">
          <Shield className="mx-auto mb-6 h-16 w-16 text-accent" />
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Trust, Ethics & Responsibility
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground">
            We are committed to the highest standards of ethical conduct, data privacy, 
            and corporate responsibility. Our clients trust us with their most critical 
            challenges because they know we prioritize integrity above all else. 
            We maintain rigorous security practices, transparent governance, and 
            actively contribute to the communities where we operate.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/code-of-conduct">
              <Button variant="outline">
                Code of Conduct
              </Button>
            </Link>
            <Link to="/privacy">
              <Button variant="outline">
                Privacy Policy
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent">
        <div className="container-custom text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-accent-foreground md:text-4xl">
            Ready to Partner with Us?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-accent-foreground/90">
            Let's discuss how we can help transform your business with technology excellence.
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

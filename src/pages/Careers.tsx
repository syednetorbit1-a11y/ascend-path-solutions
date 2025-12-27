import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MapPin, Briefcase, Users, Heart, Globe, GraduationCap, Sparkles, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-careers.jpg";

const values = [
  {
    icon: Heart,
    title: "People First",
    description: "We believe in the potential of every individual and invest in their growth and well-being.",
  },
  {
    icon: Sparkles,
    title: "Excellence in Craft",
    description: "We take pride in our work and continuously raise the bar for quality and innovation.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "We embrace diverse viewpoints and collaborate across borders to create impact worldwide.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work together, share knowledge freely, and support each other's success.",
  },
];

const benefits = [
  "Competitive compensation and equity",
  "Comprehensive health coverage",
  "Flexible work arrangements",
  "Learning and development budget",
  "Sabbatical after 5 years",
  "Parental leave",
  "Mental health support",
  "Conference attendance",
];

const openRoles = [
  {
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "New York, NY / Remote",
    type: "Full-time",
  },
  {
    title: "Principal Consultant",
    department: "Consulting",
    location: "London, UK",
    type: "Full-time",
  },
  {
    title: "Data Scientist",
    department: "Data & AI",
    location: "Singapore / Remote",
    type: "Full-time",
  },
  {
    title: "UX Designer",
    department: "Design",
    location: "São Paulo, Brazil",
    type: "Full-time",
  },
  {
    title: "Cloud Architect",
    department: "Platform Engineering",
    location: "Sydney, Australia",
    type: "Full-time",
  },
  {
    title: "Engineering Manager",
    department: "Engineering",
    location: "Berlin, Germany",
    type: "Full-time",
  },
];

const hiringProcess = [
  {
    step: "01",
    title: "Apply",
    description: "Submit your application with your resume and tell us about your experience and interests.",
  },
  {
    step: "02",
    title: "Initial Conversation",
    description: "A recruiter will reach out to discuss your background and answer any questions.",
  },
  {
    step: "03",
    title: "Technical Assessment",
    description: "Demonstrate your skills through a practical exercise relevant to the role.",
  },
  {
    step: "04",
    title: "Team Interviews",
    description: "Meet with team members to discuss your experience and our culture fit.",
  },
  {
    step: "05",
    title: "Offer",
    description: "If there's a mutual fit, we'll extend an offer and welcome you to the team.",
  },
];

export default function Careers() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] overflow-hidden bg-primary">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
        <div className="container-custom relative flex min-h-[70vh] items-center py-20">
          <div className="max-w-3xl animate-slide-up">
            <p className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-accent">
              Careers
            </p>
            <h1 className="mb-6 font-display text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
              Build the Future of Technology with Us
            </h1>
            <p className="mb-8 text-lg text-primary-foreground/80 md:text-xl">
              Join a global team of innovators, problem-solvers, and technologists 
              who are passionate about creating extraordinary impact.
            </p>
            <Button variant="hero" size="xl">
              View Open Roles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <p className="mb-2 font-display text-sm font-semibold uppercase tracking-wider text-accent">
              Our Culture
            </p>
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              What We Stand For
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Our values guide everything we do, from how we build technology 
              to how we treat each other.
            </p>
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

      {/* Benefits Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="animate-slide-in-left">
              <p className="mb-2 font-display text-sm font-semibold uppercase tracking-wider text-accent">
                Benefits
              </p>
              <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                We Take Care of Our People
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                We offer comprehensive benefits that support your professional growth, 
                personal well-being, and life outside of work.
              </p>
              <ul className="grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-slide-in-right">
              <Card className="border-border/50 bg-primary">
                <CardContent className="p-8">
                  <GraduationCap className="mb-4 h-12 w-12 text-accent" />
                  <h3 className="mb-4 font-display text-2xl font-bold text-primary-foreground">
                    Continuous Learning
                  </h3>
                  <p className="mb-6 text-primary-foreground/80">
                    We invest heavily in your growth with dedicated learning time, 
                    conference attendance, and access to courses and certifications.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-primary-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      10% learning time allocation
                    </li>
                    <li className="flex items-center gap-2 text-primary-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      Annual learning budget
                    </li>
                    <li className="flex items-center gap-2 text-primary-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      Internal tech talks and workshops
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Diversity Section */}
      <section className="section-padding bg-accent">
        <div className="container-custom text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-accent-foreground md:text-4xl">
            Diversity, Equity & Inclusion
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-accent-foreground/90">
            We believe diverse teams build better products. We're committed to creating 
            an inclusive environment where everyone can thrive, contribute, and belong. 
            Our employee resource groups, inclusive hiring practices, and ongoing 
            education ensure we continue to grow as an equitable workplace.
          </p>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <p className="mb-2 font-display text-sm font-semibold uppercase tracking-wider text-accent">
              How We Hire
            </p>
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Our Hiring Process
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We've designed our process to be transparent, respectful of your time, 
              and focused on finding the right mutual fit.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-5">
            {hiringProcess.map((step, index) => (
              <div 
                key={step.step}
                className={`text-center animate-slide-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent font-display text-xl font-bold text-accent-foreground">
                  {step.step}
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="mb-12">
            <p className="mb-2 font-display text-sm font-semibold uppercase tracking-wider text-accent">
              Join Us
            </p>
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Open Positions
            </h2>
          </div>

          <div className="space-y-4">
            {openRoles.map((role, index) => (
              <Card 
                key={role.title}
                className={`card-hover cursor-pointer border-border/50 bg-card animate-slide-up`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {role.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {role.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {role.location}
                      </span>
                      <span>{role.type}</span>
                    </div>
                  </div>
                  <Button variant="coral">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Don't see a role that fits? 
              <Link to="/contact" className="ml-1 font-medium text-accent hover:underline">
                Send us your resume
              </Link>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Globe, Scale, Heart, Lightbulb } from "lucide-react";

const principles = [
  {
    icon: Shield,
    title: "Integrity & Honesty",
    description: "We conduct business with honesty, transparency, and the highest ethical standards. We never compromise on integrity, even when facing difficult decisions.",
  },
  {
    icon: Users,
    title: "Respect for People",
    description: "We treat all individuals with dignity and respect, fostering an inclusive environment where diverse perspectives are valued and everyone can thrive.",
  },
  {
    icon: Globe,
    title: "Social Responsibility",
    description: "We are committed to being good corporate citizens, contributing positively to the communities where we operate and minimizing our environmental impact.",
  },
  {
    icon: Scale,
    title: "Fair Competition",
    description: "We compete fairly and ethically, never engaging in practices that undermine free and open competition or harm our clients, partners, or the market.",
  },
  {
    icon: Heart,
    title: "Client Trust",
    description: "We protect client confidentiality and intellectual property, ensuring that the trust placed in us is never compromised.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Improvement",
    description: "We continuously evaluate and improve our practices, learning from mistakes and striving for excellence in all that we do.",
  },
];

export default function CodeOfConduct() {
  return (
    <Layout>
      <section className="bg-primary py-16 lg:py-24">
        <div className="container-custom">
          <h1 className="font-display text-4xl font-bold text-primary-foreground md:text-5xl">
            Code of Conduct
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-primary-foreground/80">
            Our commitment to ethical business practices and professional integrity.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-display text-2xl font-bold text-foreground">
              Our Commitment
            </h2>
            <p className="text-lg text-muted-foreground">
              At NexaTech Consulting, we believe that how we conduct ourselves is just as 
              important as what we achieve. Our Code of Conduct reflects our core values 
              and serves as a guide for all employees, partners, and stakeholders in 
              maintaining the highest standards of ethical behavior.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle, index) => (
              <Card 
                key={principle.title}
                className={`border-border/50 bg-card animate-slide-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <principle.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {principle.description}
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
            Reporting Concerns
          </h2>
          <p className="mb-4 text-muted-foreground">
            We encourage all employees and stakeholders to report any concerns about 
            unethical behavior, violations of our Code of Conduct, or any activities 
            that may harm our organization, clients, or communities.
          </p>
          <p className="mb-4 text-muted-foreground">
            Reports can be made confidentially through our ethics hotline or by contacting 
            our Chief Compliance Officer. We prohibit retaliation against anyone who makes 
            a good-faith report of a suspected violation.
          </p>
          <p className="text-muted-foreground">
            <strong className="text-foreground">Ethics Hotline:</strong> ethics@nexatech.com
          </p>
        </div>
      </section>
    </Layout>
  );
}

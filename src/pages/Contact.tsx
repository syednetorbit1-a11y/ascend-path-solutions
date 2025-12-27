import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const offices = [
  {
    city: "New York",
    address: "350 Fifth Avenue, Suite 3800",
    postalCode: "New York, NY 10118",
    phone: "+1 (212) 555-0100",
    email: "newyork@nexatech.com",
  },
  {
    city: "London",
    address: "30 St Mary Axe",
    postalCode: "London, EC3A 8BF, UK",
    phone: "+44 20 7123 4567",
    email: "london@nexatech.com",
  },
  {
    city: "Singapore",
    address: "1 Raffles Place, #20-61",
    postalCode: "Singapore 048616",
    phone: "+65 6123 4567",
    email: "singapore@nexatech.com",
  },
];

const inquiryTypes = [
  "General Inquiry",
  "Partnership Opportunity",
  "Service Consultation",
  "Career Inquiry",
  "Media Inquiry",
  "Other",
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    inquiryType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully",
      description: "We'll get back to you within 24-48 hours.",
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      inquiryType: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-24 lg:py-32">
        <div className="container-custom">
          <div className="max-w-3xl animate-slide-up">
            <p className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-accent">
              Contact Us
            </p>
            <h1 className="mb-6 font-display text-4xl font-bold text-primary-foreground md:text-5xl">
              Let's Start a Conversation
            </h1>
            <p className="text-lg text-primary-foreground/80 md:text-xl">
              Whether you're looking to transform your business, explore partnership 
              opportunities, or join our team, we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Form */}
            <Card className="border-border/50 bg-card animate-slide-in-left">
              <CardContent className="p-8">
                <h2 className="mb-6 font-display text-2xl font-bold text-foreground">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Business Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Inquiry Type *</Label>
                    <Select
                      value={formData.inquiryType}
                      onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select an inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project or inquiry..."
                      required
                    />
                  </div>

                  <Button type="submit" variant="coral" size="lg" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="animate-slide-in-right">
              <h2 className="mb-6 font-display text-2xl font-bold text-foreground">
                Get in Touch
              </h2>
              <p className="mb-8 text-muted-foreground">
                Our team typically responds within 24-48 hours. For urgent matters, 
                please reach out to your nearest office directly.
              </p>

              <div className="mb-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Business Hours</p>
                    <p className="text-sm text-muted-foreground">Monday - Friday, 9am - 6pm (Local Time)</p>
                  </div>
                </div>
              </div>

              <h3 className="mb-4 font-display text-lg font-semibold text-foreground">
                Our Offices
              </h3>
              <div className="space-y-6">
                {offices.map((office) => (
                  <Card key={office.city} className="border-border/50 bg-muted">
                    <CardContent className="p-4">
                      <h4 className="mb-2 font-display font-semibold text-foreground">
                        {office.city}
                      </h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p className="flex items-start gap-2">
                          <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                          {office.address}<br />{office.postalCode}
                        </p>
                        <p className="flex items-center gap-2">
                          <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                          {office.phone}
                        </p>
                        <p className="flex items-center gap-2">
                          <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                          {office.email}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="section-padding bg-muted">
        <div className="container-custom text-center">
          <CheckCircle2 className="mx-auto mb-6 h-12 w-12 text-accent" />
          <h2 className="mb-4 font-display text-2xl font-bold text-foreground md:text-3xl">
            Looking for Quick Answers?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Check out our insights section for articles on common technology 
            challenges and solutions, or explore our services to learn more 
            about how we can help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" asChild>
              <a href="/insights">Read Insights</a>
            </Button>
            <Button variant="coral" asChild>
              <a href="/services">Explore Services</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

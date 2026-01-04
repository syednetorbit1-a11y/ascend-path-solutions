import { Link } from "react-router-dom";
import { Linkedin, Twitter, Youtube, Github } from "lucide-react";
import amanexLogo from "@/assets/amanex-logo-new.png";

const footerLinks = {
  services: [
    { name: "Customer Experience", href: "/services/customer-experience" },
    { name: "Product Engineering", href: "/services/product-engineering" },
    { name: "Cloud & Platform", href: "/services/cloud-platform" },
    { name: "Data, Analytics & AI", href: "/services/data-ai" },
    { name: "Digital Operations", href: "/services/digital-operations" },
  ],
  industries: [
    { name: "Financial Services", href: "/industries/financial-services" },
    { name: "Healthcare", href: "/industries/healthcare" },
    { name: "Retail & E-commerce", href: "/industries/retail" },
    { name: "Travel & Logistics", href: "/industries/travel" },
    { name: "Technology & Media", href: "/industries/technology" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Code of Conduct", href: "/code-of-conduct" },
    { name: "Accessibility", href: "/accessibility" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center">
              <img src={amanexLogo} alt="Amanex Solutions" className="h-20 w-auto lg:h-24" />
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70">
              Transforming enterprises through technology excellence and innovation.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
              Industries
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Amanex Consulting. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Built with trust, driven by innovation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import amanexLogo from "@/assets/amanex-logo-transparent.png";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const services = [
  { title: "Customer Experience", href: "/services/customer-experience", description: "Transform how customers interact with your brand" },
  { title: "Product Engineering", href: "/services/product-engineering", description: "Build innovative digital products at scale" },
  { title: "Cloud & Platform", href: "/services/cloud-platform", description: "Modernize your infrastructure for the future" },
  { title: "Data, Analytics & AI", href: "/services/data-ai", description: "Unlock insights with intelligent solutions" },
  { title: "Digital Operations", href: "/services/digital-operations", description: "Optimize and manage your digital ecosystem" },
];

const industries = [
  { title: "Financial Services", href: "/industries/financial-services" },
  { title: "Healthcare", href: "/industries/healthcare" },
  { title: "Retail & E-commerce", href: "/industries/retail" },
  { title: "Travel & Logistics", href: "/industries/travel" },
  { title: "Technology & Media", href: "/industries/technology" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container-custom flex h-16 items-center justify-between lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={amanexLogo} alt="Amanex Solutions" className="h-16 w-auto lg:h-20" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent font-display text-sm font-medium">
                  What We Do
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] gap-2 p-4 md:grid-cols-2">
                    {services.map((service) => (
                      <li key={service.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={service.href}
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 focus:bg-accent/10"
                          >
                            <div className="font-display text-sm font-semibold leading-none text-foreground">{service.title}</div>
                            <p className="mt-1 line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                    <li className="col-span-2 border-t pt-2">
                      <NavigationMenuLink asChild>
                        <Link to="/services" className="block p-2 text-sm font-medium text-accent hover:underline">
                          View all services →
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent font-display text-sm font-medium">
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-1 p-4">
                    {industries.map((industry) => (
                      <li key={industry.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={industry.href}
                            className="block select-none rounded-md p-3 font-display text-sm font-medium leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10"
                          >
                            {industry.title}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                    <li className="border-t pt-2">
                      <NavigationMenuLink asChild>
                        <Link to="/industries" className="block p-2 text-sm font-medium text-accent hover:underline">
                          View all industries →
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  to="/insights"
                  className={cn(
                    "block px-4 py-2 font-display text-sm font-medium transition-colors hover:text-accent",
                    isActive("/insights") ? "text-accent" : "text-foreground"
                  )}
                >
                  Insights
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  to="/careers"
                  className={cn(
                    "block px-4 py-2 font-display text-sm font-medium transition-colors hover:text-accent",
                    isActive("/careers") ? "text-accent" : "text-foreground"
                  )}
                >
                  Careers
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  to="/about"
                  className={cn(
                    "block px-4 py-2 font-display text-sm font-medium transition-colors hover:text-accent",
                    isActive("/about") ? "text-accent" : "text-foreground"
                  )}
                >
                  About
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Link to="/contact">
            <Button variant="coral" size="default">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 border-t bg-background px-4 py-6">
            <div className="space-y-4">
              <div>
                <p className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">What We Do</p>
                <div className="mt-2 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      to={service.href}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent/10 hover:text-accent"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <p className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Industries</p>
                <div className="mt-2 space-y-1">
                  {industries.map((industry) => (
                    <Link
                      key={industry.title}
                      to={industry.href}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent/10 hover:text-accent"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {industry.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/insights"
                className="block rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent/10 hover:text-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                Insights
              </Link>
              <Link
                to="/careers"
                className="block rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent/10 hover:text-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                Careers
              </Link>
              <Link
                to="/about"
                className="block rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent/10 hover:text-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>

              <div className="pt-4">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="coral" className="w-full">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

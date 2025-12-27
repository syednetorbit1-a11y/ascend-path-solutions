import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Filter, Calendar, Clock, BookOpen, Headphones, FileText, ArrowRight } from "lucide-react";

const categories = ["All", "Technology Trends", "Cloud Strategy", "Digital Transformation", "Data & AI", "Engineering"];
const types = ["All", "Blog", "Article", "Research", "Podcast"];

const insights = [
  {
    type: "Research",
    category: "Technology Trends",
    title: "Technology Radar 2024",
    description: "Our biannual assessment of trends, techniques, tools, and platforms shaping the technology landscape.",
    date: "December 2024",
    readTime: "20 min read",
    featured: true,
  },
  {
    type: "Blog",
    category: "Data & AI",
    title: "The Future of Generative AI in Enterprise",
    description: "How organizations can strategically adopt and scale generative AI capabilities for competitive advantage.",
    date: "December 2024",
    readTime: "8 min read",
    featured: true,
  },
  {
    type: "Article",
    category: "Cloud Strategy",
    title: "Navigating Multi-Cloud Complexity",
    description: "Best practices for managing multi-cloud environments efficiently, securely, and cost-effectively.",
    date: "December 2024",
    readTime: "6 min read",
    featured: true,
  },
  {
    type: "Blog",
    category: "Digital Transformation",
    title: "Building a Data-Driven Culture",
    description: "Steps to foster data literacy and analytics adoption across your organization.",
    date: "November 2024",
    readTime: "10 min read",
    featured: false,
  },
  {
    type: "Podcast",
    category: "Engineering",
    title: "The Art of Platform Engineering",
    description: "A conversation with our platform engineering experts on building internal developer platforms.",
    date: "November 2024",
    readTime: "45 min listen",
    featured: false,
  },
  {
    type: "Article",
    category: "Technology Trends",
    title: "Edge Computing: The Next Frontier",
    description: "Understanding the shift from centralized cloud to distributed edge computing architectures.",
    date: "November 2024",
    readTime: "12 min read",
    featured: false,
  },
  {
    type: "Blog",
    category: "Cloud Strategy",
    title: "FinOps: Mastering Cloud Cost Management",
    description: "Strategies and practices for optimizing cloud spending while maximizing business value.",
    date: "October 2024",
    readTime: "7 min read",
    featured: false,
  },
  {
    type: "Research",
    category: "Data & AI",
    title: "State of Machine Learning Operations",
    description: "An in-depth analysis of MLOps practices, tools, and organizational patterns.",
    date: "October 2024",
    readTime: "25 min read",
    featured: false,
  },
  {
    type: "Podcast",
    category: "Digital Transformation",
    title: "Leading Digital Transformation",
    description: "Executive insights on driving organizational change and technology adoption.",
    date: "October 2024",
    readTime: "38 min listen",
    featured: false,
  },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "Blog":
      return BookOpen;
    case "Article":
      return FileText;
    case "Research":
      return FileText;
    case "Podcast":
      return Headphones;
    default:
      return BookOpen;
  }
};

export default function Insights() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const filteredInsights = insights.filter((insight) => {
    const matchesSearch = insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         insight.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || insight.category === selectedCategory;
    const matchesType = selectedType === "All" || insight.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  const featuredInsights = filteredInsights.filter((insight) => insight.featured);
  const otherInsights = filteredInsights.filter((insight) => !insight.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-24 lg:py-32">
        <div className="container-custom">
          <div className="max-w-3xl animate-slide-up">
            <p className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-accent">
              Insights
            </p>
            <h1 className="mb-6 font-display text-4xl font-bold text-primary-foreground md:text-5xl">
              Thought Leadership & Research
            </h1>
            <p className="text-lg text-primary-foreground/80 md:text-xl">
              Explore our latest thinking on technology trends, best practices, 
              and strategies for digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-40 border-b border-border bg-background/95 py-6 backdrop-blur lg:top-20">
        <div className="container-custom">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search insights..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "coral" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Type Filter */}
          <div className="mt-4 flex flex-wrap gap-2">
            {types.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setSelectedType(type)}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      {featuredInsights.length > 0 && (
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <h2 className="mb-8 font-display text-2xl font-bold text-foreground">
              Featured
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {featuredInsights.map((insight, index) => {
                const TypeIcon = getTypeIcon(insight.type);
                return (
                  <Card 
                    key={insight.title}
                    className={`card-hover group cursor-pointer border-border/50 bg-card animate-slide-up`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                          <TypeIcon className="h-3 w-3" />
                          {insight.type}
                        </span>
                        <span className="text-xs text-muted-foreground">{insight.category}</span>
                      </div>
                      <h3 className="mb-2 font-display text-xl font-semibold text-foreground group-hover:text-accent">
                        {insight.title}
                      </h3>
                      <p className="mb-4 text-muted-foreground">
                        {insight.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {insight.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {insight.readTime}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* All Insights */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="mb-8 font-display text-2xl font-bold text-foreground">
            All Insights
          </h2>
          {otherInsights.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherInsights.map((insight, index) => {
                const TypeIcon = getTypeIcon(insight.type);
                return (
                  <Card 
                    key={insight.title}
                    className={`card-hover group cursor-pointer border-border/50 bg-card animate-slide-up`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                          <TypeIcon className="h-3 w-3" />
                          {insight.type}
                        </span>
                      </div>
                      <h3 className="mb-2 font-display text-lg font-semibold text-foreground group-hover:text-accent">
                        {insight.title}
                      </h3>
                      <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                        {insight.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{insight.date}</span>
                        <span>{insight.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-lg text-muted-foreground">No insights found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                  setSelectedType("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-primary-foreground md:text-4xl">
            Stay Ahead of the Curve
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/80">
            Subscribe to our newsletter for the latest insights delivered directly to your inbox.
          </p>
          <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
            />
            <Button variant="coral">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

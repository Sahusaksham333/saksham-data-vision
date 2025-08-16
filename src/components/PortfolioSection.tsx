import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "TaskBot — Autonomous Productivity Agent",
      year: "2023",
      category: "AI & Automation",
      description: "An intelligent AI agent that automates task management and productivity workflows using LangChain and Python.",
      image: "/api/placeholder/600/400",
      tags: ["Python", "LangChain", "AI", "Automation"],
      link: "#",
      github: "#"
    },
    {
      title: "MarketScout AI — Research Agent",
      year: "2023", 
      category: "AI & Automation",
      description: "Autonomous market research agent that analyzes trends, competitor data, and consumer sentiment for strategic insights.",
      image: "/api/placeholder/600/400",
      tags: ["Python", "NLP", "Market Research", "AI"],
      link: "#",
      github: "#"
    },
    {
      title: "Market Pulse — Sentiment Analysis",
      year: "2023",
      category: "Data Analysis",
      description: "Advanced sentiment analysis dashboard tracking consumer opinions across social media and review platforms.",
      image: "/api/placeholder/600/400", 
      tags: ["Power BI", "Python", "Sentiment Analysis", "Dashboard"],
      link: "#",
      github: "#"
    },
    {
      title: "EduTrends — Interactive Dashboard",
      year: "2023",
      category: "Business Intelligence",
      description: "Comprehensive EdTech analytics platform providing insights into student engagement and learning outcomes.",
      image: "/api/placeholder/600/400",
      tags: ["Tableau", "SQL", "Education", "Analytics"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="bg-green-subtle text-primary border-primary/30 mb-4">
            SELECTED WORK 2022-2023
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Elevating Brands with
            <br />
            <span className="text-primary">Design Brilliance</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground font-medium">
                      {project.title}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
              </div>

              {/* Project Image */}
              <div className="relative h-64 bg-gradient-card overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-muted-foreground/20">
                    {project.category === "AI & Automation" ? "🤖" : 
                     project.category === "Data Analysis" ? "📊" : "📈"}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex space-x-3">
                    <Button size="sm" variant="hero" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                    <Button size="sm" variant="outline" className="border-primary text-primary">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                    {project.category}
                  </Badge>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 text-xs bg-green-subtle text-primary rounded-md border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Browse All Work Button */}
        <div className="text-center">
          <Button variant="hero" size="lg" className="animate-fade-in">
            Browse all work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Database, Bot, TrendingUp } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Business Intelligence & Visualization",
      description: "I transform raw data into stunning, interactive dashboards using Power BI and Tableau, revealing key business trends and performance metrics.",
      features: [
        "Custom Tailored Dashboards",
        "Responsive Data Layouts",
        "Real-time Analytics"
      ],
      highlighted: true
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Custom AI Agent Development",
      description: "I design and build autonomous AI agents using Python and modern frameworks like LangChain to automate research, enhance productivity, and solve unique challenges.",
      features: [
        "HTML, CSS, & JS Expertise",
        "Cross-Browser Compatibility", 
        "Faster Load Times"
      ],
      highlighted: false
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Data Analysis & Strategy",
      description: "From sentiment analysis to market research, I provide deep data analysis that informs startup validation, feature prioritization, and data-driven decision-making.",
      features: [
        "Logo Design",
        "Cohesive Color Palettes",
        "Brand Guidelines"
      ],
      highlighted: false
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="bg-green-subtle text-primary border-primary/30 mb-4">
            WHAT I OFFER
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Empowering Brands
            <br />
            Through <span className="text-primary">Design</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`p-8 border transition-all duration-300 hover:shadow-card hover:-translate-y-2 ${
                service.highlighted 
                  ? "bg-gradient-green border-primary text-primary-foreground" 
                  : "bg-card border-border hover:border-primary/50"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="space-y-6">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-lg ${
                  service.highlighted 
                    ? "bg-primary-foreground/20" 
                    : "bg-primary/10"
                }`}>
                  <div className={service.highlighted ? "text-primary-foreground" : "text-primary"}>
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className={`text-xl font-bold ${
                    service.highlighted ? "text-primary-foreground" : "text-foreground"
                  }`}>
                    {service.title}
                  </h3>
                  
                  <p className={`leading-relaxed ${
                    service.highlighted ? "text-primary-foreground/90" : "text-muted-foreground"
                  }`}>
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 border-t pt-6 border-opacity-20">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          service.highlighted ? "bg-primary-foreground" : "bg-primary"
                        }`} />
                        <span className={`text-sm ${
                          service.highlighted ? "text-primary-foreground/90" : "text-muted-foreground"
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  variant={service.highlighted ? "outline" : "hero"}
                  className={service.highlighted 
                    ? "border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" 
                    : ""
                  }
                  onClick={() => scrollToSection("contact")}
                >
                  Schedule a consultation
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
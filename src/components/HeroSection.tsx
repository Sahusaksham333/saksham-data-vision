import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import sakshamPortrait from "@/assets/saksham-portrait.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in">
            <Badge className="bg-green-subtle text-primary border-primary/30 mb-4">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              AVAILABLE FOR WORK
            </Badge>
            
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                SAKSHAM
                <br />
                <span className="text-primary">SAHU</span>
              </h1>
              
              <div className="text-2xl lg:text-3xl text-muted-foreground font-medium">
                Building Intelligent Systems
                <br />
                <span className="text-primary">with Data.</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Innovative Data Science enthusiast turning complex data into actionable insights and intelligent AI solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection("portfolio")}
                className="text-lg"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-elegant animate-float">
                <div className="absolute inset-0 bg-gradient-green opacity-20 z-10"></div>
                <img 
                  src={sakshamPortrait}
                  alt="Saksham Sahu - Data Scientist & AI Engineer"
                  className="w-full h-full object-cover filter brightness-110 contrast-110"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full animate-glow-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-primary/60 rounded-full animate-glow-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
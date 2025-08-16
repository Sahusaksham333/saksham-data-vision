import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Download } from "lucide-react";
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
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-glow/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-noise"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in">
            {/* Status Badge with Glass Effect */}
            <div className="flex justify-center lg:justify-start mb-6">
              <Badge className="bg-white/5 backdrop-blur-sm text-primary border border-primary/20 shadow-glow px-4 py-2 hover:bg-white/10 transition-all duration-300">
                <Sparkles className="w-3 h-3 mr-2 animate-pulse" />
                AVAILABLE FOR WORK
                <span className="ml-2 w-2 h-2 bg-primary rounded-full animate-ping"></span>
              </Badge>
            </div>
            
            {/* Enhanced Typography */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-8xl font-black text-foreground leading-[0.9] tracking-tight">
                <span className="block bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
                  SAKSHAM
                </span>
                <span className="block bg-gradient-to-r from-primary via-green-glow to-primary bg-clip-text text-transparent animate-gradient-x">
                  SAHU
                </span>
              </h1>
              
              <div className="text-2xl lg:text-4xl font-semibold">
                <span className="text-muted-foreground">Building </span>
                <span className="bg-gradient-to-r from-primary to-green-glow bg-clip-text text-transparent">
                  Intelligent Systems
                </span>
                <br />
                <span className="text-muted-foreground">with </span>
                <span className="bg-gradient-to-r from-green-glow to-primary bg-clip-text text-transparent">
                  Data.
                </span>
              </div>
            </div>

            {/* Enhanced Description with Glass Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-w-2xl">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Innovative Data Science enthusiast turning 
                <span className="text-primary font-semibold"> complex data </span>
                into actionable insights and 
                <span className="text-green-glow font-semibold"> intelligent AI solutions</span>.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection("portfolio")}
                className="text-lg group relative overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="text-lg border-primary/30 text-primary hover:bg-primary/10 hover:border-primary backdrop-blur-sm bg-white/5 group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </div>
            
            {/* Stats or Social Proof */}
            <div className="flex items-center gap-8 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">5+</span>
                </div>
                <span>Projects Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-glow/20 flex items-center justify-center">
                  <span className="text-green-glow font-bold">AI</span>
                </div>
                <span>Specialized in AI/ML</span>
              </div>
            </div>
          </div>

          {/* Enhanced Profile Image Section */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Main Image Container with Advanced Effects */}
              <div className="relative w-80 h-80 lg:w-[28rem] lg:h-[28rem]">
                {/* Glowing Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary via-green-glow to-primary p-1 animate-gradient-rotate">
                  <div className="w-full h-full rounded-3xl overflow-hidden bg-background">
                    <img 
                      src={sakshamPortrait}
                      alt="Saksham Sahu - Data Scientist & AI Engineer"
                      className="w-full h-full object-cover filter brightness-110 contrast-110 transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay Effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-green opacity-10"></div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary/80 backdrop-blur-sm rounded-2xl animate-float flex items-center justify-center shadow-glow">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-10 h-10 bg-green-glow/80 backdrop-blur-sm rounded-xl animate-float delay-500 flex items-center justify-center shadow-glow">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="absolute top-1/4 -right-8 w-6 h-6 bg-primary/60 rounded-full animate-glow-pulse delay-1000"></div>
                <div className="absolute bottom-1/3 -left-8 w-4 h-4 bg-green-glow/60 rounded-full animate-glow-pulse delay-700"></div>
                
                {/* Background Glow */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 to-green-glow/20 rounded-3xl blur-2xl scale-110 opacity-60 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  const skills = [
    { name: "Python", level: 95 },
    { name: "SQL", level: 90 },
    { name: "Power BI", level: 85 },
    { name: "Tableau", level: 80 },
    { name: "LangChain", level: 88 },
    { name: "Machine Learning", level: 92 },
    { name: "Data Analysis", level: 95 },
    { name: "AI Development", level: 87 }
  ];

  const stats = [
    { number: "05+", label: "Years of Experience", description: "Decades of experience in delivering exceptional projects." },
    { number: "50+", label: "Projects Delivered", description: "Decades of experience in delivering exceptional projects." },
    { number: "98%", label: "Client Satisfaction", description: "I build long-term partnerships through proven results." }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="bg-green-subtle text-primary border-primary/30 mb-4">
            ABOUT ME
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Discover My Design
            <br />
            <span className="text-primary">Journey</span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Bio */}
          <div className="space-y-6 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-foreground">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm Saksham Sahu, a passionate Data Scientist with over 5+ years of experience in 
                creating visually appealing and intelligent data solutions. My mission is to bring your 
                brand to life through innovative design solutions tailored to your unique needs.
              </p>
              <p>
                Currently pursuing B.Tech at MITS Gwalior, I specialize in transforming complex data into 
                actionable business insights through advanced analytics, machine learning, and custom AI 
                agent development.
              </p>
              <p>
                From startup validation research to enterprise-level dashboard development, I combine 
                technical expertise with business acumen to deliver solutions that drive real results.
              </p>
            </div>

            {/* Education */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-foreground mb-3">Education</h4>
              <div className="border-l-2 border-primary/30 pl-6">
                <div className="relative">
                  <div className="absolute -left-8 top-2 w-3 h-3 bg-primary rounded-full"></div>
                  <h5 className="font-medium text-foreground">B.Tech in Engineering</h5>
                  <p className="text-muted-foreground">MITS, Gwalior</p>
                  <p className="text-sm text-muted-foreground">2020 - 2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-6 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-foreground">Technical Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-primary font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-green rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 100}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-primary py-16 rounded-2xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="text-5xl lg:text-6xl font-bold text-primary-foreground">
                  {stat.number}
                </div>
                <h4 className="text-xl font-semibold text-primary-foreground">
                  {stat.label}
                </h4>
                <p className="text-primary-foreground/80 max-w-xs mx-auto">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
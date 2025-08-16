import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "sahusaksham333@gmail.com",
      href: "mailto:sahusaksham333@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 8103803347",
      href: "tel:+918103803347"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "#"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub", 
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Main CTA */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="bg-green-subtle text-primary border-primary/30 mb-4">
            HAVE PROJECT IN MIND?
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
            Let's Turn your Ideas
            <br />
            into <span className="text-primary">Reality</span>
          </h2>
          <div className="mb-12">
            <a 
              href="mailto:sahusaksham333@gmail.com"
              className="text-xl lg:text-2xl text-primary hover:text-primary/80 transition-colors font-medium inline-flex items-center space-x-2"
            >
              <Mail className="w-6 h-6" />
              <span>sahusaksham333@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-16">
          {contactInfo.map((contact, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <a 
                href={contact.href}
                className="flex items-center space-x-4 group"
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary">
                    {contact.icon}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{contact.label}</div>
                  <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {contact.value}
                  </div>
                </div>
              </a>
            </Card>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-16">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Navigation Footer */}
        <div className="text-center border-t border-border pt-8">
          <nav className="flex justify-center space-x-8 text-muted-foreground">
            <button 
              onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
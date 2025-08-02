import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Brain, Workflow } from "lucide-react";
import heroImage from "@/assets/hero-ai-automation.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Header with Logo */}
      <div className="absolute top-0 left-0 right-0 z-20 p-6">
        <a href="#hero" className="inline-flex items-center justify-center w-8 h-8 bg-white rounded-full">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary">
            <circle cx="12" cy="12" r="10" fill="currentColor"/>
            <path d="M12 6l4 6-4 6-4-6z" fill="white"/>
          </svg>
        </a>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full blur-3xl animate-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent rounded-full blur-3xl animate-glow delay-300"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 text-sm">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Next-Gen Automation</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Turn Busywork Into{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Autopilot
                </span>{" "}
                – Save 420 Hours a Year
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                <span>AI agents built &amp; live in &lt; 30 days</span><span className="pl-2 animate-typing" data-words="AI Agents,No-Code Bots,Python Scripts"></span>
              </p>
              
              {/* Integration Partners Bar */}
              <div className="grid grid-cols-3 lg:flex lg:flex-wrap justify-center lg:justify-start items-center gap-4 lg:gap-6 mt-6 animate-fade-in">
                {[
                  { name: "Make.com", logoPath: "/logos/make-logo.png", alt: "Make.com logo" },
                  { name: "Zapier", logoPath: "/logos/zapier-logo.png", alt: "Zapier logo" },
                  { name: "Python", logoPath: "/logos/python-logo.png", alt: "Python logo" },
                  { name: "OpenAI", logoPath: "/logos/openai-logo.png", alt: "OpenAI logo" },
                  { name: "Slack", logoPath: "/logos/slack-logo.png", alt: "Slack logo" },
                  { name: "Notion", logoPath: "/logos/notion-logo.png", alt: "Notion logo" }
                ].map((partner, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-center p-2 grayscale hover:grayscale-0 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <img
                      src={partner.logoPath}
                      alt={partner.alt}
                      className="h-10 w-auto"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              
              {/* Disclaimer */}
              <p className="text-xs text-muted-foreground text-center mt-4 opacity-60">
                *All brand visuals are illustrative dummy logos—no affiliation implied.
              </p>
            </div>
            
            <div className="flex flex-col items-center lg:items-start">
              <Button variant="premium" size="lg" className="group text-lg px-8 py-4" aria-label="Book My Free Automation Audit">
                Book My Free Automation Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-muted-foreground mt-1 text-center lg:text-left">Takes &lt; 2 min</p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/30">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">AI Agents Deployed</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Efficiency Increase</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Autonomous Operation</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-30 animate-glow"></div>
            <img 
              src={heroImage} 
              alt="AI Automation Dashboard" 
              className="relative rounded-3xl shadow-premium w-full h-auto"
            />
            
            {/* Floating cards */}
            <div className="absolute -top-6 -left-6 bg-card/90 backdrop-blur-sm border border-border rounded-xl p-4 shadow-premium animate-fade-in delay-500">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Smart Processing</div>
                  <div className="text-xs text-muted-foreground">99.9% accuracy</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-card/90 backdrop-blur-sm border border-border rounded-xl p-4 shadow-premium animate-fade-in delay-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Workflow className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Auto Scaling</div>
                  <div className="text-xs text-muted-foreground">Real-time adaptation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
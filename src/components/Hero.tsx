import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Brain, Workflow } from "lucide-react";
import { HeroIllustration } from "@/components/HeroIllustration";
import { SpotlightCursor } from "@/components/ui/spotlight-cursor";
import { Typewriter } from "@/components/ui/typewriter";
import HeroAIOverlay from "@/components/HeroAIOverlay";
import HeroNeuralNetwork from "@/components/HeroNeuralNetwork";

const Hero = () => {
  return (
    <section className="bg-gradient-hero relative overflow-hidden">
      {/* Full Hero Spotlight Effect */}
      <SpotlightCursor size={400} />
      {/* AI Overlay Effect */}
      <HeroAIOverlay />
      {/* Header with Logo */}
      <div className="absolute top-0 left-0 right-0 z-20 p-2">
        <a href="#hero" className="inline-flex items-center">
          <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            ProAgentz
          </div>
        </a>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full blur-3xl animate-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent rounded-full blur-3xl animate-glow delay-300"></div>
      </div>
      
      <div className="container mx-auto px-6 pt-0 pb-8 lg:pb-12 relative z-10">
        <div className="grid lg:grid-cols-[1fr_0.9fr] xl:grid-cols-2 gap-6 lg:gap-8 items-end min-h-[80vh] lg:min-h-[75vh]">
          {/* Content */}
          <div className="space-y-6 animate-fade-in flex flex-col justify-center order-1 lg:order-none">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 text-sm">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Next-Gen Automation</span>
              </div>
              
              <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Turn Busywork Into{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Autopilot
                </span>{" "}
                – Save 420 Hours a Year
              </h1>
              
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                <span>AI agents built & live in &lt; 30 days – </span>
                <Typewriter
                  text={[
                    "No-Code Bots",
                    "Python Scripts", 
                    "Zapier Flows",
                    "n8n Workflows",
                    "Make.com Scenarios"
                  ]}
                  speed={70}
                  className="text-primary font-bold"
                  waitTime={1500}
                  deleteSpeed={40}
                  showCursor={false}
                />
              </p>
              
              {/* Integration Partners Bar */}
              <div className="grid grid-cols-3 lg:flex lg:flex-wrap justify-center lg:justify-start items-center gap-3 lg:gap-4 mt-4 animate-fade-in">
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
              <p className="logo-disclaimer text-xs text-muted-foreground text-left mt-3 opacity-60">
                *All brand visuals are illustrative dummy logos—no affiliation implied.
              </p>
            </div>
            
            <div className="flex flex-col items-center lg:items-start">
              <Button 
                variant="premium" 
                size="lg" 
                className="group text-base px-6 py-3 w-full max-w-xs lg:w-auto" 
                aria-label="Book My Free Automation Audit"
                onClick={() => document.querySelector('#lead-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              >
                Book My Free Automation Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-muted-foreground mt-1 text-center lg:text-left">Takes &lt; 2 min</p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 pb-0 mb-0 border-t border-border/30">
              <div className="space-y-1">
                <div className="text-lg lg:text-xl font-bold text-primary">500+</div>
                <div className="text-xs text-muted-foreground">AI Agents Deployed</div>
              </div>
              <div className="space-y-1">
                <div className="text-lg lg:text-xl font-bold text-primary">98%</div>
                <div className="text-xs text-muted-foreground">Efficiency Increase</div>
              </div>
              <div className="space-y-1">
                <div className="text-lg lg:text-xl font-bold text-primary">24/7</div>
                <div className="text-xs text-muted-foreground">Autonomous Operation</div>
              </div>
            </div>
          </div>
          
          {/* Hero Illustration - Aligned with content */}
          <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[600px] xl:h-[650px] w-full order-2 lg:order-none self-end">
            <HeroIllustration />
            <HeroNeuralNetwork />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
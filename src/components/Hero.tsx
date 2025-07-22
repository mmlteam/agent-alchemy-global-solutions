import { Button } from "@/components/ui/button";
import { ArrowRight, Bot } from "lucide-react";
import heroImage from "@/assets/hero-ai-automation.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
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
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Turn Busywork Into{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Autopilot
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Used by 200+ tech & D2C brands.
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-start">
              <Button variant="premium" size="lg" className="group text-lg px-8 py-4">
                Book My Free Automation Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Takes &lt; 2 min
            </p>
          </div>
          
          {/* AI Workflow Animation */}
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-30 animate-glow"></div>
            <img 
              src={heroImage} 
              alt="AI Automation Workflow" 
              className="relative rounded-3xl shadow-premium w-full h-auto"
            />
            
            {/* Floating workflow indicator */}
            <div className="absolute -top-6 -left-6 bg-card/90 backdrop-blur-sm border border-border rounded-xl p-4 shadow-premium animate-fade-in delay-500">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary animate-pulse" />
                </div>
                <div>
                  <div className="font-semibold text-sm">AI Agent</div>
                  <div className="text-xs text-muted-foreground">Working...</div>
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
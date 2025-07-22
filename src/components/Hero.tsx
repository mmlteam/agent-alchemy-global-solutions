import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Brain, Workflow } from "lucide-react";
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
              <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 text-sm">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Next-Gen Automation</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Unlock{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  AI-Driven Growth
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Trusted by 200+ tech brands to automate workflows and scale operations with enterprise-grade AI solutions.
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-start">
              <Button variant="premium" size="lg" className="group text-lg px-8 py-4">
                Get My Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
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
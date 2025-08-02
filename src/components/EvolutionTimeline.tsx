import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Store, Smartphone, Car, Play, Tv, Bot, FileSpreadsheet } from "lucide-react";

const techWaves = [
  {
    era: "Internet Commerce",
    winner: { label: "E-Commerce Pioneers", icon: ShoppingCart },
    laggard: { label: "Brick-and-Mortar Holdouts", icon: Store },
    metric: "Online share ↑ 100%"
  },
  {
    era: "Mobile Apps", 
    winner: { label: "Ride-Hailing Apps", icon: Smartphone },
    laggard: { label: "Traditional Taxis", icon: Car },
    metric: "5B rides/yr"
  },
  {
    era: "Cloud Streaming",
    winner: { label: "Streaming Platforms", icon: Play },
    laggard: { label: "Cable-Only TV", icon: Tv },
    metric: "220M subs"
  },
  {
    era: "AI Automation",
    winner: { label: "AI-Driven Ops", icon: Bot },
    laggard: { label: "Manual Spreadsheet Ops", icon: FileSpreadsheet },
    metric: "Productivity ↑ 300%"
  }
];

const LogoIcon = ({ Icon, isWinner }: { Icon: any, isWinner: boolean }) => (
  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105 ${
    isWinner ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
  } grayscale hover:grayscale-0`}>
    <Icon className="w-6 h-6" />
  </div>
);

const EvolutionTimeline = () => {
  return (
    <section className="py-12 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-8 animate-fade-in">
          <h2 className="text-2xl lg:text-3xl font-bold">
            Your Competitors Are Already{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Automating
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            While you're still doing manual work, they're scaling with AI. 
            <span className="text-destructive font-semibold"> Don't be the next business left behind.</span>
          </p>
        </div>
        
        {/* Desktop Horizontal Scroll */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-16 left-8 right-8 h-1 bg-gradient-primary rounded-full"></div>
            
            <div className="flex gap-4 overflow-x-auto scroll-snap-x-mandatory pb-4" style={{ scrollSnapType: 'x mandatory' }}>
              {techWaves.map((wave, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-60 animate-fade-in scroll-snap-start"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    scrollSnapAlign: 'start'
                  }}
                >
                  {/* Timeline Dot */}
                  <div className="w-4 h-4 bg-primary rounded-full border-2 border-background shadow-glow-primary mx-auto mb-4"></div>
                  
                  {/* Wave Header */}
                  <div className="text-center mb-3">
                    <h3 className="text-sm font-bold text-primary mb-1">{wave.era}</h3>
                    <p className="text-xs font-medium text-muted-foreground">{wave.metric}</p>
                  </div>
                  
                  {/* Winner vs Laggard Cards */}
                  <div className="grid grid-cols-2 gap-2">
                    {/* Winner */}
                    <Card className="p-2 bg-green-500/5 border-green-500/20">
                      <LogoIcon Icon={wave.winner.icon} isWinner={true} />
                      <p className="text-xs font-medium text-green-600 mt-2 leading-tight">{wave.winner.label}</p>
                    </Card>
                    
                    {/* Laggard */}
                    <Card className="p-2 bg-red-500/5 border-red-500/20">
                      <LogoIcon Icon={wave.laggard.icon} isWinner={false} />
                      <p className="text-xs font-medium text-red-600 mt-2 leading-tight">{wave.laggard.label}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Vertical */}
        <div className="lg:hidden space-y-4">
          {techWaves.map((wave, index) => (
            <div 
              key={index}
              className="animate-fade-in"
              style={{ 
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Wave Header */}
              <div className="text-center mb-3">
                <div className="w-4 h-4 bg-primary rounded-full border-2 border-background shadow-glow-primary mx-auto mb-2"></div>
                <h3 className="text-sm font-bold text-primary mb-1">{wave.era}</h3>
                <p className="text-xs font-medium text-muted-foreground">{wave.metric}</p>
              </div>
              
              {/* Winner vs Laggard Cards */}
              <div className="grid grid-cols-2 gap-2">
                {/* Winner */}
                <Card className="p-2 bg-green-500/5 border-green-500/20">
                  <LogoIcon Icon={wave.winner.icon} isWinner={true} />
                  <p className="text-xs font-medium text-green-600 mt-2 leading-tight">{wave.winner.label}</p>
                </Card>
                
                {/* Laggard */}
                <Card className="p-2 bg-red-500/5 border-red-500/20">
                  <LogoIcon Icon={wave.laggard.icon} isWinner={false} />
                  <p className="text-xs font-medium text-red-600 mt-2 leading-tight">{wave.laggard.label}</p>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <h3 className="text-2xl font-bold mb-4">Where will you be in the AI wave?</h3>
          <Button 
            variant="premium" 
            size="lg"
            onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join the Winners
          </Button>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-muted-foreground text-center mt-8 opacity-60">
          All brand visuals are illustrative dummy logos—no affiliation implied.
        </p>
      </div>
    </section>
  );
};

export default EvolutionTimeline;
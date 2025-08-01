import { Card } from "@/components/ui/card";

const milestones = [
  { year: "2014", milestone: "Rule-based Zaps emerge" },
  { year: "2018", milestone: "API-first era (Make.com)" },
  { year: "2022", milestone: "GPT-3 powers smart agents" },
  { year: "2024", milestone: "Multi-modal AI & low-code pipelines" },
  { year: "2025+", milestone: "Autonomous workflows become the norm" }
];

const EvolutionTimeline = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Evolution of{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Automation
            </span>
          </h2>
        </div>
        
        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-primary rounded-full transform -translate-y-1/2"></div>
            
            <div className="flex justify-between items-center relative">
              {milestones.map((item, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center animate-fade-in"
                  style={{ 
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  {/* Timeline Dot */}
                  <div className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-glow-primary animate-pulse" 
                       style={{ animationDelay: `${index * 500}ms` }}></div>
                  
                  {/* Content Card */}
                  <Card className="mt-4 p-4 bg-card/80 backdrop-blur-sm border-primary/20 max-w-48 text-center hover:shadow-premium transition-all duration-300">
                    <div className="text-lg font-bold text-primary mb-2">{item.year}</div>
                    <p className="text-sm text-muted-foreground leading-tight">{item.milestone}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6">
          {milestones.map((item, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 animate-fade-in"
              style={{ 
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Timeline Dot */}
              <div className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-glow-primary flex-shrink-0 mt-2"></div>
              
              {/* Content */}
              <Card className="flex-1 p-4 bg-card/80 backdrop-blur-sm border-primary/20">
                <div className="text-lg font-bold text-primary mb-1">{item.year}</div>
                <p className="text-sm text-muted-foreground">{item.milestone}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EvolutionTimeline;
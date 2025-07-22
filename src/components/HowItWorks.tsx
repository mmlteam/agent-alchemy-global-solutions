import { Card, CardContent } from "@/components/ui/card";
import { Search, Wrench, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Map Processes",
    description: "We audit your current workflows and identify automation opportunities"
  },
  {
    number: "02", 
    icon: Wrench,
    title: "Build & Test Bots",
    description: "Custom AI agents built specifically for your business needs and tested thoroughly"
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Monitor & Optimise",
    description: "Continuous monitoring with performance improvements and scaling recommendations"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            How It <span className="bg-gradient-primary bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple 3-step process to transform your operations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Vertical Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-0.5 bg-border"></div>
            
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <div key={index} className="relative mb-16 last:mb-0">
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full border-4 border-background flex items-center justify-center z-10">
                    <span className="text-primary-foreground font-bold text-sm">{step.number}</span>
                  </div>
                  
                  {/* Card */}
                  <div className={`flex ${isLeft ? 'justify-start pr-8' : 'justify-end pl-8'}`}>
                    <div className={`w-full max-w-md ${isLeft ? 'mr-8' : 'ml-8'}`}>
                      <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
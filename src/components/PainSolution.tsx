import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, TrendingDown, Zap, ArrowRight, CheckCircle, Cpu, BarChart3 } from "lucide-react";
import { useState } from "react";

const painPoints = [
  {
    id: 1,
    icon: Clock,
    title: "Manual Bottlenecks",
    pain: "Teams spend 60% of time on repetitive tasks instead of strategic work",
    solution: "AI agents automate routine processes, freeing teams for high-value activities",
    solutionIcon: Cpu,
    metric: "↑ 300% productivity"
  },
  {
    id: 2, 
    icon: TrendingDown,
    title: "Resource Drain",
    pain: "High operational costs from manual processes and human errors",
    solution: "Intelligent automation reduces costs while improving accuracy and speed",
    solutionIcon: CheckCircle,
    metric: "↓ 60% operational costs"
  },
  {
    id: 3,
    icon: Zap,
    title: "Slow GTM",
    pain: "Delayed time-to-market due to inefficient workflows and bottlenecks",
    solution: "Streamlined AI workflows accelerate product launches and customer delivery",
    solutionIcon: BarChart3,
    metric: "↑ 43% faster delivery"
  }
];

const PainSolution = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            From{" "}
            <span className="text-destructive">
              Pain Points
            </span>{" "}
            to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how AI automation transforms your biggest operational challenges into competitive advantages.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {painPoints.map((item, index) => (
            <Card 
              key={item.id}
              className={`p-6 cursor-pointer transition-all duration-500 border-2 animate-fade-in hover:shadow-premium ${
                activeCard === item.id 
                  ? 'border-primary bg-primary/5 transform scale-105' 
                  : 'border-border/50 hover:border-primary/50'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setActiveCard(item.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="space-y-6">
                {/* Pain State */}
                <div className={`transition-all duration-500 ${activeCard === item.id ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                  <div className="w-12 h-12 bg-destructive/20 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.pain}</p>
                </div>

                {/* Solution State */}
                <div className={`absolute inset-6 transition-all duration-500 ${
                  activeCard === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}>
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                    <item.solutionIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">AI Solution</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{item.solution}</p>
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">
                    <CheckCircle className="w-4 h-4" />
                    {item.metric}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="premium" size="lg" className="group">
            Get My Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PainSolution;
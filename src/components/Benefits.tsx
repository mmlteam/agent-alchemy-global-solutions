import { Card } from "@/components/ui/card";
import { TrendingUp, Clock, DollarSign, Users, Cpu, Globe } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "300% Productivity Boost",
    description: "Automate repetitive tasks and free your team to focus on strategic initiatives.",
    metric: "300%"
  },
  {
    icon: Clock,
    title: "24/7 Operations",
    description: "AI agents work around the clock, ensuring continuous business operations.",
    metric: "24/7"
  },
  {
    icon: DollarSign,
    title: "Cost Reduction",
    description: "Reduce operational costs by up to 60% through intelligent automation.",
    metric: "60%"
  },
  {
    icon: Users,
    title: "Enhanced CX",
    description: "Deliver exceptional customer experiences with instant, accurate responses.",
    metric: "98%"
  },
  {
    icon: Cpu,
    title: "Scalable Solutions",
    description: "Scale your operations instantly without hiring additional resources.",
    metric: "∞"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serve customers worldwide with multi-language AI agent capabilities.",
    metric: "50+"
  }
];

const Benefits = () => {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Why Choose{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI Automation
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your business with measurable results that drive growth, 
            efficiency, and competitive advantage in today's digital landscape.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-glow-primary animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">{benefit.metric}</div>
                    <div className="text-xs text-muted-foreground">Average</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
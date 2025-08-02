import { Card } from "@/components/ui/card";
import { TrendingUp, Clock, DollarSign, BarChart3 } from "lucide-react";

const metricsData = [
  {
    id: 1,
    layout: 'full-left',
    title: "300% Productivity Boost",
    description: "AI agents handle routine tasks while your team focuses on strategy",
    icon: TrendingUp,
    metric: "3x faster"
  },
  {
    id: 2,
    layout: 'icon-right',
    title: "24/7",
    icon: Clock,
    metric: "24/7 Operations"
  },
  {
    id: 3,
    layout: 'full-left',
    title: "60% Cost Reduction", 
    description: "Eliminate manual labor costs and reduce operational overhead",
    icon: DollarSign,
    metric: "Save 60%"
  },
  {
    id: 4,
    layout: 'icon-right',
    title: "$",
    icon: DollarSign,
    metric: "Cost Savings"
  }
];

const MetricsZigZag = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Measurable{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Results
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real metrics from real AI automation implementations
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Row 1: Full Left + Icon Right */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <Card className="p-8 border-border/50 hover:border-primary/50 hover:shadow-premium transition-all duration-300 animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">300% Productivity Boost</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    AI agents handle routine tasks while your team focuses on strategy
                  </p>
                  <div className="text-sm font-semibold text-primary">3x faster execution</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-border/50 hover:border-primary/50 hover:scale-105 transition-all duration-300 animate-fade-in delay-200 text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">Progress</div>
              <div className="w-full bg-muted rounded-full h-3">
                <div className="bg-gradient-primary h-3 rounded-full w-4/5"></div>
              </div>
            </Card>
          </div>

          {/* Row 2: Icon Left + Full Right */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <Card className="p-6 border-border/50 hover:border-primary/50 hover:scale-105 transition-all duration-300 animate-fade-in delay-300 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary">24/7</div>
            </Card>
            
            <Card className="p-8 border-border/50 hover:border-primary/50 hover:shadow-premium transition-all duration-300 animate-fade-in delay-400">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">24/7 Operations</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Never-stop automation that works while you sleep, ensuring continuous productivity
                  </p>
                  <div className="text-sm font-semibold text-accent">Always-on efficiency</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Row 3: Full Left + Icon Right */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <Card className="p-8 border-border/50 hover:border-primary/50 hover:shadow-premium transition-all duration-300 animate-fade-in delay-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-green-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">60% Cost Reduction</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Eliminate manual labor costs and reduce operational overhead significantly
                  </p>
                  <div className="text-sm font-semibold text-green-500">Save 60% annually</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 border-border/50 hover:border-primary/50 hover:scale-105 transition-all duration-300 animate-fade-in delay-600 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-green-500" />
              </div>
              <div className="text-3xl font-bold text-green-500 mb-2">₹</div>
              <div className="text-sm text-muted-foreground">Total savings</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsZigZag;
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

const ROICalculator = () => {
  const [employeeCost, setEmployeeCost] = useState<number>(50000);
  const [hoursAutomated, setHoursAutomated] = useState<number>(10);
  const [annualSavings, setAnnualSavings] = useState<number>(0);
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    // Calculate annual savings: (hours per week * 52 weeks * hourly cost)
    const hourlyCost = employeeCost / (40 * 52); // Assuming 40 hrs/week, 52 weeks/year
    const savings = hoursAutomated * 52 * hourlyCost;
    setAnnualSavings(Math.round(savings));
    
    // Show CTA if savings > ₹1L
    setShowCTA(savings > 100000);
  }, [employeeCost, hoursAutomated]);

  const formatCurrency = (amount: number) => {
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    }
    return `₹${amount.toLocaleString()}`;
  };

  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Calculate Your <span className="bg-gradient-primary bg-clip-text text-transparent">ROI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how much you could save with automation
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Interactive ROI Calculator</h3>
              </div>

              <div className="space-y-6">
                {/* Inputs */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="employee-cost">Average Employee Cost (Annual)</Label>
                    <Input
                      id="employee-cost"
                      type="number"
                      value={employeeCost}
                      onChange={(e) => setEmployeeCost(Number(e.target.value))}
                      placeholder="50000"
                      className="text-lg"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="hours-automated">Hours Automated (Per Week)</Label>
                    <Input
                      id="hours-automated" 
                      type="number"
                      value={hoursAutomated}
                      onChange={(e) => setHoursAutomated(Number(e.target.value))}
                      placeholder="10"
                      className="text-lg"
                    />
                  </div>
                </div>

                {/* Results */}
                <div className="bg-gradient-primary/10 rounded-lg p-6 border border-primary/30">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    <h4 className="text-xl font-semibold">Your Annual Savings</h4>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                      {formatCurrency(annualSavings)}
                    </div>
                    <p className="text-muted-foreground">
                      Based on {hoursAutomated} hours/week at ₹{Math.round(employeeCost / (40 * 52))}/hour
                    </p>
                  </div>
                </div>

                {/* Conditional CTA */}
                {showCTA && (
                  <div className="text-center animate-fade-in">
                    <Button size="lg" variant="premium" className="gap-2">
                      Book My Free Automation Audit
                    </Button>
                    <p className="text-sm text-muted-foreground mt-2">
                      Unlock your full savings potential
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
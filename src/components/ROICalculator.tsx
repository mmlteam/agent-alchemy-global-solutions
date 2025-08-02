import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator } from "lucide-react";
import { useState, useEffect } from "react";

const ROICalculator = () => {
  const [monthlySalary, setMonthlySalary] = useState<number>(0);
  const [hoursAutomated, setHoursAutomated] = useState<number>(0);
  const [annualSavings, setAnnualSavings] = useState<number>(0);
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    // Calculate hourly rate: monthly salary / (22 working days * 8 hours)
    const hourlyRate = monthlySalary / (22 * 8);
    const monthlySavings = hoursAutomated * hourlyRate;
    const calculatedAnnualSavings = monthlySavings * 12;
    
    setAnnualSavings(calculatedAnnualSavings);
    setShowCTA(calculatedAnnualSavings > 100000);
  }, [monthlySalary, hoursAutomated]);

  return (
    <section className="py-16 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center space-y-4 mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Calculator className="w-4 h-4" />
              Interactive ROI Calculator
            </div>
            <h2 className="text-3xl font-bold">Calculate Your Potential Savings</h2>
            <p className="text-muted-foreground">See how much your business could save with automation</p>
          </div>

          <Card className="p-8 bg-card/80 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="salary">Avg Monthly Salary (₹)</Label>
                <Input
                  id="salary"
                  type="number"
                  value={monthlySalary || ''}
                  onChange={(e) => setMonthlySalary(Number(e.target.value))}
                  placeholder="75000"
                  className="text-lg"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="hours">Hours Automated / Month</Label>
                <Input
                  id="hours"
                  type="number"
                  value={hoursAutomated || ''}
                  onChange={(e) => setHoursAutomated(Number(e.target.value))}
                  placeholder="80"
                  className="text-lg"
                />
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-primary rounded-xl text-center">
              <div className="text-white">
                <p className="text-lg font-medium mb-2">Estimated Annual Savings</p>
                <p className="text-4xl font-bold">
                  ₹{annualSavings.toLocaleString('en-IN')}
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <div className="text-center space-y-3">
                <p className="font-semibold text-primary">
                  {annualSavings > 100000 ? "Lock in your savings potential!" : "Enter values to unlock your free audit"}
                </p>
                <Button 
                  variant="premium" 
                  className={`group transition-all duration-300 ${
                    annualSavings > 100000 
                      ? 'opacity-100 transform scale-100' 
                      : 'opacity-50 blur-sm pointer-events-none'
                  } ${annualSavings > 100000 && 'animate-fade-in'}`}
                  disabled={annualSavings <= 100000}
                >
                  {annualSavings > 100000 
                    ? "Lock in your savings → Book Audit" 
                    : "Enter values to unlock your free audit"
                  }
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
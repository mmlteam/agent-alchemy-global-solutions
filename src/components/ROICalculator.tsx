import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Calculator, AlertTriangle, CheckCircle, Info } from "lucide-react";
import { useState, useEffect } from "react";
// Validation types
type ValidationLevel = 'info' | 'warning' | 'error';
type ValidationMessage = {
  level: ValidationLevel;
  message: string;
  show: boolean;
};

const ROICalculator = () => {
  const [monthlySalary, setMonthlySalary] = useState<number>(0);
  const [hoursAutomated, setHoursAutomated] = useState<number>(0);
  const [annualSavings, setAnnualSavings] = useState<number>(0);
  const [adjustedSavings, setAdjustedSavings] = useState<number>(0);
  const [confidenceScore, setConfidenceScore] = useState<number>(5);
  const [showCTA, setShowCTA] = useState(false);
  
  // Validation states
  const [salaryValidation, setSalaryValidation] = useState<ValidationMessage>({ level: 'info', message: '', show: false });
  const [hoursValidation, setHoursValidation] = useState<ValidationMessage>({ level: 'info', message: '', show: false });

  // Constants for validation
  const MIN_SALARY = 5000;
  const MAX_SALARY = 500000;
  const MIN_HOURS = 1;
  const MAX_HOURS = 160; // 90% of 176 working hours
  const TOTAL_WORKING_HOURS = 176; // 22 days * 8 hours

  // Validation functions
  const validateSalary = (salary: number): ValidationMessage => {
    if (salary === 0) return { level: 'info', message: '', show: false };
    if (salary < MIN_SALARY) return { level: 'error', message: `Minimum salary should be ₹${MIN_SALARY.toLocaleString('en-IN')}`, show: true };
    if (salary > MAX_SALARY) return { level: 'error', message: `Maximum salary should be ₹${MAX_SALARY.toLocaleString('en-IN')}`, show: true };
    if (salary < 15000) return { level: 'warning', message: 'This seems quite low for automation ROI', show: true };
    if (salary > 200000) return { level: 'warning', message: 'High salary - ensure automation scope matches', show: true };
    return { level: 'info', message: '✓ Salary looks reasonable', show: true };
  };

  const validateHours = (hours: number): ValidationMessage => {
    if (hours === 0) return { level: 'info', message: '', show: false };
    if (hours < MIN_HOURS) return { level: 'error', message: `Minimum ${MIN_HOURS} hour per month`, show: true };
    if (hours > MAX_HOURS) return { level: 'error', message: `Maximum ${MAX_HOURS} hours/month (90% of work time)`, show: true };
    if (hours > 120) return { level: 'warning', message: 'Very high automation - ensure this is realistic', show: true };
    if (hours > 80) return { level: 'warning', message: 'High automation hours - consider phased approach', show: true };
    if (hours < 20) return { level: 'info', message: 'Most businesses start with 20-60 hours/month', show: true };
    return { level: 'info', message: '✓ Automation scope looks realistic', show: true };
  };

  // Calculate automation efficiency based on hours
  const getAutomationEfficiency = (hours: number): number => {
    if (hours <= 40) return 0.90; // Easy tasks - 90% efficiency
    if (hours <= 80) return 0.75; // Moderate complexity - 75% efficiency
    return 0.60; // Complex tasks - 60% efficiency
  };

  // Calculate confidence score (1-5)
  const calculateConfidence = (salary: number, hours: number): number => {
    let score = 5;
    
    // Reduce confidence for edge cases
    if (salary < 15000 || salary > 200000) score -= 1;
    if (hours > 100) score -= 1;
    if (hours > 120) score -= 1;
    if (salary < MIN_SALARY || salary > MAX_SALARY) score -= 2;
    if (hours < MIN_HOURS || hours > MAX_HOURS) score -= 2;
    
    return Math.max(1, score);
  };

  // Enhanced calculation logic
  const calculateROI = (salary: number, hours: number) => {
    if (salary === 0 || hours === 0) return { gross: 0, adjusted: 0 };
    
    // Basic calculation
    const hourlyRate = salary / (22 * 8);
    const monthlySavings = hours * hourlyRate;
    const grossAnnualSavings = monthlySavings * 12;
    
    // Apply automation efficiency
    const efficiency = getAutomationEfficiency(hours);
    const efficiencySavings = grossAnnualSavings * efficiency;
    
    // Apply implementation cost factor (20% for setup/maintenance)
    const implementationCostFactor = 0.80;
    const adjustedSavings = efficiencySavings * implementationCostFactor;
    
    // Cap at 85% of total role cost for realism
    const totalRoleCost = salary * 12;
    const maxSavings = totalRoleCost * 0.85;
    const finalSavings = Math.min(adjustedSavings, maxSavings);
    
    return { gross: grossAnnualSavings, adjusted: finalSavings };
  };

  // Handle input changes with validation
  const handleSalaryChange = (value: string) => {
    const numValue = value === '' ? 0 : Number(value);
    setMonthlySalary(numValue);
    setSalaryValidation(validateSalary(numValue));
  };

  const handleHoursChange = (value: string) => {
    const numValue = value === '' ? 0 : Number(value);
    setHoursAutomated(numValue);
    setHoursValidation(validateHours(numValue));
  };

  // Update calculations
  useEffect(() => {
    const { gross, adjusted } = calculateROI(monthlySalary, hoursAutomated);
    setAnnualSavings(gross);
    setAdjustedSavings(adjusted);
    setConfidenceScore(calculateConfidence(monthlySalary, hoursAutomated));
    
    // Show CTA only for valid, realistic inputs
    const isValid = salaryValidation.level !== 'error' && hoursValidation.level !== 'error';
    setShowCTA(isValid && adjusted > 100000);
  }, [monthlySalary, hoursAutomated, salaryValidation.level, hoursValidation.level]);

  // Helper functions for UI
  const getValidationIcon = (level: ValidationLevel) => {
    switch (level) {
      case 'error': return <AlertTriangle className="w-4 h-4 text-destructive" />;
      case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'info': return <Info className="w-4 h-4 text-blue-500" />;
    }
  };

  const getValidationColor = (level: ValidationLevel) => {
    switch (level) {
      case 'error': return 'text-destructive';
      case 'warning': return 'text-yellow-600';
      case 'info': return 'text-blue-600';
    }
  };

  const getInputBorderClass = (validation: ValidationMessage) => {
    if (!validation.show) return '';
    switch (validation.level) {
      case 'error': return 'border-destructive focus:border-destructive';
      case 'warning': return 'border-yellow-500 focus:border-yellow-500';
      case 'info': return 'border-green-500 focus:border-green-500';
    }
  };

  const automationPercentage = hoursAutomated > 0 ? Math.min((hoursAutomated / TOTAL_WORKING_HOURS) * 100, 100) : 0;

  return (
    <section className="py-section bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center space-y-4 mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Calculator className="w-4 h-4" />
              Enhanced ROI Calculator
            </div>
            <h2 className="text-3xl font-bold">Calculate Your Potential Savings</h2>
            <p className="text-muted-foreground">Get realistic automation ROI with built-in validation</p>
          </div>

          <Card className="p-8 bg-card/80 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Salary Input */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="salary">Monthly Salary (₹)</Label>
                  <Badge variant="outline" className="text-xs">
                    ₹{MIN_SALARY.toLocaleString('en-IN')} - ₹{MAX_SALARY.toLocaleString('en-IN')}
                  </Badge>
                </div>
                <Input 
                  id="salary" 
                  type="number" 
                  min={MIN_SALARY}
                  max={MAX_SALARY}
                  value={monthlySalary || ''} 
                  onChange={e => handleSalaryChange(e.target.value)} 
                  placeholder="75000" 
                  className={`text-lg ${getInputBorderClass(salaryValidation)}`}
                />
                {salaryValidation.show && (
                  <div className={`flex items-center gap-2 text-sm ${getValidationColor(salaryValidation.level)}`}>
                    {getValidationIcon(salaryValidation.level)}
                    <span>{salaryValidation.message}</span>
                  </div>
                )}
                {monthlySalary > 0 && (
                  <p className="text-xs text-muted-foreground">
                    Hourly rate: ₹{Math.round(monthlySalary / (22 * 8)).toLocaleString('en-IN')}
                  </p>
                )}
              </div>
              
              {/* Hours Input */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="hours">Hours Automated / Month</Label>
                  <Badge variant="outline" className="text-xs">
                    Max {MAX_HOURS}h
                  </Badge>
                </div>
                <Input 
                  id="hours" 
                  type="number" 
                  min={MIN_HOURS}
                  max={MAX_HOURS}
                  value={hoursAutomated || ''} 
                  onChange={e => handleHoursChange(e.target.value)} 
                  placeholder="80" 
                  className={`text-lg ${getInputBorderClass(hoursValidation)}`}
                />
                {hoursValidation.show && (
                  <div className={`flex items-center gap-2 text-sm ${getValidationColor(hoursValidation.level)}`}>
                    {getValidationIcon(hoursValidation.level)}
                    <span>{hoursValidation.message}</span>
                  </div>
                )}
                {hoursAutomated > 0 && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Automation Coverage</span>
                      <span>{automationPercentage.toFixed(1)}% of work time</span>
                    </div>
                    <Progress value={automationPercentage} className="h-2" />
                  </div>
                )}
              </div>
            </div>

            {/* Enhanced Results Section */}
            <div className="mt-8 space-y-4">
              {/* Calculation Breakdown */}
              {(monthlySalary > 0 && hoursAutomated > 0) && (
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="font-medium mb-2">Basic Calculation</p>
                    <p className="text-muted-foreground">₹{annualSavings.toLocaleString('en-IN')} annually</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="font-medium mb-2">Realistic Projection</p>
                    <p className="text-muted-foreground">₹{adjustedSavings.toLocaleString('en-IN')} annually</p>
                  </div>
                </div>
              )}

              {/* Main Results */}
              <div className="p-6 bg-gradient-primary rounded-xl text-center">
                <div className="text-white space-y-2">
                  <p className="text-lg font-medium">Estimated Annual Savings</p>
                  <p className={`font-bold break-words ${adjustedSavings.toLocaleString('en-IN').length > 12 ? 'text-2xl' : adjustedSavings.toLocaleString('en-IN').length > 8 ? 'text-3xl' : 'text-4xl'}`}>
                    ₹{adjustedSavings.toLocaleString('en-IN')}
                  </p>
                  {adjustedSavings !== annualSavings && adjustedSavings > 0 && (
                    <p className="text-sm opacity-90">
                      (Adjusted for efficiency: {Math.round(getAutomationEfficiency(hoursAutomated) * 100)}% & implementation costs)
                    </p>
                  )}
                  
                  {/* Confidence Score */}
                  {adjustedSavings > 0 && (
                    <div className="mt-4 pt-4 border-t border-white/20">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-sm">Confidence:</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <CheckCircle 
                              key={i} 
                              className={`w-4 h-4 ${i < confidenceScore ? 'text-white' : 'text-white/30'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-sm">({confidenceScore}/5)</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <div className="text-center space-y-3">
                <p className="font-semibold text-primary">
                  {showCTA ? "Ready to unlock these savings?" : 
                   salaryValidation.level === 'error' || hoursValidation.level === 'error' ? 
                   "Please fix the errors above" : 
                   "Enter realistic values to see your audit eligibility"}
                </p>
                <Button 
                  variant="premium" 
                  className={`group transition-all duration-300 w-full max-w-sm mx-auto px-4 py-3 text-xs sm:text-sm flex items-center justify-center gap-2 ${
                    showCTA ? 'opacity-100 transform scale-100' : 'opacity-50 blur-sm pointer-events-none'
                  } ${showCTA && 'animate-fade-in'}`} 
                  disabled={!showCTA}
                  onClick={() => {
                    // Scroll to lead form
                    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="truncate flex-1 text-center">
                    {showCTA ? (
                      <>
                        <span className="sm:hidden">Book Free Audit</span>
                        <span className="hidden sm:inline">Book Your Free Automation Audit</span>
                      </>
                    ) : (
                      <>
                        <span className="sm:hidden">Fix errors first</span>
                        <span className="hidden sm:inline">Complete inputs to continue</span>
                      </>
                    )}
                  </span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Additional Information */}
            {adjustedSavings > 0 && (
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="text-sm space-y-2">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100">Calculation Details:</h4>
                  <ul className="text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Efficiency factor: {Math.round(getAutomationEfficiency(hoursAutomated) * 100)}% (based on complexity)</li>
                    <li>• Implementation costs: 20% deducted for setup & maintenance</li>
                    <li>• Realistic cap: 85% of total role cost maximum</li>
                    <li>• Working days: 22 days/month, 8 hours/day</li>
                  </ul>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};
export default ROICalculator;
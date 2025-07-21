import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Users, Building, CheckCircle } from "lucide-react";
import { useState } from "react";

const LeadForm = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companySize: "",
    challenge: "",
    gdprConsent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, companySize: value }));
  };

  const handleNext = () => {
    if (formData.name && formData.email) {
      setStep(2);
    } else {
      toast({
        title: "Missing information",
        description: "Please fill in your name and email to continue.",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.gdprConsent) {
      toast({
        title: "Privacy consent required",
        description: "Please accept our privacy policy to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Consultation booked successfully!",
        description: "Check your email for the calendar link within 5 minutes.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        companySize: "",
        challenge: "",
        gdprConsent: false
      });
      setStep(1);
    } catch (error) {
      toast({
        title: "Error booking consultation",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-background sticky bottom-0 z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center space-y-6 mb-12 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Book Your{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Free Consultation
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Get your personalized AI roadmap in just 2 steps
            </p>
          </div>

          <Card className="p-8 bg-card/80 backdrop-blur-sm border-primary/20 animate-scale-in">
            {/* Progress Indicator */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className={`flex items-center gap-2 ${step >= 1 ? 'text-primary' : 'text-muted-foreground'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {step > 1 ? <CheckCircle className="w-4 h-4" /> : '1'}
                </div>
                <span className="text-sm font-medium">Contact Info</span>
              </div>
              
              <div className="flex-1 h-px bg-border"></div>
              
              <div className={`flex items-center gap-2 ${step >= 2 ? 'text-primary' : 'text-muted-foreground'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  2
                </div>
                <span className="text-sm font-medium">Business Details</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Smith"
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Business Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@company.com"
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>

                  <Button 
                    type="button"
                    onClick={handleNext}
                    variant="premium" 
                    size="lg" 
                    className="w-full group"
                    disabled={!formData.name || !formData.email}
                  >
                    Continue to Business Details
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        className="border-border/50 focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Company Size</Label>
                      <Select onValueChange={handleSelectChange}>
                        <SelectTrigger className="border-border/50 focus:border-primary">
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201-1000">201-1000 employees</SelectItem>
                          <SelectItem value="1000+">1000+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="challenge">Main Challenge (optional)</Label>
                      <Textarea
                        id="challenge"
                        name="challenge"
                        value={formData.challenge}
                        onChange={handleInputChange}
                        placeholder="Describe your biggest automation challenge..."
                        className="min-h-[80px] border-border/50 focus:border-primary"
                        maxLength={200}
                      />
                      <div className="text-xs text-muted-foreground text-right">
                        {formData.challenge.length}/200 characters
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 pt-4">
                    <Checkbox
                      id="gdpr"
                      checked={formData.gdprConsent}
                      onCheckedChange={(checked) => 
                        setFormData(prev => ({ ...prev, gdprConsent: checked as boolean }))
                      }
                    />
                    <Label htmlFor="gdpr" className="text-sm leading-relaxed">
                      I agree to the{" "}
                      <a href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </a>{" "}
                      and consent to being contacted about AI automation services.
                    </Label>
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      type="button"
                      onClick={() => setStep(1)}
                      variant="outline" 
                      size="lg" 
                      className="flex-1"
                    >
                      Back
                    </Button>
                    
                    <Button 
                      type="submit"
                      variant="premium" 
                      size="lg" 
                      className="flex-2 group"
                      disabled={isSubmitting || !formData.gdprConsent}
                    >
                      {isSubmitting ? "Booking..." : "Book Free Consultation"}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              )}
            </form>

            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-border/30 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No obligations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>GDPR compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>2-min setup</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border/50 lg:hidden z-20">
        <Button 
          variant="premium" 
          size="lg" 
          className="w-full group"
          onClick={() => document.querySelector('#lead-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get My Free Consultation
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default LeadForm;
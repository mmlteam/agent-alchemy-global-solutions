import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Headphones, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FloatingContact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    console.log('FloatingContact mounted');
    
    const timer = setTimeout(() => {
      console.log('Timer triggered - setting visible to true');
      setIsVisible(true);
    }, 15000); // 15 seconds

    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      console.log('Scroll percentage:', scrollPercentage);
      if (scrollPercentage >= 25) {
        console.log('Scroll threshold reached - setting visible to true');
        setIsVisible(true);
      }
    };

    // Check for main form interaction - this logic is wrong, it should check for actual interaction
    const checkMainForm = () => {
      const mainForm = document.getElementById('lead-form');
      console.log('Main form element:', mainForm);
      // Don't set hasInteracted to true just because the element exists
      // if (mainForm) {
      //   setHasInteracted(true);
      // }
    };

    window.addEventListener('scroll', handleScroll);
    checkMainForm();

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({
        title: "Required fields missing",
        description: "Please fill in both name and phone number.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Contact request sent!",
      description: "Our automation specialist will call you within 30 minutes.",
    });
    
    setIsSubmitting(false);
    setIsOpen(false);
    setHasInteracted(true);
    
    // Reset form
    setFormData({ name: '', phone: '' });
  };

  console.log('FloatingContact render - isVisible:', isVisible, 'hasInteracted:', hasInteracted);
  if (!isVisible || hasInteracted) return null;

  return (
    <>
      {/* Desktop floating button */}
      <div className="fixed bottom-8 right-8 z-50 hidden md:block">
        <Button
          onClick={() => setIsOpen(true)}
          size="icon"
          className="w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group relative bg-gradient-to-r from-[#7B5CF3] to-[#5ED6FF] text-white hover:opacity-90"
          aria-label="Talk to an automation specialist"
        >
          <Headphones className="w-6 h-6" />
          <div className="absolute -top-12 right-0 bg-background border border-border rounded-lg px-3 py-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Talk to an automation specialist
          </div>
        </Button>
      </div>

      {/* Mobile floating button */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-full h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-[#7B5CF3] to-[#5ED6FF] text-white hover:opacity-90"
        >
          <Phone className="w-5 h-5 mr-2" />
          Quick Contact - Get Called Back
        </Button>
      </div>

      {/* Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">Quick Contact</DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="quick-name">Your Name</Label>
              <Input
                id="quick-name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="quick-phone">Phone Number</Label>
              <Input
                id="quick-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+91 98765 43210"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              variant="premium" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Request Callback"}
            </Button>
            
            <p className="text-xs text-muted-foreground text-center">
              Our automation specialist will call you within 30 minutes during business hours.
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingContact;
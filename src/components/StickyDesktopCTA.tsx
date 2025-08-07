import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const StickyDesktopCTA = () => {
  return (
    <div className="fixed top-6 right-6 hidden md:block z-50 animate-fade-in">
      <Button 
        variant="premium" 
        size="default"
        className="group shadow-glow-primary"
        onClick={() => document.querySelector('#lead-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
        aria-label="Book Free Automation Audit"
      >
        🚀 Free Audit
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};

export default StickyDesktopCTA;
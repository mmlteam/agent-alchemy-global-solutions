import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Calendar, Mail, Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Ready to{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Transform
                </span>{" "}
                Your Business?
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join hundreds of forward-thinking companies that have already revolutionized 
                their operations with our AI automation solutions. Let's discuss how we can 
                accelerate your business growth.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="premium" size="lg" className="group">
                Schedule Free Consultation
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>
              
              <Button variant="hero" size="lg" className="group">
                Get Custom Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            {/* Contact methods */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center gap-3 p-4 bg-card/30 rounded-xl border border-border/30">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-sm">Email Us</div>
                  <div className="text-xs text-muted-foreground">hello@aiagents.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-card/30 rounded-xl border border-border/30">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-sm">Call Us</div>
                  <div className="text-xs text-muted-foreground">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-card/30 rounded-xl border border-border/30">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-sm">Live Chat</div>
                  <div className="text-xs text-muted-foreground">Available 24/7</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features highlight */}
          <div className="space-y-6 animate-scale-in">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <h3 className="text-xl font-semibold mb-4">What You Get:</h3>
              <ul className="space-y-3">
                {[
                  "Free 30-minute strategy consultation",
                  "Custom AI automation roadmap",
                  "ROI analysis and projections",
                  "Implementation timeline",
                  "Dedicated project manager",
                  "24/7 support and monitoring"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
            
            <Card className="p-6 bg-gradient-primary/10 border-primary/20">
              <div className="text-center space-y-3">
                <div className="text-2xl font-bold text-primary">⚡ Limited Time Offer</div>
                <p className="text-sm text-muted-foreground">
                  Book your consultation this month and receive a 
                  <span className="text-primary font-semibold"> free AI readiness assessment</span> worth $2,500
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const logos = [
  { name: "TechCorp", logo: "TC" },
  { name: "InnovateAI", logo: "IA" },
  { name: "DataFlow", logo: "DF" },
  { name: "AutoScale", logo: "AS" },
  { name: "SmartOps", logo: "SO" },
  { name: "CloudTech", logo: "CT" }
];

const testimonials = [
  {
    quote: "Transformed our workflow efficiency by 300% in just 30 days.",
    name: "Sarah Chen",
    role: "CTO at TechCorp",
    image: "SC"
  },
  {
    quote: "The ROI was evident within the first month of implementation.", 
    name: "Michael Rodriguez",
    role: "Head of Operations at InnovateAI",
    image: "MR"
  },
  {
    quote: "24/7 automation freed our team to focus on strategic growth.",
    name: "Emily Thompson", 
    role: "VP Engineering at DataFlow",
    image: "ET"
  }
];

const SocialProof = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-secondary/10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground mb-6">Why innovators choose us</p>
          
          {/* Client Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            {logos.map((client, index) => (
              <div 
                key={index}
                className="w-16 h-16 bg-card border border-border rounded-xl flex items-center justify-center text-sm font-semibold text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {client.logo}
              </div>
            ))}
          </div>
        </div>

        {/* Rotating Testimonial */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 text-center animate-fade-in">
            <div className="space-y-6">
              <Quote className="w-12 h-12 text-primary mx-auto opacity-50" />
              
              <blockquote className="text-2xl font-medium leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-sm font-semibold">
                  {testimonials[currentTestimonial].image}
                </div>
                <div className="text-left">
                  <div className="font-semibold">{testimonials[currentTestimonial].name}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>
              
              <div className="flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
            </div>
          </Card>
          
          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-primary' : 'bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
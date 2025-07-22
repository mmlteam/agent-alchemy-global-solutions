import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Play, Download } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote: "The automation audit alone saved us 15 hours per week. ROI was immediate.",
    name: "Priya Sharma",
    role: "Operations Director",
    company: "TechFlow Solutions",
    image: "PS"
  },
  {
    quote: "Our customer response time went from 4 hours to 4 minutes with their AI agents.",
    name: "James Mitchell", 
    role: "CEO",
    company: "RetailMax",
    image: "JM"
  }
];

const TestimonialsDeep = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Client <span className="bg-gradient-primary bg-clip-text text-transparent">Success Stories</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Video Testimonial */}
          <div className="text-center">
            <div className="relative max-w-2xl mx-auto mb-8">
              {!showVideo ? (
                <div className="relative bg-card/50 border border-border/50 rounded-xl overflow-hidden aspect-video flex items-center justify-center cursor-pointer group" 
                     onClick={() => setShowVideo(true)}>
                  <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
                  <div className="w-20 h-20 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-primary ml-1" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-foreground">
                    <div className="font-semibold">Sarah Chen, CTO</div>
                    <div className="text-sm text-muted-foreground">TechCorp</div>
                  </div>
                </div>
              ) : (
                <div className="aspect-video bg-card/50 border border-border/50 rounded-xl flex items-center justify-center">
                  <p className="text-muted-foreground">Video testimonial would play here</p>
                </div>
              )}
            </div>
          </div>

          {/* Text Testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/50 border-border/50">
                <CardContent className="p-8">
                  <Quote className="w-8 h-8 text-primary mb-4 opacity-50" />
                  <blockquote className="text-lg font-medium leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-sm font-semibold">
                      {testimonial.image}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-sm text-primary">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Case Study Highlight */}
          <Card className="bg-gradient-primary/10 border-primary/30">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Featured Case Study
              </h3>
              <p className="text-xl mb-6 leading-relaxed max-w-4xl mx-auto">
                "Saved ₹48 L in support costs for an e-commerce giant within 8 weeks through intelligent automation workflows."
              </p>
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Download Full Case Study
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsDeep;
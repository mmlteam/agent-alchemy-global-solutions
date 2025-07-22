import { Card, CardContent } from "@/components/ui/card";
import { Clock, DollarSign, Bot, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const metrics = [
  {
    icon: Clock,
    number: "420",
    unit: "hrs saved",
    period: "per quarter",
    description: "Average time savings across our clients"
  },
  {
    icon: DollarSign, 
    number: "6.3×",
    unit: "ROI",
    period: "in 60 days",
    description: "Return on automation investment"
  },
  {
    icon: Bot,
    number: "87%",
    unit: "tasks",
    period: "now hands-free", 
    description: "Of routine work fully automated"
  }
];

const MetricsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % metrics.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % metrics.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + metrics.length) % metrics.length);
  };

  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            By the <span className="bg-gradient-primary bg-clip-text text-transparent">Numbers</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto relative">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="bg-card/50 border-border/50 text-center">
                      <CardContent className="p-12">
                        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Icon className="w-10 h-10 text-primary" />
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                            {metric.number}
                          </div>
                          <div className="text-xl font-semibold text-foreground">
                            {metric.unit}
                          </div>
                          <div className="text-lg text-primary font-medium">
                            {metric.period}
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                          {metric.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {metrics.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-primary' : 'bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsCarousel;
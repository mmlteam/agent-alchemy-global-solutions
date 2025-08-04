import { Card } from "@/components/ui/card";

const industries = [
  { emoji: "🛍", label: "E-commerce & D2C" },
  { emoji: "💻", label: "SaaS & Tech" },
  { emoji: "🏥", label: "Healthcare" },
  { emoji: "🏗", label: "Manufacturing" },
  { emoji: "🏦", label: "Finance & FinTech" },
  { emoji: "🏢", label: "Real Estate" },
  { emoji: "⚖️", label: "Law Firms & Legal" },
  { emoji: "🎓", label: "Education & EdTech" },
  { emoji: "🌐", label: "Any Industry" }
];

const IndustriesWeServe = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Industries We{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Serve
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
          {industries.map((industry, index) => (
            <Card 
              key={index}
              className="p-6 text-center border-border/50 hover:border-primary/50 hover:shadow-premium transition-all duration-300 animate-fade-in hover:scale-105"
              style={{ 
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="text-4xl mb-3">{industry.emoji}</div>
              <p className="font-medium text-sm">{industry.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
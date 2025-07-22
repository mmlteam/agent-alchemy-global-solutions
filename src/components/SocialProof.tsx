import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const logos = [
  { name: "TechCorp", logo: "TC" },
  { name: "DataFlow", logo: "DF" },
  { name: "AutoScale", logo: "AS" },
  { name: "SmartOps", logo: "SO" },
  { name: "CloudTech", logo: "CT" },
  { name: "InnovateAI", logo: "IA" }
];

const TrustBar = () => {
  return (
    <section className="py-12 border-b border-border/50">
      <div className="container mx-auto px-6">
        {/* Client Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
          {logos.map((client, index) => (
            <div 
              key={index}
              className="w-16 h-16 bg-card/50 border border-border/30 rounded-xl flex items-center justify-center text-sm font-semibold text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {client.logo}
            </div>
          ))}
        </div>
        
        {/* G2/Clutch Rating */}
        <div className="flex justify-center">
          <Badge variant="outline" className="px-6 py-2 bg-card/30 border-primary/30">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm font-medium">4.9 on G2 & Clutch</span>
            </div>
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
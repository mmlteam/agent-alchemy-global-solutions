import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { HeroIllustration } from "@/components/HeroIllustration";
import { SpotlightCursor } from "@/components/ui/spotlight-cursor";
import { badgeVariants } from "@/components/ui/badge";
import HeroFloatingParticles from "@/components/HeroFloatingParticles";

const Hero = () => {
  return (
    <section className="bg-gradient-hero relative min-h-[clamp(560px,70vh,760px)] overflow-hidden pt-[calc(var(--header-h-mobile)-1em)] md:pt-[calc(var(--header-h-desktop)-1em)]">
      {/* Spotlight */}
      <SpotlightCursor size={400} />

      {/* Ambient glows behind content */}
      <div className="absolute inset-0 opacity-10 overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full blur-3xl animate-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent rounded-full blur-3xl animate-glow delay-300"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-12 gap-8 items-end min-h-[60vh]">
          {/* Left column: copy */}
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-end pr-0 lg:pr-10 order-1 lg:order-none">
            <div className="space-y-6 animate-fade-in">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 text-sm">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Automation & AI Agents</span>
              </div>

              {/* Headline */}
              <h1 className="text-[clamp(36px,6vw,84px)] font-bold max-w-[20ch] [text-wrap:balance] leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">Automation & AI Agents —</span>
                <br className="hidden lg:block" />
                <span className="bg-gradient-primary bg-clip-text text-transparent">Cut Costs. Save Time.</span>
              </h1>

              {/* Subhead */}
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                From streamlining repetitive tasks to deploying intelligent AI agents, we design solutions that fit your unique business needs.
              </p>

              {/* Stat chips */}
              <div className="mt-4 flex flex-wrap gap-3" role="list" aria-label="Key results">
                <button type="button" className={`${badgeVariants({ variant: 'secondary' })} rounded-full`} tabIndex={0} aria-label="Decrease sixty percent costs" role="listitem">↓ 60% Costs</button>
                <button type="button" className={`${badgeVariants({ variant: 'secondary' })} rounded-full`} tabIndex={0} aria-label="Increase four hundred twenty plus hours saved per year" role="listitem">↑ 420+ Hours Saved / Yr</button>
                <button type="button" className={`${badgeVariants({ variant: 'secondary' })} rounded-full`} tabIndex={0} aria-label="Twenty four seven uptime" role="listitem">24/7 Uptime</button>
                <button type="button" className={`${badgeVariants({ variant: 'secondary' })} rounded-full`} tabIndex={0} aria-label="Live in under thirty days" role="listitem">Live in &lt;30 Days</button>
              </div>

              {/* Integration Partners Bar */}
              <div className="grid grid-cols-3 lg:flex lg:flex-wrap justify-center lg:justify-start items-center gap-3 lg:gap-4 mt-4 animate-fade-in">
                {[
                  { name: "Python", logoPath: "/lovable-uploads/82aab38a-7c3f-4bba-b5cc-bc13ee3abb2f.png", alt: "Python logo" },
                  { name: "Zapier", logoPath: "/lovable-uploads/50cbdcb4-64bf-4d1b-93f5-77439bb33b81.png", alt: "Zapier logo" },
                  { name: "OpenAI", logoPath: "/lovable-uploads/81f4a72e-fd51-4d1d-9395-8d3a9fa5a4ab.png", alt: "OpenAI logo" },
                  { name: "n8n", logoPath: "/lovable-uploads/912ef728-bb1e-4412-96e7-d6bd0c9a8f89.png", alt: "n8n logo" },
                  { name: "Make", logoPath: "/lovable-uploads/23af8b5d-1cd4-4208-8e59-d67fe34f9695.png", alt: "Make.com logo" },
                  { name: "Airtable", logoPath: "/lovable-uploads/fa184e33-137e-4ccc-a258-f10ef7ae0920.png", alt: "Airtable logo" }
                ].map((partner, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-center p-2 rounded-lg bg-white/5 backdrop-blur-sm shadow-lg shadow-primary/10 border border-white/10"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <img
                      src={partner.logoPath}
                      alt={partner.alt}
                      className="h-10 w-auto"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* Disclaimer */}
              <p className="logo-disclaimer text-xs text-muted-foreground text-left mt-3 opacity-60">
                *All brand visuals are illustrative dummy logos—no affiliation implied.
              </p>

              {/* CTA */}
              <div className="flex flex-col items-center lg:items-start mt-4">
                <Button 
                  variant="premium" 
                  size="lg" 
                  className="group w-full max-w-xs lg:w-auto" 
                  aria-label="Book My Free Automation Audit"
                  onClick={() => document.querySelector('#lead-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                >
                  Book My Free Automation Audit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-sm text-muted-foreground mt-1 text-center lg:text-left">Takes &lt; 2 min</p>
              </div>

              {/* KPI row */}
              <div className="grid grid-cols-3 gap-4 pt-4 pb-0 mb-0 border-t border-border/30">
                <div className="space-y-1">
                  <div className="text-lg lg:text-xl font-bold text-primary">500+</div>
                  <div className="text-xs text-muted-foreground">AI Agents Deployed</div>
                </div>
                <div className="space-y-1">
                  <div className="text-lg lg:text-xl font-bold text-primary">98%</div>
                  <div className="text-xs text-muted-foreground">Efficiency Increase</div>
                </div>
                <div className="space-y-1">
                  <div className="text-lg lg:text-xl font-bold text-primary">24/7</div>
                  <div className="text-xs text-muted-foreground">Autonomous Operation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: robot */}
          <div className="col-span-12 lg:col-span-6 relative flex items-end justify-end order-2 lg:order-none h-[52vh] max-h-[520px] mt-6 lg:h-auto lg:max-h-none">
            {/* Bottom-anchored wrapper for Spline */}
            <div className="absolute inset-x-0 bottom-0 h-[92%] max-h-[86vh] pointer-events-none">
              <HeroIllustration />
            </div>
            <HeroFloatingParticles />
          </div>
        </div>
      </div>
    </section>

  );
};

export default Hero;
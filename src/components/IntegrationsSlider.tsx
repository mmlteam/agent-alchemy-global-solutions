import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const logos = [
  { name: "Zoho CRM" },
  { name: "HubSpot" },
  { name: "QuickBooks" },
  { name: "Salesforce" },
  { name: "Pipedrive" },
  { name: "Trello" },
  { name: "Slack", src: "/logos/slack-logo.png" },
  { name: "Google Workspace", src: "/lovable-uploads/add4a2f4-b8d2-41fb-8b2f-a8fd19eccc89.png" },
  { name: "Microsoft Teams" },
  { name: "Asana" },
  { name: "ClickUp" },
  { name: "Monday.com" },
  { name: "Notion", src: "/logos/notion-logo.png" },
  { name: "Airtable", src: "/lovable-uploads/fa184e33-137e-4ccc-a258-f10ef7ae0920.png" },
  { name: "Shopify" },
  { name: "WooCommerce" },
  { name: "Stripe" },
  { name: "PayPal" },
  { name: "Make.com", src: "/logos/make-logo.png" },
  { name: "Zapier", src: "/logos/zapier-logo-new.png" },
  { name: "n8n", src: "/lovable-uploads/912ef728-bb1e-4412-96e7-d6bd0c9a8f89.png" },
  { name: "Python", src: "/logos/python-logo.png" },
  { name: "+ More" },
];

function LogoTile({ name, src }: { name: string; src?: string }) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [imgOk, setImgOk] = useState(Boolean(src));

  return (
    <Card className="aspect-[2/1] flex items-center justify-center border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
      {imgOk && src ? (
        <img
          ref={imgRef}
          src={src}
          alt={`${name} logo`}
          className="w-full h-full object-contain p-2"
          loading="lazy"
          onError={() => setImgOk(false)}
        />
      ) : (
        <span className="text-sm text-muted-foreground font-medium text-center px-2">{name}</span>
      )}
    </Card>
  );
}

export default function IntegrationsSlider() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api || isPaused) return;
    const id = setInterval(() => {
      api.scrollNext();
    }, 2200);
    return () => clearInterval(id);
  }, [api, isPaused]);

  return (
    <section className="py-section bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">We integrate with all major CRMs, tools, and software</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            From leading automation platforms to your favourite business tools — if it's out there, we can connect to it.
          </p>
        </div>

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative"
        >
          <Carousel opts={{ loop: true, align: "start" }} setApi={(a) => setApi(a)}>
            <CarouselContent>
              {logos.map((logo, idx) => (
                <CarouselItem key={idx} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 xl:basis-1/6">
                  <div className="p-3">
                    <LogoTile name={logo.name} src={logo.src} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex left-4" aria-label="Previous logos" />
            <CarouselNext className="hidden md:flex right-4" aria-label="Next logos" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

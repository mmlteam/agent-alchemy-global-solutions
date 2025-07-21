import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import Trust from "@/components/Trust";
import Testimonials from "@/components/Testimonials";
import ClientLogos from "@/components/ClientLogos";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ClientLogos />
      <Services />
      <Benefits />
      <Trust />
      <Process />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;

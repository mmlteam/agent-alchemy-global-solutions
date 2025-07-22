import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import PainSolution from "@/components/PainSolution";
import Benefits from "@/components/Benefits";
import Offer from "@/components/Offer";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <SocialProof />
      <PainSolution />
      <Benefits />
      <Offer />
      <div id="lead-form">
        <LeadForm />
      </div>
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;

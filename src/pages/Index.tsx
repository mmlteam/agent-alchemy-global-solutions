import Hero from "@/components/Hero";
import TrustBar from "@/components/SocialProof";
import ProblemSolution from "@/components/PainSolution";
import HowItWorks from "@/components/HowItWorks";
import ServiceMenu from "@/components/Services";
import MetricsCarousel from "@/components/MetricsCarousel";
import TestimonialsDeep from "@/components/TestimonialsDeep";
import ROICalculator from "@/components/ROICalculator";
import ScarcityStrip from "@/components/ScarcityStrip";
import OfferGuarantee from "@/components/Offer";
import MultiStepLeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import ConversionFooter from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <TrustBar />
      <ProblemSolution />
      <HowItWorks />
      <ServiceMenu />
      <MetricsCarousel />
      <TestimonialsDeep />
      <ROICalculator />
      <ScarcityStrip />
      <OfferGuarantee />
      <MultiStepLeadForm />
      <FAQ />
      <ConversionFooter />
      <StickyMobileCTA />
    </div>
  );
};

export default Index;

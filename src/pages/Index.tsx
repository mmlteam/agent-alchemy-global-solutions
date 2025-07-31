import Hero from "@/components/Hero";
import ValueSnapshotStrip from "@/components/ValueSnapshotStrip";
import SocialProof from "@/components/SocialProof";
import PainSolution from "@/components/PainSolution";
import Benefits from "@/components/Benefits";
import ROICalculator from "@/components/ROICalculator";
import UrgencyStrip from "@/components/UrgencyStrip";
import Offer from "@/components/Offer";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ValueSnapshotStrip />
      <SocialProof />
      <PainSolution />
      <Benefits />
      <ROICalculator />
      <UrgencyStrip />
      <Offer />
      <div id="lead-form">
        <LeadForm />
      </div>
      <FAQ />
      <Footer />
      <StickyMobileCTA />
      
      {/* Analytics placeholders */}
      <script dangerouslySetInnerHTML={{
        __html: `
          // Meta Pixel placeholder
          console.log('Meta Pixel would load here');
          
          // LinkedIn Insight placeholder  
          console.log('LinkedIn Insight would load here');
          
          // GTM placeholder
          console.log('Google Tag Manager would load here');
        `
      }} />
    </div>
  );
};

export default Index;

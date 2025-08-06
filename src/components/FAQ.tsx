import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "How much does AI automation implementation cost?",
    answer: "Investment depends on scope and complexity. Most clients see ROI within 3-6 months. Our free consultation includes a detailed cost-benefit analysis tailored to your specific needs."
  },
  {
    question: "How long does it take to implement AI automation?",
    answer: "Simple automations can be deployed in 2-4 weeks. Complex enterprise solutions typically take 6-12 weeks. We provide a detailed timeline during your free consultation based on your requirements."
  },
  {
    question: "Is our data secure with AI automation?",
    answer: "Absolutely. We implement bank-grade security with end-to-end encryption, comply with GDPR/CCPA standards, and offer on-premise deployment options for maximum data control."
  },
  {
    question: "Can my small business even use AI automation?",
    answer: "Yes—most clients start with one workflow and scale. We tailor scope to budget."
  },
  {
    question: "Will I fall behind if I delay?",
    answer: "Early adopters cut costs & gain speed; late adopters scramble to catch up."
  },
  {
    question: "How much does the roadmap cost?",
    answer: "The 30-min audit & roadmap are ₹0. You pay only if you proceed."
  },
  {
    question: "Is ongoing maintenance included?",
    answer: "Yes, 30-day optimisation + optional monthly SLA."
  },
  {
    question: "How secure is my data?",
    answer: "Tokens stored with AES-256, deploy in your VPC, ISO-27001 processes."
  },
  {
    question: "Which tools do you integrate?",
    answer: "1500+ SaaS + custom APIs via Make, Zapier, Python & OpenAI."
  },
  {
    question: "Do I need in-house developers?",
    answer: "No—our team builds, deploys, and trains your staff."
  },
  {
    question: "What's the ROI timeline?",
    answer: "Most clients recover costs in ≤ 60 days."
  }
];

const FAQ = () => {
  return (
    <section className="py-section bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Frequently Asked{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about AI automation
            </p>
          </div>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 animate-scale-in">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border/30">
                  <AccordionTrigger className="text-left hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Still have questions? Let's discuss your specific needs.
            </p>
            <Button variant="premium" size="lg" className="group">
              Get My Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
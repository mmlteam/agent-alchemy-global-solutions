import { AlertTriangle } from "lucide-react";
import { useState, useEffect } from "react";

const ScarcityStrip = () => {
  const [slotsLeft, setSlotsLeft] = useState(14);

  useEffect(() => {
    // Simulate decreasing slots (placeholder logic)
    const interval = setInterval(() => {
      setSlotsLeft(prev => Math.max(5, prev - 1));
    }, 300000); // Decrease every 5 minutes for demo

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-4 bg-destructive/10 border-y border-destructive/30">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-3 text-center">
          <AlertTriangle className="w-5 h-5 text-destructive animate-pulse" />
          <p className="text-destructive font-semibold">
            ⏰ {slotsLeft} of 30 complimentary audits booked—claim yours now.
          </p>
          <AlertTriangle className="w-5 h-5 text-destructive animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default ScarcityStrip;
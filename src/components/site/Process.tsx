import { Button } from "@/components/ui/button";
import { useQuoteModal } from "@/contexts/QuoteModalContext";
import processImg from "@/assets/process-work.jpg";
import { ArrowRight } from "lucide-react";

const steps = [
  { 
    id: "01", 
    title: "Contact us", 
    text: "Lorem ipsum dolor sit amet consectetur sed arcu risus tortor consequat odio donec senectus ac." 
  },
  { 
    id: "02", 
    title: "Schedule an appointment", 
    text: "Lorem ipsum dolor sit amet consectetur sed arcu risus tortor consequat odio donec senectus ac." 
  },
  { 
    id: "03", 
    title: "Get your project done!", 
    text: "Lorem ipsum dolor sit amet consectetur sed arcu risus tortor consequat odio donec senectus ac." 
  },
];

const Process = () => {
  const { openModal } = useQuoteModal();

  return (
    <section id="process" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-bold text-lg">/PROCESS/</span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight" style={{ color: 'hsl(222, 47%, 11%)' }}>
              Check how our process is done
            </h2>

            <div className="mt-12 space-y-10">
              {steps.map((step) => (
                <div key={step.id}>
                  <div className="text-primary font-bold text-sm mb-2">STEP {step.id}</div>
                  <h3 className="text-2xl md:text-3xl font-extrabold" style={{ color: 'hsl(222, 47%, 11%)' }}>
                    {step.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground text-base leading-relaxed">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image with Floating Button */}
          <div className="relative">
            <div className="bg-gray-100 rounded-3xl overflow-hidden h-[600px]">
              <img 
                src={processImg} 
                alt="Our service process visualization" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Floating CTA Button */}
            <div className="absolute bottom-8 right-8 hidden md:block">
              <Button 
                onClick={openModal}
                size="lg"
                className="rounded-full px-8 py-6 text-base font-semibold shadow-2xl"
              >
                GET A QUOTE
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

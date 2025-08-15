import { Button } from "@/components/ui/button";
import { useQuoteModal } from "@/contexts/QuoteModalContext";
import windowImg from "@/assets/service-window.jpg";

const CTABand = () => {
  const { openModal } = useQuoteModal();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="h-64 md:h-80 rounded-2xl overflow-hidden">
            <img 
              src={windowImg} 
              alt="Project image" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="card p-6 shadow-soft">
            <span className="chip">Premium</span>
            <h3 className="mt-3 text-2xl font-extrabold">Let's work together</h3>
            <p className="mt-2 text-muted-foreground">
              Tell us what you need and we will provide a fair quote with options to fit your budget.
            </p>
            <div className="mt-6 flex gap-3">
              <Button variant="soft" onClick={openModal}>Get Instant Quote</Button>
              <Button asChild>
                <a href="#contact">Get a quote</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABand;
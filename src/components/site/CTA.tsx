import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="quote" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-primary text-primary-foreground p-8 md:p-12 shadow-soft">
          <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10"></div>
          <h3 className="text-2xl md:text-3xl font-extrabold">Get a quote today for your new project</h3>
          <p className="mt-2 text-primary-foreground/85 max-w-2xl">
            Tell us about your task and receive a quick estimate along with available time slots.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="glass" asChild>
              <a href="#quote">Get an Instant Quote</a>
            </Button>
            <Button variant="glass" asChild>
              <a href="#contact">Contact us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

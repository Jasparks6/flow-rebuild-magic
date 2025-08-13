import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="quote" className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="rounded-2xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold">Get a quote today for your new project</h2>
            <p className="opacity-90">Fast response, friendly service, and fair pricing.</p>
          </div>
          <Button variant="hero" size="pill" asChild>
            <a href="#contact">Contact us</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;

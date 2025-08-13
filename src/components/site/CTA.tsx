import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="quote" className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="rounded-2xl relative overflow-hidden bg-primary text-primary-foreground p-8 md:p-12 shadow-xl">
          <svg className="absolute inset-0 opacity-20" aria-hidden viewBox="0 0 600 200" preserveAspectRatio="none">
            <defs>
              <pattern id="diag" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <rect width="1" height="20" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diag)" />
          </svg>
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold">Get a quote today for your new project</h2>
              <p className="opacity-90">Fast response, friendly service, and fair pricing.</p>
            </div>
            <Button variant="secondary" size="pill" asChild>
              <a href="#contact">Contact us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

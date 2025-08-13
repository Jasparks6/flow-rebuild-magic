import windowImg from "@/assets/service-drill.jpg";
import { Button } from "@/components/ui/button";

const Experience = () => {
  return (
    <section className="container mx-auto py-16 md:py-24">
      <p className="text-sm font-semibold text-primary/80">Metrics</p>
      <h2 className="text-3xl md:text-4xl font-extrabold">We have more than 20 years of experience</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-12 items-center">
        <div className="md:col-span-7">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src={windowImg} alt="Experienced handyman at work" className="w-full h-auto object-cover" loading="lazy" />
          </div>
        </div>
        <div className="md:col-span-5 space-y-4">
          <div className="rounded-xl border p-4">
            <div className="font-semibold">Licensed & insured</div>
            <p className="text-muted-foreground text-sm">Your home is always protected.</p>
          </div>
          <div className="rounded-xl border p-4">
            <div className="font-semibold">On-time guarantee</div>
            <p className="text-muted-foreground text-sm">We respect your schedule.</p>
          </div>
          <div className="rounded-xl border p-4">
            <div className="font-semibold">Satisfaction first</div>
            <p className="text-muted-foreground text-sm">We finish only when you’re happy.</p>
          </div>
          <Button variant="hero" size="pill" asChild>
            <a href="#quote">Book now</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Experience;

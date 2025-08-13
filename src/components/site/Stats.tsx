import { Button } from "@/components/ui/button";
import windowImg from "@/assets/service-window.jpg";

const Stats = () => {
  const items = [
    { value: "90+", label: "5-star reviews" },
    { value: "400+", label: "Projects completed" },
    { value: "80+", label: "Happy clients" },
  ];
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto grid gap-6 md:grid-cols-12 items-stretch">
        <article className="md:col-span-6 rounded-2xl bg-foreground text-background p-8 md:p-10 shadow-xl">
          <p className="text-sm font-semibold text-background/80">About us</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Our pro team takes care of everything</h2>
          <p className="mt-3 opacity-90 max-w-prose">
            From quick fixes to full installations, we deliver reliable results with respectful service and clear communication.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {items.map((it) => (
              <div key={it.label}>
                <div className="text-3xl font-extrabold">{it.value}</div>
                <div className="opacity-80 text-xs">{it.label}</div>
              </div>
            ))}
          </div>
          <Button variant="secondary" size="pill" className="mt-6" asChild>
            <a href="#quote">Get a quote</a>
          </Button>
        </article>
        <div className="md:col-span-6">
          <div className="relative rounded-2xl overflow-hidden shadow-xl h-full">
            <img src={windowImg} alt="Handyman performing window repair" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

import { Button } from "@/components/ui/button";
import windowImg from "@/assets/service-window.jpg";

const WhyUs = () => {
  const items = [
    { value: "90+", label: "Happy clients" },
    { value: "400+", label: "Projects done" },
    { value: "80+", label: "Team members" },
  ];

  return (
    <section aria-labelledby="whyus-title" className="container mx-auto py-16 md:py-24">
      <div className="grid items-stretch gap-6 md:grid-cols-2">
        {/* Left: dark card */}
        <article className="rounded-3xl bg-foreground text-background p-8 md:p-12 flex flex-col justify-between shadow-xl">
          <header className="space-y-4">
            <p className="text-sm font-semibold text-primary/80">/WHY US/</p>
            <h2 id="whyus-title" className="text-3xl md:text-5xl font-extrabold leading-tight">
              Our pro team takes care of everything
            </h2>
            <p className="opacity-90 max-w-prose">
              Lorem ipsum dolor sit amet consectetur amet venenatis non tempus tortor mauris senectus donec massa porta sit sit.
            </p>
          </header>
          <div className="mt-8 grid grid-cols-3 gap-6">
            {items.map((it) => (
              <div key={it.label} className="text-center">
                <div className="text-2xl md:text-4xl font-extrabold text-primary">{it.value}</div>
                <div className="opacity-90 text-sm">{it.label}</div>
              </div>
            ))}
          </div>
        </article>

        {/* Right: image card */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <img
            src={windowImg}
            alt="Professional cleaner washing large window"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <div className="mt-6 md:mt-8 flex md:justify-end">
        <Button variant="hero" size="pill">Get a quote</Button>
      </div>
    </section>
  );
};

export default WhyUs;

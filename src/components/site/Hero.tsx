import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-handyman.jpg";
import { useState, useRef } from "react";

const Hero = () => {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  return (
    <section aria-label="Affordable home repair services" className="relative overflow-hidden">
      <div
        ref={ref}
        onMouseMove={onMove}
        className="container mx-auto grid gap-6 md:grid-cols-12 items-stretch py-10 md:py-16"
      >
        {/* Signature moment: ambient reactive glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 hidden md:block"
          style={{
            background: `radial-gradient(600px circle at ${pos.x}% ${pos.y}%, hsl(var(--primary)/0.12), transparent 60%)`,
          }}
        />

        {/* Left: hero image with overlaid copy */}
        <div className="md:col-span-7">
          <div className="relative rounded-2xl overflow-hidden shadow-xl hover-scale">
            <img
              src={heroImg}
              alt="Professional handyman in blue uniform providing home repair service"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/0 via-background/0 to-background/0" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm font-semibold text-primary/90">Handyman services</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-background drop-shadow">
                Affordable home repair services
              </h1>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button variant="hero" size="pill">Book a service</Button>
                <Button variant="outline" size="pill" asChild>
                  <a href="#services">Explore services</a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: booking card */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold">Book your service today</h3>
                <p className="text-muted-foreground">Fast scheduling, friendly pros.</p>
              </div>
              <span className="h-10 w-10 rounded-full grid place-items-center bg-primary/10 text-primary font-bold">HF</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary" /> Same-day options</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary" /> Clear pricing</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary" /> Insured professionals</li>
            </ul>
            <div className="mt-5">
              <Button variant="hero" size="pill" asChild>
                <a href="#quote">Get a quote</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <a href="#contact" className="hidden md:grid place-items-center h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-lg absolute right-6 bottom-6">?</a>
    </section>
  );
};

export default Hero;

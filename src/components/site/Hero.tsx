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
        className="container mx-auto grid gap-10 md:grid-cols-12 items-center py-12 md:py-20"
      >
        {/* Signature moment: ambient reactive glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 hidden md:block"
          style={{
            background: `radial-gradient(600px circle at ${pos.x}% ${pos.y}%, hsl(var(--primary)/0.12), transparent 60%)`,
          }}
        />
        <div className="md:col-span-6 lg:col-span-5 space-y-6">
          <p className="text-sm font-semibold text-primary/80">Trusted local pros</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Affordable home repair services
          </h1>
          <p className="text-muted-foreground text-lg max-w-prose">
            Book reliable repairs, installations, and maintenance with a friendly team. Fast scheduling, clear pricing.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="hero" size="pill">Book a service</Button>
            <Button variant="outline" size="pill" asChild>
              <a href="#services">Explore services</a>
            </Button>
          </div>
        </div>
        <div className="md:col-span-6 lg:col-span-7">
          <div className="relative rounded-2xl overflow-hidden shadow-xl hover-scale">
            <img
              src={heroImg}
              alt="Professional handyman in blue uniform providing home repair service"
              className="w-full h-auto object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/0 via-background/0 to-background/0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

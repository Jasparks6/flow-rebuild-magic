import { Wrench, Paintbrush, Cable, Hammer } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import drillImg from "@/assets/service-drill.jpg";
import windowImg from "@/assets/service-window.jpg";
import toolboxImg from "@/assets/service-toolbox.jpg";

const services = [
  {
    title: "General repair",
    description: "Quick fixes and small repairs handled with care.",
    icon: Wrench,
    image: drillImg,
  },
  {
    title: "Painting & drywall",
    description: "Clean finishes for walls, ceilings, and more.",
    icon: Paintbrush,
    image: toolboxImg,
  },
  {
    title: "Electrical repair",
    description: "Switches, outlets, lighting, and fixtures.",
    icon: Cable,
    image: windowImg,
  },
  {
    title: "Furniture assembly",
    description: "We assemble it right the first time.",
    icon: Hammer,
    image: toolboxImg,
  },
  {
    title: "Window & door",
    description: "Installation and alignment for smooth operation.",
    icon: Hammer,
    image: windowImg,
  },
  {
    title: "Appliance install",
    description: "Mounting, hookups, and safety checks.",
    icon: Wrench,
    image: drillImg,
  },
];

const Services = () => {
  return (
    <section id="services" className="container mx-auto py-16 md:py-24">
      <div className="mb-10 md:mb-14 flex items-end justify-between">
        <div>
          <p className="text-sm font-semibold text-primary/80">Services</p>
          <h2 className="text-3xl md:text-4xl font-extrabold">Explore our wide range of services</h2>
        </div>
        <a href="#quote" className="story-link hidden md:inline">Get a quick quote</a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Card key={i} className="group overflow-hidden border hover:shadow-lg transition-shadow">
            <div className="relative h-44 overflow-hidden">
              <img
                src={s.image}
                alt={`${s.title} example`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <s.icon className="text-primary" /> {s.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              {s.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;

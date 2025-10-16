import drillImg from "@/assets/service-drill.jpg";
import paintingImg from "@/assets/service-painting.jpg";
import electricalImg from "@/assets/service-electrical.jpg";
import plumbingImg from "@/assets/service-plumbing.jpg";
import carpentryImg from "@/assets/service-carpentry.jpg";
import assemblyImg from "@/assets/service-assembly.jpg";
import { Wrench, Paintbrush, Zap, Droplet, Hammer, Package } from "lucide-react";

const services = [
  {
    title: "General repairs",
    description: "Quick fixes for doors, walls, fixtures and more.",
    image: drillImg,
    icon: Wrench,
  },
  {
    title: "Painting and decorating", 
    description: "Interior and exterior painting with clean finishes.",
    image: paintingImg,
    icon: Paintbrush,
  },
  {
    title: "Electrical repairs",
    description: "Outlets, lighting, fans and troubleshooting.",
    image: electricalImg,
    icon: Zap,
  },
  {
    title: "Plumbing repair",
    description: "Leaks, clogs, faucets and fixture installs.",
    image: plumbingImg,
    icon: Droplet,
  },
  {
    title: "Carpentry and furniture",
    description: "Shelving, doors, repairs and custom builds.", 
    image: carpentryImg,
    icon: Hammer,
  },
  {
    title: "Furniture assembly",
    description: "Flat-pack builds with secure, tidy assembly.",
    image: assemblyImg,
    icon: Package,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="chip">Services</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">
              Explore our wide range of services
            </h2>
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <a 
                key={service.title} 
                href="#book" 
                className="group transition-all duration-300 hover:-translate-y-2"
                style={{ 
                  marginTop: index % 2 === 0 ? '0' : '2rem',
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-64 w-full object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  loading="lazy"
                />
                <div className="mt-6">
                  <h3 className="font-bold text-2xl">{service.title}</h3>
                  <p className="text-base text-muted-foreground mt-2">{service.description}</p>
                  <Icon className="mt-4 w-8 h-8 text-primary" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

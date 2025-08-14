import drillImg from "@/assets/service-drill.jpg";
import windowImg from "@/assets/service-window.jpg";
import toolboxImg from "@/assets/service-toolbox.jpg";

const services = [
  {
    title: "General repairs",
    description: "Quick fixes for doors, walls, fixtures and more.",
    image: drillImg,
  },
  {
    title: "Painting and decorating", 
    description: "Interior and exterior painting with clean finishes.",
    image: windowImg,
  },
  {
    title: "Electrical repairs",
    description: "Outlets, lighting, fans and troubleshooting.",
    image: toolboxImg,
  },
  {
    title: "Plumbing repair",
    description: "Leaks, clogs, faucets and fixture installs.",
    image: drillImg,
  },
  {
    title: "Carpentry and furniture",
    description: "Shelving, doors, repairs and custom builds.", 
    image: windowImg,
  },
  {
    title: "Furniture assembly",
    description: "Flat-pack builds with secure, tidy assembly.",
    image: toolboxImg,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="chip">Services</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">
              Explore our wide range of services
            </h2>
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <a key={service.title} href="#book" className="card p-4 shadow-soft hover:shadow-lg transition-shadow duration-300">
              <img
                src={service.image}
                alt={service.title}
                className="h-40 w-full object-cover rounded-lg"
                loading="lazy"
              />
              <div className="mt-4">
                <h3 className="font-bold text-lg">{service.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

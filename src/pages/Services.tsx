import { Button } from "@/components/ui/button";
import { Wrench, Paintbrush, Zap, Droplets, Hammer, Package, Home, Settings, Sparkles } from "lucide-react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import StickyBuyBar from "@/components/site/StickyBuyBar";

const Services = () => {
  const services = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "General repairs",
      description: "Lorem ipsum dolor sit amet consectetur in congue enim vitae pretium porttitor."
    },
    {
      icon: <Paintbrush className="h-8 w-8" />,
      title: "Painting & decorating", 
      description: "Lorem ipsum dolor sit amet consectetur in congue enim vitae pretium porttitor."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Electrical repairs",
      description: "Lorem ipsum dolor sit amet consectetur in congue enim vitae pretium porttitor."
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Plumbing repairs",
      description: "Lorem ipsum dolor sit amet consectetur in congue enim vitae pretium porttitor."
    },
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "Carpentry services",
      description: "Lorem ipsum dolor sit amet consectetur in congue enim vitae pretium porttitor."
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Furniture assembly",
      description: "Lorem ipsum dolor sit amet consectetur in congue enim vitae pretium porttitor."
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Roof renovation",
      description: "Lorem ipsum dolor sit amet consectetur in congue enim vitae pretium porttitor."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Roof repair",
      description: "Lorem ipsum dolor sit amet consectetur in congue enim vitae pretium porttitor."
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Damaged roofing",
      description: "Lorem ipsum dolor sit amet consectetur in congue enim vitae pretium porttitor."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <p className="text-primary font-medium mb-4">/SERVICES/</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Explore our wide<br />
                range of services
              </h1>
              <p className="text-muted-foreground max-w-md mx-auto">
                Lorem ipsum dolor sit amet consectetur cum sed massa auctor sit phasellus integer sapittos arcu gravida urna massa amet fermt.
              </p>
            </div>
            
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-2xl bg-primary text-primary-foreground p-8 md:p-12 shadow-soft">
              <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10"></div>
              <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/10"></div>
              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Get a quote today for your new project!
                </h2>
                <p className="text-primary-foreground/90 mb-8">
                  Lorem ipsum dolor sit amet consectetur. Convalis elit orci sed auctor odio et gravida cursus tristique. Sit habitant.
                </p>
                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                  GET A QUOTE
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyBuyBar />
    </div>
  );
};

export default Services;
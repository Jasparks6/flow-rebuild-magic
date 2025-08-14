import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-handyman.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img 
          src={heroImg} 
          alt="Professional handyman providing affordable home repair services" 
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-slate-900/40"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-8 items-end text-white">
          <div>
            <span className="chip glass">Affordable home services</span>
            
            <h1 className="mt-4 text-4xl md:text-6xl font-black leading-tight">
              Affordable home repair services
            </h1>
            
            <p className="mt-4 text-white/85 max-w-xl">
              Local experts for repairs, installations and upgrades. Fast scheduling and clear pricing.
            </p>
            
            <div className="mt-6 flex flex-wrap gap-3">
              <Button size="pill" asChild>
                <a href="#quote">Get an Instant Quote</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

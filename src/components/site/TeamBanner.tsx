import { Button } from "@/components/ui/button";
import drillImg from "@/assets/service-drill.jpg";

const TeamBanner = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="card p-6 shadow-soft">
            <h3 className="text-2xl font-extrabold">Our pro team takes care of everything</h3>
            <p className="mt-2 text-muted-foreground">
              From first contact to final cleanup, our trained technicians follow strict checklists and quality standards.
            </p>
            <Button variant="soft" className="mt-6">
              Get Instant Quote
            </Button>
          </div>
          <div className="h-72 md:h-96 rounded-2xl overflow-hidden">
            <img 
              src={drillImg} 
              alt="Team at work" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamBanner;
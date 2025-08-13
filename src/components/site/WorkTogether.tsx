import windowImg from "@/assets/service-toolbox.jpg";
import { Button } from "@/components/ui/button";

const WorkTogether = () => {
  return (
    <section className="container mx-auto py-16 md:py-24">
      <div className="relative rounded-2xl overflow-hidden">
        <img src={windowImg} alt="Tools ready for home repair project" className="w-full h-72 md:h-80 object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="absolute inset-0 p-8 md:p-12 text-background flex flex-col justify-between">
          <div className="max-w-lg">
            <p className="text-sm font-semibold opacity-80">Contact us</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mt-1">Let's work together!</h2>
            <p className="opacity-90">Tell us about your project and schedule a convenient time.</p>
          </div>
          <Button variant="secondary" size="pill" asChild>
            <a href="#quote">Get a quote</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkTogether;

import { Button } from "@/components/ui/button";
import experienceImg from "@/assets/experience-team.jpg";

const WhyUs = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <span className="chip">About us</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">We have more than 20 years of experience</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Reliable, friendly and fully insured. We handle small jobs to multi-day projects with the same attention to detail.
          </p>
        </div>
        
        <div className="mt-10 grid md:grid-cols-2 gap-6 items-center">
          <div className="h-72 md:h-[22rem] rounded-2xl overflow-hidden">
            <img 
              src={experienceImg} 
              alt="Licensed technician on site" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="card p-5 shadow-soft">
              <p className="text-sm text-muted-foreground">Response time</p>
              <p className="mt-1 text-2xl font-extrabold">Same day</p>
              <p className="mt-2 text-sm text-muted-foreground">Emergency bookings available.</p>
            </div>
            <div className="card p-5 shadow-soft">
              <p className="text-sm text-muted-foreground">Satisfaction</p>
              <p className="mt-1 text-2xl font-extrabold">4.9 average</p>
              <p className="mt-2 text-sm text-muted-foreground">Across all platforms.</p>
            </div>
            <div className="card p-5 shadow-soft">
              <p className="text-sm text-muted-foreground">Pricing</p>
              <p className="mt-1 text-2xl font-extrabold">Clear quotes</p>
              <p className="mt-2 text-sm text-muted-foreground">No hidden fees.</p>
            </div>
            <div className="card p-5 shadow-soft">
              <p className="text-sm text-muted-foreground">Guarantee</p>
              <p className="mt-1 text-2xl font-extrabold">Work warranty</p>
              <p className="mt-2 text-sm text-muted-foreground">We stand by our work.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

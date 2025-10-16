import { Button } from "@/components/ui/button";
import { useQuoteModal } from "@/contexts/QuoteModalContext";
import teamBannerImg from "@/assets/team-banner.jpg";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "90+", label: "Happy clients" },
  { value: "400+", label: "Projects done" },
  { value: "80+", label: "Team members" },
];

const TeamBanner = () => {
  const { openModal } = useQuoteModal();

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* Dark Navy Card */}
          <div className="rounded-3xl p-8 md:p-12 flex flex-col justify-between" style={{ backgroundColor: 'hsl(222, 47%, 11%)' }}>
            <div>
              <span className="text-primary font-bold text-base">/WHY US/</span>
              <h3 className="mt-4 text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Our pro team takes care of everything
              </h3>
              <p className="mt-4 text-white/80 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur amet venenatis non tempus tortor mauris senectus donec massa porta sit sit.
              </p>
            </div>
            
            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl md:text-5xl font-extrabold text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-white/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="mt-8">
              <Button 
                onClick={openModal}
                className="rounded-full px-6 py-6 text-base font-semibold"
              >
                GET A QUOTE
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="h-[500px] md:h-auto rounded-3xl overflow-hidden">
            <img 
              src={teamBannerImg} 
              alt="Professional team member cleaning window" 
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
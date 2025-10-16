import { Button } from "@/components/ui/button";
import { useQuoteModal } from "@/contexts/QuoteModalContext";
import experienceImg from "@/assets/experience-team.jpg";
import { Users, ThumbsUp, DollarSign, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Experienced team members",
    text: "Lorem ipsum dolor sit amet consectetur in congue enim.",
    Icon: Users,
  },
  {
    title: "Fast & reliable",
    text: "Lorem ipsum dolor sit amet consectetur in congue enim.",
    Icon: ThumbsUp,
  },
  {
    title: "Affordable service rates",
    text: "Lorem ipsum dolor sit amet consectetur in congue enim.",
    Icon: DollarSign,
  },
];

const WhyUs = () => {
  const { openModal } = useQuoteModal();

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-primary font-bold text-lg">/ABOUT US/</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold" style={{ color: 'hsl(222, 47%, 11%)' }}>
            We have more than 20 years of experience
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur amet venenatis non tempus tortor mauris senectus donec massa porta sit sit.
          </p>
        </div>
        
        <div className="mt-12 relative max-w-5xl mx-auto">
          {/* Image */}
          <div className="h-[400px] md:h-[500px] rounded-3xl overflow-hidden">
            <img 
              src={experienceImg} 
              alt="Professional handyman at work on site" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          
          {/* Overlapping Feature Cards */}
          <div className="mt-8 md:-mt-16 grid md:grid-cols-3 gap-4 md:gap-6 relative z-10 px-4 md:px-12">
            {features.map(({ title, text, Icon }) => (
              <div key={title} className="rounded-2xl bg-white p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 rounded-full bg-primary text-white grid place-items-center mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-lg" style={{ color: 'hsl(222, 47%, 11%)' }}>{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <Button 
            onClick={openModal}
            className="rounded-full px-8 py-6 text-base font-semibold"
          >
            GET A QUOTE
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

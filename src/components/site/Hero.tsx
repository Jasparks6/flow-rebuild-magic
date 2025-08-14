import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-handyman-blue.jpg";
import BookingModal from "./BookingModal";

const Hero = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img 
          src={heroImg}
          alt="Professional handyman in blue uniform providing home repair services" 
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-slate-900/40"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-8 items-center text-white">
          <div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Affordable home repair services
            </h1>
            
            <p className="mt-4 text-white/85 max-w-xl">
              Lorem ipsum dolor sit amet consectetur amet venenatis non tempus tortor mauris senectus donec massa porta sit sit.
            </p>
            
            <div className="mt-6">
              <Button 
                size="pill" 
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-primary hover:brightness-95"
              >
                GET A QUOTE
                <span className="ml-2">→</span>
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <h2 className="text-2xl font-extrabold text-foreground mb-4">
                Book your service today
              </h2>
              <p className="text-muted-foreground mb-4">
                Lorem ipsum dolor sit amet consectetur amet non venenatis non tempus tortor mauris senectus.
              </p>
              <Button 
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full"
              >
                Enter your email →
              </Button>
            </div>
          </div>
        </div>
      </div>

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </section>
  );
};

export default Hero;
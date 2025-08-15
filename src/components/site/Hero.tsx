import React from "react";
import { Button } from "../ui/button";
import { useQuoteModal } from "@/contexts/QuoteModalContext";

const Hero = () => {
  const { openModal } = useQuoteModal();

  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 mt-20">
      <div className="relative">
        {/* Hero Image with Content */}
        <div 
          className="relative rounded-3xl overflow-hidden"
          style={{
            backgroundImage: `url('/lovable-uploads/a3d114a1-6da7-445b-958e-1a4c0b715c6d.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '614px'
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 p-8 h-full flex flex-col justify-center max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-black leading-tight text-white drop-shadow-lg">
              Affordable home repair services
            </h1>
            
            <p className="mt-4 text-white/90 max-w-md drop-shadow-md text-lg">
              Lorem ipsum dolor sit amet consectetur amet venenatis non tempus tortor mauris senectus donec massa porta sit sit.
            </p>
            
            <div className="mt-6">
              <Button 
                size="pill" 
                onClick={openModal}
                className="bg-primary hover:brightness-95 text-white font-semibold shadow-lg hover-scale"
              >
                GET A QUOTE
                <span className="ml-2">→</span>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Booking Card */}
        <div className="absolute bottom-8 right-8 bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 max-w-md w-full animate-fade-in hidden md:block">
          <h2 className="text-2xl font-extrabold text-foreground mb-4">
            Book your service today
          </h2>
          <p className="text-muted-foreground mb-6 text-lg">
            Lorem ipsum dolor sit amet consectetur amet non venenatis non tempus tortor mauris senectus.
          </p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <Button 
              onClick={openModal}
              className="rounded-l-none px-6 hover-scale"
            >
              →
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Booking Card */}
      <div className="md:hidden mt-8 bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
        <h2 className="text-xl font-extrabold text-foreground mb-3">
          Book your service today
        </h2>
        <p className="text-muted-foreground mb-4">
          Lorem ipsum dolor sit amet consectetur amet non venenatis non tempus tortor mauris senectus.
        </p>
        <div className="flex">
          <input 
            type="email" 
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button 
            onClick={openModal}
            className="rounded-l-none px-4"
          >
            →
          </Button>
        </div>
      </div>

    </section>
  );
};

export default Hero;
import React, { useState } from "react";
import { Button } from "../ui/button";
// Use the uploaded hero image directly
const heroImg = "/lovable-uploads/3e6e9c9d-6aac-4f29-a443-5ef3523dbf52.png";

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

      {/* Simple modal */}
      {isBookingModalOpen && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setIsBookingModalOpen(false)}
        >
          <div 
            className="bg-white p-8 rounded-2xl max-w-md w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Book your service today</h3>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur amet non venenatis non tempus tortor mauris senectus.
            </p>
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex gap-3">
                <Button 
                  onClick={() => setIsBookingModalOpen(false)}
                  className="flex-1"
                >
                  Submit →
                </Button>
                <button 
                  onClick={() => setIsBookingModalOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
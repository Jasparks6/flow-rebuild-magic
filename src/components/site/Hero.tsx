import React, { useState } from "react";
import { Button } from "../ui/button";

const Hero = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <section className="container mx-auto px-4 sm:px-6 py-12 mt-20">
      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
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
          <div className="relative z-10 p-8 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-black leading-tight text-white drop-shadow-lg">
              Affordable home repair services
            </h1>
            
            <p className="mt-4 text-white/90 max-w-md drop-shadow-md text-lg">
              Lorem ipsum dolor sit amet consectetur amet venenatis non tempus tortor mauris senectus donec massa porta sit sit.
            </p>
            
            <div className="mt-6">
              <Button 
                size="pill" 
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-primary hover:brightness-95 text-white font-semibold shadow-lg"
              >
                GET A QUOTE
                <span className="ml-2">→</span>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Booking Card */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full flex flex-col justify-center">
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
              className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button 
              onClick={() => setIsBookingModalOpen(true)}
              className="rounded-l-none px-6"
            >
              →
            </Button>
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
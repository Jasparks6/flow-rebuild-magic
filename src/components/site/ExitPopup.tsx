import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import confetti from "canvas-confetti";
import desktopFrame from "@/assets/vynyrd-desktop-frame.png";
import mockupPlaceholder from "@/assets/mockup-placeholder.gif";

const ExitPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60 - 90); // 23:58:30 in seconds

  useEffect(() => {
    let hasShown = false;

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse leaves from the top of the viewport
      if (e.clientY <= 0 && !hasShown) {
        hasShown = true;
        setIsOpen(true);
        
        // Trigger confetti
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

        const randomInRange = (min: number, max: number) => {
          return Math.random() * (max - min) + min;
        };

        const interval = setInterval(() => {
          const timeLeft = animationEnd - Date.now();

          if (timeLeft <= 0) {
            return clearInterval(interval);
          }

          const particleCount = 50 * (timeLeft / duration);
          
          confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
          });
          confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
          });
        }, 250);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden border-2 border-primary/20">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 z-10 rounded-full bg-background/80 p-2 hover:bg-background transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="p-8 text-center space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black">
              WAIT! Want your new website for{" "}
              <span className="relative inline-block">
                just $1
                <svg
                  className="absolute -bottom-3 left-0 w-full h-3"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="slashGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#9333ea', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 5 8 Q 50 2, 95 6"
                    stroke="url(#slashGradient)"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              ?
            </h2>
            <p className="text-lg text-muted-foreground">
              Pay whatever you want and install it in the next 5 mins
            </p>
          </div>

          {/* Mockup Image */}
          <div className="relative mx-auto max-w-2xl">
            <div className="relative">
              {/* Desktop Frame */}
              <img
                src={desktopFrame}
                alt="Desktop Frame"
                className="w-full h-auto relative z-10"
              />
              {/* Dynamic Screenshot */}
              <img
                src={mockupPlaceholder}
                alt="Website Preview"
                className="absolute top-[5.5%] left-[8%] w-[84%] h-[82%] object-cover object-top"
                key={mockupPlaceholder}
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="space-y-4 mt-8">
            <Button
              size="lg"
              className="w-full max-w-md text-lg py-6 rounded-full bg-black text-white hover:bg-black/90"
              asChild
            >
              <a href="https://www.vynyrd.com/checkout?name=John&business_name=ABC%20Realty">
                Buy and Install Now
              </a>
            </Button>

            {/* Timer Tag */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 bg-red-50 text-gray-700 px-4 py-2 rounded-full text-sm">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                Only available for {formatTime(timeLeft)}
              </div>
            </div>

            {/* Guarantee Text */}
            <p className="text-sm text-muted-foreground">
              ✓ 30-Day Money-Back Guarantee
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitPopup;

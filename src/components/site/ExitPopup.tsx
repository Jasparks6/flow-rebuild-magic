import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import confetti from "canvas-confetti";

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
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
              WAIT! Want your new website for just $1?
            </h2>
            <p className="text-lg text-muted-foreground">
              Pay whatever you want and install it in the next 5 mins
            </p>
          </div>

          {/* Mockup Image */}
          <div className="relative mx-auto max-w-md">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-primary/10">
              <img
                src="/lovable-uploads/ad0db551-d3be-4734-b9a7-8eb1f6e7f4b5.png"
                alt="Website Preview"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="space-y-4">
            <Button
              size="lg"
              className="w-full max-w-md text-lg py-6 rounded-full"
              asChild
            >
              <a href="https://www.vynyrd.com/checkout?name=John&business_name=ABC%20Realty">
                Buy and Install Now
              </a>
            </Button>

            {/* Timer Tag */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 bg-destructive text-destructive-foreground px-4 py-2 rounded-full text-sm font-semibold">
                🔥 Only available for {formatTime(timeLeft)}
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

import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const StickyBuyBar = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white shadow-2xl border-t border-blue-500/20">
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex flex-col sm:flex-row items-center gap-3 justify-between">
          <div className="flex items-center gap-3">
            <p className="text-sm md:text-base font-semibold text-white/95 text-center sm:text-left">
              Love your new website? Buy now and pay what you want!
            </p>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <div className="flex items-center gap-1 bg-black/20 rounded-md px-2 py-1">
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#2D3748"/>
                  </svg>
                </div>
                <span className="font-medium">Made with</span>
                <Heart className="w-3 h-3 text-red-400 fill-current" />
                <span className="font-medium">by Vynyrd</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              variant="glass" 
              className="bg-white/20 text-white border-white/30 hover:bg-white/30 glow"
            >
              Buy now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBuyBar;
import { Button } from "@/components/ui/button";
import vynyrdBadge from "@/assets/vynyrd-badge.png";

const StickyBuyBar = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-4">
        <div className="container mx-auto flex items-center justify-center relative">
          <div className="flex items-center gap-6">
            <p className="text-lg font-bold text-center">
              Love your new website? Buy now and pay what you want!
            </p>
            <Button 
              variant="outline" 
              size="sm"
              className="bg-white text-purple-600 border-white hover:bg-gray-100 text-sm px-6 py-2 rounded-full font-semibold"
            >
              Buy now
            </Button>
          </div>
          
          <div className="absolute right-0 flex items-center">
            <img 
              src={vynyrdBadge} 
              alt="Made with love by Vynyrd" 
              className="h-10 w-auto object-contain"
              onError={(e) => {
                console.error('Image failed to load:', vynyrdBadge);
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBuyBar;
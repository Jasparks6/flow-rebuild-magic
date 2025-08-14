import { Button } from "@/components/ui/button";
import vynyrdBadge from "@/assets/vynyrd-badge.png";

const StickyBuyBar = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <p className="text-sm font-medium">
              Like Handyflow Webflow Template? Get it today on the Webflow Marketplace
            </p>
            <Button 
              variant="outline" 
              size="sm"
              className="bg-white text-purple-600 border-white hover:bg-gray-100 text-sm px-4 py-1 rounded-full font-semibold"
            >
              Buy now
            </Button>
          </div>
          
          <div className="flex items-center">
            <img 
              src={vynyrdBadge} 
              alt="Made with love by Vynyrd" 
              className="h-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBuyBar;
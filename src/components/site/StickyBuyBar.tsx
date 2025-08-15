import { Button } from "@/components/ui/button";

const StickyBuyBar = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-4">
        <div className="container mx-auto flex items-center justify-center">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <p className="text-lg font-bold text-center">
              Love your new website? Buy now and pay what you want!
            </p>
            <Button 
              variant="outline" 
              size="sm"
              className="bg-white text-purple-600 border-white hover:bg-gray-100 text-sm px-6 py-2 rounded-full font-semibold"
              asChild
            >
              <a 
                href="https://www.vynyrd.com/checkout?name=John&business_name=ABC%20Realty"
              >
                Buy now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBuyBar;
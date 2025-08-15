import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="pointer-events-none fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-[70%]">
      <div className={`pointer-events-auto glass shadow-lg transition-all duration-300 ease-out ${
        isMenuOpen ? 'rounded-3xl' : 'rounded-full'
      }`}>
        <div className="px-4 sm:px-6">
          <div className="flex h-14 items-center justify-between">
            <a href="/" className="flex items-center gap-2 font-black text-lg tracking-tight">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                HF
              </span>
              HandyFlow
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
              <a className="hover:text-primary transition-colors" href="#services">Services</a>
              <a className="hover:text-primary transition-colors" href="#about">About</a>
              <a className="hover:text-primary transition-colors" href="#process">Process</a>
              <a className="hover:text-primary transition-colors" href="#testimonials">Reviews</a>
              <a className="hover:text-primary transition-colors" href="#blog">News</a>
            </nav>
            
            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center gap-2">
              <Button size="pill" asChild>
                <a href="#quote">Get an Instant Quote</a>
              </Button>
            </div>

            {/* Mobile/Tablet Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-secondary/10 rounded-lg transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile/Tablet Dropdown Menu - Integrated */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
          isMenuOpen 
            ? 'max-h-80 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-border/20 px-4 pb-4">
            <nav className="pt-4 space-y-1">
              <a 
                className="block px-4 py-3 text-sm font-medium hover:bg-secondary/10 rounded-lg transition-colors" 
                href="#services"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                className="block px-4 py-3 text-sm font-medium hover:bg-secondary/10 rounded-lg transition-colors" 
                href="#about"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                className="block px-4 py-3 text-sm font-medium hover:bg-secondary/10 rounded-lg transition-colors" 
                href="#process"
                onClick={() => setIsMenuOpen(false)}
              >
                Process
              </a>
              <a 
                className="block px-4 py-3 text-sm font-medium hover:bg-secondary/10 rounded-lg transition-colors" 
                href="#testimonials"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </a>
              <a 
                className="block px-4 py-3 text-sm font-medium hover:bg-secondary/10 rounded-lg transition-colors" 
                href="#blog"
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </a>
              <div className="pt-2 mt-2">
                <Button size="pill" className="w-full" asChild>
                  <a href="#quote" onClick={() => setIsMenuOpen(false)}>
                    Get an Instant Quote
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useQuoteModal } from "@/contexts/QuoteModalContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useQuoteModal();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="pointer-events-none relative z-50 w-full max-w-[1200px] mx-auto px-4 pt-6">
      <div className="pointer-events-auto rounded-3xl glass shadow-lg">
        <div className="px-4 sm:px-6">
          <div className="flex h-14 items-center justify-between">
            <a href="/" className="flex items-center gap-2 font-black text-lg tracking-tight">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                HF
              </span>
              HandyFlow
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 text-base font-medium">
              <a className="hover:text-primary transition-colors" href="/services">Services</a>
              <a className="hover:text-primary transition-colors" href="/about">About</a>
              <a className="hover:text-primary transition-colors" href="#process">Process</a>
              <a className="hover:text-primary transition-colors" href="#testimonials">Reviews</a>
              <a className="hover:text-primary transition-colors" href="/contact">Contact</a>
            </nav>
            
            <div className="hidden lg:flex items-center gap-2">
              <Button size="pill" onClick={openModal}>
                <span>Get an Instant Quote</span>
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
                href="/services"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                className="block px-4 py-3 text-sm font-medium hover:bg-secondary/10 rounded-lg transition-colors" 
                href="/about"
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
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-2 mt-2">
                <Button size="pill" className="w-full" onClick={() => {
                  openModal();
                  setIsMenuOpen(false);
                }}>
                  <span>Get an Instant Quote</span>
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

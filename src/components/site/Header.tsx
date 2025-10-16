import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, ArrowRight } from "lucide-react";
import { useQuoteModal } from "@/contexts/QuoteModalContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useQuoteModal();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white py-4 px-4">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-bold">
            <a className="hover:text-primary transition-colors" href="/">HOME</a>
            <a className="hover:text-primary transition-colors" href="/about">ABOUT</a>
            <a className="hover:text-primary transition-colors" href="/services">SERVICES</a>
            <a className="hover:text-primary transition-colors" href="#pages">PAGES ▼</a>
            <a className="hover:text-primary transition-colors" href="#cart">CART (0)</a>
          </nav>
          
          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Button 
              onClick={openModal}
              className="rounded-full px-8 py-6 text-base font-bold"
            >
              Get an Instant Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
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
        
        {/* Mobile Dropdown Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 mt-4' 
            : 'max-h-0 opacity-0'
        }`}>
          <nav className="space-y-2 pb-4">
            <a 
              className="block px-4 py-3 text-sm font-bold hover:bg-secondary/10 rounded-lg transition-colors" 
              href="/"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </a>
            <a 
              className="block px-4 py-3 text-sm font-bold hover:bg-secondary/10 rounded-lg transition-colors" 
              href="/about"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </a>
            <a 
              className="block px-4 py-3 text-sm font-bold hover:bg-secondary/10 rounded-lg transition-colors" 
              href="/services"
              onClick={() => setIsMenuOpen(false)}
            >
              SERVICES
            </a>
            <a 
              className="block px-4 py-3 text-sm font-bold hover:bg-secondary/10 rounded-lg transition-colors" 
              href="#pages"
              onClick={() => setIsMenuOpen(false)}
            >
              PAGES
            </a>
            <a 
              className="block px-4 py-3 text-sm font-bold hover:bg-secondary/10 rounded-lg transition-colors" 
              href="#cart"
              onClick={() => setIsMenuOpen(false)}
            >
              CART (0)
            </a>
            <div className="pt-2">
              <Button 
                className="w-full rounded-full py-6 text-base font-bold" 
                onClick={() => {
                  openModal();
                  setIsMenuOpen(false);
                }}
              >
                Get an Instant Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

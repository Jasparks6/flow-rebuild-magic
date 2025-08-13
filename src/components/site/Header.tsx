import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <a href="/" aria-label="HandyFlow home" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-primary/10 grid place-items-center text-primary font-extrabold">HF</div>
          <span className="font-extrabold tracking-tight">HandyFlow</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a className="story-link" href="#services">Services</a>
          <a className="story-link" href="#process">Process</a>
          <a className="story-link" href="#testimonials">Reviews</a>
          <a className="story-link" href="#blog">News</a>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="soft" size="sm" className="hidden md:inline-flex" asChild>
            <a href="#contact"><PhoneCall className="mr-1" /> Call us</a>
          </Button>
          <Button variant="hero" size="pill" asChild>
            <a href="#quote">Get a quote</a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

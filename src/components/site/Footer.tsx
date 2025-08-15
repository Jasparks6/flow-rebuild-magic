import { Phone, Mail, MapPin, Send, Facebook, Twitter, Instagram, Linkedin, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Footer = () => {
  const [isMainPagesOpen, setIsMainPagesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  return (
    <footer className="mt-2 mb-24" id="contact">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="bg-slate-800 rounded-3xl p-8 md:p-12">
          <div className="grid gap-8 md:gap-12 lg:grid-cols-5">
            {/* Company Info & Newsletter */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-lg bg-blue-500 grid place-items-center text-white font-extrabold">HF</div>
                <span className="font-extrabold tracking-tight text-white text-xl">HandyFlow</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
                Lorem ipsum dolor sit amet consectetur sed venenatis dictum at fermentum.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-white font-semibold">Subscribe to our newsletter</h3>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  <Button size="sm" className="bg-blue-500 hover:bg-blue-600 p-2 rounded-lg">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Main Pages */}
            <div className="space-y-4">
              {/* Desktop version - always visible */}
              <div className="hidden lg:block">
                <h3 className="text-white font-semibold">Main pages</h3>
                <div className="space-y-2 text-sm">
                  <a href="/" className="block text-slate-300 hover:text-white transition-colors">Home</a>
                  <a href="/about" className="block text-slate-300 hover:text-white transition-colors">About</a>
                  <a href="/services" className="block text-slate-300 hover:text-white transition-colors">Services</a>
                  <a href="#process" className="block text-slate-300 hover:text-white transition-colors">Process</a>
                  <a href="#testimonials" className="block text-slate-300 hover:text-white transition-colors">Reviews</a>
                  <a href="/contact" className="block text-slate-300 hover:text-white transition-colors">Contact</a>
                </div>
              </div>
              
              {/* Mobile/Tablet version - collapsible */}
              <div className="lg:hidden">
                <button 
                  onClick={() => setIsMainPagesOpen(!isMainPagesOpen)}
                  className="flex items-center justify-between w-full text-white font-semibold py-2 hover:text-blue-400 transition-colors"
                >
                  Main pages
                  {isMainPagesOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isMainPagesOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="space-y-2 text-sm pt-2 bg-slate-800 relative z-10">
                    <a href="/" className="block text-slate-300 hover:text-white transition-colors py-1">Home</a>
                    <a href="/about" className="block text-slate-300 hover:text-white transition-colors py-1">About</a>
                    <a href="/services" className="block text-slate-300 hover:text-white transition-colors py-1">Services</a>
                    <a href="#process" className="block text-slate-300 hover:text-white transition-colors py-1">Process</a>
                    <a href="#testimonials" className="block text-slate-300 hover:text-white transition-colors py-1">Reviews</a>
                    <a href="/contact" className="block text-slate-300 hover:text-white transition-colors py-1">Contact</a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Services */}
            <div className="space-y-4">
              {/* Desktop version - always visible */}
              <div className="hidden lg:block">
                <h3 className="text-white font-semibold">Services</h3>
                <div className="space-y-2 text-sm">
                  <a href="/services" className="block text-slate-300 hover:text-white transition-colors">General repairs</a>
                  <a href="/services" className="block text-slate-300 hover:text-white transition-colors">Painting and decorating</a>
                  <a href="/services" className="block text-slate-300 hover:text-white transition-colors">Electrical repairs</a>
                  <a href="/services" className="block text-slate-300 hover:text-white transition-colors">Plumbing repair</a>
                  <a href="/services" className="block text-slate-300 hover:text-white transition-colors">Carpentry and furniture</a>
                  <a href="/services" className="block text-slate-300 hover:text-white transition-colors">Furniture assembly</a>
                </div>
              </div>
              
              {/* Mobile/Tablet version - collapsible */}
              <div className="lg:hidden">
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full text-white font-semibold py-2 hover:text-blue-400 transition-colors"
                >
                  Services
                  {isServicesOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isServicesOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="space-y-2 text-sm pt-2 bg-slate-800 relative z-10">
                    <a href="/services" className="block text-slate-300 hover:text-white transition-colors py-1">General repairs</a>
                    <a href="/services" className="block text-slate-300 hover:text-white transition-colors py-1">Painting and decorating</a>
                    <a href="/services" className="block text-slate-300 hover:text-white transition-colors py-1">Electrical repairs</a>
                    <a href="/services" className="block text-slate-300 hover:text-white transition-colors py-1">Plumbing repair</a>
                    <a href="/services" className="block text-slate-300 hover:text-white transition-colors py-1">Carpentry and furniture</a>
                    <a href="/services" className="block text-slate-300 hover:text-white transition-colors py-1">Furniture assembly</a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact & Location */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-blue-400 font-semibold flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Contact us
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="text-slate-300">Email: <a href="mailto:contact@handyflow.com" className="text-white hover:text-blue-400 transition-colors">contact@handyflow.com</a></div>
                  <div className="text-slate-300">Phone: <a href="tel:+1234567890" className="text-white hover:text-blue-400 transition-colors">(123) 456 - 789</a></div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-blue-400 font-semibold flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Our location
                </h3>
                <div className="text-sm text-slate-300">
                  2780 N Beachwood Dr,<br />
                  Los Angeles, CA 90068
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer Bottom */}
          <div className="border-t border-slate-700 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-slate-400 text-sm">
              Copyright © HandyFlow | Designed by BRIX Templates - Powered by Webflow
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

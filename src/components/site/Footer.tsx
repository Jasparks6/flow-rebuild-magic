import { Phone, Mail, MapPin, Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="mt-12 mb-8 px-4" id="contact">
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
              <h3 className="text-white font-semibold">Main pages</h3>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-slate-300 hover:text-white transition-colors">Preview</a>
                <a href="#" className="block text-slate-300 hover:text-white transition-colors">Home V1</a>
                <a href="#" className="block text-slate-300 hover:text-white transition-colors">Home V2</a>
                <a href="#" className="block text-slate-300 hover:text-white transition-colors">Home V3</a>
                <a href="#about" className="block text-slate-300 hover:text-white transition-colors">About</a>
                <a href="#" className="block text-slate-300 hover:text-white transition-colors">Team members</a>
                <a href="#" className="block text-slate-300 hover:text-white transition-colors">Contact V1</a>
                <a href="#" className="block text-slate-300 hover:text-white transition-colors">Contact V2</a>
                <a href="#" className="block text-slate-300 hover:text-white transition-colors">Contact V3</a>
              </div>
            </div>
            
            {/* Utility Pages */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Utility pages</h3>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-slate-300 hover:text-white transition-colors">Start here</a>
                <a href="#" className="block text-slate-300 hover:text-white transition-colors">Style guide</a>
                <a href="#" className="block text-slate-300 hover:text-white transition-colors">404 not found</a>
                <a href="#" className="block text-slate-300 hover:text-white transition-colors">Password protected</a>
                <a href="#" className="block text-slate-300 hover:text-white transition-colors">Coming soon</a>
                <a href="#" className="block text-slate-300 hover:text-white transition-colors">Licenses</a>
                <a href="#" className="block text-slate-300 hover:text-white transition-colors">Changelog</a>
                <a href="#blog" className="block text-slate-300 hover:text-white transition-colors">Blog V1</a>
                <a href="#" className="block text-slate-300 hover:text-white transition-colors">Blog V2</a>
                <a href="#" className="block text-slate-300 hover:text-white transition-colors">Blog V3</a>
                <a href="#" className="block text-slate-300 hover:text-white transition-colors">Blog post</a>
                <a href="#services" className="block text-slate-300 hover:text-white transition-colors">Services</a>
                <a href="#" className="block text-slate-300 hover:text-white transition-colors">Service single</a>
                <a href="#" className="block text-slate-300 hover:text-white transition-colors">Products</a>
                <a href="#" className="block text-slate-300 hover:text-white transition-colors">Product single</a>
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

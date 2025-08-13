import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background mt-20" id="contact">
      <div className="container mx-auto py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2 space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-background/10 grid place-items-center text-background font-extrabold">HF</div>
            <span className="font-extrabold tracking-tight">HandyFlow</span>
          </div>
          <p className="opacity-80 max-w-prose">
            Reliable home repair and handyman services with friendly pros. Serving your neighborhood with pride.
          </p>
        </div>
        <div className="space-y-3">
          <div className="font-semibold">Contact</div>
          <a className="flex items-center gap-2" href="tel:+10000000000"><Phone size={16}/> +1 (000) 000-0000</a>
          <a className="flex items-center gap-2" href="mailto:hello@handyflow.app"><Mail size={16}/> hello@handyflow.app</a>
          <div className="flex items-center gap-2"><MapPin size={16}/> Your City, USA</div>
        </div>
        <div className="space-y-3">
          <div className="font-semibold">Links</div>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#testimonials">Reviews</a>
          <a href="#blog">News</a>
        </div>
      </div>
      <div className="border-t border-background/20">
        <div className="container mx-auto py-6 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} HandyFlow. All rights reserved.</div>
          <div className="opacity-80">Made with care.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

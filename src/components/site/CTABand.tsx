import { Button } from "@/components/ui/button";
import { useQuoteModal } from "@/contexts/QuoteModalContext";
import windowImg from "@/assets/service-window.jpg";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const CTABand = () => {
  const { openModal } = useQuoteModal();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div 
          className="relative rounded-3xl overflow-hidden h-[500px] md:h-[400px]"
          style={{
            backgroundImage: `url(${windowImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>

          {/* Content Grid */}
          <div className="relative h-full grid md:grid-cols-2 gap-8 items-center p-6 md:p-12">
            {/* Left White Card */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl max-w-lg">
              <span className="text-primary font-bold text-base">/CONTACT US/</span>
              <h3 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: 'hsl(222, 47%, 11%)' }}>
                Let's work together!
              </h3>
              <p className="mt-4 text-muted-foreground text-base leading-relaxed">
                Lorem ipsum dolor sit amet consectetur amet venenatis non tempus tortor.
              </p>
              <div className="mt-6">
                <Button 
                  onClick={openModal}
                  className="rounded-full px-8 py-6 text-base font-semibold"
                >
                  GET A QUOTE
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Right Contact Info */}
            <div className="hidden md:flex flex-col gap-6 text-white">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Mail className="w-5 h-5" />
                  <h4 className="font-bold text-lg">Contact us</h4>
                </div>
                <p className="text-white/90 text-sm">Email: contact@handyflow.com</p>
                <p className="text-white/90 text-sm mt-1">Phone: (123) 456 - 789</p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5" />
                  <h4 className="font-bold text-lg">Our location</h4>
                </div>
                <p className="text-white/90 text-sm">16 Finland St Pittsburgh,</p>
                <p className="text-white/90 text-sm">Pennsylvania, PA , 15219</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABand;
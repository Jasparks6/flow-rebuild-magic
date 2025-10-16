import { Button } from "@/components/ui/button";
import { useQuoteModal } from "@/contexts/QuoteModalContext";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote: "Exceptional craftsmanship throughout our complete home renovation",
    text: "Lorem ipsum dolor sit amet consectetur sed arcu risus tortor consequat odio donec senectus ac.",
    name: "John Carter",
    location: "New York, NY",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote: "Reliable and meticulous work made the renovation process easy",
    text: "Lorem ipsum dolor sit amet consectetur sed arcu risus tortor consequat odio donec senectus ac.",
    name: "Sophie Moore",
    location: "San Francisco, CA",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop",
  },
];

const ReviewsGoogle = () => {
  const { openModal } = useQuoteModal();

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-primary font-bold text-lg">/TESTIMONIALS/</span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold" style={{ color: 'hsl(222, 47%, 11%)' }}>
            What our clients say about us
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur amet venenatis non tempus tortor mauris senectus donec massa porta sit sit.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="space-y-16 max-w-6xl mx-auto">
          {/* First Testimonial - Image Left, Text Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="h-[400px] rounded-3xl overflow-hidden">
              <img 
                src={testimonials[0].image}
                alt="Home renovation project"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="bg-gray-100 rounded-3xl p-8 md:p-10">
              <h3 className="text-3xl md:text-4xl font-extrabold leading-tight" style={{ color: 'hsl(222, 47%, 11%)' }}>
                "{testimonials[0].quote}"
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {testimonials[0].text}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <img 
                  src={testimonials[0].avatar}
                  alt={testimonials[0].name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="font-bold" style={{ color: 'hsl(222, 47%, 11%)' }}>
                    {testimonials[0].name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[0].location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Testimonial - Text Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-100 rounded-3xl p-8 md:p-10 order-2 md:order-1">
              <h3 className="text-3xl md:text-4xl font-extrabold leading-tight" style={{ color: 'hsl(222, 47%, 11%)' }}>
                "{testimonials[1].quote}"
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {testimonials[1].text}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <img 
                  src={testimonials[1].avatar}
                  alt={testimonials[1].name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="font-bold" style={{ color: 'hsl(222, 47%, 11%)' }}>
                    {testimonials[1].name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[1].location}
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[400px] rounded-3xl overflow-hidden order-1 md:order-2">
              <img 
                src={testimonials[1].image}
                alt="Renovation work"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16 flex justify-center">
          <Button 
            onClick={openModal}
            size="lg"
            className="rounded-full px-8 py-6 text-base font-semibold"
          >
            GET A QUOTE
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsGoogle;

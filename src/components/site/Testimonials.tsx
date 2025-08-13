import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import windowImg from "@/assets/service-window.jpg";

const Testimonials = () => {
  const items = [
    {
      name: "Alex R.",
      text: "Exceptional craftsmanship throughout our complete home renovation.",
    },
  ];
  return (
    <section id="testimonials" className="container mx-auto py-16 md:py-24">
      <p className="text-sm font-semibold text-primary/80">Reviews</p>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8">What our clients say about us</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border p-6 md:p-8 shadow-sm bg-card">
          <p className="text-lg mb-4">“{items[0].text}”</p>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>AR</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <div className="font-semibold">{items[0].name}</div>
              <div className="text-muted-foreground">Homeowner</div>
            </div>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden">
          <img src={windowImg} alt="Finished project showcase" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
      <div className="mt-6">
        <a href="#" className="story-link">See all reviews</a>
      </div>
    </section>
  );
};

export default Testimonials;

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Testimonials = () => {
  const items = [
    {
      name: "Alex R.",
      text: "Exceptional craftsmanship and super friendly. They fixed our window and mounted shelves perfectly.",
    },
    { name: "Maria G.", text: "Fast scheduling and clear pricing. Would definitely recommend!" },
  ];
  return (
    <section id="testimonials" className="container mx-auto py-16 md:py-24">
      <p className="text-sm font-semibold text-primary/80">Reviews</p>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8">What our clients say about us</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((t) => (
          <div key={t.name} className="rounded-2xl border p-6 md:p-8 shadow-sm bg-card">
            <p className="text-lg mb-4">“{t.text}”</p>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>{t.name.split(" ")[0].slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <div className="font-semibold">{t.name}</div>
                <div className="text-muted-foreground">Homeowner</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

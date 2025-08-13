import { Star, ExternalLink } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const reviews = [
  {
    name: "Sarah Johnson",
    time: "2 days ago",
    text:
      "Albie was fantastic! He fixed our water heater issue quickly and explained everything clearly. Very professional and fair pricing.",
  },
  {
    name: "Mike Rodriguez",
    time: "4 days ago",
    text:
      "Outstanding service! Called for a drain cleaning emergency and they came out the same day. Quality work and they really care.",
  },
  {
    name: "Lisa Chen",
    time: "1 week ago",
    text:
      "Professional, reliable, and honest. Fixed our kitchen sink leak and gave us great advice on maintenance.",
  },
];

const ReviewsGoogle = () => {
  return (
    <section aria-labelledby="reviews-title" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto">
        <header className="text-center mb-10 md:mb-14">
          <h2 id="reviews-title" className="text-3xl md:text-4xl font-extrabold">What Our Customers Say</h2>
          <div className="mt-3 flex items-center justify-center gap-2 text-muted-foreground">
            <span className="font-semibold text-foreground">Google Reviews</span>
            <span className="flex items-center gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" className="text-primary" />
              ))}
            </span>
            <span>(4.9/5)</span>
          </div>
          <p className="mt-2 text-muted-foreground">Real reviews from real customers in your area</p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <article key={r.name} className="rounded-2xl bg-card shadow-xl p-6 border">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>{r.name.split(" ")[0].slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{r.name}</div>
                    <div className="text-sm text-muted-foreground">{r.time}</div>
                  </div>
                </div>
                <div aria-label="Google" className="h-6 w-6 rounded-full bg-primary/10 grid place-items-center text-primary font-bold">G</div>
              </div>
              <div className="mt-4 flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" className="text-primary" />
                ))}
              </div>
              <p className="mt-3 text-muted-foreground">{r.text}</p>
              <a href="#" className="story-link mt-3 inline-block">Read more</a>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-primary font-medium">
          <div className="h-6 w-6 rounded-sm bg-foreground text-background grid place-items-center text-xs">G</div>
          <a href="#" className="inline-flex items-center gap-1">
            Read all reviews on Google <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsGoogle;

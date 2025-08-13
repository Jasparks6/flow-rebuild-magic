import drillImg from "@/assets/service-drill.jpg";
import toolboxImg from "@/assets/service-toolbox.jpg";
import windowImg from "@/assets/service-window.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const posts = [
  { title: "5 quick maintenance wins for your home", image: drillImg },
  { title: "How to know when to call a pro electrician", image: windowImg },
  { title: "Best tips to prep a room for painting", image: toolboxImg },
];

const Blog = () => {
  return (
    <section id="blog" className="container mx-auto py-16 md:py-24">
      <div className="flex items-end justify-between mb-10 md:mb-14">
        <div>
          <p className="text-sm font-semibold text-primary/80">Blog & News</p>
          <h2 className="text-3xl md:text-4xl font-extrabold">Our latest news</h2>
        </div>
        <div className="hidden md:flex items-center gap-2">
          {["All", "How-to", "Tips"].map((c, i) => (
            <button key={c} className={`h-9 rounded-full px-4 text-sm ${i===0 ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground hover:bg-accent/80"}`}>{c}</button>
          ))}
          <a href="#" className="story-link ml-2">View all</a>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <Card key={p.title} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-44 overflow-hidden">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{p.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">Read more →</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Blog;

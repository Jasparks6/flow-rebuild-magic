import blogRepairImg from "@/assets/blog-repair-mistakes.jpg";
import toolboxImg from "@/assets/service-toolbox.jpg";
import windowImg from "@/assets/service-window.jpg";
import { Button } from "@/components/ui/button";

const posts = [
  { 
    title: "What are the common problems that a handyman can fix?", 
    description: "Small checks can save hours on the job.",
    date: "Jan 6, 2025",
    category: "ARTICLES",
    readTime: "4 min read",
    image: blogRepairImg 
  },
  { 
    title: "10 essential tools that every handyman should have", 
    description: "Our favorite picks for reliability.",
    date: "Jan 6, 2025", 
    category: "TIPS",
    readTime: "3 min read",
    image: toolboxImg 
  },
  { 
    title: "Creative ideas for storage in small spaces: Handyman solutions", 
    description: "Preventative maintenance tips from our techs.",
    date: "Jan 6, 2025",
    category: "RESOURCES",
    readTime: "6 min read", 
    image: windowImg 
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-primary font-bold text-lg">/OUR BLOG/</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-extrabold" style={{ color: 'hsl(222, 47%, 11%)' }}>
              Our latest news
            </h2>
          </div>
          <Button 
            variant="outline" 
            className="rounded-full px-6 py-5 text-sm font-semibold hidden md:flex"
          >
            BROWSE ALL ARTICLES
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.title} className="group cursor-pointer">
              <div className="h-64 rounded-2xl overflow-hidden mb-4">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold leading-tight mb-3" style={{ color: 'hsl(222, 47%, 11%)' }}>
                {post.title}
              </h3>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-primary font-bold">{post.category}</span>
                <span className="text-muted-foreground">{post.date}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-8 flex justify-center md:hidden">
          <Button 
            variant="outline" 
            className="rounded-full px-6 py-5 text-sm font-semibold"
          >
            BROWSE ALL ARTICLES
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;

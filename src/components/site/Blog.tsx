import drillImg from "@/assets/service-drill.jpg";
import toolboxImg from "@/assets/service-toolbox.jpg";
import windowImg from "@/assets/service-window.jpg";

const posts = [
  { 
    title: "What are the common mistakes that lengthen repairs", 
    description: "Small checks can save hours on the job.",
    date: "Aug 2025",
    readTime: "4 min read",
    image: drillImg 
  },
  { 
    title: "5 essential tools that every service van should carry", 
    description: "Our favorite picks for reliability.",
    date: "Aug 2025", 
    readTime: "3 min read",
    image: toolboxImg 
  },
  { 
    title: "Critical steps for keeping small issues from becoming costly", 
    description: "Preventative maintenance tips from our techs.",
    date: "Aug 2025",
    readTime: "6 min read", 
    image: windowImg 
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between">
          <div>
            <span className="chip">Latest news</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">Our latest news</h2>
          </div>
          <a href="#" className="hidden md:inline-flex">
            <span className="chip">Explore all</span>
          </a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.title} className="card p-4 shadow-soft hover:shadow-lg transition-shadow duration-300">
              <img 
                src={post.image} 
                alt={post.title} 
                className="h-44 w-full object-cover rounded-lg"
                loading="lazy"
              />
              <h3 className="mt-3 font-bold">{post.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{post.description}</p>
              <p className="mt-2 text-xs text-muted-foreground">{post.date} • {post.readTime}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

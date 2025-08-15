import { Users, ThumbsUp, DollarSign } from "lucide-react";
import experienceImg from "@/assets/experience-team.jpg";

const features = [
  {
    title: "Experienced team members",
    text: "Lorem ipsum dolor sit amet consectetur in congue enim.",
    Icon: Users,
  },
  {
    title: "Fast & reliable",
    text: "Lorem ipsum dolor sit amet consectetur in congue enim.",
    Icon: ThumbsUp,
  },
  {
    title: "Affordable service rates",
    text: "Lorem ipsum dolor sit amet consectetur in congue enim.",
    Icon: DollarSign,
  },
];

const Experience = () => {
  return (
    <section aria-labelledby="experience-title" className="container mx-auto py-16 md:py-24">
      <header className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
        <h2 id="experience-title" className="text-3xl md:text-5xl font-extrabold tracking-tight">
          We have more than 20 years of experience
        </h2>
        <p className="mt-3 text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur amet venenatis non tempus tortor mauris senectus donec massa porta sit sit.
        </p>
      </header>

      <div className="relative">
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img src={experienceImg} alt="Pro handyman working on site" className="w-full h-full object-cover" loading="lazy" />
        </div>

        <div className="pointer-events-none"></div>

        <div className="-mt-10 md:-mt-14 grid gap-4 md:grid-cols-3">
          {features.map(({ title, text, Icon }) => (
            <div key={title} className="rounded-2xl bg-card/90 backdrop-blur border p-5 md:p-6 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary grid place-items-center">
                  <Icon size={18} />
                </div>
                <div className="font-semibold">{title}</div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a href="#quote" className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-shadow">
            GET A QUOTE
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;

import windowImg from "@/assets/service-window.jpg";

const steps = [
  { id: 1, title: "Contact us", text: "Tell us about your project and timing." },
  { id: 2, title: "Schedule an appointment", text: "Pick a time that works best for you." },
  { id: 3, title: "Get your project done!", text: "Our pros complete the job with care." },
];

const Process = () => {
  return (
    <section id="process" className="container mx-auto py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-2 items-center">
        <div>
          <p className="text-sm font-semibold text-primary/80">Process</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Check how our process is done</h2>
          <ol className="space-y-5">
            {steps.map((s) => (
              <li key={s.id} className="flex gap-4 items-start">
                <div className="h-9 w-9 rounded-full bg-primary/10 text-primary grid place-items-center font-bold">{s.id}</div>
                <div>
                  <div className="font-semibold">{s.title}</div>
                  <p className="text-muted-foreground">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <img
            src={windowImg}
            alt="Handyman working on a window during a scheduled appointment"
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Process;

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
        <div className="relative flex items-center justify-center">
          <div className="w-64 md:w-72 lg:w-80 rounded-[2rem] border bg-card shadow-2xl p-3">
            <div className="rounded-[1.5rem] bg-background border p-4">
              <div className="flex items-center justify-between">
                <div className="h-2 w-12 rounded-full bg-muted" />
                <div className="h-2 w-2 rounded-full bg-muted" />
              </div>
              <div className="mt-4 space-y-3">
                <div className="rounded-lg border p-3">
                  <div className="font-semibold">Book a service</div>
                  <p className="text-muted-foreground text-sm">Select date and time</p>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="font-semibold">Add details</div>
                  <p className="text-muted-foreground text-sm">Describe your project</p>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="font-semibold">Confirm</div>
                  <p className="text-muted-foreground text-sm">Get instant confirmation</p>
                </div>
              </div>
              <a href="#quote" className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">Get a free estimate</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

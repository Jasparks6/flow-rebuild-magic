import { Button } from "@/components/ui/button";
import { useQuoteModal } from "@/contexts/QuoteModalContext";
import processImg from "@/assets/process-work.jpg";

const steps = [
  { 
    id: 1, 
    title: "Contact us", 
    text: "Send your request with photos if possible. We reply quickly with guidance." 
  },
  { 
    id: 2, 
    title: "Schedule an appointment", 
    text: "Pick a time that works for you. Same day and weekend slots available." 
  },
  { 
    id: 3, 
    title: "Get your project done", 
    text: "We arrive on time, complete the job and tidy up before we leave." 
  },
];

const Process = () => {
  const { openModal } = useQuoteModal();

  return (
    <section id="process" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="chip">Process</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">Check how our process is done</h2>
            <ol className="mt-6 space-y-5">
              {steps.map((s) => (
                <li key={s.id} className="flex gap-3">
                  <div className="h-8 w-8 shrink-0 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {s.id}
                  </div>
                  <div>
                    <h4 className="font-bold">{s.title}</h4>
                    <p className="text-sm text-muted-foreground">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-6 flex gap-3">
              <Button size="pill" onClick={openModal}>
                Get Instant Quote
              </Button>
            </div>
          </div>
          <div className="justify-self-center">
            <div className="relative w-[18rem] sm:w-80 mx-auto">
              <img 
                src={processImg} 
                alt="Process image" 
                className="relative z-10 w-full rounded-[2rem] border border-slate-200 shadow-soft"
                loading="lazy"
              />
              <div className="absolute -inset-6 -z-0 rounded-[2rem] bg-gradient-to-tr from-primary to-cyan-400 opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

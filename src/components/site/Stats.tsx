const Stats = () => {
  const items = [
    { value: "90+", label: "5-star reviews" },
    { value: "400+", label: "Projects completed" },
    { value: "80+", label: "Happy clients" },
  ];
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold">Our pro team takes care of everything</h2>
          <p className="opacity-90 max-w-prose">
            From quick fixes to full installations, we deliver reliable results with respectful service and clear communication.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold">{it.value}</div>
              <div className="opacity-90 text-sm">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

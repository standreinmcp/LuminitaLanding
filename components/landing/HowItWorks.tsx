const steps = [
  {
    num: "1",
    title: "Book Your Session",
    desc: "Choose 60 or 90 minutes based on your project complexity.",
  },
  {
    num: "2",
    title: "Share Your Materials",
    desc: "Send plans, photos, references, and your specific questions in advance.",
  },
  {
    num: "3",
    title: "Private Video Session",
    desc: "We review everything together and address your decisions one by one.",
  },
  {
    num: "4",
    title: "Get Clear Answers",
    desc: "Receive a written summary of conclusions and next steps.",
  },
  {
    num: "5",
    title: "Move Forward",
    desc: "Make your decisions with confidence and professional backing.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-cobalt section-padding">
      <div
        className="section-label section-label-dark-line-bright reveal"
        style={{ color: "rgba(245,242,238,0.4)" }}
      >
        Process
      </div>
      <h2 className="reveal font-display text-[clamp(2.5rem,4vw,4rem)] leading-[1.05] font-light text-paper max-w-[500px]" style={{ marginBottom: "6rem" }}>
        How it works
      </h2>
      <div className="bordered-grid-5-light">
        {steps.map((s) => (
          <div key={s.num} className="reveal">
            <div
              className="font-display text-[5rem] text-paper/20 font-light leading-none"
              style={{ marginBottom: "1.5rem" }}
            >
              {s.num}
            </div>
            <h3
              className="font-display text-[1.5rem] font-normal leading-[1.05] text-paper"
              style={{ marginBottom: "0.8rem" }}
            >
              {s.title}
            </h3>
            <p className="font-body text-[0.95rem] leading-[1.7] text-paper/55 font-light">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

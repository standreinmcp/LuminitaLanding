const testimonials = [
  {
    text: "We were about to sign off on a layout we had doubts about for months. One session with Luminita and we understood exactly what wasn\u2019t working \u2014 and what to do instead. It saved us a costly mistake and gave us the confidence to move forward.",
    attr: "\u2014 M.T., residential renovation, Lisbon",
  },
  {
    text: "I came in with a contractor\u2019s quote I couldn\u2019t make sense of and left with a clear framework for what to prioritise. Completely honest, no fluff, no agenda. Exactly what I needed.",
    attr: "\u2014 A.R., apartment refurbishment, Porto",
  },
  {
    text: "The session felt like talking to a trusted friend who happened to know everything about interiors. She pointed out things I hadn\u2019t noticed and never made me feel foolish for not knowing them.",
    attr: "\u2014 C.F., first-time buyer, Cascais",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-ink section-padding">
      <div
        className="section-label section-label-dark-line reveal"
        style={{ color: "rgba(245,242,238,0.3)" }}
      >
        What clients say
      </div>
      <h2
        className="reveal font-display text-[clamp(2.5rem,4vw,4rem)] leading-[1.05] font-light text-paper"
        style={{ marginBottom: "5rem" }}
      >
        In Their <em className="italic text-brick">Own Words</em>
      </h2>
      <div className="grid-3col">
        {testimonials.map((t) => (
          <div
            key={t.attr}
            className="reveal transition-colors duration-300 hover:bg-paper/[0.06]"
            style={{
              padding: "3.5rem",
              background: "rgba(245,242,238,0.03)",
              borderTop: "1px solid rgba(245,242,238,0.08)",
            }}
          >
            {/* Large quotation mark */}
            <div
              className="font-display leading-none text-brick/50"
              style={{ fontSize: "6rem", marginBottom: "1rem" }}
            >
              &ldquo;
            </div>
            <div className="font-display italic text-[1.15rem] leading-[1.8] text-paper/75">
              {t.text}
            </div>
            <div
              className="font-body text-[0.68rem] tracking-[2.5px] uppercase text-paper/35"
              style={{
                marginTop: "2.5rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid rgba(245,242,238,0.08)",
              }}
            >
              {t.attr}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

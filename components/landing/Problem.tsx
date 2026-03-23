const problems = [
  {
    num: "01",
    title: "You Don\u2019t Know What You Don\u2019t Know",
    desc: "You make decisions based on what feels right \u2014 the Pinterest board, the contractor\u2019s suggestion, your gut. Nobody tells you the layout won\u2019t flow, the ceiling height changes everything, or that tile choice locks in three other decisions. You find out later.",
    highlight: false,
  },
  {
    num: "02",
    title: "You Pay for It Twice",
    desc: "Wrong tile. Wrong paint. Wrong lighting position. Each one costs thousands to undo \u2014 if it can be undone at all. Most mistakes aren\u2019t discovered until the workers have already left.",
    highlight: false,
  },
  {
    num: "03",
    title: "You Spend \u20AC50,000 and Still Feel Uncomfortable in Your Own Home",
    desc: "The renovation is done. It\u2019s technically fine. But something\u2019s off \u2014 and you can\u2019t quite name it. You live with it every day. Not because the work was bad, but because the decisions weren\u2019t right before it started.",
    highlight: true,
  },
];

export default function Problem() {
  return (
    <section className="bg-cobalt-light section-padding">
      <div className="section-label reveal">What goes wrong</div>
      <h2 className="reveal font-display text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.2] max-w-[800px] text-dark" style={{ marginBottom: "6rem" }}>
        Here&apos;s what happens when you make design decisions without the
        right guidance.
      </h2>
      <div className="bordered-grid-3">
        {problems.map((p) => (
          <div key={p.num} className="reveal">
            <div
              className="font-display text-[5rem] font-light text-dark/[0.22] leading-none"
              style={{ marginBottom: "1.5rem" }}
            >
              {p.num}
            </div>
            <h3
              className={`font-display text-[1.5rem] font-normal leading-[1.05] ${
                p.highlight ? "text-brick" : "text-dark"
              }`}
              style={{ marginBottom: "1.5rem" }}
            >
              {p.title}
            </h3>
            <p className="font-body text-[0.95rem] leading-[1.8] text-muted font-light">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

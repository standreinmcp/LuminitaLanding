const timings = [
  {
    stage: "Before",
    title: "Before the project begins",
    desc: "This is the highest-leverage moment. No decisions have been locked in, no money committed to construction, no mistakes made permanent. One session here can reshape the entire project \u2014 the layout, the priorities, the sequencing, the budget allocation. Everything is still possible. This is where professional guidance has the greatest return.",
    featured: false,
  },
  {
    stage: "During",
    title: "While the project is underway",
    desc: "It\u2019s not too late. If something feels wrong \u2014 a decision that\u2019s nagging at you, a contractor pushing you toward something you\u2019re unsure about, a material choice you\u2019re second-guessing \u2014 intervention mid-process can still course-correct what matters most. The work isn\u2019t done. Neither is the opportunity to get it right.",
    featured: true,
  },
  {
    stage: "After",
    title: "After the project is complete",
    desc: "Sometimes people come when the renovation is done but something still isn\u2019t right \u2014 and they can\u2019t name what it is. There are still things that can be addressed. Lighting, furniture placement, styling, small interventions. It\u2019s the most constrained scenario, but it\u2019s never truly over. Spaces can always be improved.",
    featured: false,
  },
];

export default function Timing() {
  return (
    <section className="bg-paper section-padding">
      <div className="section-label reveal">Timing</div>
      <h2
        className="reveal font-display text-[clamp(2.5rem,4vw,4rem)] leading-[1.05] font-light text-dark"
        style={{ marginBottom: "1.5rem" }}
      >
        When Do Clients<br />
        <em className="italic text-brick">Come to Me?</em>
      </h2>
      <p className="reveal font-body text-[1rem] leading-[1.8] text-muted font-light max-w-[600px]" style={{ marginBottom: "5rem" }}>
        There is no wrong moment to seek clarity. But each stage of a project
        has its own urgency — and its own kind of value.
      </p>
      <div className="grid-3col">
        {timings.map((t) => (
          <div
            key={t.stage}
            className={`reveal card-pad-lg ${
              t.featured ? "bg-cobalt" : "bg-cobalt-light"
            }`}
          >
            <div
              className="font-body text-[0.7rem] tracking-[4px] uppercase"
              style={{
                marginBottom: "1.5rem",
                color: t.featured ? "rgba(245,242,238,0.5)" : "#9A8F89",
              }}
            >
              {t.stage}
            </div>
            <h3
              className={`font-display text-[1.5rem] font-normal leading-[1.2] ${
                t.featured ? "text-paper" : "text-dark"
              }`}
              style={{ marginBottom: "1.2rem" }}
            >
              {t.title}
            </h3>
            <p
              className="font-body text-[0.95rem] leading-[1.8] font-light"
              style={{
                color: t.featured
                  ? "rgba(245,242,238,0.75)"
                  : "#9A8F89",
              }}
            >
              {t.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

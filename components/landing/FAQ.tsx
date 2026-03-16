const faqs = [
  {
    q: "Does the floor plan actually work? Can my furniture fit? Is the circulation logical?",
    a: "This is the most common mistake I see \u2014 people approve floor plans without understanding spatial flow or furniture placement. I\u2019ll tell you exactly what works and what doesn\u2019t before you commit.",
  },
  {
    q: "Do these colors, materials, and finishes actually work together?",
    a: "Most people choose materials in isolation \u2014 tile in one store, paint in another, fixtures somewhere else. Then nothing coheres. I give you an objective overview to validate or rethink your decisions.",
  },
  {
    q: "Where should I position my lighting fixtures?",
    a: "Lighting placement determines whether your space feels comfortable or uncomfortable. I\u2019ll show you the principles that make spaces feel right.",
  },
  {
    q: "What should I choose between these products to achieve my desired result?",
    a: "I cut through marketing and give you clear reasoning for why one option serves your goals better than another.",
  },
  {
    q: "What are the actual stages of a renovation?",
    a: "Understanding sequence prevents costly mistakes. I\u2019ll walk you through the logical order so you\u2019re never redoing work.",
  },
  {
    q: "What should we prioritize in terms of budget?",
    a: "Not all \u20AC5,000 decisions are equal. I\u2019ll show you where investment matters and where it doesn\u2019t.",
  },
  {
    q: "How can my small space accommodate all my needs?",
    a: "Small spaces require precision. I\u2019ll show you layout solutions that maximize function without feeling cramped.",
  },
  {
    q: "Who\u2019s right \u2014 me or my partner?",
    a: "I give you objective professional reasoning so you can both move forward aligned on the best solution.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-paper section-padding">
      <div className="section-label reveal">What clients bring</div>
      <h2
        className="reveal font-display text-[clamp(2.5rem,4vw,4rem)] leading-[1.05] font-light text-dark max-w-[600px]"
        style={{ marginBottom: "5rem" }}
      >
        What You Should Be Asking<br />
        <em className="italic text-brick">Before You Renovate</em>
      </h2>
      <div className="bordered-grid-2">
        {faqs.map((faq) => (
          <div key={faq.q} className="reveal">
            <h3
              className="font-display text-[1.25rem] font-normal leading-[1.4] text-dark"
              style={{ marginBottom: "1rem" }}
            >
              {faq.q}
            </h3>
            <p className="font-body text-[0.9rem] leading-[1.8] text-muted font-light">
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

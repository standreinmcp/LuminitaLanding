const audiences = [
  {
    num: "01",
    title: "You\u2019re doing this for the first time.",
    desc: "You have a vision, a budget, maybe some plans. But the more you look into it, the more you sense there\u2019s more you don\u2019t know than you realise. You\u2019re right. And the decisions you make in the next few weeks will shape how you live for the next decade. Professional guidance at this stage isn\u2019t a luxury \u2014 it\u2019s the highest-leverage investment you can make in the project.",
  },
  {
    num: "02",
    title: "You\u2019ve been through this before.",
    desc: "You know how hard it is. You\u2019ve felt the stress, lived with decisions you\u2019d make differently, and watched costs spiral in ways you didn\u2019t anticipate. This time you\u2019re not leaving it to chance. You want a trusted professional \u2014 not a contractor, not a studio with a full engagement, just someone genuinely on your side, whose only job is to help you get it right.",
  },
  {
    num: "03",
    title: "You\u2019re a designer or architect who needs another person in the room.",
    desc: "The weight of responsibility is real. The decisions are hard. And the isolation of leading a complex project \u2014 where you\u2019re the expert everyone is looking to \u2014 can make it difficult to think clearly. This is a confidential, peer-level conversation. Not a second opinion from someone who doesn\u2019t understand your work. A dialogue with someone who does, and who has nothing at stake except getting it right with you.",
  },
];

export default function WhoIsItFor() {
  return (
    <section className="bg-brick-light section-padding">
      <div className="section-label reveal">Fit</div>
      <h2
        className="reveal font-display text-[clamp(2.5rem,4vw,4rem)] leading-[1.05] font-light text-dark"
        style={{ marginBottom: "5rem" }}
      >
        Is This <em className="italic text-brick">For You?</em>
      </h2>
      <div className="bordered-grid-3">
        {audiences.map((a) => (
          <div key={a.num} className="reveal">
            <div
              className="font-display text-[5rem] font-light text-dark/[0.15] leading-none"
              style={{ marginBottom: "1.5rem" }}
            >
              {a.num}
            </div>
            <h3
              className="font-display text-[1.5rem] font-normal leading-[1.3] text-dark"
              style={{ marginBottom: "1.2rem" }}
            >
              {a.title}
            </h3>
            <p className="font-body text-[0.95rem] leading-[1.85] text-muted font-light">
              {a.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

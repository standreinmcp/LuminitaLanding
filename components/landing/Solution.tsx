const whatYouGet = [
  "Know exactly what to change, keep, or avoid",
  "Get your layout, materials, and priorities straight",
  "Understand renovation sequencing and budget allocation",
  "Receive written conclusions you can reference forever",
  "Avoid expensive mistakes that most people make",
];

const whatWeCover = [
  "Layout & spatial logic",
  "Interior style direction",
  "Renovation priorities & sequencing",
  "Materials, colors & finishes",
  "Lighting principles",
  "Furniture selection clarity",
  "Budget allocation strategy",
];

export default function Solution() {
  return (
    <section className="bg-paper section-padding">
      <div className="grid-2col-gap">
        <div>
          <div className="section-label reveal">The session</div>
          <h2
            className="reveal font-display text-[clamp(2.5rem,4vw,4rem)] leading-[1.05] font-light text-dark"
            style={{ marginBottom: "2.5rem" }}
          >
            One Session.<br />
            <em className="italic text-brick">Total Clarity.</em>
          </h2>
          <p className="reveal font-body text-[1.05rem] leading-[1.9] text-muted font-light mb-[1.2rem]">
            You bring your plans, your ideas, your doubts, your half-decisions.
            We go through everything together — and by the end, you know exactly
            where you stand.
          </p>
          <p className="reveal font-body text-[1.05rem] leading-[1.9] text-muted font-light">
            Not a lecture. Not a list of problems. A real conversation with
            someone who&apos;s fully on your side, with no agenda other than
            getting it right for you.
          </p>
        </div>

        <div className="pt-4">
          <div className="reveal">
            <div
              className="font-body text-[0.85rem] tracking-[3px] uppercase text-cobalt"
              style={{ marginBottom: "1.5rem" }}
            >
              What you get
            </div>
            <ul className="list-none">
              {whatYouGet.map((item) => (
                <li
                  key={item}
                  className="font-body text-[0.95rem] text-dark font-light leading-[1.6] flex items-center gap-4 border-b border-dark/[0.08]"
                  style={{ padding: "0.9rem 0" }}
                >
                  <span
                    className="inline-block shrink-0 bg-brick"
                    style={{ width: "6px", height: "6px" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="reveal"
            style={{ marginTop: "3rem" }}
          >
            <div
              className="font-body text-[0.85rem] tracking-[3px] uppercase text-cobalt"
              style={{ marginBottom: "1.5rem" }}
            >
              What we cover
            </div>
            <ul className="list-none">
              {whatWeCover.map((item) => (
                <li
                  key={item}
                  className="font-body text-[0.95rem] text-dark font-light leading-[1.6] flex items-center gap-4 border-b border-dark/[0.08]"
                  style={{ padding: "0.9rem 0" }}
                >
                  <span
                    className="inline-block shrink-0 bg-brick"
                    style={{ width: "6px", height: "6px" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

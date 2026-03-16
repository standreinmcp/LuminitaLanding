const credentials = [
  { num: "10", label: "Years Experience" },
  { num: "55", label: "Projects" },
  { num: "\u20AC5M+", label: "Projects Value" },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-brick section-padding"
    >
      <div className="grid-2col-gap">
        <div>
          <div
            className="section-label section-label-dark-line reveal"
            style={{ color: "rgba(245,242,238,0.3)" }}
          >
            About
          </div>
          <h2
            className="reveal font-display text-[clamp(2.5rem,4vw,4rem)] leading-[1.05] font-light text-paper"
            style={{ marginBottom: "2.5rem" }}
          >
            Who Am I
          </h2>

          <div>
            <div className="reveal mb-[1.2rem]">
              <p className="font-body text-[1rem] leading-[1.9] text-paper/75 font-light">
                I am an architect and interior designer with a decade of
                experience working on residential, office, commercial, HoReCa, and
                medical projects.
              </p>
            </div>
            <div className="reveal mb-[1.2rem]">
              <p
                className="font-body text-[1rem] leading-[1.9] text-paper/75 font-light"
                style={{ marginTop: "1.2rem" }}
              >
                Over the years I watched clients — smart, thoughtful people — make
                the same costly mistakes. Not because they lacked taste or budget,
                but because no one gave them professional guidance at the moment it
                actually mattered.
              </p>
            </div>
            <div className="reveal mb-[1.2rem]">
              <p
                className="font-body text-[1rem] leading-[1.9] text-paper/75 font-light"
                style={{ marginTop: "1.2rem" }}
              >
                This advisory service exists because I believe that one honest
                conversation — at the right moment, from someone with no agenda —
                can save years of regret and thousands of euros.
              </p>
            </div>
            <div className="reveal mb-[1.2rem]">
              <p
                className="font-body text-[1rem] leading-[1.9] text-paper/75 font-light"
                style={{ marginTop: "1.2rem" }}
              >
                I don&apos;t upsell. I don&apos;t take commissions. I&apos;m not
                trying to become your full-time designer. I just tell you what I
                see — clearly, honestly, and always on your side.
              </p>
            </div>
          </div>

          <div
            className="reveal flex items-end gap-12"
            style={{ marginTop: "3rem" }}
          >
            {credentials.map((c) => (
              <div key={c.label}>
                <div className="font-display text-[3rem] text-paper font-light leading-none">
                  {c.num}
                </div>
                <div
                  className="font-body text-[0.75rem] tracking-[2px] uppercase text-paper/50"
                  style={{ marginTop: "0.3rem" }}
                >
                  {c.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal flex flex-col">
          <div
            className="w-full overflow-hidden"
            style={{ aspectRatio: "3 / 4", background: "rgba(245,242,238,0.05)" }}
          >
            <img
              src="/01_07_2026_Pixellab7727.jpg.jpeg"
              alt="Architect Luminita Campian"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

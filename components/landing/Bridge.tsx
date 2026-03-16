export default function Bridge() {
  return (
    <section className="bg-ink relative overflow-hidden section-padding-sm">
      {/* Left cobalt bar */}
      <div
        className="absolute top-0 left-0 h-full bg-cobalt"
        style={{ width: "4px" }}
      />
      <div className="max-w-[720px] mx-auto bridge-text-pad">
        <p className="reveal font-display italic text-[clamp(1.15rem,2vw,1.5rem)] font-light leading-[1.7] text-paper">
          It&apos;s about having someone in your corner who has{" "}
          <span className="text-cobalt-soft italic">
            no agenda, no product to sell, no aesthetic to impose
          </span>{" "}
          — someone who&apos;s fully focused on what you are trying to create.
          Someone who will tell you the truth, and mean it kindly.
        </p>
        <p
          className="reveal font-display italic text-[clamp(1.15rem,2vw,1.5rem)] font-light leading-[1.7] text-paper"
          style={{ marginTop: "1.5rem" }}
        >
          Sometimes that&apos;s enough to change everything.
        </p>
        <p
          className="reveal font-display italic text-[clamp(1.15rem,2vw,1.5rem)] font-light leading-[1.7] text-paper"
          style={{ marginTop: "1.5rem" }}
        >
          That&apos;s why this is advisory. Not execution. Not another opinion
          from someone who wants something from you.
        </p>
        <p
          className="reveal font-display italic text-[clamp(1.15rem,2vw,1.5rem)] font-light leading-[1.7] text-cobalt-soft"
          style={{ marginTop: "1.5rem" }}
        >
          Just clarity.
        </p>
      </div>
    </section>
  );
}

import Link from "next/link";

export default function FinalCTA() {
  return (
    <section id="contact" className="bg-ink text-center section-padding">
      <h2
        className="reveal font-display text-[clamp(2.5rem,5vw,5rem)] leading-[1.05] font-light text-paper"
        style={{ marginBottom: "1.5rem" }}
      >
        Ready to Make<br />
        the <em className="italic text-cobalt">Right Decisions?</em>
      </h2>
      <p
        className="reveal font-body text-[1.1rem] text-paper/50 font-light"
        style={{ marginBottom: "3rem" }}
      >
        Book your advisory session and get professional clarity before you
        commit.
      </p>
      <Link href="/checkout" className="reveal btn-primary">
        Book Your Session Now
      </Link>
    </section>
  );
}

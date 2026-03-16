import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden hero-grid">
      {/* Left side */}
      <div className="relative z-[2] flex flex-col justify-end hero-left-pad">
        <div
          className="hero-fade-1 font-body text-[0.75rem] tracking-[4px] uppercase text-brick"
          style={{ marginBottom: "2rem" }}
        >
          Private Interior Design Advisory
        </div>
        <h1
          className="hero-fade-2 font-display text-[clamp(3.5rem,6vw,6rem)] leading-[1.05] font-light text-paper"
          style={{ marginBottom: "2.5rem" }}
        >
          Bring Your<br />Doubts.<br />
          <em className="italic text-cobalt">
            Leave With<br />Clarity.
          </em>
        </h1>
        <p className="hero-fade-3 font-body text-[1.1rem] font-light leading-[1.8] text-paper/60 max-w-[480px] mb-12">
          One focused session with an architect and interior designer — before
          you renovate, before you commit, before mistakes become permanent.{" "}
          <strong className="text-paper/90 font-normal">
            Get clarity exactly when it matters most.
          </strong>
        </p>
        <Link
          href="/checkout"
          className="hero-fade-4 inline-block w-fit font-body text-[0.8rem] tracking-[2px] uppercase bg-brick text-paper no-underline transition-colors duration-300 hover:bg-cobalt"
          style={{ padding: "1.1rem 2.8rem", marginTop: "2rem" }}
        >
          Book Your Session
        </Link>
      </div>

      {/* Right side */}
      <div className="relative overflow-hidden hero-right-col">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/01_07_2026_Pixellab7699.jpg.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center 35%",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(28,17,9,0.5) 0%, transparent 50%)",
          }}
        />
        <div className="absolute z-[2] hero-right-content-pos">
          <p className="hero-fade-5 font-display italic text-[1.8rem] font-light leading-[1.4] text-paper">
            &ldquo;You don&apos;t need to have it all figured out. That&apos;s
            what I&apos;m here for.&rdquo;
          </p>
          <p
            className="hero-fade-6 font-body text-[0.75rem] tracking-[3px] uppercase text-paper/60"
            style={{ marginTop: "1.5rem" }}
          >
            Architect Luminita Campian
          </p>
        </div>
      </div>
    </section>
  );
}

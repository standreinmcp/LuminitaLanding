import Link from "next/link";

const plans = [
  {
    id: "60min",
    duration: "60 Minutes",
    price: "\u20AC160",
    desc: "Focused advisory session",
    featured: false,
  },
  {
    id: "90min",
    duration: "90 Minutes",
    price: "\u20AC220",
    desc: "Extended advisory session",
    featured: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-paper section-padding">
      <div className="grid-2col-gap">
        <div>
          <div className="section-label reveal">Investment</div>
          <h2
            className="reveal font-display text-[clamp(2.5rem,4vw,4rem)] leading-[1.05] font-light text-dark"
            style={{ marginBottom: "1.5rem" }}
          >
            Sessions
          </h2>
          <p className="reveal font-body text-[1rem] leading-[1.8] text-muted font-light max-w-[600px]">
            Sessions are limited to ensure focused, high-quality advisory.{" "}
            <strong className="text-dark font-medium">
              A single avoidable mistake — wrong layout, wrong material, wrong
              sequencing — typically costs €3,000 to €15,000 to fix.
            </strong>{" "}
            Most clients recover the session fee many times over before the first
            contractor arrives.
          </p>
        </div>

        <div className="pt-4">
          <div className="pricing-cards-grid">
            {plans.map((p) => (
              <div
                key={p.duration}
                className={`reveal card-pad-xl ${
                  p.featured ? "bg-cobalt" : "bg-cobalt-light"
                }`}
              >
                <div
                  className="font-body text-[0.7rem] tracking-[3px] uppercase"
                  style={{
                    marginBottom: "1.5rem",
                    color: p.featured ? "#F5F2EE" : "#9A8F89",
                  }}
                >
                  {p.duration}
                </div>
                <div
                  className="font-display text-[4.5rem] font-light leading-none pricing-price"
                  style={{
                    marginBottom: "1.2rem",
                    color: p.featured ? "#F5F2EE" : "#1A1410",
                  }}
                >
                  {p.price}
                </div>
                <div
                  className="font-body text-[0.9rem] font-light"
                  style={{
                    marginBottom: "2rem",
                    color: p.featured ? "#F5F2EE" : "#9A8F89",
                  }}
                >
                  {p.desc}
                </div>
                <Link
                  href={`/checkout?session=${p.id}`}
                  className="inline-block font-body text-[0.75rem] tracking-[2px] uppercase bg-brick text-paper no-underline transition-colors duration-300 hover:bg-dark"
                  style={{ padding: "0.9rem 2rem" }}
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

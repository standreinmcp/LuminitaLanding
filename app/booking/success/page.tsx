import { redirect } from "next/navigation";
import { stripe } from "@/lib/stripe";
import { getSessionType } from "@/lib/config";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import ScheduleCallCTA from "@/components/booking/ScheduleCallCTA";
import Link from "next/link";

interface Props {
  searchParams: Promise<{ session_id?: string }>;
}

export default async function BookingSuccessPage({ searchParams }: Props) {
  const { session_id } = await searchParams;

  if (!session_id) {
    redirect("/#pricing");
  }

  let session;
  try {
    session = await stripe.checkout.sessions.retrieve(session_id);
  } catch {
    redirect("/#pricing");
  }

  if (session.payment_status !== "paid") {
    redirect("/#pricing");
  }

  const sessionTypeId = session.metadata?.sessionType || "60min";
  const sessionType = getSessionType(sessionTypeId);
  const customerName = session.metadata?.customerName || "there";
  const firstName = customerName.split(" ")[0];

  return (
    <>
      <Navbar hideCta />

      <main
        className="min-h-screen bg-ink flex flex-col items-center justify-start"
        style={{
          paddingTop: "9rem",
          paddingBottom: "6rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
      >
        <div className="w-full" style={{ maxWidth: "740px" }}>
          {/* Success card */}
          <div
            className="bg-paper"
            style={{ boxShadow: "0 50px 120px rgba(0,0,0,0.5)" }}
          >
            {/* Cobalt header */}
            <div
              style={{
                background: "linear-gradient(135deg, #2B3FD4 0%, #1e2ea6 100%)",
                padding: "3rem 3.5rem",
              }}
            >
              <div
                className="flex items-center"
                style={{ gap: "1rem", marginBottom: "1.5rem" }}
              >
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.15)",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <div
                    className="font-body text-white/40"
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "4px",
                      textTransform: "uppercase",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Payment confirmed
                  </div>
                  <h1
                    className="font-display text-white font-light"
                    style={{
                      fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                      lineHeight: "1.1",
                    }}
                  >
                    Thank you, {firstName}
                  </h1>
                </div>
              </div>
              <p
                className="font-body text-white/50 font-light"
                style={{ fontSize: "0.88rem", lineHeight: "1.7" }}
              >
                Your {sessionType?.duration.toLowerCase() || "advisory"} session
                has been booked successfully.
              </p>
            </div>

            {/* Content */}
            <div style={{ padding: "3rem 3.5rem" }}>
              {/* Session details */}
              <div
                style={{
                  marginBottom: "2.5rem",
                  paddingBottom: "2.5rem",
                  borderBottom: "1px solid rgba(26,20,16,0.08)",
                }}
              >
                <h2
                  className="font-display text-dark font-light"
                  style={{
                    fontSize: "1.5rem",
                    lineHeight: "1.15",
                    marginBottom: "1.5rem",
                  }}
                >
                  Your booking details
                </h2>
                <div
                  className="grid grid-cols-1 sm:grid-cols-2"
                  style={{ gap: "1.25rem" }}
                >
                  <div>
                    <div
                      className="font-body text-muted"
                      style={{
                        fontSize: "0.65rem",
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Session
                    </div>
                    <div
                      className="font-body text-dark"
                      style={{ fontSize: "0.95rem" }}
                    >
                      {sessionType?.duration || "Advisory"} — Interior Design
                      Advisory
                    </div>
                  </div>
                  <div>
                    <div
                      className="font-body text-muted"
                      style={{
                        fontSize: "0.65rem",
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Amount paid
                    </div>
                    <div
                      className="font-body text-dark"
                      style={{ fontSize: "0.95rem" }}
                    >
                      {sessionType?.priceDisplay || `€${(session.amount_total || 0) / 100}`}
                    </div>
                  </div>
                  <div>
                    <div
                      className="font-body text-muted"
                      style={{
                        fontSize: "0.65rem",
                        letterSpacing: "3px",
                        textTransform: "uppercase",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Email
                    </div>
                    <div
                      className="font-body text-dark"
                      style={{ fontSize: "0.95rem" }}
                    >
                      {session.customer_email || "—"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Schedule your call */}
              <div
                style={{
                  marginBottom: "2.5rem",
                  paddingBottom: "2.5rem",
                  borderBottom: "1px solid rgba(26,20,16,0.08)",
                }}
              >
                <h2
                  className="font-display text-dark font-light"
                  style={{
                    fontSize: "1.5rem",
                    lineHeight: "1.15",
                    marginBottom: "0.75rem",
                  }}
                >
                  What happens next
                </h2>
                <p
                  className="font-body text-muted font-light"
                  style={{
                    fontSize: "0.92rem",
                    lineHeight: "1.75",
                    marginBottom: "2rem",
                    maxWidth: "32rem",
                  }}
                >
                  Pick a time that works for you and Luminita will be ready with
                  personalised advice for your space.
                </p>

                <ScheduleCallCTA sessionType={sessionTypeId} />
              </div>

              {/* Preparation tips */}
              <div
                style={{
                  marginBottom: "2.5rem",
                  paddingBottom: "2.5rem",
                  borderBottom: "1px solid rgba(26,20,16,0.08)",
                }}
              >
                <h2
                  className="font-display text-dark font-light"
                  style={{
                    fontSize: "1.5rem",
                    lineHeight: "1.15",
                    marginBottom: "1.5rem",
                  }}
                >
                  How to prepare
                </h2>
                <ol
                  className="font-body text-dark font-light"
                  style={{
                    fontSize: "0.92rem",
                    lineHeight: "1.75",
                    paddingLeft: "1.25rem",
                  }}
                >
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong className="font-medium">Gather your floor plans</strong>{" "}
                    — even rough sketches help. Include room dimensions if
                    possible.
                  </li>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong className="font-medium">Collect inspiration</strong>{" "}
                    — save photos, Pinterest boards, or magazine clippings that
                    capture the look and feel you want.
                  </li>
                  <li style={{ marginBottom: "0.75rem" }}>
                    <strong className="font-medium">Note your questions</strong>{" "}
                    — write down the decisions you&apos;re struggling with, so
                    we can address them directly.
                  </li>
                  <li>
                    <strong className="font-medium">Take photos</strong> — snap
                    current photos of the spaces you want to discuss.
                  </li>
                </ol>
              </div>

              {/* Back to home */}
              <div className="text-center" style={{ paddingTop: "0.5rem" }}>
                <Link
                  href="/"
                  className="inline-block font-body text-muted hover:text-dark transition-colors duration-300 no-underline"
                  style={{
                    fontSize: "0.78rem",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  ← Back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

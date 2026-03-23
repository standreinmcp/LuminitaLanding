"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const sessions = [
  { id: "60min", duration: "60 Minutes", price: "€160", desc: "Focused advisory session" },
  { id: "90min", duration: "90 Minutes", price: "€220", desc: "Extended advisory session" },
];

export default function CheckoutPage() {
  return (
    <Suspense>
      <CheckoutContent />
    </Suspense>
  );
}

function CheckoutContent() {
  const searchParams = useSearchParams();
  const initialSession = searchParams.get("session") === "90min" ? "90min" : "60min";
  const [selected, setSelected] = useState(initialSession);
  const [newsletter, setNewsletter] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const activeSession = sessions.find((s) => s.id === selected)!;

  async function handleCheckout() {
    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/stripe/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionType: selected,
          customerEmail: email.trim(),
          customerName: `${firstName.trim()} ${lastName.trim()}`,
          phone: phone.trim() || undefined,
          newsletter,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.url) {
        setError(data.error || "Something went wrong. Please try again.");
        setIsLoading(false);
        return;
      }

      window.location.href = data.url;
    } catch {
      setError("Network error. Please check your connection and try again.");
      setIsLoading(false);
    }
  }

  return (
    <>
      <Navbar hideCta />

      <main
        className="min-h-screen bg-ink flex flex-col items-center justify-start"
        style={{ paddingTop: "9rem", paddingBottom: "6rem", paddingLeft: "1.5rem", paddingRight: "1.5rem" }}
      >
        <div className="w-full" style={{ maxWidth: "740px" }}>
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-3 font-body text-paper/40 no-underline hover:text-paper/80 transition-colors duration-300"
            style={{
              fontSize: "0.75rem",
              letterSpacing: "2px",
              textTransform: "uppercase" as const,
              marginBottom: "2rem",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to overview
          </Link>

          {/* Card */}
          <div
            className="bg-paper"
            style={{ boxShadow: "0 50px 120px rgba(0,0,0,0.5)" }}
          >
            {/* Cobalt session header */}
            <div
              style={{
                background: "linear-gradient(135deg, #2B3FD4 0%, #1e2ea6 100%)",
                padding: "3rem 3.5rem",
              }}
            >
              <div
                className="flex flex-col sm:flex-row sm:items-end sm:justify-between"
                style={{ gap: "2rem" }}
              >
                <div>
                  <div
                    className="font-body text-white/40"
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "4px",
                      textTransform: "uppercase" as const,
                      marginBottom: "1rem",
                    }}
                  >
                    Your booking
                  </div>
                  <h2
                    className="font-display text-white font-light"
                    style={{
                      fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                      lineHeight: "1.1",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Interior Design Advisory
                  </h2>
                  <p
                    className="font-body text-white/50 font-light"
                    style={{ fontSize: "0.88rem" }}
                  >
                    Private 1:1 video session · {activeSession.duration.toLowerCase()}
                  </p>
                </div>
                <div className="sm:text-right shrink-0" style={{ paddingBottom: "0.25rem" }}>
                  <div
                    className="font-display text-white font-light"
                    style={{ fontSize: "3rem", lineHeight: "1" }}
                  >
                    {activeSession.price}
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div style={{ padding: "3.5rem 3.5rem 3rem" }}>
              <h1
                className="font-display text-dark font-light"
                style={{
                  fontSize: "clamp(1.7rem, 2.5vw, 2.1rem)",
                  lineHeight: "1.15",
                  marginBottom: "0.6rem",
                }}
              >
                Choose your session
              </h1>
              <p
                className="font-body text-muted font-light"
                style={{
                  fontSize: "0.92rem",
                  lineHeight: "1.75",
                  marginBottom: "2rem",
                  maxWidth: "32rem",
                }}
              >
                Select a duration, then fill in your details below.
              </p>

              {/* Session picker */}
              <div
                className="grid grid-cols-1 sm:grid-cols-2"
                style={{ gap: "1rem", marginBottom: "3rem" }}
              >
                {sessions.map((s) => {
                  const isActive = selected === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelected(s.id)}
                      className="text-left cursor-pointer transition-all duration-200"
                      style={{
                        padding: "1.5rem 1.5rem",
                        borderRadius: "8px",
                        border: isActive
                          ? "2px solid #2B3FD4"
                          : "2px solid rgba(26,20,16,0.10)",
                        backgroundColor: isActive ? "#EFF1FD" : "#ffffff",
                        outline: "none",
                      }}
                    >
                      <div
                        className="flex items-center justify-between"
                        style={{ marginBottom: "0.6rem" }}
                      >
                        <span
                          className="font-display font-light text-dark"
                          style={{ fontSize: "1.15rem", lineHeight: "1.2" }}
                        >
                          {s.duration}
                        </span>
                        <span
                          className="font-display font-light text-dark"
                          style={{ fontSize: "1.5rem", lineHeight: "1" }}
                        >
                          {s.price}
                        </span>
                      </div>
                      <span
                        className="font-body text-muted font-light"
                        style={{ fontSize: "0.8rem" }}
                      >
                        {s.desc}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Details heading */}
              <h2
                className="font-display text-dark font-light"
                style={{
                  fontSize: "clamp(1.4rem, 2vw, 1.7rem)",
                  lineHeight: "1.15",
                  marginBottom: "2rem",
                }}
              >
                Your details
              </h2>

              {/* Name row */}
              <div
                className="grid grid-cols-1 sm:grid-cols-2"
                style={{ gap: "1.5rem", marginBottom: "1.5rem" }}
              >
                <div>
                  <label
                    htmlFor="first-name"
                    className="block font-body text-muted"
                    style={{
                      fontSize: "0.68rem",
                      letterSpacing: "2.5px",
                      textTransform: "uppercase" as const,
                      marginBottom: "0.75rem",
                    }}
                  >
                    First name<span className="text-brick" style={{ marginLeft: "2px" }}>*</span>
                  </label>
                  <input
                    id="first-name"
                    name="firstName"
                    required
                    placeholder="Alex"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="font-body text-dark outline-none transition-all duration-200"
                    style={{
                      width: "100%",
                      fontSize: "0.95rem",
                      padding: "1rem 1.25rem",
                      backgroundColor: "#ffffff",
                      border: "1px solid rgba(26,20,16,0.12)",
                      borderRadius: "8px",
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block font-body text-muted"
                    style={{
                      fontSize: "0.68rem",
                      letterSpacing: "2.5px",
                      textTransform: "uppercase" as const,
                      marginBottom: "0.75rem",
                    }}
                  >
                    Last name<span className="text-brick" style={{ marginLeft: "2px" }}>*</span>
                  </label>
                  <input
                    id="last-name"
                    name="lastName"
                    required
                    placeholder="Martin"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="font-body text-dark outline-none transition-all duration-200"
                    style={{
                      width: "100%",
                      fontSize: "0.95rem",
                      padding: "1rem 1.25rem",
                      backgroundColor: "#ffffff",
                      border: "1px solid rgba(26,20,16,0.12)",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </div>

              {/* Email */}
              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  htmlFor="email"
                  className="block font-body text-muted"
                  style={{
                    fontSize: "0.68rem",
                    letterSpacing: "2.5px",
                    textTransform: "uppercase" as const,
                    marginBottom: "0.75rem",
                  }}
                >
                  Email address<span className="text-brick" style={{ marginLeft: "2px" }}>*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="font-body text-dark outline-none transition-all duration-200"
                  style={{
                    width: "100%",
                    fontSize: "0.95rem",
                    padding: "1rem 1.25rem",
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(26,20,16,0.12)",
                    borderRadius: "8px",
                  }}
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block font-body text-muted"
                  style={{
                    fontSize: "0.68rem",
                    letterSpacing: "2.5px",
                    textTransform: "uppercase" as const,
                    marginBottom: "0.75rem",
                  }}
                >
                  Phone number
                  <span
                    className="text-muted/50"
                    style={{
                      textTransform: "none",
                      letterSpacing: "0",
                      marginLeft: "6px",
                      fontSize: "0.68rem",
                    }}
                  >
                    (optional)
                  </span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+351 926 574 920"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="font-body text-dark outline-none transition-all duration-200"
                  style={{
                    width: "100%",
                    fontSize: "0.95rem",
                    padding: "1rem 1.25rem",
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(26,20,16,0.12)",
                    borderRadius: "8px",
                  }}
                />
              </div>

              {/* Divider */}
              <div
                style={{
                  borderTop: "1px solid rgba(26,20,16,0.08)",
                  marginTop: "2.5rem",
                  paddingTop: "2rem",
                }}
              >
                {/* Newsletter */}
                <button
                  type="button"
                  onClick={() => setNewsletter(!newsletter)}
                  className="flex items-start cursor-pointer group"
                  style={{ gap: "1rem", marginBottom: "2.5rem", background: "none", border: "none", padding: 0, textAlign: "left" }}
                >
                  <span className="relative shrink-0" style={{ marginTop: "2px" }}>
                    <input
                      type="checkbox"
                      name="newsletterOptIn"
                      checked={newsletter}
                      readOnly
                      className="sr-only"
                    />
                    <span
                      className="flex items-center justify-center transition-all duration-200"
                      style={{
                        width: "22px",
                        height: "22px",
                        borderRadius: "6px",
                        border: newsletter ? "1.5px solid #2B3FD4" : "1.5px solid rgba(26,20,16,0.15)",
                        backgroundColor: newsletter ? "#2B3FD4" : "#ffffff",
                      }}
                    />
                    <svg
                      className="absolute text-white pointer-events-none transition-opacity duration-200"
                      style={{ top: "4px", left: "4px", width: "14px", height: "14px", opacity: newsletter ? 1 : 0 }}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span
                    className="font-body text-muted group-hover:text-dark transition-colors duration-200"
                    style={{ fontSize: "0.82rem", lineHeight: "1.65" }}
                  >
                    Send me occasional design case studies and renovation
                    insights. No spam — unsubscribe anytime.
                  </span>
                </button>

                {/* Error message */}
                {error && (
                  <div
                    className="font-body text-brick"
                    style={{
                      fontSize: "0.85rem",
                      marginBottom: "1.5rem",
                      padding: "0.75rem 1rem",
                      backgroundColor: "#F5E8E6",
                      borderRadius: "8px",
                    }}
                  >
                    {error}
                  </div>
                )}

                {/* CTA */}
                <button
                  type="button"
                  onClick={handleCheckout}
                  disabled={isLoading}
                  className="font-body bg-brick text-paper hover:bg-dark transition-colors duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    width: "100%",
                    fontSize: "0.78rem",
                    letterSpacing: "2.5px",
                    textTransform: "uppercase" as const,
                    padding: "1.35rem 2rem",
                    borderRadius: "8px",
                    border: "none",
                  }}
                >
                  {isLoading
                    ? "Redirecting to Stripe…"
                    : `Continue to payment — ${activeSession.price}`}
                </button>

                {/* Trust line */}
                <div
                  className="flex items-center justify-center"
                  style={{ gap: "0.6rem", marginTop: "1.5rem" }}
                >
                  <svg
                    className="text-muted/40 shrink-0"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <p
                    className="font-body text-muted/40"
                    style={{ fontSize: "0.72rem", lineHeight: "1.5" }}
                  >
                    Secured by Stripe — your card details never reach our servers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

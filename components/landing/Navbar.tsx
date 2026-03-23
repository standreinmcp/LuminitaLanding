"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar({ hideCta = false }: { hideCta?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between nav-padding transition-all duration-400 ${
        scrolled
          ? "bg-paper border-b border-dark/[0.08]"
          : "bg-transparent"
      }`}
    >
      <span
        className={`font-display text-[1rem] tracking-[3px] uppercase transition-colors duration-400 ${
          scrolled ? "text-dark" : "text-paper"
        }`}
      >
        Interior Design Advisory
      </span>
      <Link
        href="/checkout"
        className={`font-body text-[0.8rem] tracking-[2px] uppercase text-paper bg-cobalt no-underline transition-colors duration-300 hover:bg-brick ${hideCta ? "invisible" : ""}`}
        style={{ padding: "0.7rem 1.8rem" }}
        tabIndex={hideCta ? -1 : undefined}
        aria-hidden={hideCta || undefined}
      >
        Book a Session
      </Link>
    </nav>
  );
}

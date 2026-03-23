export default function Footer() {
  return (
    <footer
      className="bg-ink footer-grid section-padding-footer"
      style={{
        borderTop: "1px solid rgba(245,242,238,0.06)",
        gap: "3rem",
      }}
    >
      {/* Brand — left aligned */}
      <div className="flex flex-col gap-[0.4rem]">
        <p className="text-[0.8rem] text-paper/25 tracking-[1px] leading-[1.6]">
          Private Interior Design Advisory
        </p>
        <p className="text-[0.8rem] text-paper/25 tracking-[1px] leading-[1.6]">
          &copy; 2026 — All rights reserved
        </p>
        <div className="flex flex-row items-center gap-4 mt-6">
          <a
            href="https://luminitacampian.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 no-underline text-paper/50 text-[0.75rem] tracking-[2px] uppercase transition-colors duration-200 hover:text-paper"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
            </svg>
            <span>Substack</span>
          </a>
        </div>
      </div>

      {/* Contact — center aligned */}
      <div>
        <p className="text-[0.65rem] tracking-[2px] uppercase text-paper/20 mb-[0.8rem]">
          Contact
        </p>
        <div className="flex flex-col gap-[0.4rem] footer-contact-list">
          <a
            href="mailto:luminita.campian.arh@gmail.com"
            className="text-[0.8rem] text-paper/45 tracking-[0.5px] no-underline transition-colors duration-200 hover:text-paper/90"
          >
            luminita.campian.arh@gmail.com
          </a>
          <a
            href="tel:00351926574920"
            className="text-[0.8rem] text-paper/45 tracking-[0.5px] no-underline transition-colors duration-200 hover:text-paper/90"
          >
            PT: 00351 926 574 920
          </a>
          <a
            href="tel:0040726491793"
            className="text-[0.8rem] text-paper/45 tracking-[0.5px] no-underline transition-colors duration-200 hover:text-paper/90"
          >
            RO: 0040 726 491 793
          </a>
          <a
            href="https://maps.google.com/?q=Estoril,Cascais,Lisbon,Portugal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.8rem] text-paper/45 tracking-[0.5px] no-underline transition-colors duration-200 hover:text-paper/90"
          >
            Estoril, Cascais — Lisbon, Portugal
          </a>
        </div>
      </div>

      {/* Legal — right aligned */}
      <div>
        <p className="text-[0.65rem] tracking-[2px] uppercase text-paper/20 mb-[0.8rem]">
          Legal
        </p>
        <div className="flex flex-col gap-[0.4rem] footer-legal-list">
          <a
            href="#"
            className="text-[0.8rem] text-paper/45 tracking-[0.5px] no-underline transition-colors duration-200 hover:text-paper/90"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-[0.8rem] text-paper/45 tracking-[0.5px] no-underline transition-colors duration-200 hover:text-paper/90"
          >
            Terms &amp; Conditions
          </a>
          <a
            href="#"
            className="text-[0.8rem] text-paper/45 tracking-[0.5px] no-underline transition-colors duration-200 hover:text-paper/90"
          >
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

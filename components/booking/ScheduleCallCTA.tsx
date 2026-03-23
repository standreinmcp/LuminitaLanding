"use client";

import { trackScheduleCall } from "@/lib/analytics";

const CALENDAR_LINKS: Record<string, string | undefined> = {
  "60min": process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_LINK_60MIN,
  "90min": process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_LINK_90MIN,
};

interface Props {
  sessionType: string;
}

export default function ScheduleCallCTA({ sessionType }: Props) {
  const calendarLink = CALENDAR_LINKS[sessionType];

  if (!calendarLink) return null;

  return (
    <a
      href={calendarLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackScheduleCall(sessionType)}
      className="group inline-flex items-center font-body text-white no-underline cursor-pointer"
      style={{
        fontSize: "0.72rem",
        letterSpacing: "3px",
        textTransform: "uppercase",
        padding: "1rem 2.25rem",
        backgroundColor: "#2B3FD4",
        borderRadius: "2px",
        gap: "0.75rem",
        transition: "background-color 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#1e2ea6";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#2B3FD4";
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
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
      Schedule your call
    </a>
  );
}

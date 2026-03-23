import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your Session",
  description:
    "Choose your interior design advisory session — 60 or 90 minutes of focused guidance from architect Luminita Campian. Secure checkout powered by Stripe.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

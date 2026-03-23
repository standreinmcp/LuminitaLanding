import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { getSessionType } from "@/lib/config";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { sessionType, customerEmail, customerName, newsletter } = body;

    const session = getSessionType(sessionType);
    if (!session) {
      return NextResponse.json(
        { error: "Invalid session type" },
        { status: 400 }
      );
    }

    const priceId = process.env[session.stripePriceEnvKey];
    if (!priceId) {
      return NextResponse.json(
        { error: "Price not configured" },
        { status: 500 }
      );
    }

    const baseUrl = process.env.NEXT_PUBLIC_URL || req.nextUrl.origin;

    const checkoutSession = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      customer_email: customerEmail,
      metadata: {
        sessionType: session.id,
        customerName: customerName || "",
        newsletterOptIn: newsletter ? "true" : "false",
      },
      success_url: `${baseUrl}/booking/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/#pricing`,
    });

    return NextResponse.json({ url: checkoutSession.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}

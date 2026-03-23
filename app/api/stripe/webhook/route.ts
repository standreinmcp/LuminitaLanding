import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { addSubscriber } from "@/lib/mailerlite";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Missing stripe-signature header" },
      { status: 400 }
    );
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return NextResponse.json(
      { error: "Webhook secret not configured" },
      { status: 500 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Webhook signature verification failed:", message);
    return NextResponse.json(
      { error: `Webhook Error: ${message}` },
      { status: 400 }
    );
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      console.log("Payment completed:", {
        sessionId: session.id,
        customerEmail: session.customer_email,
        sessionType: session.metadata?.sessionType,
        amountTotal: session.amount_total,
      });

      if (
        session.metadata?.newsletterOptIn === "true" &&
        session.customer_email
      ) {
        try {
          await addSubscriber({
            email: session.customer_email,
            name: session.metadata.customerName || "",
          });
          console.log("Newsletter subscriber added:", session.customer_email);
        } catch (err) {
          console.error("Failed to add newsletter subscriber:", err);
        }
      }
      break;
    }
    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}

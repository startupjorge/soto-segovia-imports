import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key || key === "sk_live_your_key_here") {
    return NextResponse.json({ error: "Stripe secret key not configured." }, { status: 500 });
  }

  const stripe = new Stripe(key, { apiVersion: "2026-07-29.dahlia" });

  const { items, orderId, recipientName, recipientEmail, giftNote } = await req.json();

  const base = process.env.NEXT_PUBLIC_BASE_URL || "https://www.sotosegoviaimports.com";

  try {
    const lineItems = items.map((item: { name: string; price: number; quantity: number }) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          description: `For ${recipientName}`,
          images: ["https://www.sotosegoviaimports.com/opengraph-image"],
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      customer_email: recipientEmail || undefined,
      metadata: {
        orderId: orderId || "",
        recipientName: recipientName || "",
        giftNote: (giftNote || "").slice(0, 500),
      },
      shipping_address_collection: { allowed_countries: ["US", "CA", "MX"] },
      success_url: `${base}/order-confirmed?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${base}/shop?cancelled=1`,
      payment_intent_data: {
        description: `Gift order for ${recipientName}, Soto & Segovia Imports`,
      },
    });

    return NextResponse.json({ url: session.url, sessionId: session.id });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-07-29.dahlia",
});

export async function POST(req: NextRequest) {
  try {
    const { orderId, email, amount, recipientName } = await req.json();

    if (!orderId || !email || !amount) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Create a Stripe Payment Link for this order
    const paymentLink = await stripe.paymentLinks.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `Gift Order ${orderId}`,
              description: `Premium Spanish gourmet gift for ${recipientName ?? "your recipient"} — Soto & Segovia Imports`,
              images: ["https://www.sotosegoviaimports.com/opengraph-image"],
            },
            unit_amount: Math.round(amount * 100), // cents
          },
          quantity: 1,
        },
      ],
      after_completion: {
        type: "redirect",
        redirect: { url: "https://www.sotosegoviaimports.com/order-confirmed?order=" + orderId },
      },
      metadata: { orderId, recipientEmail: email },
      // Automatically send a receipt to the buyer's email
    });

    // Send the link by email via Stripe (the buyer enters their email at checkout)
    // For a direct email, you'd use Resend/SendGrid here — this returns the URL
    return NextResponse.json({ url: paymentLink.url, id: paymentLink.id });
  } catch (err) {
    console.error("Stripe payment link error:", err);
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

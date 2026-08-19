import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { syncOrderToCRMs } from "@/lib/crm/sync";
import type { CRMOrder } from "@/lib/crm/types";

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", { apiVersion: "2026-07-29.dahlia" });
  const body = await req.text();
  const sig = req.headers.get("stripe-signature") ?? "";
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET ?? "";

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.error("[Stripe webhook] signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    let lineItems: Stripe.LineItem[] = [];
    try {
      const expanded = await stripe.checkout.sessions.retrieve(session.id, { expand: ["line_items"] });
      lineItems = expanded.line_items?.data ?? [];
    } catch {
      // non-fatal — CRM sync still runs with empty line items
    }

    const order: CRMOrder = {
      stripeSessionId: session.id,
      stripePaymentIntentId: typeof session.payment_intent === "string" ? session.payment_intent : undefined,
      customerEmail: session.customer_details?.email ?? "",
      customerName: session.customer_details?.name ?? "Unknown",
      customerPhone: session.customer_details?.phone ?? undefined,
      companyName: undefined,
      amountTotal: session.amount_total ?? 0,
      currency: session.currency ?? "usd",
      status: session.payment_status === "paid" ? "paid" : "pending",
      createdAt: new Date(session.created * 1000).toISOString(),
      lineItems: lineItems.map((item) => ({
        name: item.description ?? item.price?.product?.toString() ?? "Product",
        quantity: item.quantity ?? 1,
        unitAmount: item.price?.unit_amount ?? 0,
      })),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      shippingAddress: (session as any).shipping_details?.address
        ? {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            line1: (session as any).shipping_details.address.line1 ?? undefined,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            city: (session as any).shipping_details.address.city ?? undefined,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            state: (session as any).shipping_details.address.state ?? undefined,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            country: (session as any).shipping_details.address.country ?? undefined,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            postalCode: (session as any).shipping_details.address.postal_code ?? undefined,
          }
        : undefined,
    };

    await syncOrderToCRMs(order);
  }

  return NextResponse.json({ received: true });
}

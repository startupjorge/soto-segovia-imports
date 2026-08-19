export interface CRMOrder {
  stripeSessionId: string;
  stripePaymentIntentId?: string;
  customerEmail: string;
  customerName: string;
  customerPhone?: string;
  companyName?: string;
  amountTotal: number;       // in cents
  currency: string;
  lineItems: CRMLineItem[];
  status: "paid" | "pending" | "failed";
  createdAt: string;         // ISO string
  shippingAddress?: {
    line1?: string;
    city?: string;
    state?: string;
    country?: string;
    postalCode?: string;
  };
}

export interface CRMLineItem {
  name: string;
  quantity: number;
  unitAmount: number; // in cents
}

import type { CRMOrder } from "./types";
import { syncToHubSpot } from "./hubspot";
import { syncToSalesforce } from "./salesforce";

export async function syncOrderToCRMs(order: CRMOrder) {
  await Promise.allSettled([
    syncToHubSpot(order),
    syncToSalesforce(order),
  ]);
}

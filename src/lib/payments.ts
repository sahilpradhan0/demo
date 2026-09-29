// No provider name anywhere in this file, so the scanner has to hedge.
const secretKey = "sk_live_WeODp4yVjOx3JktmHhqaCZU4";

export function chargeCustomer(amount: number) {
  return { amount, secretKey };
}

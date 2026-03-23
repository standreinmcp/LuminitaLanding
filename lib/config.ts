export const SESSION_TYPES = {
  "60min": {
    id: "60min" as const,
    duration: "60 Minutes",
    price: 160_00,
    priceDisplay: "€160",
    description: "Focused advisory session",
    stripePriceEnvKey: "STRIPE_PRICE_60MIN",
  },
  "90min": {
    id: "90min" as const,
    duration: "90 Minutes",
    price: 220_00,
    priceDisplay: "€220",
    description: "Extended advisory session",
    stripePriceEnvKey: "STRIPE_PRICE_90MIN",
  },
} as const;

export type SessionTypeId = keyof typeof SESSION_TYPES;

export function getSessionType(id: string): (typeof SESSION_TYPES)[SessionTypeId] | null {
  if (id in SESSION_TYPES) return SESSION_TYPES[id as SessionTypeId];
  return null;
}

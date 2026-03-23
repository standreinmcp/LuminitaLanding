type GTagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: string | number | undefined;
};

declare global {
  interface Window {
    gtag?: (...args: [string, string, Record<string, unknown>?]) => void;
  }
}

function sendEvent({ action, ...params }: GTagEvent) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", action, params);
}

export function trackBeginCheckout(sessionType: string, value: number) {
  sendEvent({
    action: "begin_checkout",
    currency: "EUR",
    value,
    items: undefined,
    session_type: sessionType,
  });
}

export function trackPurchase(
  transactionId: string,
  sessionType: string,
  value: number,
) {
  sendEvent({
    action: "purchase",
    transaction_id: transactionId,
    currency: "EUR",
    value,
    session_type: sessionType,
  });
}

export function trackScheduleCall(sessionType: string) {
  sendEvent({
    action: "schedule_call",
    session_type: sessionType,
  });
}

"use client";

import { useEffect, useRef } from "react";
import { trackPurchase } from "@/lib/analytics";

interface Props {
  transactionId: string;
  sessionType: string;
  value: number;
}

export default function PurchaseTracker({
  transactionId,
  sessionType,
  value,
}: Props) {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    trackPurchase(transactionId, sessionType, value);
  }, [transactionId, sessionType, value]);

  return null;
}

"use client";
import { useCurrency } from "./CurrencyProvider";

export default function ProductPricing({ prices }: { prices: any[] }) {
  const { formatPrice } = useCurrency();
  
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px", marginBottom: "32px" }}>
      {prices.map((p) => {
        const formatted = formatPrice(p.price, p.unit || "");
        return (
          <div key={p.duration} style={{ border: "1px solid var(--line)", padding: "16px", borderRadius: "8px", textAlign: "center" }}>
            <div style={{ fontSize: "0.85rem", color: "var(--slate)", marginBottom: "4px" }}>{p.duration}</div>
            <div style={{ fontSize: "1.4rem", color: "var(--navy)", fontWeight: 700 }}>{formatted.price}</div>
            {formatted.unit && (
              <div style={{ fontSize: "0.75rem", color: "var(--slate-light)" }}>{formatted.unit}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

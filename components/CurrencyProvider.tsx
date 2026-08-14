"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Currency = "EUR" | "MAD";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (priceStr: string, unitStr?: string) => { price: string; unit: string };
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>("EUR");

  useEffect(() => {
    const saved = localStorage.getItem("currency") as Currency;
    if (saved) setCurrencyState(saved);
  }, []);

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    localStorage.setItem("currency", c);
  };

  const formatPrice = (priceStr: string, unitStr: string = "") => {
    if (currency === "EUR") return { price: priceStr, unit: unitStr };
    
    // Extract the number part from "90,00 €"
    const numMatch = priceStr.match(/(\d+(?:,\d+)?)/);
    if (!numMatch) return { price: priceStr, unit: unitStr };
    
    const num = parseFloat(numMatch[1].replace(",", "."));
    // Convert rate: 1 EUR = 10.8 MAD
    const madValue = Math.round(num * 10.8);
    
    return {
      price: `${madValue} Dhs`,
      unit: unitStr
    };
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) throw new Error("useCurrency must be used within CurrencyProvider");
  return context;
}

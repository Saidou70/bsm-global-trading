"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Currency = "EUR" | "MAD";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (priceMad: number, unitStr?: string) => { price: string; unit: string };
  exchangeRate: number;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>("EUR");
  const [exchangeRate, setExchangeRate] = useState<number>(10.8); // Fallback rate

  useEffect(() => {
    const saved = localStorage.getItem("currency") as Currency;
    if (saved) setCurrencyState(saved);
    
    // Fetch live exchange rate
    fetch("https://api.exchangerate-api.com/v4/latest/EUR")
      .then(res => res.json())
      .then(data => {
        if (data && data.rates && data.rates.MAD) {
          setExchangeRate(data.rates.MAD);
        }
      })
      .catch(err => console.error("Failed to fetch exchange rate", err));
  }, []);

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    localStorage.setItem("currency", c);
  };

  const formatPrice = (priceMad: number, unitStr: string = "") => {
    if (currency === "MAD") {
      return { price: `${priceMad} Dhs`, unit: unitStr };
    }
    
    // Calculate EUR value using dynamic exchange rate
    const eurValue = (priceMad / exchangeRate).toFixed(2).replace(".", ",");
    
    return {
      price: `${eurValue} €`,
      unit: unitStr
    };
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, exchangeRate }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) throw new Error("useCurrency must be used within CurrencyProvider");
  return context;
}

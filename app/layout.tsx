import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import { CurrencyProvider } from "@/components/CurrencyProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BSM Global Trading — Location de matériel BTP & Élévation",
  description:
    "BSM Global Trading : location de nacelles élévatrices, chariots, groupes électrogènes et engins de terrassement. Tarifs en DH et €. Devis sous 2h, disponibilité 24/7.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${barlow.variable}`}>
      <body>
        <CurrencyProvider>
          {children}
        </CurrencyProvider>
      </body>
    </html>
  );
}

// ===== Coordonnées de l'entreprise =====
export const company = {
  name: "BSM Global Trading",
  tagline: "Location de matériel & Élévation",
  email: "Contact@bsmglobal.gmail.com",
  whatsapp: "33641850546",
  zone: "Maroc & France",
  hours: "Lun–Sam : 8h00 – 19h00",
  contacts: [
    { name: "M. Ben", phone: "+33 6 49 84 21 62", tel: "+33649842162" },
    { name: "M. Hannane Samir", phone: "+33 6 41 85 05 46", tel: "+33641850546" },
  ],
};

// Taux de conversion dynamique en direct depuis l'API dans le CurrencyProvider

// ===== Catégories de matériel =====
import type { MachineType } from "@/components/MachineArt";

export const categories: {
  icon: string;
  title: string;
  desc: string;
  art: MachineType;
}[] = [
  { icon: "🛗", title: "Élévation de personnes", desc: "Nacelles ciseaux, articulées, télescopiques, sur mât et araignées jusqu'à 40 m.", art: "elevation" },
  { icon: "🏗️", title: "Manutention & levage", desc: "Chariots élévateurs, télescopiques, mini-grues et transpalettes.", art: "manutention" },
  { icon: "⚡", title: "Énergie & électricité", desc: "Groupes électrogènes, tours d'éclairage, coffrets et distribution.", art: "energie" },
  { icon: "🚜", title: "Terrassement", desc: "Mini-pelles, chargeuses, dumpers et brise-roches hydrauliques.", art: "terrassement" },
  { icon: "🧱", title: "Compactage", desc: "Plaques vibrantes, rouleaux et pilonneuses pour tous types de sols.", art: "compactage" },
  { icon: "🔧", title: "Équipement de chantier", desc: "Compresseurs, marteaux-piqueurs, nettoyeurs HP, groupes de soudure.", art: "chantier" },
];

// ===== Tarifs (prix en DH ; € calculé automatiquement) =====
export type PriceItem = { label: string; dh: number };
export type PriceGroup = { icon: string; title: string; art: MachineType; items: PriceItem[] };

export const pricing: PriceGroup[] = [
  {
    icon: "🛗",
    title: "Élévation de personnes",
    art: "elevation",
    items: [
      { label: "Nacelle ciseaux électrique 8 m", dh: 350 },
      { label: "Nacelle ciseaux diesel 12 m", dh: 650 },
      { label: "Nacelle articulée 16 m", dh: 950 },
      { label: "Nacelle télescopique 22 m", dh: 1500 },
      { label: "Nacelle araignée 25 m", dh: 1900 },
    ],
  },
  {
    icon: "🏗️",
    title: "Manutention & levage",
    art: "manutention",
    items: [
      { label: "Transpalette électrique", dh: 150 },
      { label: "Chariot élévateur 2,5 T", dh: 500 },
      { label: "Chariot télescopique 7 m", dh: 1100 },
      { label: "Mini-grue 3 T", dh: 1400 },
    ],
  },
  {
    icon: "⚡",
    title: "Énergie & électricité",
    art: "energie",
    items: [
      { label: "Groupe électrogène 10 kVA", dh: 300 },
      { label: "Groupe électrogène 40 kVA", dh: 700 },
      { label: "Groupe électrogène 100 kVA", dh: 1300 },
      { label: "Tour d'éclairage mobile", dh: 400 },
    ],
  },
  {
    icon: "🚜",
    title: "Terrassement",
    art: "terrassement",
    items: [
      { label: "Mini-pelle 1,5 T", dh: 600 },
      { label: "Mini-pelle 5 T", dh: 1000 },
      { label: "Chargeuse compacte", dh: 900 },
      { label: "Dumper 3 T", dh: 550 },
    ],
  },
  {
    icon: "🧱",
    title: "Compactage",
    art: "compactage",
    items: [
      { label: "Plaque vibrante", dh: 200 },
      { label: "Pilonneuse", dh: 250 },
      { label: "Rouleau compacteur 1,5 T", dh: 800 },
    ],
  },
  {
    icon: "🔧",
    title: "Équipement de chantier",
    art: "chantier",
    items: [
      { label: "Compresseur thermique", dh: 350 },
      { label: "Marteau-piqueur électrique", dh: 180 },
      { label: "Nettoyeur haute pression", dh: 220 },
      { label: "Groupe de soudure", dh: 300 },
    ],
  },
];

// ===== Atouts =====
export const features = [
  { icon: "⏱️", title: "Devis sous 2h", desc: "Une demande, une réponse rapide et un tarif clair en DH et en €." },
  { icon: "🚚", title: "Livraison sur chantier", desc: "Nous livrons et récupérons le matériel directement là où vous travaillez." },
  { icon: "🛠️", title: "Matériel entretenu", desc: "Un parc contrôlé, révisé et conforme aux normes de sécurité." },
  { icon: "📞", title: "Assistance 24/7", desc: "Une équipe joignable à tout moment en cas de besoin ou d'urgence." },
  { icon: "🤝", title: "Interlocuteur dédié", desc: "Un contact unique qui connaît vos chantiers et vos contraintes." },
  { icon: "📅", title: "Location flexible", desc: "À la journée, à la semaine ou au mois, avec tarifs dégressifs." },
];

// ===== Statistiques =====
export const stats = [
  { value: "+2000", label: "Machines disponibles" },
  { value: "24/7", label: "Service & dépannage" },
  { value: "2h", label: "Devis garanti" },
  { value: "DH / €", label: "Tarifs transparents" },
];

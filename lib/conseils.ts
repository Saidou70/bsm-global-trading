export interface Conseil {
  slug: string;
  title: string;
  date: string;
  image: string;
  content: string;
}

export const conseils: Conseil[] = [
  {
    slug: "chargement-arrimage",
    title: "Chargement-arrimage",
    date: "01 JUIL. 2026",
    image: "/images/chargement_arrimage.png",
    content: "Le chargement et l'arrimage sécurisé de vos engins de chantier sur remorque sont primordiaux pour éviter tout accident sur la route. Assurez-vous d'utiliser des sangles adaptées au poids de la machine, de respecter les points d'ancrage spécifiés par le constructeur et de bien répartir la charge sur les essieux de la remorque."
  },
  {
    slug: "guide-complet-plaque-vibrante-essence",
    title: "Guide complet : plaque vibrante essence",
    date: "17 MARS 2026",
    image: "/images/guide_plaque_vibrante.png",
    content: "La plaque vibrante essence est l'outil indispensable pour compacter efficacement vos sols (sable, gravier, asphalte). Avant utilisation, vérifiez toujours les niveaux d'huile et d'essence. Lors du travail, laissez la machine avancer à son propre rythme sans la forcer. Pensez toujours à porter vos EPI : casque anti-bruit, gants anti-vibrations et chaussures de sécurité."
  },
  {
    slug: "guide-utilisation-chauffage-electrique",
    title: "Guide d'utilisation : chauffage électrique",
    date: "05 NOV. 2025",
    image: "/images/guide_chauffage.png",
    content: "Les chauffages électriques industriels sont parfaits pour assécher des pièces, chauffer des ateliers ou des chantiers fermés sans émettre de gaz d'échappement. Ne couvrez jamais l'appareil en fonctionnement. Branchez-le toujours sur une prise reliée à la terre et dimensionnée pour la puissance demandée (souvent 3kW ou plus). Éloignez tout matériau inflammable à au moins 1 mètre."
  }
];

export function getConseilBySlug(slug: string): Conseil | undefined {
  return conseils.find(c => c.slug === slug);
}

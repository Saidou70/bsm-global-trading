export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductPrice {
  duration: string;
  price: number;
  unit: string;
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  specs: ProductSpec[];
  prices: ProductPrice[];
  image: string;
  images?: string[];
  rating: number;
}

export const catalog: Product[] = [
  {
    slug: "plaque-vibrante-essence-80kg",
    name: "Plaque vibrante essence",
    category: "Compactage",
    description: "Compacteur indispensable pour l'asphalte, le pavage et la réfection de chaussées.",
    longDescription: "Idéale pour le compactage de l'asphalte, du sable, des graviers et des sols mixtes dans les espaces confinés. Cette plaque vibrante maniable offre une grande force de compactage tout en réduisant les vibrations transmises à l'opérateur (système anti-vibration du guidon). Équipée d'un réservoir d'eau pour l'asphalte.",
    specs: [
      { label: "Poids", value: "PQ1 - < 80 kg" },
      { label: "Force centrifuge", value: "15 kN" },
      { label: "Énergie", value: "Essence 4 temps" },
      { label: "Largeur de semelle", value: "400 mm" }
    ],
    prices: [
      { duration: "1 j", price: 750, unit: "TTC/jour" },
      { duration: "De 2 à 6 j", price: 710, unit: "TTC/jour" },
      { duration: "Plus de 7 j", price: 570, unit: "TTC/jour" },
      { duration: "Weekend", price: 820, unit: "TTC/weekend" }
    ],
    image: "/images/plaque_vibrante.png",
    images: ["/images/plaque_vibrante.png", "/images/plaque_vibrante_profil.png", "/images/worker_compactor.png"],
    rating: 4.6
  },
  {
    slug: "minipelle-chenilles-1t",
    name: "Minipelle sur chenilles",
    category: "Terrassement",
    description: "Minipelle compacte, passe-partout pour petits travaux de terrassement et fondations.",
    longDescription: "Cette minipelle d'une tonne est la machine parfaite pour vos chantiers urbains ou les espaces restreints. Grâce à son gabarit ultra-compact (voie variable), elle passe les portes standards et accède aux jardins arrière. Elle excelle dans les travaux de petite démolition, le creusement de tranchées, la réalisation de fondations ou le nivellement. Commandes précises et souples.",
    specs: [
      { label: "Poids", value: "< 1 t" },
      { label: "Profondeur de fouille", value: "1,5 m" },
      { label: "Largeur (voie variable)", value: "71 - 110 cm" },
      { label: "Énergie", value: "Diesel" }
    ],
    prices: [
      { duration: "1 j", price: 3830, unit: "TTC/jour" },
      { duration: "De 2 à 6 j", price: 3390, unit: "TTC/jour" },
      { duration: "Plus de 7 j", price: 2930, unit: "TTC/jour" },
      { duration: "Weekend", price: 4140, unit: "TTC/weekend" }
    ],
    image: "/images/minipelle.png",
    images: ["/images/minipelle.png", "/images/minipelle_profil.png", "/images/worker_minipelle.jpg"],
    rating: 4.5
  },
  {
    slug: "echafaudage-roulant-5m",
    name: "Echafaudage roulant",
    category: "Installations provisoires et sécurité",
    description: "Structure en aluminium légère et sécurisée pour travaux en hauteur jusqu'à 5 mètres.",
    longDescription: "L'échafaudage roulant en aluminium est la solution sécurisée et pratique pour tous vos travaux en hauteur : peinture, entretien, installation électrique... Facile et rapide à monter (système d'emboîtement sans outil), il est équipé de roues à frein pour un déplacement aisé. Ses plateaux antidérapants et ses lisses de sécurité garantissent un travail en toute sérénité.",
    specs: [
      { label: "Hauteur de travail max", value: "Hauteur de travail ≤ 5 m" },
      { label: "Hauteur de plancher", value: "3,00 m" },
      { label: "Matière", value: "Aluminium" },
      { label: "Charge max", value: "200 kg/m²" }
    ],
    prices: [
      { duration: "1 j", price: 1080, unit: "TTC/jour" },
      { duration: "De 2 à 6 j", price: 1020, unit: "TTC/jour" },
      { duration: "Plus de 7 j", price: 840, unit: "TTC/jour" },
      { duration: "Weekend", price: 2030, unit: "TTC/weekend" }
    ],
    image: "/images/echafaudage.png",
    images: ["/images/echafaudage.png", "/images/echafaudage_profil.png", "/images/worker_echafaudage.jpg"],
    rating: 4.4
  },
  {
    slug: "nacelle-articulee-electrique-12m",
    name: "Nacelle articulée électrique 12m",
    category: "Élévation de personnes",
    description: "Zéro émission, compacte, pour vos travaux de maintenance en intérieur ou extérieur sur sol dur.",
    longDescription: "La nacelle articulée électrique permet d'atteindre les zones difficiles d'accès grâce à son déport important et son bras articulé. Elle est particulièrement adaptée aux travaux de maintenance industrielle, d'installation électrique ou de nettoyage dans les environnements intérieurs (magasins, usines) grâce à sa motorisation silencieuse et sans émission. Pneus non marquants.",
    specs: [
      { label: "Hauteur de travail", value: "11,95 m" },
      { label: "Déport max", value: "7,00 m" },
      { label: "Énergie", value: "Électrique (Batteries)" },
      { label: "Largeur", value: "1,20 m" }
    ],
    prices: [
      { duration: "1 j", price: 2650, unit: "TTC/jour" },
      { duration: "De 2 à 6 j", price: 2320, unit: "TTC/jour" },
      { duration: "Plus de 7 j", price: 2000, unit: "TTC/jour" },
      { duration: "Weekend", price: 3190, unit: "TTC/weekend" }
    ],
    image: "/images/nacelle.png",
    images: ["/images/nacelle.png", "/images/nacelle_profil.png", "/images/worker_nacelle_articulee.jpg"],
    rating: 4.8
  },
  {
    slug: "groupe-electrogene-3kva",
    name: "Groupe électrogène 3kVA",
    category: "Énergie & électricité",
    description: "Alimentation électrique de secours ou de chantier portable et fiable.",
    longDescription: "Ce groupe électrogène portable est la source d'énergie autonome idéale pour vos outils électriques sur les chantiers dépourvus d'électricité, ou comme solution de secours à domicile. Équipé d'une régulation de tension (AVR) pour protéger vos appareils sensibles, il offre une autonomie prolongée grâce à son grand réservoir. Châssis tubulaire robuste pour une protection optimale.",
    specs: [
      { label: "Puissance", value: "3000 W (3 kVA)" },
      { label: "Énergie", value: "Essence 4 temps" },
      { label: "Prises", value: "2 x 230V" },
      { label: "Autonomie", value: "11 heures" }
    ],
    prices: [
      { duration: "1 j", price: 490, unit: "TTC/jour" },
      { duration: "De 2 à 6 j", price: 430, unit: "TTC/jour" },
      { duration: "Plus de 7 j", price: 350, unit: "TTC/jour" },
      { duration: "Weekend", price: 590, unit: "TTC/weekend" }
    ],
    image: "/images/groupe_electrogene.png",
    images: ["/images/groupe_electrogene.png", "/images/groupe_electrogene_profil.png", "/images/worker_groupe_3kva.jpg"],
    rating: 4.3
  },
  {
    slug: "nacelle-ciseaux-electrique-8m",
    name: "Nacelle ciseaux électrique 8m",
    category: "Élévation de personnes",
    description: "Compacte et silencieuse, idéale pour les travaux en intérieur.",
    longDescription: "Nacelle ciseaux électrique polyvalente pour tous vos travaux de maintenance en intérieur. Pneus non-marquants et fonctionnement silencieux zéro émission.",
    specs: [{ label: "Hauteur", value: "8 m" }, { label: "Énergie", value: "Électrique" }, { label: "Capacité", value: "230 kg" }, { label: "Poids", value: "1500 kg" }],
    prices: [{ duration: "1 j", price: 970, unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: 810, unit: "TTC/jour" }, { duration: "Plus de 7 j", price: 650, unit: "TTC/jour" }, { duration: "Weekend", price: 1300, unit: "TTC/weekend" }],
    image: "/images/nacelle_ciseaux.png",
    images: ["/images/nacelle_ciseaux.png", "/images/nacelle_ciseaux_profil.png", "/images/worker_nacelle_ciseaux.jpg"],
    rating: 4.5
  },
  {
    slug: "nacelle-telescopique-22m",
    name: "Nacelle télescopique 22m",
    category: "Élévation de personnes",
    description: "Grande portée horizontale pour atteindre les zones difficiles d'accès.",
    longDescription: "Idéale pour les chantiers de construction navale, charpente, ou maintenance industrielle nécessitant un déport important.",
    specs: [{ label: "Hauteur", value: "22 m" }, { label: "Déport max", value: "17 m" }, { label: "Énergie", value: "Diesel" }, { label: "Poids", value: "10 t" }],
    prices: [{ duration: "1 j", price: 3780, unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: 3240, unit: "TTC/jour" }, { duration: "Plus de 7 j", price: 2700, unit: "TTC/jour" }, { duration: "Weekend", price: 4860, unit: "TTC/weekend" }],
    image: "/images/nacelle_telescopique.png",
    images: ["/images/nacelle_telescopique.png", "/images/nacelle_telescopique_profil.png", "/images/worker_nacelle_telescopique.jpg"],
    rating: 4.8
  },
  {
    slug: "chariot-elevateur-frontal-2-5t",
    name: "Chariot élévateur frontal 2.5T",
    category: "Manutention & levage",
    description: "Le grand classique de la manutention industrielle et logistique.",
    longDescription: "Chariot élévateur industriel pour le chargement, déchargement et stockage de palettes. Excellente visibilité et cabine ergonomique.",
    specs: [{ label: "Capacité", value: "2,5 t" }, { label: "Hauteur levée", value: "3,3 m" }, { label: "Énergie", value: "Gaz / Diesel" }, { label: "Poids", value: "3,6 t" }],
    prices: [{ duration: "1 j", price: 1620, unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: 1400, unit: "TTC/jour" }, { duration: "Plus de 7 j", price: 1080, unit: "TTC/jour" }, { duration: "Weekend", price: 2160, unit: "TTC/weekend" }],
    image: "/images/chariot_elevateur.png",
    images: ["/images/chariot_elevateur.png", "/images/chariot_elevateur_profil.png", "/images/worker_chariot_elevateur.jpg"],
    rating: 4.7
  },
  {
    slug: "transpalette-electrique",
    name: "Transpalette électrique",
    category: "Manutention & levage",
    description: "Déplacement de palettes sans effort pour entrepôts et magasins.",
    longDescription: "Transpalette à conducteur accompagnant très maniable pour la préparation de commandes ou le déchargement de camions.",
    specs: [{ label: "Capacité", value: "1,5 t" }, { label: "Levée", value: "200 mm" }, { label: "Énergie", value: "Électrique" }, { label: "Poids", value: "200 kg" }],
    prices: [{ duration: "1 j", price: 430, unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: 380, unit: "TTC/jour" }, { duration: "Plus de 7 j", price: 270, unit: "TTC/jour" }, { duration: "Weekend", price: 650, unit: "TTC/weekend" }],
    image: "/images/transpalette.png",
    images: ["/images/transpalette.png", "/images/transpalette_profil.png", "/images/worker_transpalette.jpg"],
    rating: 4.3
  },
  {
    slug: "gerbeur-electrique",
    name: "Gerbeur électrique",
    category: "Manutention & levage",
    description: "Levage de palettes en rayonnage jusqu'à 3 mètres.",
    longDescription: "Idéal pour le stockage en hauteur dans des allées étroites. Commandes intuitives et sécurité maximale.",
    specs: [{ label: "Capacité", value: "1,2 t" }, { label: "Hauteur levée", value: "3 m" }, { label: "Énergie", value: "Électrique" }, { label: "Poids", value: "600 kg" }],
    prices: [{ duration: "1 j", price: 860, unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: 760, unit: "TTC/jour" }, { duration: "Plus de 7 j", price: 540, unit: "TTC/jour" }, { duration: "Weekend", price: 1190, unit: "TTC/weekend" }],
    image: "/images/gerbeur.png",
    images: ["/images/gerbeur.png", "/images/gerbeur_profil.png", "/images/worker_gerbeur.jpg"],
    rating: 4.4
  },
  {
    slug: "groupe-electrogene-40kva",
    name: "Groupe électrogène 40 kVA",
    category: "Énergie & électricité",
    description: "Source d'énergie puissante pour les gros chantiers ou l'événementiel.",
    longDescription: "Générateur diesel insonorisé de grande capacité sur remorque routière pour une alimentation fiable et continue.",
    specs: [{ label: "Puissance", value: "40 kVA" }, { label: "Tension", value: "230V / 400V" }, { label: "Énergie", value: "Diesel" }, { label: "Autonomie", value: "24h" }],
    prices: [{ duration: "1 j", price: 1510, unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: 1300, unit: "TTC/jour" }, { duration: "Plus de 7 j", price: 970, unit: "TTC/jour" }, { duration: "Weekend", price: 2050, unit: "TTC/weekend" }],
    image: "/images/groupe_40kva.png",
    images: ["/images/groupe_40kva.png", "/images/groupe_40kva_profil.png", "/images/worker_groupe_40kva.jpg"],
    rating: 4.7
  },
  {
    slug: "coffret-chantier",
    name: "Coffret de distribution",
    category: "Énergie & électricité",
    description: "Répartition sécurisée de l'électricité sur vos chantiers.",
    longDescription: "Armoire de distribution étanche avec disjoncteurs différentiels, pour brancher tous vos outillages en sécurité.",
    specs: [{ label: "Alimentation", value: "63A" }, { label: "Prises 230V", value: "6" }, { label: "Prises 400V", value: "2" }, { label: "Protection", value: "IP44" }],
    prices: [{ duration: "1 j", price: 160, unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: 130, unit: "TTC/jour" }, { duration: "Plus de 7 j", price: 100, unit: "TTC/jour" }, { duration: "Weekend", price: 220, unit: "TTC/weekend" }],
    image: "/images/coffret_chantier.png",
    images: ["/images/coffret_chantier.png", "/images/coffret_chantier_profil.png", "/images/worker_coffret.jpg"],
    rating: 4.2
  },
  {
    slug: "chargeuse-compacte",
    name: "Chargeuse compacte",
    category: "Terrassement",
    description: "Manutention de terre, gravats ou matériaux en espace réduit.",
    longDescription: "Chargeuse sur pneus articulée, rapide et polyvalente, indispensable pour le nivellement ou le chargement de camions sur chantier urbain.",
    specs: [{ label: "Capacité godet", value: "800 L" }, { label: "Poids", value: "4,5 t" }, { label: "Largeur", value: "1,75 m" }, { label: "Énergie", value: "Diesel" }],
    prices: [{ duration: "1 j", price: 3020, unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: 2700, unit: "TTC/jour" }, { duration: "Plus de 7 j", price: 2050, unit: "TTC/jour" }, { duration: "Weekend", price: 4210, unit: "TTC/weekend" }],
    image: "/images/chargeuse.png",
    images: ["/images/chargeuse.png", "/images/chargeuse_profil.png", "/images/worker_chargeuse.jpg"],
    rating: 4.7
  },
  {
    slug: "minipelle-5t",
    name: "Minipelle 5T",
    category: "Terrassement",
    description: "Puissance et compacité pour vos gros terrassements.",
    longDescription: "Pelle mécanique midi idéale pour les fondations, la pose de canalisations ou l'arrachage de souches.",
    specs: [{ label: "Poids", value: "5 t" }, { label: "Profondeur fouille", value: "3,8 m" }, { label: "Largeur", value: "1,96 m" }, { label: "Énergie", value: "Diesel" }],
    prices: [{ duration: "1 j", price: 3240, unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: 2810, unit: "TTC/jour" }, { duration: "Plus de 7 j", price: 2270, unit: "TTC/jour" }, { duration: "Weekend", price: 4320, unit: "TTC/weekend" }],
    image: "/images/minipelle_5t.png",
    images: ["/images/minipelle_5t.png", "/images/minipelle_5t_profil.png", "/images/worker_minipelle_5t.jpg"],
    rating: 4.8
  },
  {
    slug: "brise-roche-brh",
    name: "Brise-roche (BRH)",
    category: "Terrassement",
    description: "Accessoire de démolition pour minipelles et pelles.",
    longDescription: "Marteau hydraulique adaptable sur pelle pour briser du béton, de la roche ou de l'asphalte avec une force de frappe exceptionnelle.",
    specs: [{ label: "Pour pelle de", value: "2.5 à 5 t" }, { label: "Poids", value: "150 kg" }, { label: "Coups/min", value: "600-1200" }, { label: "Outil", value: "Pic / Burin" }],
    prices: [{ duration: "1 j", price: 970, unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: 860, unit: "TTC/jour" }, { duration: "Plus de 7 j", price: 650, unit: "TTC/jour" }, { duration: "Weekend", price: 1400, unit: "TTC/weekend" }],
    image: "/images/brise_roche.png",
    images: ["/images/brise_roche.png", "/images/brise_roche_profil.png", "/images/worker_brh.jpg"],
    rating: 4.6
  },
  {
    slug: "pilonneuse-essence",
    name: "Pilonneuse thermique",
    category: "Compactage",
    description: "Compactage profond pour les tranchées et espaces confinés.",
    longDescription: "Idéale pour le compactage des sols argileux ou mixtes lors de la pose de canalisations ou le remblaiement de tranchées étroites.",
    specs: [{ label: "Force de frappe", value: "15 kN" }, { label: "Poids", value: "65 kg" }, { label: "Semelle", value: "280 mm" }, { label: "Énergie", value: "Essence 4T" }],
    prices: [{ duration: "1 j", price: 700, unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: 590, unit: "TTC/jour" }, { duration: "Plus de 7 j", price: 430, unit: "TTC/jour" }, { duration: "Weekend", price: 970, unit: "TTC/weekend" }],
    image: "/images/pilonneuse.png",
    images: ["/images/pilonneuse.png", "/images/pilonneuse_profil.png", "/images/worker_pilonneuse.jpg"],
    rating: 4.4
  },
  {
    slug: "plaque-reversible-400kg",
    name: "Plaque réversible lourde",
    category: "Compactage",
    description: "Puissance de compactage maximale pour les fondations.",
    longDescription: "Plaque vibrante de 400 kg permettant une marche avant et arrière. Idéale pour compacter des couches épaisses de tout-venant ou gravier.",
    specs: [{ label: "Poids", value: "400 kg" }, { label: "Force", value: "55 kN" }, { label: "Largeur", value: "600 mm" }, { label: "Énergie", value: "Diesel" }],
    prices: [{ duration: "1 j", price: 1190, unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: 1030, unit: "TTC/jour" }, { duration: "Plus de 7 j", price: 810, unit: "TTC/jour" }, { duration: "Weekend", price: 1620, unit: "TTC/weekend" }],
    image: "/images/plaque_reversible.png",
    images: ["/images/plaque_reversible.png", "/images/plaque_reversible_profil.png", "/images/worker_plaque_400kg.jpg"],
    rating: 4.5
  },
  {
    slug: "marteau-piqueur",
    name: "Marteau-piqueur",
    category: "Équipement de chantier",
    description: "Démolition facile de dalles béton et murs.",
    longDescription: "Marteau de démolition électrique puissant. Système anti-vibration intégré pour un meilleur confort lors de travaux prolongés.",
    specs: [{ label: "Poids", value: "30 kg" }, { label: "Force de frappe", value: "65 Joules" }, { label: "Énergie", value: "Électrique 230V" }, { label: "Emmanchement", value: "Hexagonal 28mm" }],
    prices: [{ duration: "1 j", price: 490, unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: 410, unit: "TTC/jour" }, { duration: "Plus de 7 j", price: 320, unit: "TTC/jour" }, { duration: "Weekend", price: 650, unit: "TTC/weekend" }],
    image: "/images/marteau_piqueur.png",
    images: ["/images/marteau_piqueur.png", "/images/marteau_piqueur_profil.png", "/images/worker_marteau_piqueur.jpg"],
    rating: 4.6
  },
  {
    slug: "betonniere-thermique",
    name: "Bétonnière thermique",
    category: "Équipement de chantier",
    description: "Production de béton ou mortier en totale autonomie.",
    longDescription: "Bétonnière tractable à moteur essence, idéale pour les chantiers sans raccordement électrique. Capacité de malaxage importante.",
    specs: [{ label: "Cuve", value: "350 L" }, { label: "Malaxage", value: "280 L" }, { label: "Énergie", value: "Essence 4T" }, { label: "Tractable", value: "Oui (90 km/h)" }],
    prices: [{ duration: "1 j", price: 430, unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: 380, unit: "TTC/jour" }, { duration: "Plus de 7 j", price: 270, unit: "TTC/jour" }, { duration: "Weekend", price: 590, unit: "TTC/weekend" }],
    image: "/images/betonniere.png",
    images: ["/images/betonniere.png", "/images/betonniere_profil.png", "/images/worker_betonniere.jpg"],
    rating: 4.4
  },
  {
    slug: "cloture-chantier",
    name: "Clôture de chantier",
    category: "Installations provisoires et sécurité",
    description: "Sécurisation et délimitation du périmètre des travaux.",
    longDescription: "Panneaux grillagés en acier galvanisé avec plots béton, indispensables pour interdire l'accès au public et prévenir les vols.",
    specs: [{ label: "Longueur", value: "3,5 m / panneau" }, { label: "Hauteur", value: "2 m" }, { label: "Matériau", value: "Acier galvanisé" }, { label: "Maintien", value: "Plot béton 35kg" }],
    prices: [{ duration: "1 j", price: 20, unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: 20, unit: "TTC/jour" }, { duration: "Plus de 7 j", price: 10, unit: "TTC/jour" }, { duration: "Weekend", price: 30, unit: "TTC/weekend" }],
    image: "/images/cloture.png",
    images: ["/images/cloture.png", "/images/cloture_profil.png", "/images/worker_cloture.jpg"],
    rating: 4.5
  },
  {
    slug: "wc-autonome",
    name: "WC autonome",
    category: "Installations provisoires et sécurité",
    description: "Sanitaires chimiques pour chantiers non raccordés.",
    longDescription: "Cabine sanitaire portable avec cuve de rétention. Hygiénique, robuste et livrée prête à l'emploi (sans besoin de raccordement en eau).",
    specs: [{ label: "Type", value: "Chimique" }, { label: "Capacité cuve", value: "250 L" }, { label: "Lave-mains", value: "Intégré" }, { label: "Poids à vide", value: "85 kg" }],
    prices: [{ duration: "1 j", price: 320, unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: 270, unit: "TTC/jour" }, { duration: "Plus de 7 j", price: 160, unit: "TTC/jour" }, { duration: "Weekend", price: 430, unit: "TTC/weekend" }],
    image: "/images/wc_autonome.png",
    images: ["/images/wc_autonome.png", "/images/wc_autonome_profil.png", "/images/worker_wc.jpg"],
    rating: 4.1
  },
  {
    slug: "feux-tricolores",
    name: "Feux tricolores (Paire)",
    category: "Installations provisoires et sécurité",
    description: "Régulation de la circulation sur zone de travaux.",
    longDescription: "Paire de feux de chantier à LED sur chariot à roulettes. Synchronisation sans fil pour l'alternat de circulation en toute sécurité.",
    specs: [{ label: "Technologie", value: "LED" }, { label: "Synchro", value: "Radio" }, { label: "Énergie", value: "Batteries 12V" }, { label: "Autonomie", value: "3 semaines" }],
    prices: [{ duration: "1 j", price: 540, unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: 430, unit: "TTC/jour" }, { duration: "Plus de 7 j", price: 270, unit: "TTC/jour" }, { duration: "Weekend", price: 760, unit: "TTC/weekend" }],
    image: "/images/feux_tricolores.png",
    images: ["/images/feux_tricolores.png", "/images/feux_tricolores_profil.png", "/images/worker_feux.jpg"],
    rating: 4.7
  },
  {
    slug: "ponceuse-girafe",
    name: "Ponceuse girafe télescopique",
    category: "Travaux intérieur",
    description: "Ponceuse à bras télescopique pour le ponçage sans effort des murs et plafonds.",
    longDescription: "La ponceuse girafe est l'outil indispensable pour poncer de grandes surfaces en hauteur (murs, plafonds) sans fatigue. Équipée d'une tête articulée et d'un système d'aspiration des poussières très performant, elle garantit un travail propre, rapide et une finition parfaitement lisse pour vos travaux de plaquisterie et de peinture.",
    specs: [{ label: "Puissance", value: "710 W" }, { label: "Diamètre plateau", value: "225 mm" }, { label: "Poids", value: "4,5 kg" }, { label: "Énergie", value: "Électrique 230V" }],
    prices: [{ duration: "1 j", price: 380, unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: 320, unit: "TTC/jour" }, { duration: "Plus de 7 j", price: 270, unit: "TTC/jour" }, { duration: "Weekend", price: 540, unit: "TTC/weekend" }],
    image: "/images/ponceuse_girafe.jpg",
    images: ["/images/ponceuse_girafe.jpg", "/images/ponceuse_girafe_profil.png", "/images/worker_ponceuse.jpg"],
    rating: 4.6
  },
  {
    slug: "niveau-laser-360",
    name: "Niveau laser 360° vert",
    category: "Travaux intérieur",
    description: "Niveau laser multi-lignes vert haute visibilité pour un alignement parfait à 360°.",
    longDescription: "Le niveau laser professionnel avec faisceau vert offre une visibilité jusqu'à quatre fois supérieure à celle des lignes rouges. Il projette 3 lignes à 360° permettant de réaliser simultanément des mises à niveau dans toute la pièce. Outil parfait pour le carrelage, les faux-plafonds et l'agencement intérieur.",
    specs: [{ label: "Portée", value: "30 m" }, { label: "Couleur faisceau", value: "Vert" }, { label: "Précision", value: "± 0,2 mm/m" }, { label: "Énergie", value: "Batterie Li-Ion" }],
    prices: [{ duration: "1 j", price: 430, unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: 380, unit: "TTC/jour" }, { duration: "Plus de 7 j", price: 300, unit: "TTC/jour" }, { duration: "Weekend", price: 650, unit: "TTC/weekend" }],
    image: "/images/niveau_laser.jpg",
    images: ["/images/niveau_laser.jpg", "/images/niveau_laser_profil.png", "/images/niveau_laser_detail.png", "/images/worker_laser.jpg"],
    rating: 4.9
  },
  {
    slug: "aspirateur-chantier-eau-poussiere",
    name: "Aspirateur eau et poussière",
    category: "Travaux intérieur",
    description: "Aspirateur industriel puissant pour l'aspiration d'eau et de poussières de chantier.",
    longDescription: "Cet aspirateur professionnel est conçu pour résister aux environnements les plus exigeants. Capable d'aspirer indifféremment l'eau et les gravats, il dispose d'une prise asservie permettant de brancher un outil électroportatif pour une aspiration directe des poussières à la source.",
    specs: [{ label: "Cuve", value: "30 L" }, { label: "Débit d'air", value: "3600 L/min" }, { label: "Dépression", value: "210 mbar" }, { label: "Puissance", value: "1200 W" }],
    prices: [{ duration: "1 j", price: 320, unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: 270, unit: "TTC/jour" }, { duration: "Plus de 7 j", price: 220, unit: "TTC/jour" }, { duration: "Weekend", price: 490, unit: "TTC/weekend" }],
    image: "/images/aspirateur_chantier.jpg",
    images: ["/images/aspirateur_chantier.jpg", "/images/aspirateur_chantier_profil.png", "/images/worker_aspirateur.jpg"],
    rating: 4.7
  },
  {
    slug: "scie-circulaire-bois",
    name: "Scie circulaire professionnelle",
    category: "Travaux intérieur",
    description: "Scie circulaire filaire puissante pour des coupes droites et précises dans le bois.",
    longDescription: "Idéale pour les travaux de charpente, l'agencement et la découpe de panneaux, cette scie circulaire offre une grande profondeur de coupe et un moteur robuste. Son système de guidage et sa conception équilibrée assurent une sécurité optimale et un grand confort d'utilisation.",
    specs: [{ label: "Puissance", value: "2000 W" }, { label: "Lame", value: "270 mm" }, { label: "Coupe max", value: "100 mm" }, { label: "Énergie", value: "Électrique 230V" }],
    prices: [{ duration: "1 j", price: 380, unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: 320, unit: "TTC/jour" }, { duration: "Plus de 7 j", price: 220, unit: "TTC/jour" }, { duration: "Weekend", price: 540, unit: "TTC/weekend" }],
    image: "/images/scie_circulaire.jpg",
    images: ["/images/scie_circulaire.jpg", "/images/scie_circulaire_profil.png", "/images/scie_circulaire_detail.png", "/images/worker_scie.jpg"],
    rating: 4.8
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return catalog.find(p => p.slug === slug);
}

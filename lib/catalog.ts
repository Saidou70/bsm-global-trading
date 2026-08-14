export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductPrice {
  duration: string;
  price: string;
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
      { duration: "1 j", price: "69,48 €", unit: "TTC/jour" },
      { duration: "De 2 à 6 j", price: "65,75 €", unit: "TTC/jour" },
      { duration: "Plus de 7 j", price: "53,00 €", unit: "TTC/jour" },
      { duration: "Weekend", price: "76,06 €", unit: "TTC/weekend" }
    ],
    image: "/images/plaque_vibrante.png",
    rating: 4.6
  },
  {
    slug: "broyeur-vegetaux-55mm",
    name: "Broyeur de végétaux",
    category: "Équipement de chantier",
    description: "Broyeur thermique très performant pour branches jusqu'à 55mm de diamètre.",
    longDescription: "Ce broyeur de végétaux thermique est l'outil indispensable pour l'entretien de vos espaces verts. Il réduit efficacement et rapidement vos déchets de taille (haies, arbustes, arbres) en copeaux, facilitant ainsi leur évacuation ou leur utilisation en paillage. Son moteur puissant et son système de coupe robuste garantissent un rendement optimal, même sur du bois dur.",
    specs: [
      { label: "Diamètre max", value: "Ø 55 mm" },
      { label: "Énergie", value: "Essence 4 temps" },
      { label: "Poids", value: "95 kg" },
      { label: "Rendement", value: "4 m³/h" }
    ],
    prices: [
      { duration: "1 j", price: "122,52 €", unit: "TTC/jour" },
      { duration: "De 2 à 6 j", price: "115,06 €", unit: "TTC/jour" },
      { duration: "Plus de 7 j", price: "93,90 €", unit: "TTC/jour" },
      { duration: "Weekend", price: "133,93 €", unit: "TTC/weekend" }
    ],
    image: "/images/broyeur.png",
    rating: 4.2
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
      { duration: "1 j", price: "354,13 €", unit: "TTC/jour" },
      { duration: "De 2 à 6 j", price: "313,79 €", unit: "TTC/jour" },
      { duration: "Plus de 7 j", price: "271,20 €", unit: "TTC/jour" },
      { duration: "Weekend", price: "383,12 €", unit: "TTC/weekend" }
    ],
    image: "/images/minipelle.png",
    rating: 4.5
  },
  {
    slug: "motobineuse-thermique-8ch",
    name: "Motobineuse",
    category: "Équipement de chantier",
    description: "Parfaite pour retourner la terre de votre potager ou de votre pelouse avant semis.",
    longDescription: "La motobineuse thermique est idéale pour les travaux de préparation des sols sur des surfaces moyennes à grandes. Elle permet d'ameublir la terre en profondeur, d'enfouir le compost ou les engrais, et de désherber efficacement. Équipée de fraises robustes et d'un guidon réglable, elle offre un grand confort d'utilisation et une efficacité redoutable.",
    specs: [
      { label: "Puissance", value: "4/8 ch" },
      { label: "Énergie", value: "Essence 4 temps" },
      { label: "Largeur de travail", value: "80 cm" },
      { label: "Profondeur", value: "32 cm" }
    ],
    prices: [
      { duration: "1 j", price: "110,58 €", unit: "TTC/jour" },
      { duration: "De 2 à 6 j", price: "104,59 €", unit: "TTC/jour" },
      { duration: "Plus de 7 j", price: "84,80 €", unit: "TTC/jour" },
      { duration: "Weekend", price: "121,03 €", unit: "TTC/weekend" }
    ],
    image: "/images/motobineuse.png",
    rating: 4.1
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
      { duration: "1 j", price: "100,10 €", unit: "TTC/jour" },
      { duration: "De 2 à 6 j", price: "94,14 €", unit: "TTC/jour" },
      { duration: "Plus de 7 j", price: "77,30 €", unit: "TTC/jour" },
      { duration: "Weekend", price: "188,28 €", unit: "TTC/weekend" }
    ],
    image: "/images/echafaudage.png",
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
      { duration: "1 j", price: "245,00 €", unit: "TTC/jour" },
      { duration: "De 2 à 6 j", price: "215,00 €", unit: "TTC/jour" },
      { duration: "Plus de 7 j", price: "185,00 €", unit: "TTC/jour" },
      { duration: "Weekend", price: "295,00 €", unit: "TTC/weekend" }
    ],
    image: "/images/nacelle.png",
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
      { duration: "1 j", price: "45,00 €", unit: "TTC/jour" },
      { duration: "De 2 à 6 j", price: "40,00 €", unit: "TTC/jour" },
      { duration: "Plus de 7 j", price: "32,00 €", unit: "TTC/jour" },
      { duration: "Weekend", price: "55,00 €", unit: "TTC/weekend" }
    ],
    image: "/images/groupe_electrogene.png",
    rating: 4.3
  },
  {
    slug: "nacelle-ciseaux-electrique-8m",
    name: "Nacelle ciseaux électrique 8m",
    category: "Élévation de personnes",
    description: "Compacte et silencieuse, idéale pour les travaux en intérieur.",
    longDescription: "Nacelle ciseaux électrique polyvalente pour tous vos travaux de maintenance en intérieur. Pneus non-marquants et fonctionnement silencieux zéro émission.",
    specs: [{ label: "Hauteur", value: "8 m" }, { label: "Énergie", value: "Électrique" }, { label: "Capacité", value: "230 kg" }, { label: "Poids", value: "1500 kg" }],
    prices: [{ duration: "1 j", price: "90,00 €", unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: "75,00 €", unit: "TTC/jour" }, { duration: "Plus de 7 j", price: "60,00 €", unit: "TTC/jour" }, { duration: "Weekend", price: "120,00 €", unit: "TTC/weekend" }],
    image: "/images/nacelle_ciseaux.png",
    rating: 4.5
  },
  {
    slug: "nacelle-telescopique-22m",
    name: "Nacelle télescopique 22m",
    category: "Élévation de personnes",
    description: "Grande portée horizontale pour atteindre les zones difficiles d'accès.",
    longDescription: "Idéale pour les chantiers de construction navale, charpente, ou maintenance industrielle nécessitant un déport important.",
    specs: [{ label: "Hauteur", value: "22 m" }, { label: "Déport max", value: "17 m" }, { label: "Énergie", value: "Diesel" }, { label: "Poids", value: "10 t" }],
    prices: [{ duration: "1 j", price: "350,00 €", unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: "300,00 €", unit: "TTC/jour" }, { duration: "Plus de 7 j", price: "250,00 €", unit: "TTC/jour" }, { duration: "Weekend", price: "450,00 €", unit: "TTC/weekend" }],
    image: "/images/nacelle_telescopique.png",
    rating: 4.8
  },
  {
    slug: "nacelle-sur-camion-16m",
    name: "Nacelle sur camion 16m",
    category: "Élévation de personnes",
    description: "Mobilité maximale pour des interventions rapides sur plusieurs sites.",
    longDescription: "Permis B suffit. Nacelle élévatrice montée sur véhicule léger pour l'éclairage public, l'élagage ou le nettoyage de façades.",
    specs: [{ label: "Hauteur", value: "16 m" }, { label: "Déport max", value: "7,5 m" }, { label: "Permis", value: "Permis B" }, { label: "Énergie", value: "Diesel" }],
    prices: [{ duration: "1 j", price: "200,00 €", unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: "180,00 €", unit: "TTC/jour" }, { duration: "Plus de 7 j", price: "150,00 €", unit: "TTC/jour" }, { duration: "Weekend", price: "280,00 €", unit: "TTC/weekend" }],
    image: "/images/nacelle_camion.png",
    rating: 4.6
  },
  {
    slug: "chariot-elevateur-frontal-2-5t",
    name: "Chariot élévateur frontal 2.5T",
    category: "Manutention & levage",
    description: "Le grand classique de la manutention industrielle et logistique.",
    longDescription: "Chariot élévateur industriel pour le chargement, déchargement et stockage de palettes. Excellente visibilité et cabine ergonomique.",
    specs: [{ label: "Capacité", value: "2,5 t" }, { label: "Hauteur levée", value: "3,3 m" }, { label: "Énergie", value: "Gaz / Diesel" }, { label: "Poids", value: "3,6 t" }],
    prices: [{ duration: "1 j", price: "150,00 €", unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: "130,00 €", unit: "TTC/jour" }, { duration: "Plus de 7 j", price: "100,00 €", unit: "TTC/jour" }, { duration: "Weekend", price: "200,00 €", unit: "TTC/weekend" }],
    image: "/images/chariot_elevateur.png",
    rating: 4.7
  },
  {
    slug: "chariot-telescopique-14m",
    name: "Chariot télescopique 14m",
    category: "Manutention & levage",
    description: "Véritable couteau suisse du chantier pour lever et placer des charges.",
    longDescription: "Chariot télescopique tout-terrain avec stabilisateurs, idéal pour lever des matériaux de construction jusqu'à 14 mètres de hauteur.",
    specs: [{ label: "Capacité", value: "4 t" }, { label: "Hauteur levée", value: "14 m" }, { label: "Déport", value: "9 m" }, { label: "Énergie", value: "Diesel" }],
    prices: [{ duration: "1 j", price: "220,00 €", unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: "190,00 €", unit: "TTC/jour" }, { duration: "Plus de 7 j", price: "160,00 €", unit: "TTC/jour" }, { duration: "Weekend", price: "300,00 €", unit: "TTC/weekend" }],
    image: "/images/chariot_telescopique.png",
    rating: 4.9
  },
  {
    slug: "transpalette-electrique",
    name: "Transpalette électrique",
    category: "Manutention & levage",
    description: "Déplacement de palettes sans effort pour entrepôts et magasins.",
    longDescription: "Transpalette à conducteur accompagnant très maniable pour la préparation de commandes ou le déchargement de camions.",
    specs: [{ label: "Capacité", value: "1,5 t" }, { label: "Levée", value: "200 mm" }, { label: "Énergie", value: "Électrique" }, { label: "Poids", value: "200 kg" }],
    prices: [{ duration: "1 j", price: "40,00 €", unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: "35,00 €", unit: "TTC/jour" }, { duration: "Plus de 7 j", price: "25,00 €", unit: "TTC/jour" }, { duration: "Weekend", price: "60,00 €", unit: "TTC/weekend" }],
    image: "/images/transpalette.png",
    rating: 4.3
  },
  {
    slug: "mini-grue-araignee",
    name: "Mini-grue araignée",
    category: "Manutention & levage",
    description: "Passe par une porte standard et lève des charges lourdes en intérieur.",
    longDescription: "Grue compacte sur chenilles avec stabilisateurs en étoile, parfaite pour la pose de vitrages ou la charpente dans les espaces restreints.",
    specs: [{ label: "Capacité max", value: "2,9 t" }, { label: "Hauteur max", value: "8,7 m" }, { label: "Largeur", value: "0,6 m" }, { label: "Énergie", value: "Bi-énergie" }],
    prices: [{ duration: "1 j", price: "400,00 €", unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: "350,00 €", unit: "TTC/jour" }, { duration: "Plus de 7 j", price: "300,00 €", unit: "TTC/jour" }, { duration: "Weekend", price: "550,00 €", unit: "TTC/weekend" }],
    image: "/images/mini_grue.png",
    rating: 4.8
  },
  {
    slug: "gerbeur-electrique",
    name: "Gerbeur électrique",
    category: "Manutention & levage",
    description: "Levage de palettes en rayonnage jusqu'à 3 mètres.",
    longDescription: "Idéal pour le stockage en hauteur dans des allées étroites. Commandes intuitives et sécurité maximale.",
    specs: [{ label: "Capacité", value: "1,2 t" }, { label: "Hauteur levée", value: "3 m" }, { label: "Énergie", value: "Électrique" }, { label: "Poids", value: "600 kg" }],
    prices: [{ duration: "1 j", price: "80,00 €", unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: "70,00 €", unit: "TTC/jour" }, { duration: "Plus de 7 j", price: "50,00 €", unit: "TTC/jour" }, { duration: "Weekend", price: "110,00 €", unit: "TTC/weekend" }],
    image: "/images/gerbeur.png",
    rating: 4.4
  },
  {
    slug: "groupe-electrogene-40kva",
    name: "Groupe électrogène 40 kVA",
    category: "Énergie & électricité",
    description: "Source d'énergie puissante pour les gros chantiers ou l'événementiel.",
    longDescription: "Générateur diesel insonorisé de grande capacité sur remorque routière pour une alimentation fiable et continue.",
    specs: [{ label: "Puissance", value: "40 kVA" }, { label: "Tension", value: "230V / 400V" }, { label: "Énergie", value: "Diesel" }, { label: "Autonomie", value: "24h" }],
    prices: [{ duration: "1 j", price: "140,00 €", unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: "120,00 €", unit: "TTC/jour" }, { duration: "Plus de 7 j", price: "90,00 €", unit: "TTC/jour" }, { duration: "Weekend", price: "190,00 €", unit: "TTC/weekend" }],
    image: "/images/groupe_40kva.png",
    rating: 4.7
  },
  {
    slug: "tour-eclairage-mobile",
    name: "Tour d'éclairage mobile",
    category: "Énergie & électricité",
    description: "Éclairage surpuissant pour les travaux de nuit ou l'événementiel.",
    longDescription: "Mât d'éclairage télescopique équipé de projecteurs LED sur groupe électrogène intégré, couvrant jusqu'à 4000 m².",
    specs: [{ label: "Hauteur mât", value: "8 m" }, { label: "Puissance", value: "4x 320W LED" }, { label: "Énergie", value: "Diesel" }, { label: "Surface", value: "4000 m²" }],
    prices: [{ duration: "1 j", price: "110,00 €", unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: "95,00 €", unit: "TTC/jour" }, { duration: "Plus de 7 j", price: "75,00 €", unit: "TTC/jour" }, { duration: "Weekend", price: "150,00 €", unit: "TTC/weekend" }],
    image: "/images/tour_eclairage.png",
    rating: 4.5
  },
  {
    slug: "coffret-chantier",
    name: "Coffret de distribution",
    category: "Énergie & électricité",
    description: "Répartition sécurisée de l'électricité sur vos chantiers.",
    longDescription: "Armoire de distribution étanche avec disjoncteurs différentiels, pour brancher tous vos outillages en sécurité.",
    specs: [{ label: "Alimentation", value: "63A" }, { label: "Prises 230V", value: "6" }, { label: "Prises 400V", value: "2" }, { label: "Protection", value: "IP44" }],
    prices: [{ duration: "1 j", price: "15,00 €", unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: "12,00 €", unit: "TTC/jour" }, { duration: "Plus de 7 j", price: "9,00 €", unit: "TTC/jour" }, { duration: "Weekend", price: "20,00 €", unit: "TTC/weekend" }],
    image: "/images/coffret_chantier.png",
    rating: 4.2
  },
  {
    slug: "chauffage-fioul",
    name: "Chauffage fioul indirect",
    category: "Énergie & électricité",
    description: "Chaleur propre et sèche pour grands volumes.",
    longDescription: "Canon à chaleur à combustion indirecte avec évacuation des gaz brûlés. Idéal pour sécher le béton ou chauffer un chapiteau sans odeur.",
    specs: [{ label: "Puissance", value: "80 kW" }, { label: "Débit d'air", value: "3300 m³/h" }, { label: "Énergie", value: "Fioul/GNR" }, { label: "Autonomie", value: "14h" }],
    prices: [{ duration: "1 j", price: "85,00 €", unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: "75,00 €", unit: "TTC/jour" }, { duration: "Plus de 7 j", price: "55,00 €", unit: "TTC/jour" }, { duration: "Weekend", price: "120,00 €", unit: "TTC/weekend" }],
    image: "/images/chauffage_fioul.png",
    rating: 4.6
  },
  {
    slug: "chargeuse-compacte",
    name: "Chargeuse compacte",
    category: "Terrassement",
    description: "Manutention de terre, gravats ou matériaux en espace réduit.",
    longDescription: "Chargeuse sur pneus articulée, rapide et polyvalente, indispensable pour le nivellement ou le chargement de camions sur chantier urbain.",
    specs: [{ label: "Capacité godet", value: "800 L" }, { label: "Poids", value: "4,5 t" }, { label: "Largeur", value: "1,75 m" }, { label: "Énergie", value: "Diesel" }],
    prices: [{ duration: "1 j", price: "280,00 €", unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: "250,00 €", unit: "TTC/jour" }, { duration: "Plus de 7 j", price: "190,00 €", unit: "TTC/jour" }, { duration: "Weekend", price: "390,00 €", unit: "TTC/weekend" }],
    image: "/images/chargeuse.png",
    rating: 4.7
  },
  {
    slug: "dumper-articule",
    name: "Dumper articulé 3T",
    category: "Terrassement",
    description: "Évacuation de gravats et transport de terre sur terrains difficiles.",
    longDescription: "Tombereau de chantier 4x4 compact à benne rotative, idéal pour déplacer de gros volumes de terre dans les espaces exigus.",
    specs: [{ label: "Charge utile", value: "3 t" }, { label: "Capacité benne", value: "1500 L" }, { label: "Largeur", value: "1,65 m" }, { label: "Énergie", value: "Diesel" }],
    prices: [{ duration: "1 j", price: "160,00 €", unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: "140,00 €", unit: "TTC/jour" }, { duration: "Plus de 7 j", price: "110,00 €", unit: "TTC/jour" }, { duration: "Weekend", price: "220,00 €", unit: "TTC/weekend" }],
    image: "/images/dumper.png",
    rating: 4.5
  },
  {
    slug: "minipelle-5t",
    name: "Minipelle 5T",
    category: "Terrassement",
    description: "Puissance et compacité pour vos gros terrassements.",
    longDescription: "Pelle mécanique midi idéale pour les fondations, la pose de canalisations ou l'arrachage de souches.",
    specs: [{ label: "Poids", value: "5 t" }, { label: "Profondeur fouille", value: "3,8 m" }, { label: "Largeur", value: "1,96 m" }, { label: "Énergie", value: "Diesel" }],
    prices: [{ duration: "1 j", price: "300,00 €", unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: "260,00 €", unit: "TTC/jour" }, { duration: "Plus de 7 j", price: "210,00 €", unit: "TTC/jour" }, { duration: "Weekend", price: "400,00 €", unit: "TTC/weekend" }],
    image: "/images/minipelle_5t.png",
    rating: 4.8
  },
  {
    slug: "brise-roche-brh",
    name: "Brise-roche (BRH)",
    category: "Terrassement",
    description: "Accessoire de démolition pour minipelles et pelles.",
    longDescription: "Marteau hydraulique adaptable sur pelle pour briser du béton, de la roche ou de l'asphalte avec une force de frappe exceptionnelle.",
    specs: [{ label: "Pour pelle de", value: "2.5 à 5 t" }, { label: "Poids", value: "150 kg" }, { label: "Coups/min", value: "600-1200" }, { label: "Outil", value: "Pic / Burin" }],
    prices: [{ duration: "1 j", price: "90,00 €", unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: "80,00 €", unit: "TTC/jour" }, { duration: "Plus de 7 j", price: "60,00 €", unit: "TTC/jour" }, { duration: "Weekend", price: "130,00 €", unit: "TTC/weekend" }],
    image: "/images/brise_roche.png",
    rating: 4.6
  },
  {
    slug: "pilonneuse-essence",
    name: "Pilonneuse thermique",
    category: "Compactage",
    description: "Compactage profond pour les tranchées et espaces confinés.",
    longDescription: "Idéale pour le compactage des sols argileux ou mixtes lors de la pose de canalisations ou le remblaiement de tranchées étroites.",
    specs: [{ label: "Force de frappe", value: "15 kN" }, { label: "Poids", value: "65 kg" }, { label: "Semelle", value: "280 mm" }, { label: "Énergie", value: "Essence 4T" }],
    prices: [{ duration: "1 j", price: "65,00 €", unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: "55,00 €", unit: "TTC/jour" }, { duration: "Plus de 7 j", price: "40,00 €", unit: "TTC/jour" }, { duration: "Weekend", price: "90,00 €", unit: "TTC/weekend" }],
    image: "/images/pilonneuse.png",
    rating: 4.4
  },
  {
    slug: "rouleau-tandem",
    name: "Rouleau tandem",
    category: "Compactage",
    description: "Pour le compactage de l'asphalte et des sous-couches.",
    longDescription: "Rouleau vibrant autoporté à double bille, indispensable pour les travaux de voirie, parkings et pistes cyclables.",
    specs: [{ label: "Poids", value: "2,6 t" }, { label: "Largeur bille", value: "120 cm" }, { label: "Force centrifuge", value: "30 kN" }, { label: "Énergie", value: "Diesel" }],
    prices: [{ duration: "1 j", price: "220,00 €", unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: "190,00 €", unit: "TTC/jour" }, { duration: "Plus de 7 j", price: "150,00 €", unit: "TTC/jour" }, { duration: "Weekend", price: "300,00 €", unit: "TTC/weekend" }],
    image: "/images/rouleau_tandem.png",
    rating: 4.7
  },
  {
    slug: "rouleau-tranchee",
    name: "Rouleau de tranchée",
    category: "Compactage",
    description: "Compactage sécurisé télécommandé pour les fonds de tranchées.",
    longDescription: "Rouleau pied de mouton articulé avec télécommande. Permet de compacter au fond des tranchées sans risque d'éboulement pour l'opérateur.",
    specs: [{ label: "Poids", value: "1,4 t" }, { label: "Largeur", value: "85 cm" }, { label: "Contrôle", value: "Télécommande" }, { label: "Énergie", value: "Diesel" }],
    prices: [{ duration: "1 j", price: "240,00 €", unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: "210,00 €", unit: "TTC/jour" }, { duration: "Plus de 7 j", price: "170,00 €", unit: "TTC/jour" }, { duration: "Weekend", price: "330,00 €", unit: "TTC/weekend" }],
    image: "/images/rouleau_tranchee.png",
    rating: 4.9
  },
  {
    slug: "plaque-reversible-400kg",
    name: "Plaque réversible lourde",
    category: "Compactage",
    description: "Puissance de compactage maximale pour les fondations.",
    longDescription: "Plaque vibrante de 400 kg permettant une marche avant et arrière. Idéale pour compacter des couches épaisses de tout-venant ou gravier.",
    specs: [{ label: "Poids", value: "400 kg" }, { label: "Force", value: "55 kN" }, { label: "Largeur", value: "600 mm" }, { label: "Énergie", value: "Diesel" }],
    prices: [{ duration: "1 j", price: "110,00 €", unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: "95,00 €", unit: "TTC/jour" }, { duration: "Plus de 7 j", price: "75,00 €", unit: "TTC/jour" }, { duration: "Weekend", price: "150,00 €", unit: "TTC/weekend" }],
    image: "/images/plaque_reversible.png",
    rating: 4.5
  },
  {
    slug: "marteau-piqueur",
    name: "Marteau-piqueur",
    category: "Équipement de chantier",
    description: "Démolition facile de dalles béton et murs.",
    longDescription: "Marteau de démolition électrique puissant. Système anti-vibration intégré pour un meilleur confort lors de travaux prolongés.",
    specs: [{ label: "Poids", value: "30 kg" }, { label: "Force de frappe", value: "65 Joules" }, { label: "Énergie", value: "Électrique 230V" }, { label: "Emmanchement", value: "Hexagonal 28mm" }],
    prices: [{ duration: "1 j", price: "45,00 €", unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: "38,00 €", unit: "TTC/jour" }, { duration: "Plus de 7 j", price: "30,00 €", unit: "TTC/jour" }, { duration: "Weekend", price: "60,00 €", unit: "TTC/weekend" }],
    image: "/images/marteau_piqueur.png",
    rating: 4.6
  },
  {
    slug: "betonniere-thermique",
    name: "Bétonnière thermique",
    category: "Équipement de chantier",
    description: "Production de béton ou mortier en totale autonomie.",
    longDescription: "Bétonnière tractable à moteur essence, idéale pour les chantiers sans raccordement électrique. Capacité de malaxage importante.",
    specs: [{ label: "Cuve", value: "350 L" }, { label: "Malaxage", value: "280 L" }, { label: "Énergie", value: "Essence 4T" }, { label: "Tractable", value: "Oui (90 km/h)" }],
    prices: [{ duration: "1 j", price: "40,00 €", unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: "35,00 €", unit: "TTC/jour" }, { duration: "Plus de 7 j", price: "25,00 €", unit: "TTC/jour" }, { duration: "Weekend", price: "55,00 €", unit: "TTC/weekend" }],
    image: "/images/betonniere.png",
    rating: 4.4
  },
  {
    slug: "compresseur-air",
    name: "Compresseur d'air",
    category: "Équipement de chantier",
    description: "Alimentation pour outils pneumatiques ou sablage.",
    longDescription: "Compresseur diesel tractable, fournissant un débit d'air important pour l'utilisation simultanée de plusieurs brise-béton pneumatiques.",
    specs: [{ label: "Débit", value: "3000 L/min" }, { label: "Pression", value: "7 Bar" }, { label: "Énergie", value: "Diesel" }, { label: "Poids", value: "650 kg" }],
    prices: [{ duration: "1 j", price: "85,00 €", unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: "75,00 €", unit: "TTC/jour" }, { duration: "Plus de 7 j", price: "55,00 €", unit: "TTC/jour" }, { duration: "Weekend", price: "120,00 €", unit: "TTC/weekend" }],
    image: "/images/compresseur.png",
    rating: 4.3
  },
  {
    slug: "cloture-chantier",
    name: "Clôture de chantier",
    category: "Installations provisoires et sécurité",
    description: "Sécurisation et délimitation du périmètre des travaux.",
    longDescription: "Panneaux grillagés en acier galvanisé avec plots béton, indispensables pour interdire l'accès au public et prévenir les vols.",
    specs: [{ label: "Longueur", value: "3,5 m / panneau" }, { label: "Hauteur", value: "2 m" }, { label: "Matériau", value: "Acier galvanisé" }, { label: "Maintien", value: "Plot béton 35kg" }],
    prices: [{ duration: "1 j", price: "2,00 €", unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: "1,50 €", unit: "TTC/jour" }, { duration: "Plus de 7 j", price: "0,50 €", unit: "TTC/jour" }, { duration: "Weekend", price: "3,00 €", unit: "TTC/weekend" }],
    image: "/images/cloture.png",
    rating: 4.5
  },
  {
    slug: "base-de-vie",
    name: "Base de vie roulante",
    category: "Installations provisoires et sécurité",
    description: "Vestiaire, réfectoire et sanitaire pour les compagnons.",
    longDescription: "Roulotte de chantier tractable, isolée et chauffée. Équipée d'un coin repas, de vestiaires et de sanitaires autonomes.",
    specs: [{ label: "Capacité", value: "4 à 6 pers." }, { label: "Longueur", value: "4,5 m" }, { label: "Alimentation", value: "230V ou Gaz" }, { label: "Équipement", value: "Réfectoire + WC" }],
    prices: [{ duration: "1 j", price: "60,00 €", unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: "50,00 €", unit: "TTC/jour" }, { duration: "Plus de 7 j", price: "35,00 €", unit: "TTC/jour" }, { duration: "Weekend", price: "80,00 €", unit: "TTC/weekend" }],
    image: "/images/base_de_vie.png",
    rating: 4.8
  },
  {
    slug: "wc-autonome",
    name: "WC autonome",
    category: "Installations provisoires et sécurité",
    description: "Sanitaires chimiques pour chantiers non raccordés.",
    longDescription: "Cabine sanitaire portable avec cuve de rétention. Hygiénique, robuste et livrée prête à l'emploi (sans besoin de raccordement en eau).",
    specs: [{ label: "Type", value: "Chimique" }, { label: "Capacité cuve", value: "250 L" }, { label: "Lave-mains", value: "Intégré" }, { label: "Poids à vide", value: "85 kg" }],
    prices: [{ duration: "1 j", price: "30,00 €", unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: "25,00 €", unit: "TTC/jour" }, { duration: "Plus de 7 j", price: "15,00 €", unit: "TTC/jour" }, { duration: "Weekend", price: "40,00 €", unit: "TTC/weekend" }],
    image: "/images/wc_autonome.png",
    rating: 4.1
  },
  {
    slug: "feux-tricolores",
    name: "Feux tricolores (Paire)",
    category: "Installations provisoires et sécurité",
    description: "Régulation de la circulation sur zone de travaux.",
    longDescription: "Paire de feux de chantier à LED sur chariot à roulettes. Synchronisation sans fil pour l'alternat de circulation en toute sécurité.",
    specs: [{ label: "Technologie", value: "LED" }, { label: "Synchro", value: "Radio" }, { label: "Énergie", value: "Batteries 12V" }, { label: "Autonomie", value: "3 semaines" }],
    prices: [{ duration: "1 j", price: "50,00 €", unit: "TTC/jour" }, { duration: "De 2 à 6 j", price: "40,00 €", unit: "TTC/jour" }, { duration: "Plus de 7 j", price: "25,00 €", unit: "TTC/jour" }, { duration: "Weekend", price: "70,00 €", unit: "TTC/weekend" }],
    image: "/images/feux_tricolores.png",
    rating: 4.7
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return catalog.find(p => p.slug === slug);
}

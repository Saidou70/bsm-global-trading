// Illustrations SVG originales des machines — sans aucune marque.
// Palette : orange #ff6a00, marine #0f1b2d, gris. viewBox 400x260.

type Props = { type: MachineType; className?: string };
export type MachineType =
  | "elevation"
  | "manutention"
  | "energie"
  | "terrassement"
  | "compactage"
  | "chantier";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 400 260"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      preserveAspectRatio="xMidYMid meet"
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#eef2f7" />
          <stop offset="1" stopColor="#dde5ee" />
        </linearGradient>
        <linearGradient id="steel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffb266" />
          <stop offset="1" stopColor="#ff6a00" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill="url(#sky)" />
      {/* sol */}
      <rect x="0" y="212" width="400" height="48" fill="#c7d2df" />
      <line x1="0" y1="212" x2="400" y2="212" stroke="#aebccd" strokeWidth="2" />
      {children}
    </svg>
  );
}

const shadow = <ellipse cx="200" cy="214" rx="150" ry="10" fill="#0f1b2d" opacity="0.12" />;

function Elevation() {
  // Nacelle ciseaux
  return (
    <Frame>
      {shadow}
      {/* plateforme haute */}
      <rect x="120" y="52" width="170" height="14" rx="3" fill="#0f1b2d" />
      <rect x="120" y="40" width="6" height="18" fill="#0f1b2d" />
      <rect x="284" y="30" width="6" height="30" fill="#0f1b2d" />
      <rect x="120" y="30" width="170" height="5" rx="2" fill="#ff6a00" />
      {/* mécanisme ciseaux */}
      <g stroke="url(#steel)" strokeWidth="9" strokeLinecap="round">
        <line x1="150" y1="70" x2="250" y2="150" />
        <line x1="250" y1="70" x2="150" y2="150" />
        <line x1="150" y1="150" x2="250" y2="196" />
        <line x1="250" y1="150" x2="150" y2="196" />
      </g>
      <circle cx="200" cy="110" r="6" fill="#0f1b2d" />
      <circle cx="200" cy="173" r="6" fill="#0f1b2d" />
      {/* châssis */}
      <rect x="120" y="196" width="160" height="20" rx="4" fill="#0f1b2d" />
      <circle cx="150" cy="220" r="16" fill="#16263d" />
      <circle cx="150" cy="220" r="6" fill="#c7d2df" />
      <circle cx="250" cy="220" r="16" fill="#16263d" />
      <circle cx="250" cy="220" r="6" fill="#c7d2df" />
    </Frame>
  );
}

function Manutention() {
  // Chariot élévateur
  return (
    <Frame>
      {shadow}
      {/* mât */}
      <rect x="120" y="70" width="10" height="140" fill="#0f1b2d" />
      <rect x="134" y="70" width="10" height="140" fill="#0f1b2d" />
      {/* charge */}
      <rect x="70" y="120" width="60" height="52" fill="#c98a4b" />
      <rect x="70" y="120" width="60" height="52" fill="none" stroke="#8a5a28" strokeWidth="2" />
      <line x1="100" y1="120" x2="100" y2="172" stroke="#8a5a28" strokeWidth="2" />
      {/* fourches */}
      <rect x="60" y="172" width="86" height="8" fill="#0f1b2d" />
      {/* corps */}
      <path d="M150 210 L150 120 L210 120 L230 150 L300 150 L300 210 Z" fill="url(#steel)" />
      {/* cabine / arceau */}
      <rect x="222" y="70" width="8" height="82" fill="#0f1b2d" />
      <rect x="292" y="70" width="8" height="82" fill="#0f1b2d" />
      <rect x="222" y="70" width="78" height="8" fill="#0f1b2d" />
      <rect x="238" y="120" width="46" height="30" rx="3" fill="#0f1b2d" opacity="0.85" />
      {/* roues */}
      <circle cx="185" cy="210" r="22" fill="#16263d" />
      <circle cx="185" cy="210" r="8" fill="#c7d2df" />
      <circle cx="278" cy="210" r="22" fill="#16263d" />
      <circle cx="278" cy="210" r="8" fill="#c7d2df" />
    </Frame>
  );
}

function Energie() {
  // Groupe électrogène
  return (
    <Frame>
      {shadow}
      {/* skid */}
      <rect x="70" y="196" width="260" height="16" rx="3" fill="#0f1b2d" />
      {/* caisson */}
      <rect x="86" y="96" width="228" height="102" rx="8" fill="url(#steel)" />
      <rect x="86" y="96" width="228" height="26" rx="8" fill="#0f1b2d" />
      {/* grilles d'aération */}
      <g stroke="#0f1b2d" strokeWidth="4" opacity="0.85">
        <line x1="104" y1="140" x2="104" y2="184" />
        <line x1="116" y1="140" x2="116" y2="184" />
        <line x1="128" y1="140" x2="128" y2="184" />
        <line x1="140" y1="140" x2="140" y2="184" />
      </g>
      {/* panneau de contrôle */}
      <rect x="176" y="134" width="120" height="56" rx="5" fill="#16263d" />
      <circle cx="200" cy="150" r="7" fill="#ff6a00" />
      <circle cx="222" cy="150" r="7" fill="#4ade80" />
      <rect x="188" y="166" width="96" height="6" rx="3" fill="#c7d2df" opacity="0.7" />
      <rect x="188" y="176" width="70" height="6" rx="3" fill="#c7d2df" opacity="0.5" />
      {/* échappement */}
      <rect x="120" y="70" width="14" height="30" rx="4" fill="#0f1b2d" />
    </Frame>
  );
}

function Terrassement() {
  // Mini-pelle
  return (
    <Frame>
      {shadow}
      {/* chenilles */}
      <rect x="96" y="180" width="200" height="30" rx="15" fill="#16263d" />
      <circle cx="118" cy="195" r="14" fill="#0f1b2d" />
      <circle cx="274" cy="195" r="14" fill="#0f1b2d" />
      <g fill="#c7d2df" opacity="0.5">
        <rect x="140" y="188" width="6" height="14" />
        <rect x="164" y="188" width="6" height="14" />
        <rect x="188" y="188" width="6" height="14" />
        <rect x="212" y="188" width="6" height="14" />
        <rect x="236" y="188" width="6" height="14" />
      </g>
      {/* tourelle */}
      <path d="M150 180 L150 130 Q150 118 164 118 L250 118 L270 150 L270 180 Z" fill="url(#steel)" />
      {/* cabine */}
      <rect x="164" y="96" width="60" height="50" rx="6" fill="#0f1b2d" />
      <rect x="172" y="104" width="44" height="26" rx="3" fill="#9fc3e8" opacity="0.85" />
      {/* bras */}
      <g stroke="url(#steel)" strokeWidth="14" strokeLinecap="round" fill="none">
        <line x1="250" y1="150" x2="322" y2="104" />
        <line x1="322" y1="104" x2="336" y2="164" />
      </g>
      {/* godet */}
      <path d="M330 160 Q322 190 352 190 L360 170 L350 156 Z" fill="#0f1b2d" />
    </Frame>
  );
}

function Compactage() {
  // Rouleau compacteur
  return (
    <Frame>
      {shadow}
      {/* cylindre avant */}
      <circle cx="140" cy="176" r="40" fill="#16263d" />
      <circle cx="140" cy="176" r="40" fill="none" stroke="#0f1b2d" strokeWidth="4" />
      <circle cx="140" cy="176" r="10" fill="#c7d2df" />
      <g stroke="#2b3f5c" strokeWidth="3">
        <line x1="140" y1="136" x2="140" y2="216" />
        <line x1="100" y1="176" x2="180" y2="176" />
      </g>
      {/* châssis + corps */}
      <path d="M150 150 L150 120 Q150 110 162 110 L250 110 L300 150 L300 176 L250 176 Z" fill="url(#steel)" />
      {/* arceau / cabine */}
      <rect x="196" y="70" width="8" height="46" fill="#0f1b2d" />
      <rect x="262" y="70" width="8" height="46" fill="#0f1b2d" />
      <rect x="196" y="70" width="74" height="8" fill="#0f1b2d" />
      <rect x="214" y="88" width="44" height="26" rx="3" fill="#0f1b2d" opacity="0.85" />
      {/* roue arrière */}
      <circle cx="282" cy="188" r="26" fill="#16263d" />
      <circle cx="282" cy="188" r="9" fill="#c7d2df" />
    </Frame>
  );
}

function Chantier() {
  // Compresseur tractable + tuyau
  return (
    <Frame>
      {shadow}
      {/* corps compresseur */}
      <rect x="120" y="120" width="180" height="72" rx="12" fill="url(#steel)" />
      <rect x="120" y="120" width="180" height="20" rx="12" fill="#0f1b2d" />
      {/* poignée de traction */}
      <line x1="120" y1="150" x2="70" y2="176" stroke="#0f1b2d" strokeWidth="8" strokeLinecap="round" />
      <circle cx="66" cy="178" r="10" fill="#16263d" />
      {/* grilles */}
      <g stroke="#0f1b2d" strokeWidth="4" opacity="0.8">
        <line x1="140" y1="156" x2="140" y2="182" />
        <line x1="152" y1="156" x2="152" y2="182" />
        <line x1="164" y1="156" x2="164" y2="182" />
      </g>
      {/* manomètre */}
      <circle cx="250" cy="162" r="16" fill="#16263d" />
      <circle cx="250" cy="162" r="11" fill="#c7d2df" />
      <line x1="250" y1="162" x2="257" y2="154" stroke="#ff6a00" strokeWidth="3" strokeLinecap="round" />
      {/* tuyau + marteau */}
      <path d="M300 168 Q340 168 336 130 Q332 100 350 92" fill="none" stroke="#0f1b2d" strokeWidth="6" />
      <rect x="344" y="88" width="14" height="40" rx="4" fill="url(#steel)" transform="rotate(12 350 108)" />
      <rect x="348" y="126" width="6" height="26" fill="#16263d" transform="rotate(12 350 138)" />
      {/* roue */}
      <circle cx="160" cy="192" r="20" fill="#16263d" />
      <circle cx="160" cy="192" r="7" fill="#c7d2df" />
      <circle cx="264" cy="192" r="20" fill="#16263d" />
      <circle cx="264" cy="192" r="7" fill="#c7d2df" />
    </Frame>
  );
}

const MAP: Record<MachineType, () => React.JSX.Element> = {
  elevation: Elevation,
  manutention: Manutention,
  energie: Energie,
  terrassement: Terrassement,
  compactage: Compactage,
  chantier: Chantier,
};

export default function MachineArt({ type, className }: Props) {
  const Art = MAP[type];
  return (
    <div className={className} aria-hidden="true">
      <Art />
    </div>
  );
}

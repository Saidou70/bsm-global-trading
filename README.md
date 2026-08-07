# BSM Global Trading — Site Next.js

Site vitrine de location de matériel BTP & élévation (nacelles, chariots, groupes électrogènes, terrassement…), inspiré du modèle Salti. Tarifs affichés en **DH et €** avec bascule de devise.

## Stack
- Next.js 16 (App Router) + React 19 + TypeScript
- CSS pur (aucune dépendance UI), polices Google via `next/font`
- 100 % statique (exportable)

## Démarrer

```bash
npm install
npm run dev
```
Ouvrir http://localhost:3000

## Build production

```bash
npm run build
npm start
```

## Structure

| Chemin | Rôle |
|---|---|
| `app/layout.tsx` | Layout + métadonnées + polices |
| `app/page.tsx` | Assemblage des sections |
| `app/globals.css` | Tous les styles |
| `lib/data.ts` | **Coordonnées, tarifs, catalogue** — à modifier ici |
| `components/` | Header, Hero, Stats, Categories, Pricing (bascule DH/€), Features, About, Contact, CtaBand, Footer, WhatsappFab |

## Personnaliser

- **Coordonnées / tarifs / matériel** : tout est dans `lib/data.ts`.
- **Taux de conversion** : constante `RATE_DH_PER_EUR` dans `lib/data.ts` (le € se recalcule automatiquement à partir du prix en DH).
- **Couleurs** : variables CSS en haut de `app/globals.css`.

## À faire (à confirmer avec le client)
- Vérifier l'adresse email (`Contact@bsmglobal.gmail.com` semble incomplet).
- Remplacer les tarifs d'exemple par les vrais prix.
- Ajouter logo, photos de matériel, adresse physique.
- Optionnel : envoi du formulaire via une vraie API (actuellement ouverture d'un email pré-rempli).

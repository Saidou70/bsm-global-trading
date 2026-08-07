import { company } from "@/lib/data";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg"></div>
      <div className="container hero__inner">
        <div className="hero__content">

          <h1 className="animate-fade-up delay-100">
            La location de matériel
            <br />
            <span>au service de vos chantiers</span>
          </h1>
          <p className="animate-fade-up delay-200">
            Nacelles élévatrices, chariots, groupes électrogènes, terrassement
            et compactage. Un parc complet, entretenu et livré directement sur
            votre chantier — au Maroc comme en France.
          </p>
          <div className="hero__actions animate-fade-up delay-300">
            <a href="#devis" className="btn btn--primary btn--lg">
              Demander un devis
            </a>
            <a href="#materiel" className="btn btn--ghost btn--lg">
              Voir le matériel
            </a>
          </div>
          <div className="hero__phones animate-fade-up delay-300">
            {company.contacts.map((c) => (
              <a key={c.tel} href={`tel:${c.tel}`}>
                📞 {c.name} — {c.phone}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

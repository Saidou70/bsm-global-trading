import { company } from "@/lib/data";

export default function CtaBand() {
  const first = company.contacts[0];
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <h2>Un chantier à équiper ? Parlons-en.</h2>
        <div className="cta-band__actions">
          <a href={`tel:${first.tel}`} className="btn btn--light btn--lg">
            ☎ Appeler {first.name}
          </a>
          <a href="#devis" className="btn btn--primary btn--lg">
            Demander un devis
          </a>
        </div>
      </div>
    </section>
  );
}

const checks = [
  "Parc récent et entretenu",
  "Conseil technique personnalisé",
  "Tarifs transparents DH & €",
  "Intervention Maroc & France",
];

const engagements = [
  { value: "+2000", label: "Machines" },
  { value: "24/7", label: "Disponibilité" },
  { value: "2h", label: "Devis" },
  { value: "100%", label: "Matériel contrôlé" },
];

export default function About() {
  return (
    <section className="section section--alt" id="apropos">
      <div className="container about">
        <div className="about__text">
          <span className="eyebrow">À propos</span>
          <h2>BSM Global Trading</h2>
          <p>
            BSM Global Trading est spécialisée dans la{" "}
            <strong>location de matériel de BTP et d'élévation</strong>. Nous
            mettons à disposition des professionnels du bâtiment et de
            l'industrie un parc complet de machines fiables, entretenues et
            livrées sur chantier.
          </p>
          <p>
            Notre objectif : vous fournir{" "}
            <strong>le bon matériel, au bon moment, au meilleur prix</strong>,
            avec une transparence totale sur les tarifs affichés en dirham et en
            euro.
          </p>
          <ul className="checklist">
            {checks.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <div className="about__card">
          <h3>Nos engagements</h3>
          {engagements.map((e) => (
            <div className="engage" key={e.label}>
              <strong>{e.value}</strong>
              <span>{e.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { company } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <a href="#top" className="brand brand--light">
            <span className="brand__mark">BSM</span>
            <span className="brand__text">
              <strong>Global Trading</strong>
              <small>Location de matériel</small>
            </span>
          </a>
          <p className="footer__desc">
            Location de matériel de BTP et d'élévation. Livraison sur chantier au
            Maroc et en France.
          </p>
        </div>
        <div>
          <h4>Matériel</h4>
          <a href="#materiel">Élévation</a>
          <a href="#materiel">Manutention</a>
          <a href="#materiel">Énergie</a>
          <a href="#materiel">Terrassement</a>
        </div>
        <div>
          <h4>Entreprise</h4>
          <a href="#apropos">À propos</a>
          <a href="#tarifs">Tarifs</a>
          <a href="#services">Services</a>
          <a href="#devis">Devis</a>
        </div>
        <div>
          <h4>Contact</h4>
          {company.contacts.map((c) => (
            <a key={c.tel} href={`tel:${c.tel}`}>
              {c.phone}
            </a>
          ))}
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <span>© {year} BSM Global Trading — Tous droits réservés.</span>
        </div>
      </div>
    </footer>
  );
}

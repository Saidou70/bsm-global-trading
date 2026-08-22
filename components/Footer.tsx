import { company } from "@/lib/data";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Link href="/" className="brand brand--light">
            <span className="brand__mark">BSM</span>
            <span className="brand__text">
              <strong>Global Trading</strong>
              <small>Location de matériel</small>
            </span>
          </Link>
          <p className="footer__desc">
            Location de matériel de BTP et d'élévation. Livraison sur chantier au
            Maroc et en France.
          </p>
        </div>
        <div>
          <h4>Matériel</h4>
          <Link href="/#materiel">Élévation</Link>
          <Link href="/#materiel">Manutention</Link>
          <Link href="/#materiel">Énergie</Link>
          <Link href="/#materiel">Terrassement</Link>
        </div>
        <div>
          <h4>Entreprise</h4>
          <Link href="/#apropos">À propos</Link>
          <Link href="/#tarifs">Tarifs</Link>
          <Link href="/#services">Services</Link>
          <Link href="/#devis">Devis</Link>
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

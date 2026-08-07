import { categories } from "@/lib/data";
import Image from "next/image";

export default function Categories() {
  return (
    <section className="section" id="materiel">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Notre parc</span>
          <h2>Un matériel complet pour tous vos travaux</h2>
          <p>
            Du levage de personnes au terrassement, retrouvez tout le matériel
            professionnel dont vous avez besoin, entretenu et contrôlé.
          </p>
        </div>
        <div className="cats">
          {categories.map((c, i) => (
            <article className={`cat animate-fade-up delay-${(i % 3 + 1) * 100}`} key={c.title}>
              <div className="cat__media" style={{ position: "relative" }}>
                <Image src={`/images/${c.art}.png`} alt={c.title} fill style={{ objectFit: "cover" }} />
              </div>
              <div className="cat__body">
                <div className="cat__icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

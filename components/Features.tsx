import { features } from "@/lib/data";

export default function Features() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">Pourquoi BSM Global Trading</span>
          <h2>Un partenaire de proximité</h2>
        </div>
        <div className="features">
          {features.map((f) => (
            <div className="feature" key={f.title}>
              <div className="feature__ico">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

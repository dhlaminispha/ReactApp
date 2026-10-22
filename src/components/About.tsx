import { aboutFeatures } from "../data/aboutData";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <p className="section-label"> ABOUT KALZ LEGACY HOLDINGS</p>

        <h2>Reliable Service. Quality Workmanship.</h2>

        <p>
          At PestGuard, we provide reliable home services designed to help
          homeowners maintain, repair and improve their properties.
        </p>

        <p>
          From general repairs and home maintenance to renovations and pest
          control, we offer practical solutions for a wide range of property
          needs. Our focus is on quality workmanship, dependable service and
          work that delivers lasting value.
        </p>

        <a href="#contact" className="about-button">
          Talk to Us →
        </a>
      </div>

      <div className="about-features">
        {aboutFeatures.map((feature) => (
          <div className="feature" key={feature.id}>
            <span>{String(feature.id).padStart(2, "0")}</span>

            <div>
              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;

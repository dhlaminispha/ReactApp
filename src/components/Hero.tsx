import heroImage from "../assets/image/hero-home.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-label">PROFESSIONAL HOME SERVICES</p>

        <h1>
          Reliable Solutions
          <span> for Your Home</span>
        </h1>

        <p className="hero-description">
          From general repairs and home maintenance to renovations and pest
          control, we provide reliable services to keep your property in great
          condition.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="primary-button">
            Get a Free Quote
          </a>

          <a href="#services">Explore Our Services</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

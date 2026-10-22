import { company } from "../data/companyData";

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar">
        {/* Brand */}
        <a href="#home" className="logo">
          <span className="brand-first">{company.brandFirst}</span>
          <span className="brand-second">{company.brandSecond}</span>
        </a>

        {/* Navigation */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Our Services</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Call to Action */}
        <a href="#contact" className="nav-button">
          Get a Quote
        </a>
      </nav>
    </header>
  );
}

export default Navbar;

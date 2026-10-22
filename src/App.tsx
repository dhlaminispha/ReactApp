import "./App.css";
import Navbar from "../src/layout/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import { company } from "./data/companyData";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>

      <footer className="footer">
        <p>© 2026 KALZ LEGACY HOLDINGS. All rights reserved.</p>
      </footer>

      <a
        href={`https://wa.me/${company.whatsapp}`}
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp Us
      </a>
    </>
  );
}

export default App;

import { services } from "../data/servicesData";
import ServiceCard from "../cards/ServiceCard";

function Services() {
  return (
    <section id="services" className="services">
      <div className="section-heading">
        <p className="section-label">WHAT WE DO</p>

        <h2>Complete Solutions for Your Home</h2>

        <p>
          From general repairs and home maintenance to renovations and pest
          control, we provide reliable solutions to help keep your property
          safe, functional and looking its best.
        </p>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

export default Services;

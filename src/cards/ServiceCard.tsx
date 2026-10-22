import type { Service } from "../data/servicesData";

interface ServiceCardProps {
  service: Service;
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div
      className="service-card"
      style={{ backgroundImage: `url(${service.image})` }}
    >
      <div className="service-overlay"></div>

      <div className="service-content">
        <div className="service-number">
          {String(service.id).padStart(2, "0")}
        </div>

        <h3>{service.title}</h3>

        <p>{service.description}</p>

        <a href="#contact">Learn More</a>
      </div>
    </div>
  );
}

export default ServiceCard;

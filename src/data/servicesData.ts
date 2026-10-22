import pestControlImage from "../assets/image/pest-services.png";
import homeMaintenanceImage from "../assets/image/home-services.jpg";
import homeRenovationsImage from "../assets/image/home-renovations.jpg";
import propertyCareImage from "../assets/image/propertyCareImage.jpg";
export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Residential Pest Control",
    description:
      "Professional pest management solutions for homes and properties, including cockroaches, ants, rodents, termites and other common pests.",
    image: pestControlImage,
  },
  {
    id: 2,
    title: "Home Maintenance",
    description:
      "Reliable general repairs and maintenance to keep your property safe, functional and well maintained.",
    image: homeMaintenanceImage,
  },
  {
    id: 3,
    title: "Renovations",
    description:
      "Home improvement and renovation services including painting, tiling, bathrooms, kitchens and other upgrades.",
    image: homeRenovationsImage,
  },
  {
    id: 3,
    title: "Property Care",
    description:
      "Ongoing property maintenance and improvement services designed to protect and improve your home.",
    image: propertyCareImage,
  },
];
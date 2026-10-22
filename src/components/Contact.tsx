import { useState } from "react";
import { company } from "../data/companyData";
import Input from "../ui/Input";
import contactImage from "../assets/image/about-page.jpg";

function Contact() {
  const [formData, setFormData] = useState({
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(formData);
  };

  return (
    <section
      id="contact"
      className="contact"
      style={{ backgroundImage: `url(${contactImage})` }}
    >
      <div className="contact-overlay"></div>

      <div className="contact-heading">
        <p className="section-label">GET IN TOUCH</p>

        <h2>How Can We Help?</h2>

        <p>
          Tell us what your property needs and we'll help you find the right
          service for the job.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-details">
          <div>
            <span>PHONE</span>
            <p>{company.phone}</p>
          </div>

          <div>
            <span>EMAIL</span>
            <p>{company.email}</p>
          </div>

          <div>
            <span>LOCATION</span>
            <p>{company.location}</p>
          </div>

          <div>
            <span>WORKING HOURS</span>
            <p>{company.workingHours.weekdays}</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <Input
            name="Name"
            value={formData.contactName}
            type="text"
            placeholder="Your Name"
            onChange={(event) =>
              setFormData({
                ...formData,
                contactName: event.target.value,
              })
            }
          />

          <Input
            name="Email"
            value={formData.contactEmail}
            type="email"
            placeholder="Your Email"
            onChange={(event) =>
              setFormData({
                ...formData,
                contactEmail: event.target.value,
              })
            }
          />

          <Input
            name="Phone"
            value={formData.contactPhone}
            type="tel"
            placeholder="Your Phone"
            onChange={(event) =>
              setFormData({
                ...formData,
                contactPhone: event.target.value,
              })
            }
          />

          <select
            value={formData.service}
            onChange={(event) =>
              setFormData({
                ...formData,
                service: event.target.value,
              })
            }
          >
            <option value="" disabled>
              Select a Service
            </option>

            <option value="general-repairs">General Repairs</option>
            <option value="home-maintenance">Home Maintenance</option>
            <option value="renovations">Renovations</option>
            <option value="pest-control">Pest Control</option>
          </select>

          <textarea
            value={formData.message}
            onChange={(event) =>
              setFormData({
                ...formData,
                message: event.target.value,
              })
            }
            placeholder="Tell us about the work you need"
            rows={4}
          />

          <button type="submit">Request a Quote</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Form Data:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      id: 1,
      icon: <FaEnvelope />,
      title: "Email",
      value: "hello@smartlearn.com",
    },
    {
      id: 2,
      icon: <FaPhone />,
      title: "Phone",
      value: "+92 300 1234567",
    },
    {
      id: 3,
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Karachi, Pakistan",
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* Section Header */}

        <div className="section-header contact-header">
          <span className="section-badge">Get In Touch</span>

          <h2>
            Let's Start Your
            <span> Learning Journey</span>
          </h2>

          <p>
            Have a question about our courses or learning programs?
            Send us a message and our team will get back to you.
          </p>
        </div>

        {/* Contact Content */}

        <div className="contact-content">

          {/* Contact Information */}

          <div className="contact-info">

            <h3>Contact Information</h3>

            <p className="contact-info-text">
              We are here to help you choose the right learning path
              and answer your questions.
            </p>

            <div className="contact-info-list">
              {contactInfo.map((item) => (
                <div className="contact-info-item" key={item.id}>
                  <div className="contact-info-icon">
                    {item.icon}
                  </div>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-decoration">
              <span></span>
              <span></span>
              <span></span>
            </div>

          </div>

          {/* Contact Form */}

          <div className="contact-form-wrapper">

            <form onSubmit={handleSubmit} className="contact-form">

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="What would you like to ask?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="contact-submit-button"
              >
                Send Message
                <FaPaperPlane />
              </button>

              {submitted && (
                <div className="contact-success">
                  Your message has been submitted successfully!
                </div>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
import {
  FaArrowRight,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";

function CTA() {
  const benefits = [
    "Practical digital skills",
    "Beginner-friendly learning",
    "Career-focused courses",
  ];

  return (
    <section className="cta-section">
      <div className="cta-container">

        <div className="cta-content">
          <span className="cta-badge">
            <FaRocket />
            Start Your Journey
          </span>

          <h2>
            Ready to Build Your
            <span> Digital Future?</span>
          </h2>

          <p>
            Start learning practical technology skills and take
            the next step toward your personal and professional
            goals.
          </p>

          <div className="cta-benefits">
            {benefits.map((benefit) => (
              <div
                className="cta-benefit"
                key={benefit}
              >
                <FaCheckCircle />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="cta-buttons">
            <a
              href="#courses"
              className="cta-primary-button"
            >
              Explore Courses
              <FaArrowRight />
            </a>

            <a
              href="#contact"
              className="cta-secondary-button"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="cta-visual">
          <div className="cta-orbit orbit-one"></div>
          <div className="cta-orbit orbit-two"></div>

          <div className="cta-center">
            <FaRocket />
          </div>

          <div className="cta-floating cta-floating-one">
            <strong>Learn</strong>
            <span>New Skills</span>
          </div>

          <div className="cta-floating cta-floating-two">
            <strong>Build</strong>
            <span>Real Projects</span>
          </div>

          <div className="cta-floating cta-floating-three">
            <strong>Grow</strong>
            <span>Your Career</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default CTA;
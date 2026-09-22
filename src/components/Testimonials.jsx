import { useState } from "react";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
} from "react-icons/fa";

function Testimonials() {
  const testimonials = [
  {
    id: 1,
    name: "Ayesha Khan",
    role: "Web Development Student",
    initials: "AK",
    rating: 5,
    text:
      "The lessons are easy to understand and very practical. I finally started feeling confident while building my own websites.",
  },
  {
    id: 2,
    name: "Muhammad Ahmed",
    role: "Digital Skills Student",
    initials: "MA",
    rating: 5,
    text:
      "I liked the way complex concepts were explained in simple language. The practical exercises made learning much easier.",
  },
  {
    id: 3,
    name: "Sara Ali",
    role: "AI & Technology Student",
    initials: "SA",
    rating: 5,
    text:
      "SmartLearn helped me understand modern technology step by step. The learning experience feels simple, structured and useful.",
  },
  {
    id: 4,
    name: "Hassan Raza",
    role: "Python Student",
    initials: "HR",
    rating: 5,
    text:
      "Python seemed difficult at first, but the step-by-step approach made programming much easier to understand and practice.",
  },
  {
    id: 5,
    name: "Mariam Noor",
    role: "Graphic Design Student",
    initials: "MN",
    rating: 5,
    text:
      "I enjoyed learning design through practical tasks. The course helped me understand how to create useful digital content.",
  },
];

  const [activeIndex, setActiveIndex] = useState(0);

  const currentTestimonial = testimonials[activeIndex];

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0
        ? testimonials.length - 1
        : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1
        ? 0
        : prevIndex + 1
    );
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">

        <div className="section-header testimonials-header">
          <span className="section-badge">
            Student Feedback
          </span>

          <h2>
            What Our
            <span> Learners Say</span>
          </h2>

          <p>
            Real learning experiences from students building
            their digital skills with SmartLearn.
          </p>
        </div>

        <div className="testimonial-slider">

          <div className="testimonial-quote-icon">
            <FaQuoteLeft />
          </div>

          <div className="testimonial-content">

            <div className="testimonial-stars">
              {[...Array(currentTestimonial.rating)].map(
                (_, index) => (
                  <FaStar key={index} />
                )
              )}
            </div>

            <blockquote>
              "{currentTestimonial.text}"
            </blockquote>

            <div className="testimonial-user">
              <div className="testimonial-avatar">
                {currentTestimonial.initials}
              </div>

              <div>
                <h3>
                  {currentTestimonial.name}
                </h3>

                <p>
                  {currentTestimonial.role}
                </p>
              </div>
            </div>

          </div>

          <div className="testimonial-controls">

            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>

          </div>

        </div>

        <div className="testimonial-dots">
          {testimonials.map((testimonial, index) => (
            <button
              type="button"
              key={testimonial.id}
              className={
                activeIndex === index ? "active" : ""
              }
              onClick={() => setActiveIndex(index)}
              aria-label={`Show testimonial ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
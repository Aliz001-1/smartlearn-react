import {
  FaCheckCircle,
  FaLaptopCode,
  FaUserGraduate,
  FaLightbulb,
} from "react-icons/fa";

function About() {
  const features = [
    "Practical project-based learning",
    "Beginner-friendly teaching approach",
    "Modern digital skills",
    "Career-focused training",
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <div className="about-visual">
          <div className="about-main-card">
            <div className="about-card-header">
              <div className="about-logo">
                SL
              </div>

              <div>
                <span>SmartLearn</span>
                <strong>Digital Academy</strong>
              </div>
            </div>

            <div className="about-learning-box">
              <div className="about-learning-icon">
                <FaLaptopCode />
              </div>

              <div>
                <span>Learning by Doing</span>
                <strong>Build Real Skills</strong>
              </div>
            </div>

            <div className="about-progress">
              <div className="about-progress-top">
                <span>Learning Journey</span>
                <strong>85%</strong>
              </div>

              <div className="about-progress-bar">
                <div></div>
              </div>
            </div>

            <div className="about-mini-stats">
              <div>
                <FaUserGraduate />
                <strong>500+</strong>
                <span>Learners</span>
              </div>

              <div>
                <FaLightbulb />
                <strong>25+</strong>
                <span>Skills</span>
              </div>
            </div>
          </div>

          <div className="about-floating-card">
            <FaCheckCircle />

            <div>
              <strong>Learn & Grow</strong>
              <span>Every single day</span>
            </div>
          </div>
        </div>

        <div className="about-content">
          <span className="section-badge">
            About SmartLearn
          </span>

          <h2>
            Learning Should Be
            <span> Practical & Simple</span>
          </h2>

          <p>
            SmartLearn is a digital learning platform focused on
            helping beginners understand technology through simple,
            practical and career-oriented learning.
          </p>

          <p>
            From web development and AI to programming and digital
            productivity, our goal is to turn complex technology
            concepts into useful real-world skills.
          </p>

          <div className="about-features">
            {features.map((feature, index) => (
              <div className="about-feature" key={index}>
                <FaCheckCircle />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <a href="#courses" className="about-button">
            Explore Our Courses
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;
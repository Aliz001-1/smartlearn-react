import {
  FaArrowRight,
  FaPlay,
  FaCheckCircle,
  FaCode,
  FaRobot,
  FaChartLine,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* =========================
          LEFT CONTENT
      ========================== */}

      <div className="hero-content">

        {/* Small Badge */}
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Learn. Build. Grow.
        </div>

        {/* Main Heading */}
        <h1 className="hero-title">
          Build Your
          <span> Digital Future </span>
          With Smart Learning.
        </h1>

        {/* Description */}
        <p className="hero-description">
          Learn Web Development, Artificial Intelligence,
          Programming and Digital Skills through practical,
          beginner-friendly training.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">

          <a href="#courses" className="hero-primary-btn">
            Explore Courses
            <FaArrowRight />
          </a>

          <a href="#about" className="hero-secondary-btn">
            <span className="play-icon">
              <FaPlay />
            </span>
            Learn More
          </a>

        </div>

        {/* Features */}
        <div className="hero-features">

          <div className="hero-feature">
            <FaCheckCircle />
            <span>Practical Learning</span>
          </div>

          <div className="hero-feature">
            <FaCheckCircle />
            <span>Beginner Friendly</span>
          </div>

          <div className="hero-feature">
            <FaCheckCircle />
            <span>Career Focused</span>
          </div>

        </div>

      </div>


      {/* =========================
          RIGHT VISUAL
      ========================== */}

      <div className="hero-visual">

        {/* Background Glow */}
        <div className="hero-glow"></div>

        {/* Main Dashboard */}
        <div className="learning-dashboard">

          {/* Dashboard Header */}
          <div className="dashboard-header">

            <div>
              <span className="dashboard-small-text">
                Welcome back
              </span>

              <h3>Learning Dashboard</h3>
            </div>

            <div className="dashboard-avatar">
              SL
            </div>

          </div>


          {/* Progress Card */}
          <div className="progress-card">

            <div className="progress-info">

              <div>
                <span>Course Progress</span>
                <strong>Web Development</strong>
              </div>

              <span className="progress-percentage">
                75%
              </span>

            </div>

            <div className="progress-bar">
              <div className="progress-value"></div>
            </div>

          </div>


          {/* Learning Cards */}
          <div className="learning-grid">

            <div className="learning-card">

              <div className="learning-icon code-icon">
                <FaCode />
              </div>

              <div>
                <span>Web Development</span>
                <strong>12 Lessons</strong>
              </div>

            </div>


            <div className="learning-card">

              <div className="learning-icon ai-icon">
                <FaRobot />
              </div>

              <div>
                <span>Artificial Intelligence</span>
                <strong>08 Lessons</strong>
              </div>

            </div>


            <div className="learning-card learning-card-wide">

              <div className="learning-icon chart-icon">
                <FaChartLine />
              </div>

              <div>
                <span>Learning Performance</span>
                <strong>+28% This Month</strong>
              </div>

              <div className="mini-chart">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

            </div>

          </div>

        </div>


        {/* Floating Card 1 */}
        <div className="floating-card floating-card-one">

          <div className="floating-icon">
            <FaCode />
          </div>

          <div>
            <strong>12+</strong>
            <span>Skills</span>
          </div>

        </div>


        {/* Floating Card 2 */}
        <div className="floating-card floating-card-two">

          <FaCheckCircle />

          <div>
            <strong>95%</strong>
            <span>Success Rate</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
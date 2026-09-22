import {
  FaLaptopCode,
  FaChalkboardTeacher,
  FaProjectDiagram,
  FaClock,
  FaCertificate,
  FaHeadset,
} from "react-icons/fa";

function WhyChooseUs() {
  const reasons = [
    {
      id: 1,
      icon: <FaLaptopCode />,
      title: "Practical Learning",
      description:
        "Learn through practical examples, exercises and real-world tasks instead of only theory.",
    },
    {
      id: 2,
      icon: <FaChalkboardTeacher />,
      title: "Beginner Friendly",
      description:
        "Complex technology concepts are explained in a simple and easy-to-understand way.",
    },
    {
      id: 3,
      icon: <FaProjectDiagram />,
      title: "Project Based",
      description:
        "Build projects that help you practice your skills and understand how technology works.",
    },
    {
      id: 4,
      icon: <FaClock />,
      title: "Flexible Learning",
      description:
        "Learn at your own pace with structured lessons designed for different learning needs.",
    },
    {
      id: 5,
      icon: <FaCertificate />,
      title: "Career Skills",
      description:
        "Develop practical digital skills that can support your education, career and freelance journey.",
    },
    {
      id: 6,
      icon: <FaHeadset />,
      title: "Learning Support",
      description:
        "Get guidance while learning and stay focused on improving your technical skills.",
    },
  ];

  return (
    <section className="why-section" id="services">
      <div className="why-container">

        <div className="section-header why-header">
          <span className="section-badge">
            Why SmartLearn
          </span>

          <h2>
            More Than Just
            <span> Online Learning</span>
          </h2>

          <p>
            We focus on practical knowledge, useful digital skills
            and a learning experience that helps students move from
            beginners to confident creators.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((reason) => (
            <article
              className="why-card"
              key={reason.id}
            >
              <div className="why-icon">
                {reason.icon}
              </div>

              <h3>{reason.title}</h3>

              <p>{reason.description}</p>

              <span className="why-number">
                0{reason.id}
              </span>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
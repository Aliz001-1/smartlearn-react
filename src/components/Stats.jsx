import {
  FaUsers,
  FaBookOpen,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

function Stats() {
  const stats = [
    {
      id: 1,
      number: "500+",
      label: "Students",
      icon: <FaUsers />,
    },
    {
      id: 2,
      number: "25+",
      label: "Courses",
      icon: <FaBookOpen />,
    },
    {
      id: 3,
      number: "15+",
      label: "Expert Mentors",
      icon: <FaGraduationCap />,
    },
    {
      id: 4,
      number: "90%",
      label: "Career Growth",
      icon: <FaBriefcase />,
    },
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.id}>
            <div className="stat-icon">
              {stat.icon}
            </div>

            <div className="stat-content">
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
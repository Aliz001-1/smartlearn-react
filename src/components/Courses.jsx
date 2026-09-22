import {
  FaCode,
  FaRobot,
  FaLaptopCode,
  FaChartBar,
  FaPaintBrush,
  FaWordpress,
  FaArrowRight,
} from "react-icons/fa";

function Courses() {
  const courses = [
    {
      id: 1,
      icon: <FaCode />,
      category: "Development",
      title: "Web Development",
      description:
        "Learn HTML, CSS, JavaScript and modern frontend development.",
      lessons: "24 Lessons",
      level: "Beginner",
    },
    {
      id: 2,
      icon: <FaRobot />,
      category: "Artificial Intelligence",
      title: "AI & Smart Tools",
      description:
        "Learn AI tools, prompting and practical AI workflows.",
      lessons: "18 Lessons",
      level: "Beginner",
    },
    {
      id: 3,
      icon: <FaLaptopCode />,
      category: "Programming",
      title: "Python Programming",
      description:
        "Build your programming foundation with Python through practice.",
      lessons: "20 Lessons",
      level: "Beginner",
    },
    {
      id: 4,
      icon: <FaChartBar />,
      category: "Digital Skills",
      title: "MS Office & Excel",
      description:
        "Master Word, Excel, PowerPoint and essential office skills.",
      lessons: "16 Lessons",
      level: "Beginner",
    },
    {
      id: 5,
      icon: <FaPaintBrush />,
      category: "Creative Skills",
      title: "Graphic Design",
      description:
        "Learn Canva, Photoshop and Illustrator for digital design.",
      lessons: "22 Lessons",
      level: "Beginner",
    },
    {
      id: 6,
      icon: <FaWordpress />,
      category: "Web & Business",
      title: "WordPress",
      description:
        "Create professional websites with WordPress and essential SEO.",
      lessons: "15 Lessons",
      level: "Beginner",
    },
  ];

  return (
    <section className="courses-section" id="courses">
      <div className="section-header">
        <span className="section-badge">
          Our Courses
        </span>

        <h2>
          Learn Skills That
          <span> Move You Forward</span>
        </h2>

        <p>
          Practical courses designed to help you build
          real-world digital skills and create better
          career opportunities.
        </p>
      </div>

      <div className="courses-grid">
        {courses.map((course) => (
          <article className="course-card" key={course.id}>
            <div className="course-card-top">
              <div className="course-icon">
                {course.icon}
              </div>

              <span className="course-category">
                {course.category}
              </span>
            </div>

            <h3>{course.title}</h3>

            <p className="course-description">
              {course.description}
            </p>

            <div className="course-meta">
              <span>{course.lessons}</span>
              <span>{course.level}</span>
            </div>

            <a href="#contact" className="course-link">
              Explore Course
              <FaArrowRight />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Courses;
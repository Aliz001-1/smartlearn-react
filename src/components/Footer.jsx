import {
  FaGraduationCap,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Courses", href: "#courses" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const courses = [
    "Web Development",
    "AI & Smart Tools",
    "Python Programming",
    "MS Office & Excel",
    "Graphic Design",
    "WordPress",
  ];

  const socialLinks = [
    {
      id: 1,
      icon: <FaFacebookF />,
      label: "Facebook",
      href: "#",
    },
    {
      id: 2,
      icon: <FaInstagram />,
      label: "Instagram",
      href: "#",
    },
    {
      id: 3,
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
      href: "#",
    },
    {
      id: 4,
      icon: <FaYoutube />,
      label: "YouTube",
      href: "#",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}

        <div className="footer-brand">

          <a href="#home" className="footer-logo">
            <span className="footer-logo-icon">
              <FaGraduationCap />
            </span>

            <span>SmartLearn</span>
          </a>

          <p>
            Learn practical digital skills, build real projects,
            and prepare yourself for the modern digital world.
          </p>

          <div className="footer-socials">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

        </div>

        {/* Quick Links */}

        <div className="footer-column">

          <h3>Quick Links</h3>

          <ul>
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

        </div>

        {/* Courses */}

        <div className="footer-column">

          <h3>Popular Courses</h3>

          <ul>
            {courses.map((course) => (
              <li key={course}>
                <a href="#courses">
                  {course}
                </a>
              </li>
            ))}
          </ul>

        </div>

        {/* Newsletter */}

        <div className="footer-column footer-newsletter">

          <h3>Stay Connected</h3>

          <p>
            Get updates about new courses, learning resources,
            and digital skills.
          </p>

          <form
            className="newsletter-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Your email address"
              required
            />

            <button type="submit" aria-label="Subscribe">
              →
            </button>
          </form>

        </div>

      </div>

      {/* Footer Bottom */}

      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © {currentYear} SmartLearn. All rights reserved.
          </p>

          <button
            type="button"
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
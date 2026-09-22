import { useEffect, useState } from "react";
import {
  FaGraduationCap,
  FaBars,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Courses", id: "courses" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  // Detect navbar scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Detect active section
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting
        );

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -60% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Close mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`navbar-wrapper ${
        isScrolled ? "navbar-scrolled" : ""
      }`}
    >
      <nav className="navbar">

        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-icon">
            <FaGraduationCap />
          </span>

          <span className="logo-text">
            Smart<span>Learn</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="desktop-navigation">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={
                    activeSection === item.id ? "active" : ""
                  }
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="navbar-cta">
            Get Started
            <FaArrowRight />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`mobile-navigation ${
            isMenuOpen ? "mobile-navigation-open" : ""
          }`}
        >
          <ul className="mobile-nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={
                    activeSection === item.id ? "active" : ""
                  }
                  onClick={closeMenu}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mobile-navbar-cta"
            onClick={closeMenu}
          >
            Get Started
            <FaArrowRight />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
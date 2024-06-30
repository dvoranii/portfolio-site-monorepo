import { useState, useEffect } from "react";
import "./styles.css";
// import ReactLogo from "/assets/react.svg";
import HeaderLogo from "/assets/headerLogo.png";
import NavSocialsComponent from "./Components/NavSocialsComponent";

function NavComponent() {
  const [navActive, setNavActive] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".hero--wrapper");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsFixed(heroBottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`nav--wrapper ${isFixed || isMobileView ? "fixed" : ""}`}>
      <nav className="nav">
        <div className="nav--logo__wrapper">
          <img
            className="nav--logo"
            loading="lazy"
            src={HeaderLogo}
            alt="logo"
          ></img>
        </div>
        <ul className={navActive ? "nav--list nav-active" : "nav--list"}>
          <li>
            <a href="#about-me--section" className="nav-link">
              About Me
            </a>
          </li>
          <li>
            <a href="#projects-section" className="nav-link">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact-section" className="nav-link">
              Contact
            </a>
          </li>
          <NavSocialsComponent></NavSocialsComponent>
        </ul>

        <div
          className="burger"
          onClick={() => {
            setNavActive((prevState) => !prevState);
          }}
        >
          <div className={`line1 ${navActive ? "toggle" : ""}`}>&nbsp;</div>
          <div className={`line2 ${navActive ? "toggle" : ""}`}>&nbsp;</div>
          <div className={`line3 ${navActive ? "toggle" : ""}`}>&nbsp;</div>
        </div>
      </nav>
      {navActive && (
        <div className="nav-overlay" onClick={() => setNavActive(false)}></div>
      )}
    </div>
  );
}

export default NavComponent;

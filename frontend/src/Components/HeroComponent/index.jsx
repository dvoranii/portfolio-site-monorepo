import { useEffect, useState } from "react";
import "./styles.css";
import LaptopHeader from "/assets/LaptopHeader.svg";

function HeroComponent() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const speed = 60;
  const text = "Full Stack Developer";
  let i = 0;

  // understand closures here...
  // could make a useful tutorial...
  // Need to use this apprao
  // this might need to be its own component

  useEffect(() => {
    i = 0; // Reset i to 0 every time useEffect runs
    setJobTitle(" "); // Reset jobTitle to an empty string every time useEffect runs

    // Use a timeout to ensure jobTitle is reset before starting the typing effect
    setTimeout(() => {
      function typeWriter() {
        if (i < text.length) {
          let currentI = i;
          setJobTitle((prev) => prev + text.charAt(currentI));
          i++;
          setTimeout(typeWriter, speed);
        }
      }

      typeWriter();
    }, 50);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="hero--wrapper" id="section1">
      <div className={`hero--inner container`}>
        <div className="hero--intro-text__wrapper">
          <h1>Ildi&nbsp;Dvorani</h1>
          <h2>{jobTitle}</h2>
          <p>Welcome to my portfolio website...</p>
          <div className="hero-btns">
            <a href="#projects-section">
              <button className={`custom-btn btn-3`} id="projects-btn">
                <span>Projects</span>
              </button>
            </a>
            <a href="/#about-me--section">
              <button className={`custom-btn btn-3`} id="services-btn">
                <span>About Me</span>
              </button>
            </a>
          </div>
        </div>
        <div className="hero--img__wrapper--outer">
          <div className="hero--img__wrapper--inner">
            <img
              loading="lazy"
              alt="laptop graphical design image"
              className={`laptop-img ${isLoaded ? "loaded" : ""}`}
              src={LaptopHeader}
              onLoad={() => setIsLoaded(true)}
            />
          </div>
        </div>
      </div>
      <div className="waves-container">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#FCFCFC" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default HeroComponent;

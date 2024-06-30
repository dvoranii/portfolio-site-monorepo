import "./styles.css";
import TitleComponent from "../TitleComponent";

import JSLogo from "/assets/skillIcons/JS-skills-Card-img.jpg";
import ViteLogo from "/assets/skillIcons/Vitejs-logo.svg";
import CSSLogo from "/assets/skillIcons/css-3.svg";
import HTMLLogo from "/assets/skillIcons/html-1.svg";
import NodeLogo from "/assets/skillIcons/node.png";
import ReactLogo from "/assets/skillIcons/react-logo.webp";
// import NextLogo from "/assets/skillIcons/next-js.svg";
import GoogleFBLogo from "/assets/skillIcons/firebase-modal.png";
import PhotoshopLogo from "/assets/skillIcons/Adobe-Photoshop-Logo.png";
import SQLLogo from "/assets/skillIcons/sql-logo.webp";

import Tilt from "react-vanilla-tilt";

function SkillsComponent() {
  return (
    <div id="skills--section">
      <TitleComponent
        textContent={"My Skills"}
        classTitle={"skills-title"}
      ></TitleComponent>
      <div className={`skills--wrapper__outer`}>
        <div className={`skills--wrapper__inner container`}>
          <Tilt className="tilt">
            <div className={`skill-card skill--1`}>
              <div className={`skill-card--img-wrapper`}>
                <h4>JavaScript</h4>
                <img
                  src={JSLogo}
                  loading="lazy"
                  alt="javascript logo icon"
                  title="JavaScript"
                  className={`js-skill-logo`}
                ></img>
              </div>
              <p>
                Skilled in utilizing JavaScript to create dynamic and
                interactive web applications. I also often integrate TypeScript
                to benefit from its type safety, which boosts code reliability
                and maintainability
              </p>
            </div>
          </Tilt>

          <Tilt className="tilt">
            <div className={`skill-card skill--5`}>
              <div className={`skill-card--img-wrapper reactLogo`}>
                <h4>React</h4>
                <img
                  src={ReactLogo}
                  loading="lazy"
                  alt="react logo icon"
                  title="React"
                ></img>
              </div>
              <p>
                Utilizing React to develop modular, component-driven user
                interfaces, employing hooks, context, and advanced features.
                Continuously re-evaluating the bounds of granularity when
                fleshing out new components.
              </p>
            </div>
          </Tilt>

          <Tilt className="tilt">
            <div className={`skill-card skill--4`}>
              <div className={`skill-card--img-wrapper nodeLogo`}>
                <h4>Node</h4>
                <img
                  src={NodeLogo}
                  loading="lazy"
                  alt="node logo icon"
                  title="Node"
                ></img>
              </div>
              <p>
                Proficient in leveraging Node.js for server-side operations,
                integrating middleware, and crafting scalable backend services.
                I also harness Node.js to develop powerful command-line
                interface (CLI) tools, ensuring smooth and efficient data flows
                in web applications.
              </p>
            </div>
          </Tilt>

          <Tilt className="tilt">
            <div className={`skill-card skill--7`}>
              <div className={`skill-card--img-wrapper firebaseLogo`}>
                <h4>Vite</h4>
                <img
                  src={ViteLogo}
                  loading="lazy"
                  alt="Vite logo"
                  title="Vite"
                ></img>
              </div>
              <p>
                Utilizing Vite for its ultra-fast build system, enhancing web
                development efficiency. Taking advantage of its native ES module
                support for an improved developer experience and accelerated hot
                module replacement.
              </p>
            </div>
          </Tilt>

          <Tilt className="tilt">
            <div className={`skill-card skill--2`}>
              <div className={`skill-card--img-wrapper`}>
                <h4>CSS</h4>
                <img
                  src={CSSLogo}
                  loading="lazy"
                  alt="css logo icon"
                  title="CSS"
                  className={`css-skill-logo`}
                ></img>
              </div>
              <p>
                Utilizing advanced CSS techniques to craft visually captivating
                and responsive designs. I focus on harnessing the full potential
                of CSS to ensure both optimal performance and consistent design
                aesthetics.
              </p>
            </div>
          </Tilt>

          <Tilt className="tilt">
            <div className={`skill-card skill--3`}>
              <div className={`skill-card--img-wrapper`}>
                <h4>HTML</h4>
                <img
                  src={HTMLLogo}
                  loading="lazy"
                  alt="html logo icon"
                  title="HTML"
                  className={`html-skill-logo`}
                ></img>
              </div>
              <p>
                Crafting SEO-optimized HTML code compliant with AODA/WCAG 2.0
                standards. Skilled in React/JSX, template engines like EJS, Pug,
                and creating responsive HTML Emails and banner ads.
              </p>
            </div>
          </Tilt>

          <Tilt className="tilt">
            <div className={`skill-card skill--9`}>
              <div className={`skill-card--img-wrapper SQLLogo`}>
                <h4>SQL</h4>
                <img
                  src={SQLLogo}
                  loading="lazy"
                  alt="SQL Logo"
                  title="SQL"
                  className={`sql-skill-logo`}
                ></img>
              </div>
              <p>
                Familiar with the foundations of SQL to manage and interact with
                relational databases. Capable of writing basic to intermediate
                queries and ensuring data consistency.
              </p>
            </div>
          </Tilt>
          <Tilt className="tilt">
            <div className={`skill-card skill--6`}>
              <div className={`skill-card--img-wrapper firebaseLogo`}>
                <h4>Google Firebase</h4>
                <img
                  src={GoogleFBLogo}
                  loading="lazy"
                  alt="google firebase logo icon"
                  title="Firebase"
                ></img>
              </div>
              <p>
                Leveraging Google Firebase for its quick setup, intuitive UI,
                and SDK. Implementing real-time databases and user
                authentication to streamline web application infrastructure and
                deployment.
              </p>
            </div>
          </Tilt>

          <Tilt className="tilt">
            <div className={`skill-card skill--8`}>
              <div className={`skill-card--img-wrapper firebaseLogo`}>
                <h4>Photoshop</h4>
                <img
                  src={PhotoshopLogo}
                  loading="lazy"
                  alt="photoshop logo"
                  title="Photoshop"
                  className={`ps-skill-logo`}
                ></img>
              </div>
              <p>
                Skilled in using Photoshop for web design and asset creation.
                Expertise in manipulating images, optimizing graphics for web,
                and ensuring visual consistency across digital platforms.
                Combining an artistic eye with technical proficiency to create
                visually compelling content for web users.
              </p>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default SkillsComponent;

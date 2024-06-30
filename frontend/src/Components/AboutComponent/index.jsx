import "./styles.css";
import { useRef, useEffect } from "react";
import DevelopmentImg from "/assets/Development.svg";
import DesignImg from "/assets/WebDesignSVG.svg";
import TitleComponent from "../TitleComponent";
import AboutMeImage from "/assets/me-edited-better.jpg";
import HiBubble from "/assets/hi-bubble.png";
import ModalButtonsComponent from "../ProjectsComponent/Components/ProjectModalComponent/Components/ModalButtonsComponent";
// import LinkedinLogo from "/assets/logo-linkedin.svg";

function AboutComponent() {
  const waveRef = useRef(null);
  const bubbleRef = useRef(null);
  useEffect(() => {
    const waveElement = waveRef.current;
    const bubbleElement = bubbleRef.current;

    // eslint-disable-next-line no-unused-vars
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (waveElement && entry.isIntersecting) {
          waveElement.classList.add("visible");
        } else if (waveElement) {
          waveElement.classList.remove("visible");
        }

        if (bubbleElement && entry.isIntersecting) {
          bubbleElement.classList.add("visible");
        } else if (bubbleElement) {
          bubbleElement.classList.remove("visible");
        }
      });
    };

    const options = {
      root: null,

      threshold: 0.1,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (waveElement) {
      observer.observe(waveElement);
    }

    return () => {
      if (waveElement) {
        observer.unobserve(waveElement);
      }
    };
  }, []);

  return (
    <div className={`about--wrapper`} id="about-me--section">
      <TitleComponent
        textContent={"About Me"}
        classTitle={"about-me-title"}
      ></TitleComponent>

      <div className={`about-me__intro container`}>
        <div className="hi-bubble-container" ref={bubbleRef}>
          <img className={`hi-bubble-img`} src={HiBubble} alt="" />
        </div>
        <div className="wave-container" ref={waveRef}>
          <span>👋 </span>
        </div>
        <div className={`about-me__intro--img-wrapper`}>
          <img src={AboutMeImage}></img>
        </div>

        <div className="buttons-wrapper">
          <ModalButtonsComponent
            gitRepo="https://github.com/dvoranii"
            linkedInURL="https://www.linkedin.com/in/ildi-dvorani-a04452210/"
            context="about"
          />
        </div>

        <div className={`about-me__intro--text-wrapper`}>
          <p>
            I&apos;ve always held the belief that Full Stack developers can make
            some of the best Front End developers, and vice versa. With that in
            mind, I&apos;ve honed my skills in both front-end and back-end
            technologies, enabling me to efficiently plan, architect, and build
            robust web applications tailored to specific requirements. My
            proficiency spans JavaScript, React, Next.js, Node.js, CSS, and
            HTML, complemented by tools like Adobe Photoshop, SQL, GIT, and AWS.
          </p>
          <p>
            With a solid technical background and a keen grasp of business
            requirements, I prioritize the most effective strategies and tools
            to reduce technical debt. This approach has enabled me to
            collaborate closely with businesses, assisting them in uncovering
            new digital opportunities, constructing their online sales channels
            from scratch, and enhancing lead generation and revenue.
          </p>

          <p>
            While I enjoy analyzing the big picture of web applications,
            understanding the intricate connections from user to server, I also
            cherish the nuances of specific languages and technologies. A more
            balanced approach ensures that projects are not only technically
            sound but also resonate with the target audience, creating genuine
            value.
          </p>

          <p>
            Beyond coding, I deeply value the human element of web development.
            Collaborating with developers, designers, or clarifying technical
            details for non-IT roles, I&apos;m always reminded of the human
            element behind our digital creations. Together, our efforts create
            experiences that connect, resonate, and ultimately serve people in
            meaningful ways.
          </p>

          <div className="skills-boxes">
            <div className={`skill skill-1`}>Communicative</div>
            <div className={`skill skill-2`}>Efficient</div>

            <div className={`skill skill-3`}>Adaptable</div>
            <div className={`skill skill-4`}>Organized</div>
            <div className={`skill skill-5`}>Logical</div>
            <div className={`skill skill-6`}>Open&nbsp;minded</div>
            <div className={`skill skill-7`}>Driven</div>
            <div className={`skill skill-8`}>Collaborative</div>
            <div className={`skill skill-8`}>Resilient</div>
            <div className={`skill skill-8`}>Proactive</div>
          </div>
        </div>
      </div>
      <div className="about-me__part1">
        <div className="about-me__text-container">
          <h3 className="about-me__part1--header">Front-End Development</h3>
          <p>
            My front-end development process is driven by a commitment to user
            experience. Here&apos;s what I focus on:
          </p>
          <ul className={`about-me__part1--list`}>
            <li>
              <span className={`bold`}>User-Centric Design:</span> I prioritize
              the user&apos;s needs in every element and interaction, ensuring a
              natural and rewarding experience.
            </li>
            <li>
              <span className={`bold`}>Micro-interactions:</span> I pay close
              attention to details like hover effects, loading animations, and
              transitions to enhance user engagement and responsiveness.
            </li>
            <li>
              <span className={`bold`}>Performance Optimization:</span> I use
              techniques such as lazy loading, code splitting, and server-side
              rendering (where necessary) to improve load times and interface
              efficiency.
            </li>
            <li>
              <span className={`bold`}>Responsive and Adaptive Design:</span> I
              create layouts that offer a consistent experience across devices
              and screen sizes.
            </li>
            <li>
              <span className={`bold`}>Backend Integration:</span> I ensure
              tight integration with APIs and backend data sources for real-time
              data exchange and dynamic content delivery.
            </li>
          </ul>
          <div className="see-more--link__wrapper--outer">
            <div className="see-more--dash-wrapper">
              <div className="dash"></div>
            </div>
            <div className="see-more--text-wrapper">
              <a className="see-more--link" href="#projects-section">
                See more
              </a>
            </div>
          </div>
        </div>
        <div className={`about-me__img-container part1`}>
          <img
            className="about-me__img"
            src={DesignImg}
            loading="lazy"
            alt="Web design image graphic"
          ></img>
        </div>
      </div>

      <div className="about-me__part2">
        <div className={`about-me__img-container part2`}>
          <img
            className="about-me__img--2"
            src={DevelopmentImg}
            loading="lazy"
            alt="web development image graphic"
          ></img>
        </div>
        <div className="about-me__text-container">
          <h3 className="about-me__part2--header">Back-End Development</h3>
          <p>
            In back-end development, my focus is on creating a solid foundation
            for web applications. Here&apos;s a breakdown of my approach:
          </p>
          <ul className={`about-me__part2--list`}>
            <li>
              <span className={`bold`}>Data Management:</span> While familiar
              with SQL, my expertise lies in using NoSQL databases. I design and
              implement data structures optimized for flexibility, scalability,
              and data integrity, frequently employing tools like Google
              Firebase for small to medium-sized applications.
            </li>
            <li>
              <span className={`bold`}>Server-Side Logic:</span> I manage core
              processes, from user authentication to complex business logic,
              ensuring secure and seamless data flow.
            </li>
            <li>
              <span className={`bold`}>API Development:</span> I create RESTful
              APIs for effective frontend and backend communication.
            </li>
            <li>
              <span className={`bold`}>Scalability and Performance:</span>{" "}
              Leveraging the asynchronous capabilities of Node.js, I ensure
              applications are responsive and can handle increasing loads
              without sacrificing performance.
            </li>
            <li>
              <span className={`bold`}>Infrastructure and Deployment:</span>{" "}
              I&apos;m adept at using AWS tools, but I also explore other cloud
              solutions like Vercel and CloudFlare depending on the
              project&apos;s needs, ensuring optimal infrastructure management
              and deployment strategies.
            </li>
            <li>
              <span className={`bold`}>Error Handling and Debugging:</span>{" "}
              Ensuring smooth user interactions is a priority. I emphasize on
              thorough error handling and maintain meticulous debugging routines
              for a stable user experience.
            </li>
          </ul>
          <div className="see-more--link__wrapper--outer">
            <div className="see-more--dash-wrapper">
              <div className="dash"></div>
            </div>
            <div className="see-more--text-wrapper">
              <a className="see-more--link" href="#projects-section">
                See more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// WebDesignSVG.svg

export default AboutComponent;

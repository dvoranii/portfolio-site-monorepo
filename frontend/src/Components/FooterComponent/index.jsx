import "./styles.css";
import FooterLogo from "/assets/footer-logo.png";

import GithubLogo from "/assets/logo-github.svg";
import LinkedInLogo from "/assets/logo-linkedin.svg";
import CodepenLogo from "/assets/logo-codepen.svg";

function FooterComponent() {
  return (
    <div className={`footer--wrapper__outer`}>
      <div className="footer--wrapper__inner">
        <div className="footer--left-side">
          <div className="left-side--img-wrapper">
            <img src={FooterLogo} alt="" />
          </div>
          <p>
            ILDIDEV<sup>&reg; </sup>2023 - <i>All rights reserved</i>
          </p>
        </div>
        <div className="footer--right-side">
          <div className="nav-list--container">
            <div className="nav-title--container">
              <h3 className={`nav-title`}>Navigation</h3>
            </div>

            <ul className={`footer--nav-list`}>
              <li>
                <a className={`footer-link`} href="/#section1">
                  Home
                </a>
              </li>
              <li>
                <a className={`footer-link`} href="/#about-me--section">
                  About Me
                </a>
              </li>
              <li>
                <a className={`footer-link`} href="/#skills--section">
                  My Skills
                </a>
              </li>

              <li>
                <a className={`footer-link`} href="/#projects-section">
                  My Projects
                </a>
              </li>
            </ul>
          </div>

          <div className="socials-list--container">
            <div className="socials-title--container">
              <h3 className={`socials-title`}>Socials</h3>
            </div>

            <ul className={`footer--socials-list`}>
              <li className="footer-gh-list-item">
                <img className="footer-gh-logo" src={GithubLogo}></img>
                <a
                  href="https://github.com/dvoranii"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <img src={LinkedInLogo}></img>{" "}
                <a
                  href="https://www.linkedin.com/in/ildi-dvorani-a04452210/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <img src={CodepenLogo}></img>
                <a href="https://codepen.io/dvoranii" rel="noopener noreferrer">
                  Codepen
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FooterComponent;

import "./styles.css";
import GithubLogo from "/assets/logo-github.svg";
import WebsiteIcon from "/assets/modals/website-icon.png";
import LinkedinLogo from "/assets/logo-linkedin.svg";

// eslint-disable-next-line react/prop-types
function ModalButtonsComponent({ gitRepo, siteURL, linkedInURL, context }) {
  return (
    <div className="btns--wrapper__outer">
      <div
        className={`btns--wrapper__inner ${context === "about" ? "about" : ""}`}
      >
        <div
          className={`btn--1__wrapper--inner ${
            context === "about" ? "about" : ""
          }`}
        >
          <a
            href={gitRepo === "N/A" ? null : gitRepo}
            target="_blank"
            rel="noopener noreferrer"
            className={gitRepo === "N/A" ? "disabled-button" : ""}
          >
            <button disabled={gitRepo === "N/A"}>
              <img src={GithubLogo}></img>
              {context === "about" ? "GitHub" : "Repo"}
            </button>
          </a>
        </div>

        {siteURL && !linkedInURL && (
          <div
            className={`btn--2__wrapper--inner ${
              context === "about" ? "about" : ""
            }`}
          >
            <a
              href={siteURL === "N/A" ? null : siteURL}
              target="_blank"
              rel="noopener noreferrer"
              className={siteURL === "N/A" ? "disabled-button" : ""}
            >
              <button disabled={siteURL === "N/A"}>
                <img src={WebsiteIcon}></img>
                Live Site
              </button>
            </a>
          </div>
        )}

        {linkedInURL && !siteURL && (
          <div className={`btn--3__wrapper--inner`}>
            <a
              href={linkedInURL === "N/A" ? null : linkedInURL}
              target="_blank"
              rel="noopener noreferrer"
              className={linkedInURL === "N/A" ? "disabled-button" : ""}
            >
              <button disabled={linkedInURL === "N/A"}>
                <img src={LinkedinLogo}></img>
                LinkedIn
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default ModalButtonsComponent;
